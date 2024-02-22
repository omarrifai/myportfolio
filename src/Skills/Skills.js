import React from 'react'
import './Skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
//import { RiFlutterFill } from "react-icons/ri";
import { SiMicrosoftoffice } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";


const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <h1>Skills</h1>
            <div className='skills-list'>
                <div className='skills-list-style'>
                    <FaHtml5 className='icon-style' />
                    <p>HTML</p>
                    <div className='progress-wrapper'>
                        <progress value={0.7} />
                        <span>70%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <FaCss3 className='icon-style' />
                    <p>CSS</p>
                    <div className='progress-wrapper'>
                        <progress value={0.7} />
                        <span>70%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <DiJavascript className='icon-style' />
                    <p>JavaScript</p>
                    <div className='progress-wrapper'>
                        <progress value={0.5} />
                        <span>50%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <FaPhp className='icon-style' />
                    <p>PHP</p>
                    <div className='progress-wrapper'>
                        <progress value={0.5} />
                        <span>50%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <FaReact className='icon-style' />
                    <p>React.js</p>
                    <div className='progress-wrapper'>
                        <progress value={0.5} />
                        <span>50%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <FaDatabase className='icon-style' />
                    <p>Database</p>
                    <div className='progress-wrapper'>
                        <progress value={0.7} />
                        <span>70%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <SiMicrosoftoffice className='icon-style' />
                    <p>Microsoft Office</p>
                    <div className='progress-wrapper'>
                        <progress value={0.8} />
                        <span>80%</span>
                    </div>
                </div>
                <div className='skills-list-style'>
                    <RiTeamLine className='icon-style' />
                    <p>Team Leader</p>
                    <div className='progress-wrapper'>
                        <progress value={0.8} />
                        <span>80%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills