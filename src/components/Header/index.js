import React from 'react';
import Nav from '../Navigation';


function Header(props) {

    const {
        page = [],
        setCurrentPage,
        currentPage,
        contactSelected,
        setContactSelected
    } = props;

    console.log('HEADER props obj:', props);

    return (
        <header className='flex-row px-1' style={{ background: "#8DA9c4" }}>
            <h1 style={{ color: "#0B2545" }}>
                <a href="/">Alex Courtney</a>
            </h1>
            <h2>
                <Nav setContactSelected={setContactSelected} contactSelected={contactSelected}></Nav>
            </h2>
        </header>
    )
}



export default Header;