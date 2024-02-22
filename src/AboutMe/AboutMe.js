import React, { useEffect, useState } from 'react'
import './AboutMe.css'
import Picture from '../assest/Omar-Rifai.JPG'

//const paragraph = 'Welcome to my portfolio! I am Omar Rifai, a passionate Computer Engineer and Math Teacher dedicated to education and technology integration. I specialize in front-end technologies such as HTML, CSS, JavaScript, and React.js, alongside effective classroom management and student engagement strategies. My work is driven by creativity, attention to detail, and a commitment to delivering exceptional results. Explore my portfolio to see how I bring ideas to life and solve challenges with innovation and expertise.';
const AboutMe = () => {
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
  return (
    <section>

      <div className='AboutMe' id='aboutme'>
        <h1>About Me</h1>
        <div className='AboutMe-description'>
          <div className='AboutMe-description-details'>
            <p className='AboutMe-Paragraph'>{aboutMeData[0].description}</p>
            <img src={Picture} alt='me' className='image' />
          </div>
          {/* <div>
                <p className='AboutMe-Paragraph'>{paragraph}</p>
            </div> */}
        </div>
        {/* <div>
            <img src={Picture} alt='me' className='image'/>
        </div> */}
      </div>
    </section>
  )
}

export default AboutMe;