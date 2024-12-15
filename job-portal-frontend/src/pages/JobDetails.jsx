import {
    FaFacebook,
    FaReddit,
    FaTwitter,
    FaWhatsapp,
  } from "react-icons/fa";
  import {
    IoBriefcaseOutline,
    IoCashOutline,
    IoCalendarOutline,
    IoLocationOutline,
    IoTimeOutline,
  } from "react-icons/io5";
  import { Link, useLoaderData } from "react-router-dom";
  
  const JobDetails = () => {
    const job = useLoaderData();
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
      _id
    } = job;
  
    return (
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Job Details Card */}
        <div className="border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-12 h-12 object-cover rounded-lg border shadow-md"
            />
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {company} - {category}
              </p>
            </div>
          </div>
  
          {/* Employment Information */}
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Employment Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
            {[
              {
                icon: <IoBriefcaseOutline className="text-blue-500 w-5 h-5" />,
                label: "Industry:",
                value: category,
              },
              {
                icon: <IoBriefcaseOutline className="text-blue-500 w-5 h-5" />,
                label: "Job Type:",
                value: jobType,
              },
              {
                icon: <IoCashOutline className="text-blue-500 w-5 h-5" />,
                label: "Salary:",
                value: `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency}`,
              },
              {
                icon: <IoTimeOutline className="text-blue-500 w-5 h-5" />,
                label: "Experience:",
                value: "1 - 2 years", // Placeholder for dynamic data
              },
              {
                icon: <IoCalendarOutline className="text-blue-500 w-5 h-5" />,
                label: "Deadline:",
                value: applicationDeadline,
              },
              {
                icon: <IoCalendarOutline className="text-blue-500 w-5 h-5" />,
                label: "Status:",
                value: status,
              },
              {
                icon: <IoLocationOutline className="text-blue-500 w-5 h-5" />,
                label: "Location:",
                value: location,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <span className="font-medium">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
  
          {/* Job Description */}
          <Section title="Job Description" content={<p>{description}</p>} />
  
          {/* Requirements */}
          <Section
            title="Requirements"
            content={
              <ul className="list-disc pl-5">
                {requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            }
          />
  
          {/* Responsibilities */}
          <Section
            title="Responsibilities"
            content={
              <ul className="list-disc pl-5">
                {responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            }
          />
  
          {/* Contact Information */}
          <Section
            title="Contact Information"
            content={
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-medium">HR Name:</span> {hr_name}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {hr_email}
                </p>
              </div>
            }
          />
  
          {/* Footer Buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-4">
             <Link to={`/jobApply/${_id}`}>
             <Button className="bg-blue-600 text-white hover:bg-blue-700">Apply now</Button>
             </Link>
              <Button className="border border-gray-300 text-gray-600 hover:bg-gray-100">
                Save job
              </Button>
            </div>
            <ShareSection />
          </div>
        </div>
      </div>
    );
  };
  
  const Section = ({ title, content }) => (
    <div className="mt-6">
      <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
        {title}
      </h4>
      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {content}
      </div>
    </div>
  );
  
  const Button = ({ children, className }) => (
    <button
      className={`px-4 py-2 font-medium rounded-md transition ${className}`}
    >
      {children}
    </button>
  );
  
  const ShareSection = () => (
    <div className="flex items-center gap-2">
      <span className="text-gray-600">Share this</span>
      <div className="flex gap-2">
        {[
          { icon: <FaFacebook size={24} color="#1877F2" />, href: "#" },
          { icon: <FaTwitter size={24} color="#1DA1F2" />, href: "#" },
          { icon: <FaReddit size={24} color="#FF4500" />, href: "#" },
          { icon: <FaWhatsapp size={24} color="#25D366" />, href: "#" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="hover:scale-110 transition-transform"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
  
  export default JobDetails;
  