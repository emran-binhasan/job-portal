import axios from 'axios';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

const JobApply = () => {
  const {user} = useContext(AuthContext)
  const params = useParams();
 

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const resumeLink = form.resumeLink.value;
    const phoneNo = form.contactNumber.value;
    const linkedinLink = form.linkedinLink.value;
    const githubLink = form.githubLink.value;
    const jobId = params.id
    const applicant_email = user.email;
    const applicant_name = user.displayName;
    const dateApplied = new Date();
    const application = {applicant_name,applicant_email,phoneNo,dateApplied,jobId,linkedinLink,resumeLink,githubLink};
    console.log(application)
    axios.post('http://localhost:3000/applicaions',application)
    .then(res => console.log(res))
    
    

    
  };

  return (
    <section className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Apply for this Job
      </h2>

      <form onSubmit={handleApply} className="space-y-6">
        {/* Resume Link */}
        <div>
          <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Resume Link
          </label>
          <input
            type="url"
            name="resumeLink"
           
            required
            placeholder="https://your-resume-link.com"
          
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Contact Number
          </label>
          <input
            type="tel"
            name="contactNumber"
           
            required
            placeholder="+1 123 456 7890"
            
           
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* LinkedIn Link */}
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            LinkedIn Profile Link
          </label>
          <input
            type="url"
            name="linkedinLink"
           
            required
            placeholder="https://linkedin.com/in/your-profile"
            
          
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* GitHub Link */}
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            GitHub Profile Link (Optional)
          </label>
          <input
            type="url"
            name="githubLink"
          
            placeholder="https://github.com/your-profile"
           
            
            className="mt-2 block w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 dark:text-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm dark:bg-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
};

export default JobApply;
