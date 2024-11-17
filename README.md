# Capstone Scheduler Backend

This project provides the backend for the **Class Scheduling** application developed as part of my capstone project. The backend is built using **Node.js** with the **Hapi.js** framework, **MySQL** as the database, and **UUID** for unique identification. It handles requests related to class scheduling, including creating student listings, managing student information, and fetching course data.

## Features

- **Student Data Management:** Create, retrieve, and update student class schedules.
- **Course Listing Management:** Fetch all courses and individual student schedules from the MySQL database.
- **RESTful API:** A set of routes to interact with the backend, including creating student listings, retrieving student information, and listing available courses.

## Tech Stack

- **Node.js:** Backend runtime environment.
- **Hapi.js:** Web framework for building APIs.
- **MySQL:** Relational database for storing student and course data.
- **UUID:** Library for generating unique IDs for each new student listing.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/colinmcintyre47/capstonesScheduler-backend.git
   cd capstonesScheduler-backend
2. **Install dependencies:** This project uses npm for package management. Install the required packages by running: npm install
3. Setup MySQL Database: You need a running instance of MySQL. Use the following schema to create the necessary tables for student and course data: CREATE DATABASE capstone;

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

4. Update Database Connection: Modify the database.js file with your local MySQL credentials. You'll need to set up the connection URL with your database username, password, and host.

5. Running the Server: To start the backend server, run:

bash
Copy code
npm start

API Endpoints
Once the server is running, you can interact with the API via the following endpoints:

1. Create New Listing
Method: POST
URL: /api/listings
Description: Adds a new student listing, including their major, name, catalog year, and class schedule.

2. Get All Listings
Method: GET
URL: /api/listings
Description: Fetches all courses in the system.

3. Get Specific Listing by ID
Method: GET
URL: /api/listings/{id}
Description: Fetches a student’s listing by their unique ID.

4. Get All Students
Method: GET
URL: /api/student
Description: Retrieves all student records in the database.

Code Overview
Routes
createNewListingRoute: Handles POST requests to create a new student listing. It takes the student's details from the request payload, converts the list of classes into a JSON string, and inserts it into the MySQL database.
getAllListingsRoute: Fetches all available course listings from the courses table in the MySQL database.
getListingsRoute: Fetches a specific student listing by their unique ID.
getStudentRoute: Retrieves all student records from the database.
Database Integration
The database connection is managed using MySQL’s native mysql package. The db object handles the connection, query execution, and closing of the connection when the server shuts down.

Hapi.js Server
The backend is powered by Hapi.js, a robust Node.js framework that simplifies API route creation. The server is configured to run on localhost:8024, and routes are defined to handle various CRUD operations on student and course data.

Future Enhancements
Authentication & Authorization: Implement JWT-based authentication for secure API access.
Data Validation: Enhance input validation for API requests.
Pagination: Implement pagination for API responses where appropriate (e.g., for listing all students).
Error Handling: Improve error responses and validation error messages.
