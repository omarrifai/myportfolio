import React, { useEffect, useState } from 'react'
import './Education.css'


const Education = () => {
  //set data after fetching it
  const [EducationData, setEducationData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //this is for showing a window about the information for the education
  const [ShowInfo, setShowInfo] = useState({});
  const handleButtonClick = (id) => {
    setShowInfo(prevState =>({
      ...prevState, 
      [id]:true
    }));
  };

  const handleCloseInfo = (id) => {
    setShowInfo(prevState =>({
      ...prevState, 
      [id]:false
    }));
  };

  useEffect(() => {
    fetch('http://localhost:3001/education')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        setEducationData(data); // Assuming the response contains an array of objects with a 'name' property
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
    <div id='education' className='Education'>
      <h1>
        Education
      </h1>

      <div className='Education-Info-new'>
        {EducationData.map(info => (
          <div key={info.id}>
            <button onClick={()=>handleButtonClick(info.id)} className='button-style'>{info.degree}</button>
            {ShowInfo[info.id] && (
              <div className="info-window">
                <div>
                  <p>Major: {info.name}</p>
                  <p>University: {info.university}</p>
                  <p>Graduation Year: {info.year}</p>
                  <p>GPA: {info.GPA}</p>
                </div>
                <button onClick={()=>handleCloseInfo(info.id)}>Close</button>
              </div>
            )}
          </div>
        ))}


      </div>

    </div>
  )
}

export default Education