import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobBrowsingPage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10; // Number of jobs per page

    useEffect(() => {
        setJobs([
            { id: 1, title: "Senior Full Stack Engineer", company: "Google", date: "16/12/2021", location: "San Francisco, CA", description: "Responsible for developing and implementing front-end and back-end services." },
            { id: 2, title: "Software Engineer - React Native", company: "Facebook", date: "16/12/2021", location: "New York, NY", description: "Focus on building cross-platform mobile applications." },
            { id: 3, title: "Backend Developer", company: "Amazon", date: "17/12/2021", location: "Mountain View, CA", description: "Implement server-side logic and optimize web server performance." },
            { id: 4, title: "Frontend Developer", company: "Apple", date: "18/12/2021", location: "Menlo Park, CA", description: "Craft dynamic, responsive UIs that ensure a seamless user experience across devices." },
            { id: 5, title: "Data Scientist", company: "IBM", date: "19/12/2021", location: "Seattle, WA", description: "Analyze vast amounts of data to derive actionable insights and guide business strategies." },
            { id: 6, title: "Machine Learning Engineer", company: "Microsoft", date: "20/12/2021", location: "Redmond, WA", description: "Design and develop machine learning and deep learning systems." },
            { id: 7, title: "Product Manager", company: "Tesla", date: "21/12/2021", location: "Palo Alto, CA", description: "Lead product planning and execution throughout the product lifecycle." },
            { id: 8, title: "Project Coordinator", company: "Adobe", date: "22/12/2021", location: "San Jose, CA", description: "Coordinate projects, schedules, track progress and manage timelines." },
            { id: 9, title: "UX Designer", company: "Twitter", date: "23/12/2021", location: "San Francisco, CA", description: "Design satisfying or compelling experiences for users of a product." },
            { id: 10, title: "Mobile Developer", company: "Spotify", date: "24/12/2021", location: "Stockholm, Sweden", description: "Develop exceptional mobile applications for both iOS and Android platforms." },
            { id: 11, title: "Network Security Engineer", company: "Cisco", date: "25/12/2021", location: "San Jose, CA", description: "Ensure security of network and cloud-based systems." },
            { id: 12, title: "Database Administrator", company: "Oracle", date: "26/12/2021", location: "Redwood City, CA", description: "Maintain database systems, implement updates, and ensure data security." },
            { id: 13, title: "System Analyst", company: "Intel", date: "27/12/2021", location: "Santa Clara, CA", description: "Analyze system requirements and address any relevant problems." },
            { id: 14, title: "Cloud Specialist", company: "Amazon Web Services", date: "28/12/2021", location: "Seattle, WA", description: "Deploy, manage, and operate scalable, highly available systems on the cloud." },
            { id: 15, title: "QA Tester", company: "Epic Games", date: "29/12/2021", location: "Cary, NC", description: "Evaluate software applications for errors and stability." },
            { id: 16, title: "Web Developer", company: "Shopify", date: "30/12/2021", location: "Ottawa, ON", description: "Build functional and appealing web applications based on usability." },
            { id: 17, title: "DevOps Engineer", company: "Palantir Technologies", date: "31/12/2021", location: "Palo Alto, CA", description: "Build and maintain the infrastructure and tools to allow for the speedy development and release of software." },
            { id: 18, title: "Business Analyst", company: "Deloitte", date: "01/01/2022", location: "New York, NY", description: "Analyze business processes and workflows with the objective of finding out how they can be improved or automated." },
            { id: 19, title: "SEO Specialist", company: "HubSpot", date: "02/01/2022", location: "Cambridge, MA", description: "Implement strategies to improve search rankings of websites." },
            { id: 20, title: "Content Writer", company: "Medium", date: "03/01/2022", location: "Remote", description: "Create engaging content for various platforms including blogs and social media." }
        ]);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTitle, searchLocation]);

    const filteredJobs = jobs.filter(job => {
        const titleMatch = job.title.toLowerCase().includes(searchTitle.toLowerCase());
        const locationMatch = job.location.toLowerCase().includes(searchLocation.toLowerCase());
        return titleMatch && locationMatch;
    });

    const totalPages = Math.ceil(filteredJobs.length / pageSize);

    const handlePageClick = (pageNumber) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mt-4">
            <style>
                {`
                .profile-btn {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background-color: #28a745; /* Bootstrap success green */
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0,0,0,.2);
                }
                .profile-btn:hover {
                    background-color: #218838; /* A darker green for hover */
                    box-shadow: 0 2px 5px rgba(0,0,0,.3);
                }
                `}
            </style>
            <h1 className="text-center mb-4">Job Portal</h1>
            <Link to="/profile" className="btn profile-btn">Profile</Link>
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search jobs..."
                        value={searchTitle}
                        onChange={e => setSearchTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search locations..."
                        value={searchLocation}
                        onChange={e => setSearchLocation(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                {filteredJobs
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map(job => (
                        <div key={job.id} className="col-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{job.title} - <span className="font-weight-bold">{job.company}</span></h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{`${job.date} - ${job.location}`}</h6>
                                    <p className="card-text">{job.description}</p>
                                    <Link to={`/jobs/${job.id}`} className="btn btn-primary">Apply</Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <nav aria-label="Job pagination">
                <ul className="pagination justify-content-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                        <li className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
                            <button className="page-link" onClick={() => handlePageClick(pageNumber)}>{pageNumber}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default JobBrowsingPage;