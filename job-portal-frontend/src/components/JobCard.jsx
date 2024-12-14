import { IoBagOutline, IoFlashOutline, IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
const JobCard = ({ job }) => {
  console.log(job);
  const {
    applicationDeadline,category,company,
    company_logo,description,hr_email,
    hr_name,jobType,location,requirements,
    responsibilities,salaryRange,status,title,_id,
  } = job;
  return (
    <div className="flex-flex-col border rounded-lg shadow-lg px-2 py-1 space-y-2">
      <IoFlashOutline className="text-green-400 ml-auto w-6 h-6" />
      <div className="flex items-center">
        <div>
          <img src={company_logo} className="w-10"
           alt="company_logo" />
        </div>
        <div>

          <h4>{company}</h4>
          <p><IoLocationOutline className="inline"/> {location}</p>
        </div>
      </div>
      <h4>{title}</h4>
      <p className="flex items-center gap-1"><IoBagOutline className="inline" />{jobType}</p>
      <p>{description}</p>
      <p>{status}</p>
      <div className="flex gap-2 flex-wrap">
      {requirements.map(req => <span className="border text-sm px-1 py-0.5">{req}</span>)}
      </div>
      <div className="flex justify-between">
        <h4>{salaryRange.min}-{salaryRange.max}/{salaryRange.currency}</h4>
       <Link to={`/job/${_id}`}> <button className="border rounded px-2 py-0.5">Apply Now</button></Link>
      </div>
    </div>
  );
};

export default JobCard;
