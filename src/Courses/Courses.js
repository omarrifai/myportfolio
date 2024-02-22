import React, { useEffect, useState } from 'react'
import './Courses.css'
import web from '../assest/web-icon.jpg';
import flutter from '../assest/flutter-icon.png';

const Courses = () => {
    const [CourseData, setCourseData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/courses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                setCourseData(data); // Assuming the response contains an array of objects with a 'name' property
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
    return (
        <div id='courses' className='courses'>
            <h1>Courses</h1>
            <div className='Courses-list'>
                {CourseData.map(item => (
                    <div className='flip-card' key={item.id}>
                        <div className="flip-card-inner">
                            <div className='flip-card-front'>
                                {item.image_name === 'web-icon.jpg' ? (
                                    <img src={web} alt='icon' />
                                ) : (
                                    <img src={flutter} alt='icon' />
                                )}
                                <h2>{item.name}</h2>
                            </div>
                            <div className='flip-card-back'>
                                <p>Provided by: {item.organization} in {item.year}</p>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses