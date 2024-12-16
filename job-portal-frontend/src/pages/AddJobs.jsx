import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from 'axios'
const AddJobs = () => {
  const{user} = useContext(AuthContext)
  const [requirements, setRequirements] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const [currentRequirement, setCurrentRequirement] = useState("");
  const [currentResponsibility, setCurrentResponsibility] = useState("");

  const handleAddJobs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...job } = initialData;
    const salaryRange = { min, max, currency };
    const status = 'active';
    const hr_email = user.email;
    const fullData = {...job,status, salaryRange, requirements, responsibilities,hr_email};
    console.log(fullData);

    axios.post('http://localhost:3000/jobs',fullData)
    
  };

  const handleKeyDown = (e, type) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      if (type === "requirement") {
        setRequirements([...requirements, currentRequirement.trim()]);
        setCurrentRequirement("");
      } else if (type === "responsibility") {
        setResponsibilities([
          ...responsibilities,
          currentResponsibility.trim(),
        ]);
        setCurrentResponsibility("");
      }
    }
  };

  const handleRemove = (index, type) => {
    if (type === "requirement") {
      setRequirements(requirements.filter((_, i) => i !== index));
    } else if (type === "responsibility") {
      setResponsibilities(responsibilities.filter((_, i) => i !== index));
    }
  };

  return (
    <section className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Add a New Job
      </h2>
      <form onSubmit={handleAddJobs} className="space-y-6">
           <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            placeholder="Tech Solutions Ltd."

            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        <div>
          <label htmlFor="company_logo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Company Logo URL
          </label>
          <input
            type="url"
            name="company_logo"
            placeholder="https://example.com/logo.png"
            onChange={(e) => setCompanyLogo(e.target.value)}
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Job Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Software Engineer"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* 2. Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            placeholder="Halishohor, Chittagong"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* 3. Job Type */}
        <div>
          <label
            htmlFor="jobType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Job Type
          </label>
          <select
            name="jobType"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          >
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>

        {/* 4. Category */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            placeholder="Engineering"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* 5. Application Deadline */}
        <div>
          <label
            htmlFor="applicationDeadline"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        <div>
          <label
            htmlFor="salaryRange"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Salary Range
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              name="min"
              placeholder="Min Salary"
              className="flex-1 mt-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
            />
            <input
              type="number"
              name="max"
              placeholder="Max Salary"
              className="flex-1 mt-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
            />
            <select
              name="currency"
              className="mt-2 px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="BDT">BDT</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        {/* 9. Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Requirements
          </label>
          <input
            type="text"
            placeholder="Add a requirement and press Enter"
            value={currentRequirement}
            onChange={(e) => setCurrentRequirement(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "requirement")}
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
          <ul className="mt-2">
            {requirements.map((req, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{req}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(index, "requirement")}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 10. Responsibilities */}
        <div>
          <label
            htmlFor="responsibilities"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Responsibilities
          </label>
          <input
            placeholder="Add a responsibility and press Enter"
            value={currentResponsibility}
            onChange={(e) => setCurrentResponsibility(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "responsibility")}
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
          <ul className="mt-2">
            {responsibilities.map((resp, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(index, "responsibility")}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 11. Experience Level */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Experience Level
          </label>
          <select
            name="experience"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          >
            <option value="Entry">Entry Level</option>
            <option value="Mid">Mid Level</option>
            <option value="Senior">Senior Level</option>
          </select>
        </div>

        {/* 12. Employment Type */}
        <div>
          <label
            htmlFor="employmentType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Employment Type
          </label>
          <select
            name="employmentType"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* HR Name */}
        <div>
          <label
            htmlFor="hr_name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            HR Name
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Farhan Rahman"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* 13. Job Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Job Description
          </label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe the role, responsibilities, and any other details"
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 shadow-lg"
        >
          Add Job
        </button>
      </form>
    </section>
  );
};

export default AddJobs;
