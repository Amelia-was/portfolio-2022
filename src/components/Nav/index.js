import React from 'react';

function Nav(props) {
    const { navLinks, currentPage, setCurrentPage } = props;

    return (
       <nav>
           <ul className='flex row'>
                {navLinks.map(link => (
                    <li 
                        key={link}
                        className={`${currentPage === link && 'navActive'}`}>
                        <h2
                            onClick={() => {
                                setCurrentPage(link)
                            }}>{link}</h2>
                    </li>
                ))}
           </ul>
       </nav>
    );
};

export default Nav;