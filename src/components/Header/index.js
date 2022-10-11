import React from 'react';
import Nav from '../Navigation';


function Header(props) {

    const {
        page = [],
        setPageSelected,
        pageSelected
    } = props;

    return (
        <header className='flex-row px-1' style={{ background: "#8DA9c4" }}>
            <h1>
                <a style={{ color: "#134074" }} href="/">Alex Courtney</a>
            </h1>
            <h2>
                <Nav setPageSelected={setPageSelected} pageSelected={pageSelected}></Nav>
            </h2>
        </header>
    )
}



export default Header;