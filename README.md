 # CareConnect 🏥

### Healthcare Interoperability Dashboard

CareConnect is a healthcare interoperability prototype that demonstrates how patient information can be retrieved from a FHIR-compatible healthcare system, transformed into a simplified data model, and presented through a user-friendly web interface.

The project was developed to explore healthcare systems integration, interoperability standards and the role of APIs in digitally connected healthcare environments.

---

## Project Overview

Healthcare organisations often rely on multiple digital systems that need to exchange clinical information effectively.

CareConnect demonstrates a simplified interoperability workflow using the HL7 FHIR standard.

The application connects to a public FHIR R4 test server, retrieves Patient resources, processes the FHIR data through a Node.js/Express integration layer, and presents selected patient information through a web dashboard.

### Data Flow

FHIR R4 Server  
↓  
Node.js / Express API  
↓  
FHIR JSON Response  
↓  
Data Transformation  
↓  
Simplified Patient Model  
↓  
CareConnect Dashboard

---

## Features

- Connects to an external FHIR R4 API
- Retrieves FHIR Patient resources
- Processes nested FHIR JSON data
- Transforms clinical data into a simplified application model
- Handles missing patient information safely
- Provides an API health-check endpoint
- Displays API connection status
- Presents patient information through a responsive dashboard
- Allows data to be refreshed from the source

---

## Technologies

**Backend**
- Node.js
- Express.js
- REST APIs

**Healthcare interoperability**
- HL7 FHIR R4
- FHIR Patient resources
- JSON

**Frontend**
- HTML
- CSS
- JavaScript

**Development**
- Visual Studio Code
- Git
- GitHub

---

## API Endpoints

### Health Check

`GET /api/health`

Returns the current status of the CareConnect API.

### Patients

`GET /api/patients`

Retrieves Patient resources from the external FHIR server and transforms them into a simplified structure for the frontend.

Example:

```json
{
  "id": "example-patient-id",
  "firstName": "Alex",
  "lastName": "Morgan",
  "gender": "female",
  "birthDate": "1980-01-15"
}
```

---

## Interoperability Approach

FHIR resources can contain complex and deeply nested healthcare data.

Rather than exposing the complete upstream FHIR Bundle directly to the user interface, CareConnect uses an integration layer to extract the information required by the application.

For this prototype, the Patient resource is transformed into a simplified model containing:

- Patient ID
- First name
- Last name
- Gender
- Date of birth

This demonstrates how an intermediary service can translate data from an interoperability standard into a format appropriate for a specific digital application.

---

## Error Handling

CareConnect includes basic handling for:

- unsuccessful responses from the external FHIR server
- unavailable optional FHIR fields
- missing names
- missing gender information
- missing dates of birth

Missing optional information is displayed as `Unknown` rather than preventing the remaining patient data from being presented.

---

## Architecture

```text
┌──────────────────────┐
│ External FHIR Server │
│       FHIR R4        │
└──────────┬───────────┘
           │
           │ REST / JSON
           ▼
┌──────────────────────┐
│    CareConnect API   │
│   Node.js + Express  │
└──────────┬───────────┘
           │
           │ Transform FHIR
           │ Patient resources
           ▼
┌──────────────────────┐
│ Simplified Data Model│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ CareConnect Dashboard│
│ HTML / CSS / JS      │
└──────────────────────┘
```

---

## What I Learned

This project gave me practical experience working with healthcare interoperability concepts and translating them into a working technical prototype.

It strengthened my understanding of:

- the structure of FHIR resources
- healthcare systems interoperability
- REST API integration
- asynchronous JavaScript
- JSON data transformation
- backend API development using Express
- handling inconsistent or incomplete external data
- presenting technical healthcare data in a simpler user-facing format

It also demonstrated the importance of separating the underlying healthcare data standard from the information and functionality required by the end user.

---

## Future Development

Potential extensions include:

- Patient search and filtering
- Individual patient record views
- Additional FHIR resources such as Observation and Encounter
- Authentication and role-based access
- Improved error reporting
- Automated testing
- Accessibility improvements
- Deployment to a cloud environment

---

## Disclaimer

CareConnect is an educational portfolio project.

It uses synthetic/test data from a public FHIR test environment and is not intended for clinical use. No real patient information should be entered into or processed by the application.

---

## Author

**Moyo Onikan**

Healthcare Digital Transformation | Technology | Cybersecurity