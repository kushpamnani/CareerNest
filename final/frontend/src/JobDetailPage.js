import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      company: "Google",
      date: "16/12/2021",
      location: "San Francisco, CA",
      description:
        "Responsible for developing and implementing front-end and back-end services. You will work closely with our product team to build new and innovative application experiences for our users. Great perks include comprehensive health coverage, office gym, and stock options.",
      salary: "$120,000 - $150,000",
      benefits:
        "Health, Dental, Vision, 401K, Remote Work Options, Stock Options",
    },
    {
      id: 2,
      title: "Software Engineer - React Native",
      company: "Facebook",
      date: "16/12/2021",
      location: "New York, NY",
      description:
        "Focus on building cross-platform mobile applications using React Native. You will be part of a dynamic team to spearhead our mobile development efforts for iOS and Android. Enjoy flexible working hours and a creative working environment.",
      salary: "$110,000 - $130,000",
      benefits: "Health insurance, Paid time off, Gym membership, Free meals",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Amazon",
      date: "17/12/2021",
      location: "Mountain View, CA",
      description:
        "Implement server-side logic and optimize web server performance. Your work will directly influence the scalability and performance of our platforms. Benefits include competitive health benefits and stock options.",
      salary: "$105,000 - $125,000",
      benefits: "Health, Vision, Dental, Stock Options, Parental Leave",
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Apple",
      date: "18/12/2021",
      location: "Menlo Park, CA",
      description:
        "Craft dynamic, responsive UIs that ensure a seamless user experience across devices. Be a part of a team that values innovation and quality. Enjoy perks such as product discounts and free health wellness programs.",
      salary: "$115,000 - $135,000",
      benefits: "Product discounts, Gym, Health, Dental, Vision",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "IBM",
      date: "19/12/2021",
      location: "Seattle, WA",
      description:
        "Analyze vast amounts of data to derive actionable insights and guide business strategies. Work alongside industry-leading data professionals in a state-of-the-art environment. Comprehensive benefits package included.",
      salary: "$130,000 - $160,000",
      benefits: "401K, Health, Dental, Vision, Employee Training, Stock Options",
    },
    {
      id: 6,
      title: "Machine Learning Engineer",
      company: "Microsoft",
      date: "20/12/2021",
      location: "Redmond, WA",
      description:
        "Develop predictive models and algorithms to drive innovative solutions. Work in a team that pushes the boundaries of technology. Benefits include health insurance and travel opportunities.",
      salary: "$125,000 - $145,000",
      benefits:
        "Health, Dental, Vision, Travel Allowances, Conference Sponsorships",
    },
    {
      id: 7,
      title: "Product Manager",
      company: "Tesla",
      date: "21/12/2021",
      location: "Palo Alto, CA",
      description:
        "Lead product planning and execution throughout the product lifecycle. Collaborate with engineers and designers to create revolutionary products. Tesla offers competitive salaries and stock options.",
      salary: "$140,000 - $160,000",
      benefits: "Stock Options, Health Insurance, Car Discounts",
    },
    {
      id: 8,
      title: "Project Coordinator",
      company: "Adobe",
      date: "22/12/2021",
      location: "San Jose, CA",
      description:
        "Coordinate projects, schedules, track progress and manage timelines. Be part of a creative environment that is at the forefront of digital design innovation.",
      salary: "$90,000 - $110,000",
      benefits: "Health, Dental, Vision, Wellness Programs, Stock Options",
    },
    {
      id: 9,
      title: "UX Designer",
      company: "Twitter",
      date: "23/12/2021",
      location: "San Francisco, CA",
      description:
        "Design satisfying or compelling experiences for users of a product, focusing on deriving user insights, digital strategy, and design execution.",
      salary: "$95,000 - $115,000",
      benefits: "Health, Dental, Vision, Gym, Stock Options",
    },
    {
      id: 10,
      title: "Mobile Developer",
      company: "Spotify",
      date: "24/12/2021",
      location: "Stockholm, Sweden",
      description:
        "Develop exceptional mobile applications for both iOS and Android platforms. Join a company that values innovation and user experience.",
      salary: "$100,000 - $120,000",
      benefits: "Health, Dental, Vision, Performance Bonuses, Stock Options",
    },
    {
      id: 11,
      title: "Cloud Architect",
      company: "Salesforce",
      date: "25/12/2021",
      location: "San Francisco, CA",
      description:
        "Design and implement cloud-based architectures and strategies to enhance infrastructure flexibility. This role requires deep knowledge of cloud computing technologies and best practices.",
      salary: "$130,000 - $160,000",
      benefits: "Remote Work, Health, Vision, Dental, 401K",
    },
    {
      id: 12,
      title: "Security Analyst",
      company: "Palo Alto Networks",
      date: "26/12/2021",
      location: "Santa Clara, CA",
      description:
        "Monitor security systems for potential threats and vulnerabilities, providing crucial protection measures. This position requires expertise in cybersecurity tools and practices.",
      salary: "$115,000 - $135,000",
      benefits: "Health, Pension, Gym Membership, Educational Allowances",
    },
    {
      id: 13,
      title: "Business Systems Analyst",
      company: "Accenture",
      date: "27/12/2021",
      location: "Chicago, IL",
      description:
        "Analyze business needs and translate them into actionable IT strategies, ensuring alignment with business goals. This role requires strong analytical skills and business acumen.",
      salary: "$110,000 - $130,000",
      benefits: "Travel Allowances, Health Insurance, Paid Time Off",
    },
    {
      id: 14,
      title: "AI Research Scientist",
      company: "DeepMind",
      date: "28/12/2021",
      location: "London, UK",
      description:
        "Lead cutting-edge research in artificial intelligence and machine learning, contributing to innovative projects. This position requires advanced knowledge of machine learning algorithms and research methodologies.",
      salary: "$150,000 - $180,000",
      benefits: "Health, Dental, Gym, Stock Options, Conference Sponsorships",
    },
    {
      id: 15,
      title: "Technical Support Engineer",
      company: "Dell Technologies",
      date: "29/12/2021",
      location: "Austin, TX",
      description:
        "Provide technical support and troubleshooting services to users experiencing hardware and software issues. This role requires strong communication skills and technical expertise.",
      salary: "$90,000 - $110,000",
      benefits: "Health, Vision, Dental, 401K, Remote Work Options",
    },
    {
      id: 16,
      title: "Digital Marketing Manager",
      company: "Adobe",
      date: "30/12/2021",
      location: "San Jose, CA",
      description:
        "Develop and execute digital marketing strategies to enhance brand presence and digital user engagement. This role requires creativity and a deep understanding of digital marketing channels.",
      salary: "$120,000 - $140,000",
      benefits: "Gym Membership, Health Insurance, Performance Bonuses",
    },
    {
      id: 17,
      title: "Human Resources Manager",
      company: "Google",
      date: "31/12/2021",
      location: "Mountain View, CA",
      description:
        "Oversee all aspects of Human Resources practices and processes to support business needs. This role requires strong leadership skills and a deep understanding of HR principles.",
      salary: "$130,000 - $150,000",
      benefits: "Health, Pension, Paid Leave, Childcare",
    },
    {
      id: 18,
      title: "Sales Manager",
      company: "Oracle",
      date: "01/01/2022",
      location: "Redwood City, CA",
      description:
        "Drive sales initiatives and strategies, ensuring sales targets are met across the region. This role requires strong negotiation skills and a proven track record in sales management.",
      salary: "$110,000 - $130,000",
      benefits: "Commission, Health, Vision, Dental",
    },
    {
      id: 19,
      title: "Network Engineer",
      company: "Cisco Systems",
      date: "02/01/2022",
      location: "San Jose, CA",
      description:
        "Design, implement, and maintain networking communication systems. This role requires expertise in networking technologies and protocols.",
      salary: "$105,000 - $125,000",
      benefits: "Health, Vision, Dental, Stock Options, Flexible Working Hours",
    },
    {
      id: 20,
      title: "Product Designer",
      company: "Spotify",
      date: "03/01/2022",
      location: "Stockholm, Sweden",
      description:
        "Create intuitive interfaces and engaging experiences for digital music services across various platforms. This role requires creativity and a deep understanding of user-centered design principles.",
      salary: "$100,000 - $120,000",
      benefits: "Health, Dental, Vision, Stock Options, Travel Allowances",
    },
  ];
  
  
  const JobDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobs.find((job) => job.id.toString() === id);
  
    const [resume, setResume] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [education, setEducation] = useState("");
  
    const handleResumeChange = (event) => {
      setResume(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (resume) {
        alert(`Application submitted for ${job.title} at ${job.company} with resume ${resume.name}.`);
        navigate('/');  // Redirect to home or another page after submission
      } else {
        alert('Please attach a resume before submitting.');
      }
    };
  
    if (!job) return <div className="container mt-3">Job not found!</div>;
  
    return (
      <div className="container mt-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{job.title} at {job.company}</h1>
            <p><strong>Date:</strong> {job.date}</p>
            <p><strong>Location:</strong> {job.location}</p>
            
            <hr /> {/* Horizontal line to visually separate sections */}
            
            <h3>Job Description:</h3>
            <p className="fs-5">{job.description}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Benefits:</strong> {job.benefits}</p>
  
            <hr /> {/* Horizontal line to visually separate sections */}
  
            <h3>Applicant Information:</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone:</label>
                <input type="tel" className="form-control" id="phone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="education" className="form-label">Education:</label>
                <input type="tel" className="form-control" id="education" required value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="resumeUpload" className="form-label">Upload Resume (PDF only):</label>
                <input type="file" className="form-control" id="resumeUpload" accept=".pdf" onChange={handleResumeChange} required />
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
                <button type="submit" className="btn btn-success">Apply Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default JobDetailPage;