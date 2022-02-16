import React from 'react';
import { toURL } from '../../utils/helpers';
import { SiHtml5, SiCss3, SiJavascript, SiJquery, SiMysql, SiMongodb, SiGraphql, SiPython, SiFlask, SiNodedotjs, SiHandlebarsdotjs, SiSass, SiBulma, SiBootstrap, SiReact } from "react-icons/si";

function pickIcon(tech) {
    switch(tech) {
        case 'html':
            return <SiHtml5 />;
        case 'css':
            return <SiCss3 />;
        case 'js':
            return <SiJavascript />;
        case 'jq':
            return <SiJquery />;
        case 'pyt':
            return <SiPython />;
        case 'node':
            return <SiNodedotjs />;
        case 'flask':
            return <SiFlask />;
        case 'mysql':
            return <SiMysql />;
        case 'mongo':
            return <SiMongodb />;
        case 'graphql':
            return <SiGraphql />;
        case 'hbrs':
            return <SiHandlebarsdotjs />;
        case 'sass':
            return <SiSass />;
        case 'bulma':
            return <SiBulma />;
        case 'bs':
            return <SiBootstrap />;
        case 'react':
            return <SiReact />;
    }

}

function Project({ name, altURL, altRepo, featured, index, tech }) {
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
                alt={`Screenshot of ${name}`} 
            />
            <div className='project-footer'>
                {tech.map(str => pickIcon(str))}
            </div>
        </div>
    );
};

export default Project;