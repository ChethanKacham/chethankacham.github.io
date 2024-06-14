import React from 'react';
import './Introduction.css';
import bg from '../../assets/profileimage.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

/*
<p>An innovative Full Stack Developer and DevOps Engineer with a proven history of making processes more efficient and improving performance through cutting-edge technologies. Passionate about creating seamless user experiences and robust backend solutions, dedicated to driving excellence in every project.</p>
*/

const Introduction = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Chethan Kacham</span> <br /> 
                    Full Stack Developer & <br />
                    DevOps Engineer
            </span>
            <p className='introPara'>An innovative Full Stack Developer and DevOps Engineer with a<br/> proven track record of streamlining processes and boosting<br/> performance using the latest technologies. </p>
            <Link>
                <button className='btn'>
                    <img src= {btnImg} alt='Hire Me' className='btnImg'/>
                        Hire Me
                </button>
            </Link>    
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>    
  );
}


export default Introduction;