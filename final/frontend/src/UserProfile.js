import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from './profile.jpeg';


const UserProfile = () => {
  const navigate = useNavigate();  // Hook to programmatically navigate
  const user = {
    name: "Alex Johnson",
    title: "Software Developer",
    experience: 3,
    phone: "555-123-4567",
    email: "alex.johnson@example.com",
    location: "San Francisco, CA",
    skills: ["React", "Node.js", "Python", "Data Visualization", "Machine Learning"],
    experiences: [
      { company: "Tech Solutions", title: "Software Developer", period: "Jan 2021 - Present", location: "San Francisco, CA" },
      { company: "Innovatech", title: "Junior Developer", period: "Oct 2019 - Dec 2020", location: "San Jose, CA" },
      { company: "StartWeb", title: "Intern", period: "Jun 2018 - Sep 2019", location: "San Francisco, CA" }
    ],
    education: [
      { school: "University of California, Berkeley", degree: "Bachelor of Science in Computer Science", period: "2015 - 2019" }
    ],
    avatar: profileImage  // Placeholder image URL
  };

  const handleReturn = () => {
    navigate('/');  // Navigate back to the homepage (JobBrowsingPage)
  };

  return (
    <div className="container mt-4">
      <style>
        {`
          .profile-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
          }
          .profile-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .profile-header h1 {
            margin: 0;
            color: #333;
          }
          .skill-list {
            list-style: none;
            padding: 0;
          }
          .skill-list li {
            background: #f8f9fa;
            border-radius: 5px;
            padding: 5px 10px;
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 10px;
          }
          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 75px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .profile-image img {
            height: 100%;
            width: auto;
            object-fit: cover; /* Ensures the image covers the area without being distorted */
          }
        `}
      </style>
      <div className="profile-header">
        <div>
          <div className="profile-image">
            <img src={user.avatar} alt="Profile Avatar" />
          </div>
          <h1>{user.name}</h1>
          <h2>{user.title}</h2>
        </div>
        <button onClick={handleReturn} className="btn btn-primary">Return</button>
      </div>
      <div className="profile-card">
        <p><strong>Experience:</strong> {user.experience} years</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
      </div>
      <div className="profile-card">
        <h3>Skills</h3>
        <ul className="skill-list">
          {user.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
      <div className="profile-card">
        <h3>Experience</h3>
        {user.experiences.map(exp => (
          <div key={exp.company}>
            <h4>{exp.title} - {exp.company}</h4>
            <p>{exp.period}</p>
            <p>{exp.location}</p>
          </div>
        ))}
      </div>
      <div className="profile-card">
        <h3>Education</h3>
        {user.education.map(edu => (
          <div key={edu.school}>
            <h4>{edu.degree}</h4>
            <p>{edu.period}</p>
            <p>{edu.school}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
