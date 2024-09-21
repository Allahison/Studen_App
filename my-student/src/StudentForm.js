import React, { useState, useEffect } from 'react';

function StudentForm({ addStudent, editingStudent }) {
  const [studentData, setStudentData] = useState({
    id: '',
    name: '',
    fatherName: ''
  });

  // Fill form data when editingStudent is passed
  useEffect(() => {
    if (editingStudent) {
      setStudentData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.id && studentData.name && studentData.fatherName) {
      addStudent(studentData);
      setStudentData({ id: '', name: '', fatherName: '' }); // Clear the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="Student ID"
        value={studentData.id}
        onChange={handleChange}
        disabled={editingStudent} // Disable ID during edit
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={studentData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="fatherName"
        placeholder="Father's Name"
        value={studentData.fatherName}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingStudent ? 'Update Student' : 'Add Student'}</button>
    </form>
  );
}

export default StudentForm;
