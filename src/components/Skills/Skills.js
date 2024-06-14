import React from 'react';
import './Skills.css';
// import { UIDesign } from '../../assets/frontend.png';
// import { WebDesign } from '../../assets/backend.png';
// import { AppDesign } from '../../assets/devops.png';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

function Skills() {
  return (
    <section id='skills'>
        <span className='skillTitle'>What do I do</span>
        <span className='skillDescription'>An innovative Full Stack Developer and DevOps Engineer with a proven history of making processes more efficient and improving performance through cutting-edge technologies. Passionate about creating seamless user experiences and robust backend solutions, dedicated to driving excellence in every project.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src= {UIDesign} alt='Front End Development' className='skillBarImg'/>
                <div className='skillBarContent'>
                    <h2 className='skillBarTitle'>Frontend Development</h2>
                    <p className='skillBarPara'>I create beautiful, responsive and user-friendly websites using the latest frontend technologies.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='Back End Development' className='skillBarImg'/>
                <div className='skillBarContent'>
                    <h2 className='skillBarTitle'>Backend Development</h2>
                    <p className='skillBarPara'>I build scalable and efficient backend solutions that power your applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='DevOps Professional' className='skillBarImg'/>
                <div className='skillBarContent'>
                    <h2 className='skillBarTitle'>DevOps</h2>
                    <p className='skillBarPara'>I automate and streamline your development processes to make your team more efficient.</p>
                </div>
            </div>    
        </div>
            
    </section>
  );
}

export default Skills;