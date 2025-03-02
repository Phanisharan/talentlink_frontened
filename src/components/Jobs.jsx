import React, { useEffect, useState } from 'react';
import { getJobs } from '../api/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs().then(response => setJobs(response.data)).catch(err => console.error(err));
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold mb-4 text-light">Latest Job Openings 🚀</h2>
            <div className="row">
                {jobs.map(job => (
                    <div key={job.id} className="col-md-4 mb-4">
                        <div className="card shadow-sm border-0 job-card text-light">
                            <img src={job.image} className="card-img-top" alt={job.title} style={{ height: "200px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                            <div className="card-body">
                                <h5 className="card-title">{job.title} - <span className="text-info">{job.company}</span></h5>
                                <p className="card-text">{job.description.substring(0, 100)}...</p>
                                <Link to={`/jobs/${job.id}`} className="btn btn-primary w-100">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
