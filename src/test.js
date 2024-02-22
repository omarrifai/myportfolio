import React, { useEffect, useState } from 'react';

function Test() {
    const [aboutMeData, setAboutMeData] = useState('');
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
                setAboutMeData(data); // Assuming the response contains an array of objects with a 'name' property
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
        <div>
            <h1>About Me</h1>
            <p>{aboutMeData[0].description}</p>
        </div>
    );
}

export default Test;
