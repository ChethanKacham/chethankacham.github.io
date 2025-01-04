import './Introduction.css';
import profilePic from '../../assets/ChethanProfilepicCrop.jpg';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import btnImg from '../../assets/hireme.png';

const Introduction = () => {
  return (
    <section id='intro'>
      <div className='introWrapper'>
        <img src={profilePic} alt='Chethan Kacham' className='profilePic' />
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span>
            I&#39;m <span className='introName'>Chethan Kacham</span>
          </span>
          <p className='introPara'>
            A Full Stack Developer & DevOps Engineer passionate about building efficient and scalable applications.
          </p>
          <div className='btnContainer'>
            <Link to='contact' smooth={true} duration={500}>
              <button className='btn'><img src= {btnImg} alt='Hire Me' className='btnImg'/> Hire Me</button>
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
    </section>
  );
};

export default Introduction;
