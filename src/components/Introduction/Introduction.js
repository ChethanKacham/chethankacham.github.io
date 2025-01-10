import './Introduction.css';
import profilePic from '../../assets/ChethanProfilepicCrop.jpg'; 
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import btnImg from '../../assets/hireme.png';

const Introduction = () => {
  return (
    <section id='intro'>
      <div className='introWrapper'>
        {/* Content Section for Large Screens */}
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span>
            I&#39;m <span className='introName'>Chethan Kacham</span>
          </span>
          <p className='introPara'>
            A Full Stack Developer & DevOps Engineer passionate about building efficient and scalable applications.
          </p>
          {/* <p className='introPara'>A passionate Full Stack Developer and DevOps Engineer with experience in building efficient, scalable applications and automating workflows. With a strong background in ReactJS, Java, DevOps tools and cloud technologies, I thrive on delivering impactful solutions that enhance user experience and operational efficiency.</p> */}

          {/* Skills Badges */}
          {/* <div className='skillsContainer'>
            <span className='skillBadge'>ReactJS</span>
            <span className='skillBadge'>Java</span>
            <span className='skillBadge'>DevOps</span>
            <span className='skillBadge'>Python</span>
            <span className='skillBadge'>AWS</span>
          </div> */}

          {/* Buttons */}
          <div className='btnContainer'>
            <Link to='contact' smooth={true} duration={500}>
              <button className='btn'>
                <img src= {btnImg} alt='Hire Me' className='btnImg'/>
                  Hire Me
              </button>
            </Link>
            <a
              href='/Resume.pdf'
              download="Chethan_Kacham_Resume.pdf"
              className='btn downloadResume'
            >
              <FaDownload style={{ marginRight: '0.5rem' }} /> Resume
            </a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className='profilePicContainer'>
          <img src={profilePic} alt='Chethan Kacham' className='profilePic' />
          {/* Overlay Content for Small Screens */}
          <div className='overlayContent'>
            <span className='hello'>Hello,</span>
            <span>
              I&#39;m <span className='introName'>Chethan Kacham</span>
            </span>
            <p className='introPara'>
              A Full Stack Developer & DevOps Engineer passionate about building efficient and scalable applications.
            </p>
            <div className='btnContainer'>
              <Link to='contact' smooth={true} duration={500}>
                <button className='btn'>
                  <img src= {btnImg} alt='Hire Me' className='btnImg'/>
                    Hire Me
                </button>
              </Link>
              <a
                href='/Resume.pdf'
                download="Chethan_Kacham_Resume.pdf"
                className='btn downloadResume'
              >
                <FaDownload style={{ marginRight: '0.5rem' }} /> Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
