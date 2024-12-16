import { IoBagOutline, IoFlashOutline, IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
    _id,
  } = job;

  return (
    <div className="flex flex-col justify-between border rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-200">
      {/* Top Section */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-14 h-14 object-contain rounded-md border"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <IoLocationOutline /> {location}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <IoBagOutline /> {jobType}
            </p>
          </div>
        </div>
        <IoFlashOutline className="text-green-500 w-6 h-6" title="Urgent Hiring" />
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {requirements.map((req, index) => (
          <span
            key={index}
            className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-600"
          >
            {req}
          </span>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-800 dark:text-gray-300">
          <span className="font-medium">{salaryRange.min}-{salaryRange.max}</span> {salaryRange.currency}
        </div>
        <Link to={`/job/${_id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
