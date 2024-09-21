import React from 'react';

function StudentTable({ students, editStudent, deleteStudent }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Father's Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No students available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default StudentTable;
