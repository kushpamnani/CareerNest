import React, { useState, useEffect } from 'react';

const PersonalInfoPage = () => {
  const [info, setInfo] = useState({ personalInfo: {}, courseDetails: {} });

  useEffect(() => {
    fetch('/info.json')
      .then(response => response.json())
      .then(data => setInfo(data))
      .catch(error => console.error('Error fetching info:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Personal Information</h1>
      <p>Name: Kush Pamnani{info.personalInfo.name}</p>
      <p>Email: kushp@iastate.edu {info.personalInfo.email}</p>
      <p>University: Iowa State University{info.personalInfo.university}</p>
      <p>Course: SE/COMS 319{info.personalInfo.course}</p>
      <p>Graduation Year: 2025{info.personalInfo.graduationYear}</p>

      <h1>Course Details</h1>
      <p>Course Code: 319{info.courseDetails.courseCode}</p>
      <p>Course Title: Introduction to User Interfaces{info.courseDetails.courseTitle}</p>
      <p>Semester: Spring 2024 {info.courseDetails.semester}</p>
      <p>Instructor: Dr. Abraham N. Aldaco Gastelum {info.courseDetails.instructor}</p>
    </div>
  );
}

export default PersonalInfoPage;
