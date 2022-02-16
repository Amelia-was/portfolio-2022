import React from 'react';
import { toURL } from '../../utils/helpers';

function Project({ name, altURL, altRepo, featured, index }) {
    return (
        <div className={(featured && `featured`) || `portfolio-img-container`}>

            <div className='screen flex justify-center align-center'>
                <h3 className='portfolio-img-title'>{name}</h3>
            </div>
            <div className='link-container flex justify-center align-center'>
                <a
                    className='portfolio-link'
                    target='_blank'
                    rel='noreferrer'
                    href={altRepo || `https://github.com/amelia-was/${toURL(name)}`}>
                    github
                </a>
                <a
                    className='portfolio-link'
                    target='_blank'
                    rel='noreferrer'
                    href={altURL || `https://amelia-was.github.io/${toURL(name)}`}>
                    link
                </a>
            </div>
            <img
                className='portfolio-img'
                src={require(`../../assets/imgs/apps/app-${index}.png`)}
                alt={`Screenshot of ${name}`} />
        </div>
    );
};

export default Project;