import { useLoaderData, useParams } from "react-router-dom";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const ApplicationsDetail = () => {
    const[applications,setApplications] = useState([])
    const param = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/applications?jobId=${param.id}`)
        .then(data => setApplications(data.data))
    },[])
    const handleStatusUpdate = (e, id) => {
        const status = e.target.value;
        axios.patch(`http://localhost:3000/applications/${id}`,{status})
    }
    return (
<div className="overflow-x-auto max-w-7xl mx-auto">
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Apply Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {applications.map(application => 
                  <tr key={application._id}>
                  <td>
                      <div>
                        <div className="font-bold">{application.applicant_name}</div>
                        <div className="text-sm opacity-50">{application.applicant_email}</div>
                      </div>
                  </td>
                  <td>
                    {application.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">{application.jobType}</span>
                  </td>
                  <td>{application.dateApplied}</td>
                  <td>
                    <select defaultValue={application.status?application.status:'Change Status'} onChange={()=> handleStatusUpdate(event,application._id)} className="select select-bordered w-full max-w-xs select-xs">
                        <option disabled>Change Status</option>
                        <option>Short Listed</option>
                        <option>Set Interview</option>
                        <option>Hired</option>
                    </select>
                  </td>
                </tr>
        )}
    </tbody>
  </table>
</div>
    );
};

export default ApplicationsDetail;