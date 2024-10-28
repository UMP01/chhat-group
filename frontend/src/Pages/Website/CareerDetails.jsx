import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { axiosClient } from "../../api/axios";

const CareerDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axiosClient.get(`/careers/${id}`);
            setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch job listings");
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [id]);

  return (
    <div className='max-w-7xl mx-auto mt-4'>
    {jobs && (
      <div className='flex flex-col mb-4'>
        <h2 className='font-semibold text-2xl'>{jobs.title}</h2>
        <span className='pt-3 text-[18px] font-medium text-gray-400'>
          Expire Date: 
          {new Date(
              jobs.dateline
          ).toLocaleDateString()}
        </span>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-2xl pt-3'>Job Location:</h2>
          <ul className='pl-5 pt-3 list-disc'>
            <li className='font-semibold text-[18px]'>
              {jobs.location}
            </li>
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='font-semibold text-2xl text-sky-500'>Duties & Responsibilities</h2>
          <ul className='pl-5 pt-3 list-disc font-medium text-[18px] '>
              {jobs.responsible
                ? jobs.responsible
                .split('.')
                .filter(responsibility => responsibility.trim() !== '')
                .map((responsibility, index) => (
                    <li key={index}>{responsibility.trim()}</li>
                  ))
                : <li>No responsibilities listed.</li>
              }
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='font-semibold text-2xl text-sky-500'>Key Selection Criteria and Qualification</h2>
          <ul className='pl-5 pt-3 list-disc font-medium text-[18px] '>
              {jobs.requirement
                ? jobs.requirement
                .split('.')
                .filter(requirement => requirement.trim() !== '')
                .map((requirements, index) => (
                    <li key={index}>{requirements.trim()}</li>
                  ))
                : <li>No responsibilities listed.</li>
              }
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='font-semibold text-2xl text-sky-500'>Benefit Packages:</h2>
          <ul className='pl-5 pt-3 list-disc font-medium text-[18px] '>
            {jobs.benefit
                ? jobs.benefit
                .split('.')
                .filter(benefit => benefit.trim() !== '')
                .map((benefits, index) => (
                    <li key={index}>{benefits}</li>
                  ))
                : <li>No responsibilities listed.</li>
              }
          </ul>
        </div>
        <div className='mt-6'>
          <h2 className='font-semibold text-2xl text-sky-500'>How to Apply</h2>
          <span>Apply:info@chhatgroup.com</span>
          <span>Phone: 012 890 801</span>
          <p>
            Head Office Address:Borey Piphup Thmey La Sen Sok 2 #47-49, Street BT-08M, Phum Krang Angkrong, Sangkat Krang Thnong, Khan Sen Sok, 
          Phnom Penh, Cambodia, Phnom Penh, Cambodia, 120804
          </p>
        </div>
        <div className='mt-6'>
          <button className='w-[100px] p-2 bg-sky-400 text-white 
                            hover:bg-sky-500 font-semibold rounded-full'>
              Apply Now
          </button>
        </div>
      </div>
    )}
      
    </div>
  )
}

export default CareerDetails