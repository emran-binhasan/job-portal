import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import {Link} from 'react-router-dom';
const AddedJobs = () => {
  const [addedJobs, setAddedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs?email=${user.email}`)
      .then((data) => setAddedJobs(data.data));
  }, [user.email]);

  return (
<div className="overflow-x-auto max-w-7xl mx-auto ">
  <table className="table">
    {/* head */}
    <thead className="mx-auto">
      <tr>
        <th>Company</th>
        <th>Job</th>
        <th>Apply Date</th>
      </tr>
    </thead>
    <tbody>
        {addedJobs.map(job => 
                  <tr key={job._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={job.company_logo}
                            alt="company_logo" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.company}</div>
                        <div className="text-sm opacity-50">{job.location}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td>
                    <h4 className="my-1">{job.category}</h4>
                    <span className="my-1 border text-gray-400  px-1 py-0.5 rounded">{job.title}</span>
                  </td>
                  <td>
                    <Link to={`/applications-detail/${job._id}`} className="border text-gray-500  px-2 py-1 rounded">View Applications <div class="badge">{job.applicationCount?job.applicationCount:0}</div></Link>
                  </td>
                 
                </tr>
        )}
    </tbody>
  </table>
</div>
  );
};

export default AddedJobs;
