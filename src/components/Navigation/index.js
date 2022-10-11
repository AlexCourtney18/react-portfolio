import React from 'react';



function Nav(props) {

    const {
        page = [],
        setPageSelected,
        pageSelected
    } = props;

    const active = () => {
        setPageSelected(current => !current);
    }

    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2' style={{color: pageSelected === 'About' ? 'var(--tertiary)' : ''}}>
                    <span onClick={() => setPageSelected('About')}>
                        About Me
                    </span>
                </li>
                <li className='mx-2' style={{color: pageSelected === 'Contact' ? 'var(--tertiary)' : ''}}>
                    <span onClick={() => setPageSelected('Contact')}>
                        Contact
                    </span>
                </li>
                <li className='mx-2' style={{color: pageSelected === 'Portfolio' ? 'var(--tertiary)' : ''}}>
                    <span onClick={() => setPageSelected('Portfolio')}>
                        Portfolio
                    </span>
                </li>
                <li className='mx-2' style={{color: pageSelected === 'Resume' ? 'var(--tertiary)' : ''}}>
                    <span onClick={() => setPageSelected('Resume')}>
                        Resume
                    </span>
                </li>
            </ul>
        </nav>
    );
}




export default Nav;






// {page.map((page) => (
//     <li className={`mx-1 ${currentPage.name === page.name && !contactSelected && 'navActive'}`}
//         key={page.name}>
//         <span onClick={() => {
//             setCurrentPage(page);
//             setContactSelected(false);
//         }}
//         >
//             {capitalizeFirstLetter(page.name)}
//         </span>
//     </li>