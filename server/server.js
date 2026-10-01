const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const FHIR_BASE_URL = "https://hapi.fhir.org/baseR4";

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
    res.json({
        status: "CareConnect is running",
        message: "Healthcare interoperability API is ready"
    });
});

app.get("/api/patients", async (req, res) => {
    console.log("NEW PATIENT ROUTE IS RUNNING");
    try {
        const response = await fetch(
            `${FHIR_BASE_URL}/Patient?_count=10`
        );

        if (!response.ok) {
            throw new Error("FHIR server returned an error");
        }

       const data = await response.json();

const patients = data.entry?.map((entry) => {
    const patient = entry.resource;

    return {
        id: patient.id,
        firstName: patient.name?.[0]?.given?.[0] || "Unknown",
        lastName: patient.name?.[0]?.family || "Unknown",
        gender: patient.gender || "Unknown",
        birthDate: patient.birthDate || "Unknown"
    };
}) || [];

res.json({
    count: patients.length,
    patients: patients
});
    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Unable to retrieve patient data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`CareConnect is running at http://localhost:${PORT}`);
}); 