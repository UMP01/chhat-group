import React, { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get("/careers");
            setJobs(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch job listings");
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setJobs(searchTerm);
  };

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="rubik">
      <form
        onSubmit={handleSearch}
        className="search-container flex items-center mb-4"
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 pl-4 pr-20 rounded-l-md text-gray-700 border-t-2 border-l-2 border-b-2 border-sky-600 focus:outline-none focus:ring-0 focus:ring-sky-600"
          placeholder="Search for jobs..."
        />
        <button
          type="submit"
          className="py-2 px-4 bg-sky-600 text-white border-2 border-sky-600 rounded-r-md hover:bg-sky-700"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4">
        <h2 className="text-2xl my-5 text-gray-700 font-semibold">Announcement</h2>
        <ul className="space-y-2">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <li
                key={job.id}
                className="p-3 bg-gray-50 rounded-md shadow-md border border-gray-100"
              >
                <h3 className="text-lg text-gray-700 py-1 font-semibold">{job.title}</h3>
                <div className="flex">
                  <IoLocationOutline className="mt-3"/>
                  <h3 className="text-[15px] text-gray-500 pb-3 pt-2 pl-2">
                    {job.location}
                  </h3>
                </div>
                <div className="flex flex-row justify-between text-center">
                  <div className="flex">
                    <IoTimeOutline className="mt-1"/>
                    <h3 className="text-sm text-gray-500 pb-3 pl-2">
                    DateLine: 
                    {new Date(
                          job.dateline
                      ).toLocaleDateString()}
                    </h3>
                    
                  </div>
                  <Link to={`/careerdetails/${job.id}`}>
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 text-[12px] font-semibold
                                    hover:text-sky-600 duration-75"
                      >
                      View More
                      </a>
                    </Link>
                </div>
                
                
              </li>
            ))
          ) : (
            <p>No jobs found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
