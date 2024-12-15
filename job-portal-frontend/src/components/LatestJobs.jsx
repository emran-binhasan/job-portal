import axios from 'axios';
import { useEffect, useState } from 'react';
import JobCard from './JobCard';
const LatestJobs = () => {
    const[jobList,setJobList] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/jobs')
    .then((data)=>{
        setJobList(data.data)
    })
    },[])
    return (
        <div className='border mx-auto max-w-7xl my-5'>
            <h2 className='text-2xl text-center'>Latest Jobs</h2>
            <p className='text-center'>Search and connect with the right candidates faster</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4'>
            {jobList.map(job => <JobCard key={job._id} job={job}/>)}
            </div>
        </div>
    );
};

export default LatestJobs;