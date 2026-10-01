const patientTable = document.getElementById("patient-table");
const patientCount = document.getElementById("patient-count");
const apiStatus = document.getElementById("api-status");
const refreshButton = document.getElementById("refresh-button");

async function loadPatients() {
    patientTable.innerHTML = `
        <tr>
            <td colspan="4">Loading patient data...</td>
        </tr>
    `;

    apiStatus.textContent = "Connecting...";

    try {
        const response = await fetch("/api/patients");

        if (!response.ok) {
            throw new Error("Unable to retrieve patient data");
        }

        const data = await response.json();

        patientCount.textContent = data.count;
        apiStatus.textContent = "Connected";

        patientTable.innerHTML = "";

        data.patients.forEach((patient) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${patient.id}</td>
                <td>${patient.firstName} ${patient.lastName}</td>
                <td>${formatGender(patient.gender)}</td>
                <td>${formatDate(patient.birthDate)}</td>
            `;

            patientTable.appendChild(row);
        });

    } catch (error) {
        console.error("CareConnect error:", error);

        patientCount.textContent = "--";
        apiStatus.textContent = "Connection Error";

        patientTable.innerHTML = `
            <tr>
                <td colspan="4">
                    Unable to retrieve patient data. Please try again.
                </td>
            </tr>
        `;
    }
}

function formatGender(gender) {
    if (!gender || gender === "Unknown") {
        return "Unknown";
    }

    return gender.charAt(0).toUpperCase() + gender.slice(1);
}

function formatDate(date) {
    if (!date || date === "Unknown") {
        return "Unknown";
    }

    const parsedDate = new Date(`${date}T00:00:00`);

    return parsedDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

refreshButton.addEventListener("click", loadPatients);

loadPatients();