import React from 'react'
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';

interface Props { }

const Footer = (props: React.HTMLAttributes<HTMLElement>) => {
    return (
        <footer {...props}>
            <p>Alexander Casas &copy; 2022</p>
            <a className='hover:rotate-12' target='_blank' href='https://www.linkedin.com/in/alexnqn/' rel='noopener noreferrer'><GrLinkedin /></a>
            <a className='hover:rotate-12' target='_blank' href='https://alexdeveloper.me/' rel='noopener noreferrer'><BsFillBriefcaseFill /></a>
        </footer>
    )
}

export default Footer