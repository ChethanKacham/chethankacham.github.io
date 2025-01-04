import { useRef } from 'react';
import './Contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import LinkedIn from '../../assets/linkedin.png';
import GitHub from '../../assets/github-icon.png';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Contact = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qwhuz8h', 'template_l6tajd3', form.current, {
                publicKey: '2KundOAbJzBT_6tnl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email Sent Successfully');
                    form.current.reset();
                    navigate('/');
                    setTimeout(() => {
                        scroll.scrollToTop({
                            duration: 500,
                            smooth: true,
                            offset: -100,
                        });
                    }, 100);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>I have had the pleasure of working with some amazing clients. Here are some of the companies that I have worked with.</p>
                <div className='clientLogos'>
                    <img src={Walmart} alt='Client1' className='clientLogo' />
                    <img src={Adobe} alt='Client2' className='clientLogo' />
                    <img src={Microsoft} alt='Client3' className='clientLogo' />
                    <img src={Facebook} alt='Client4' className='clientLogo' />
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Have a project in mind? Feel free to reach out to me.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='from_name' placeholder='Name' className='contactInput' />
                    <input type='email' name='from_email' placeholder='Email' className='contactInput' />
                    <textarea placeholder='Message' name='message' rows='3' className='contactInput' />
                    <button type='submit' name='Send' className='contactBtn'>Send</button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/chethankacham/' target='blank'><img src={LinkedIn} alt='linkedin.com/in/chethankacham' className='link' /></a>
                        <a href='https://github.com/ChethanKacham/' target='blank'><img src={GitHub} alt='github.com/ChethanKacham' className='link' /></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
