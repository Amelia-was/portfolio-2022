import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [apps] = useState([
        {
            name: 'BookEnd',
            altURL: 'http://bookend-recommendations.herokuapp.com/',
            altRepo: 'https://github.com/project3UOT/bookend',
            featured: true
        },
        {
            name: 'Budget Tracker',
            altURL: 'https://blooming-tor-59716.herokuapp.com/'
        },
        {
            name: 'Swatch',
            altRepo: 'https://github.com/Project-Two-Group-Nine/SWATCH',
            altURL: 'https://swatch-makeup-reviews.herokuapp.com/'
        },
        {
            name: 'Tech Blog',
            altURL: 'https://sleepy-scrubland-82236.herokuapp.com/'
        },
        {
            name: 'Team Profile Generator'
        },
        {
            name: 'Note Taker',
            altURL: 'https://polar-sea-04536.herokuapp.com/'

        },
        {
            name: 'Weather Dashboard'
        },
        {
            name: 'Work Day Schedule'
        },
        {
            name: 'Taskmaster Pro'
        }
    ])

    return (
        <section className='portfolio-container justify-center'>
            {apps.map((app, i) =>
                <Project name={app.name} index={(apps.length - i - 1)} altRepo={app.altRepo} altURL={app.altURL} notDeployed={app.notDeployed} featured={app.featured} />
            )}
        </section>
    );
};

export default Portfolio;