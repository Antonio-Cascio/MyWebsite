import React from 'react';
import linkedinLogo from '../images/Linked.webp';
import githubLogo from '../images/Github.png';
import phoneLogo from '../images/Phone.png';
import emailLogo from '../images/Gmail.png';

function Contact() {
    return (
        <div>
            <h2>Contact Information</h2>
            <p>I am always looking for new opportunities and collaborations. Feel free to reach out!</p>



            <a 
                href="mailto:antoniocascio06@gmail.com" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={emailLogo} 
                    alt="Email" 
                    className="social-icon"
                />
            </a>

            <a 
                href="tel:201-466-7272" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={phoneLogo} 
                    alt="Phone" 
                    className="social-icon"
                />
            </a>

            <a 
                href="https://linkedin.com/in/antonio-cascio-4713a6327" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={linkedinLogo} 
                    alt="LinkedIn" 
                    className="social-icon"
                />
            </a>
            <a 
                href="https://github.com/Antonio-Cascio" 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img 
                    src={githubLogo} 
                    alt="GitHub" 
                    className="social-icon"
                />
            </a>
        </div>
    );
}

export default Contact;