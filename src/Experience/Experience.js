import React, {useEffect, useState} from 'react'
import './Experience.css'


const Experience = () => {
    const [ExperienceData, setExperienceData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/experience')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                setExperienceData(data); // Assuming the response contains an array of objects with a 'name' property
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const dataArray = JSON.parse(ExperienceData[0].description);
    const cleanedArray = dataArray.map(item => item.replace(/["\[\]]/g, ''));
    return (
        <div id='experience' className='Experience'>
            <h1>Experience</h1>
            <div className='Experience-info'>
                <div>
                    {ExperienceData[0].name} - {ExperienceData[0].startdate} to {ExperienceData[0].enddate}
                </div>
                <div>
                    {ExperienceData[0].organization}, {ExperienceData[0].location}
                </div>
                <div className='description'>
                    <ul className='ul'>
                        {cleanedArray.map((item, index) => {
                            return <li key={index} className='li'>{item}</li>

                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience