import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Applications = () => {
    const{user} = useContext(AuthContext);
    const[myApplications,setMyApplications] = useState([]);;
    useEffect(()=>{
        axios.get(`http://localhost:3000/applications?email=${user.email}`)
        .then(data => setMyApplications(data.data))
    },[user.email])
    console.log(myApplications)
    return (
<div className="overflow-x-auto max-w-7xl mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Company</th>
        <th>Job</th>
        <th>Apply Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
        {myApplications.map(application => 
                  <tr key={application._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={application.company_logo}
                            alt="company_logo" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{application.company}</div>
                        <div className="text-sm opacity-50">{application.location}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {application.category}
                    <br />
                    <span className="badge badge-ghost badge-sm">{application.title}</span>
                  </td>
                  <td>{application.dateApplied}</td>
                  <th>
                    <button className="border text-gray-500 font-normal px-2 py-1 rounded">Cancel Application</button>
                  </th>
                </tr>
        )}
    </tbody>
  </table>
</div>
    );
};

export default Applications;