import React from 'react';
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <ul className='flex row justify-center'>
                <li>
                    <a href='https://www.linkedin.com/in/amelia-wasowski/' target='_blank' rel='noreferrer'>
                        <BsLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://www.github.com/amelia-was/' target='_blank' rel='noreferrer'>
                        <BsGithub />
                    </a>
                </li>
                <li>
                    <a href='mailto:amelia.wasow@gmail.com'>
                        <BsFillEnvelopeFill />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;