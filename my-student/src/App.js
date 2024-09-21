import React, { useState } from 'react';
import './App.css'; 
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Add or update student
  const addStudent = (studentData) => {
    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id ? studentData : student
        )
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, studentData]);
    }
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Set student for editing
  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="App">
      <h1>Student Management App</h1>
      <StudentForm addStudent={addStudent} editingStudent={editingStudent} />
      <StudentTable students={students} editStudent={editStudent} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;


