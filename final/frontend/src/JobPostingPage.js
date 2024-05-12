import React, { useState } from 'react';

function JobPostingPage() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prevJob => ({
      ...prevJob,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job data to submit:", job);
    // Implementing job posting logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Post a Job</h1>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={job.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={job.company}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Job Description"
        value={job.description}
        onChange={handleChange}
      />
      <button type="submit">Post Job</button>
    </form>
  );
}

export default JobPostingPage;
