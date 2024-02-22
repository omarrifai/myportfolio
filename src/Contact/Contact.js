import React, {useEffect, useState} from 'react'
import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const MyAddresss= 'Lebanon, Baalbeck';
const MyEmail= 'omar.rifai.966@gmail.com';
const MyPhone= '+96171800276';
const MyLinkedIn='https://www.linkedin.com/in/omar-rifai-6314751a1/';
const Contact = () => {
  const [ContactData, setContactData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/contactus')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the JSON response
            })
            .then(data => {
                setContactData(data); // Assuming the response contains an array of objects with a 'name' property
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
    <div id='contact' className='Contact'>
      <h1>Contact Us</h1>
      <div className='ContactUsDesc'>
        <div className='ContactUsDesc-Detail'>
          <FaLocationDot className='Icon'/>
          <span>{MyAddresss}</span>
        </div>
        <div className='ContactUsDesc-Detail'>
          <MdOutlineEmail className='Icon'/>
          <span>{ContactData[0].email}</span>
        </div>
        <div className='ContactUsDesc-Detail'>
          <FaPhoneAlt className='Icon'/>
          <span>{ContactData[0].phone}</span>
        </div>
        <div className='ContactUsDesc-Detail'>
          <FaLinkedinIn className='Icon'/>
          <span>{ContactData[0].linkedin}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact