import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <p>{data.company}</p>
        </div>
    );
};

export default JobDetails;