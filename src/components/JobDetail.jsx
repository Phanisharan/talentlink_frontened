import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobDetails } from '../api/api';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobDetail() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        getJobDetails(id)
            .then(response => setJob(response.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!job) return <div className="text-center mt-5"><p>Loading job details...</p></div>;

    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0 p-4 job-detail-card">
                <img src={job.image} alt={job.title} className="img-fluid rounded mb-3 mx-auto d-block" style={{ maxWidth: "500px" }} />
                <h2 className="fw-bold">{job.title} - <span className="text-primary">{job.company}</span></h2>
                <p className="text-white"><strong>Skills Required:</strong> {job.skills}</p>
                <p className="lead">{job.description}</p>

                <div className="text-center mt-4">
                    <a href={job.apply_link} className="btn btn-success" target="_blank" rel="noopener noreferrer">Apply Now 🚀</a>
                </div>
            </div>
        </div>
    );
}

export default JobDetail;
