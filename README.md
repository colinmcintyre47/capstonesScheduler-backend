# Capstone Scheduler Backend

This project provides the backend for the Class Scheduling application developed as part of my capstone project. The backend is built using **Node.js** with the **Hapi.js** framework, **MySQL** as the database, and **UUID** for unique identification. It is designed to handle requests related to class scheduling, including listing creation, student information management, and fetching course data.

## Features

- **Student Data Management:** Allows the creation, retrieval, and update of student class schedules.
- **Course Listing Management:** Fetches all courses and individual student schedules from the MySQL database.
- **RESTful API:** Provides a set of routes to interact with the backend, including creating new student listings, retrieving student information, and listing available courses.

## Tech Stack

- **Node.js:** Backend runtime environment.
- **Hapi.js:** Web framework for building APIs.
- **MySQL:** Relational database for storing student and course data.
- **UUID:** Library used to generate unique IDs for each new student listing.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/colinmcintyre47/capstonesScheduler-backend.git
   cd capstonesScheduler-backend
Install dependencies: This project uses npm for package management. Install the required packages using:

bash
Copy code
npm install
Setup MySQL Database: You need a running instance of MySQL. You can use the following schema to create the necessary tables for student and course data:

sql
Copy code
CREATE DATABASE capstone;

USE capstone;

CREATE TABLE student (
    id VARCHAR(255) PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    student_major VARCHAR(255),
    student_catalog_year VARCHAR(255),
    student_classes JSON
);

CREATE TABLE courses (
    course_num VARCHAR(255) PRIMARY KEY,
    course_name VARCHAR(255),
    course_description TEXT
);
Make sure your MySQL server is running and the capstone database is created.

Update Database Connection: Modify the database.js file with your local MySQL credentials.

Running the Server
Start the backend server with:

bash
Copy code
npm start
The server will start listening on http://localhost:8024 by default.

You can now access the API at the following endpoints:

GET /api/listings: Retrieve all course listings.
GET /api/listings/{id}: Retrieve a specific student's listing by ID.
POST /api/listings: Create a new student listing with class schedule.
GET /api/student: Retrieve all student records from the database.
API Endpoints
1. Create New Listing
Method: POST
URL: /api/listings
Description: Adds a new student listing, including their major, name, catalog year, and class schedule.
Request Body Example:

json
Copy code
{
  "student_name": "John Doe",
  "student_major": "Computer Science",
  "student_catalog_year": "2022",
  "student_classes": ["CS101", "MATH201", "ENG202"]
}
Response Example:

json
Copy code
{
  "student_name": "John Doe",
  "student_major": "Computer Science",
  "student_catalog_year": "2022",
  "student_classes_json": "[\"CS101\", \"MATH201\", \"ENG202\"]"
}
2. Get All Listings
Method: GET
URL: /api/listings
Description: Fetches all courses in the system.
Response Example:

json
Copy code
[
  {"course_num": "CS101"},
  {"course_num": "MATH201"},
  {"course_num": "ENG202"}
]
3. Get Specific Listing by ID
Method: GET
URL: /api/listings/{id}
Description: Fetches a student’s listing by their unique ID.
Response Example:

json
Copy code
{
  "id": "uuid-generated-id",
  "student_name": "John Doe",
  "student_major": "Computer Science",
  "student_catalog_year": "2022",
  "student_classes": "[\"CS101\", \"MATH201\", \"ENG202\"]"
}
4. Get All Students
Method: GET
URL: /api/student
Description: Retrieves all student records in the database.
Response Example:

json
Copy code
[
  {
    "id": "uuid-generated-id",
    "student_name": "John Doe",
    "student_major": "Computer Science",
    "student_catalog_year": "2022",
    "student_classes": "[\"CS101\", \"MATH201\", \"ENG202\"]"
  },
  {
    "id": "another-uuid",
    "student_name": "Jane Smith",
    "student_major": "Biology",
    "student_catalog_year": "2021",
    "student_classes": "[\"BIO101\", \"CHEM101\"]"
  }
]
Code Overview
Routes
createNewListingRoute: Handles POST requests to create a new student listing. It takes the student's details from the request payload, converts the list of classes into a JSON string, and inserts it into the MySQL database.
getAllListingsRoute: Fetches all available course listings from the courses table in the MySQL database.
getListingsRoute: Fetches a specific student listing by their unique ID.
getStudentRoute: Retrieves all student records from the database.
Database Integration
The database connection is managed using MySQL’s native mysql package. The db object handles the connection, query execution, and closing of the connection when the server shuts down.

Hapi.js Server
The backend is powered by Hapi.js, a robust Node.js framework that enables easy creation of API routes. The server is configured to run on localhost:8024, and routes are defined to handle various CRUD operations on student and course data.

Future Enhancements
Authentication & Authorization: Implement JWT-based authentication for secure API access.
Data Validation: Enhance input validation for API requests.
Pagination: Implement pagination for API responses where appropriate (e.g., for listing all students).
Error Handling: Improve error responses and validation error messages.
License
This project is licensed under the MIT License.
