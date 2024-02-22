import React, { useEffect, useState } from 'react'
import Picture from '../assest/Omar-Rifai.JPG'
import './Home.css'

const Home = () => {
  const [aboutMeData, setAboutMeData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/aboutme')
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
  console.log(aboutMeData[0].name);
  return (
    <div className='Home'>
      <img src={Picture} alt='me' />
      <div className='Home-content'>
        <p className='hello'>Hello, I am {aboutMeData[0].name}</p>
        <p className='Subtitle'>{aboutMeData[0].major}</p>
        
      </div>
    </div>
  )
}

export default Home