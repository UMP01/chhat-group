import React, { useState, useEffect } from "react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("developer");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=de22efb9&app_key=0b09192582f2abfb432b1308bcee9965&results_per_page=5&what=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); 
        setJobs(data.results);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch job listings");
      }finally{
        setLoading(false);
      }
    };

    fetchJobs();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
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
          className="w-full py-2 pl-4 pr-20 rounded-l-md text-gray-700 border-t-2 border-l-2 border-b-2 border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600"
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
        <h2 className="text-xl my-5 text-gray-700">Job Listings</h2>
        <ul className="space-y-2">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <li
                key={job.id}
                className="p-3 bg-gray-50 rounded-md shadow-md border border-gray-100"
              >
                <h3 className="text-lg text-gray-700 py-1">{job.title}</h3>
                <p className="text-sm text-gray-500 pb-3">
                  {job.location.display_name}
                </p>
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600"
                >
                  View Job
                </a>
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
