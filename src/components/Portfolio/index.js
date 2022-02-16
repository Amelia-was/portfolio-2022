import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [apps] = useState([
        {
            name: 'BookEnd',
            altURL: 'http://bookend-recommendations.herokuapp.com/',
            altRepo: 'https://github.com/project3UOT/bookend',
            tech: ['html', 'css', 'js', 'node', 'graphql', 'mongo', 'bulma', 'sass'],
            featured: true
        },
        {
            name: 'Budget Tracker',
            altURL: 'https://blooming-tor-59716.herokuapp.com/',
            tech: ['html', 'css', 'js', 'node', 'mongo']
        },
        {
            name: 'Swatch',
            altRepo: 'https://github.com/Project-Two-Group-Nine/SWATCH',
            altURL: 'https://swatch-makeup-reviews.herokuapp.com/',
            tech: ['html', 'css', 'js', 'node', 'mysql',  'hbrs']
        },
        {
            name: 'Tech Blog',
            altURL: 'https://sleepy-scrubland-82236.herokuapp.com/',
            tech: ['html', 'css', 'js', 'node', 'mysql', 'hbrs']
        },
        {
            name: 'Team Profile Generator',
            tech: ['html', 'css', 'js', 'node']
        },
        {
            name: 'Note Taker',
            altURL: 'https://polar-sea-04536.herokuapp.com/',
            tech: ['html', 'css', 'js', 'node', 'bs']

        },
        {
            name: 'Weather Dashboard',
            tech: ['html', 'css', 'js', 'jq']
        },
        {
            name: 'Work Day Schedule',
            tech: ['html', 'css', 'js']
        },
        {
            name: 'Taskmaster Pro',
            tech: ['html', 'css', 'js', 'bs']
        }
    ])

    return (
        <section className='portfolio-container justify-center'>
            {apps.map((app, i) =>
                <Project name={app.name} index={(apps.length - i - 1)} altRepo={app.altRepo} altURL={app.altURL} featured={app.featured} tech={app.tech} />
            )}
        </section>
    );
};

export default Portfolio;