# School Management System API

This is a RESTful API for managing various aspects of a school, including students, teachers, classes, subjects, results, fees, attendance, and exams. The API is built using Node.js, Express, and MSSQL.

## Features

- **Student Management**: Create, read, update, and delete student records.
- **Teacher Management**: Manage information about teachers.
- **Class Management**: Create and manage classes, assign teachers to classes.
- **Subject Management**: Manage subjects taught in the school.
- **Result Management**: Record student results for various subjects.
- **Fee Management**: Track student fees, mark payments, and view fee status.
- **Attendance Tracking**: Record student attendance for classes.
- **Exam Management**: Schedule and manage exams for different subjects and classes.

## Installation

1. **Clone the repository**:

git clone: https://github.com/Vicky-peace/School-management-system.git

2. **Install dependencies**:
 cd api
 npm install

 3. **Configure environment variables**:
- Create a `.env` file in the root directory.
- Add the following environment variables:
  ```
  PORT=3000
  DB_HOST=localhost
  DB_USER=your-db-user
  DB_PASSWORD=your-db-password
  DB_DATABASE=school_management_system_db
  ```
- Modify the values according to your database configuration.

4. **Start the server**:

npm start


## Usage

### Endpoints

- **Students**:
- `GET /api/students`: Get all students.
- `GET /api/students/:id`: Get student by ID.
- `POST /api/students`: Add a new student.
- `PUT /api/students/:id`: Update student details.
- `DELETE /api/students/:id`: Delete a student.



### Authentication

- Authentication is not implemented in this API. Make sure to secure your endpoints based on your requirements before deploying to production.

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
