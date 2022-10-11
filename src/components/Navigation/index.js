import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {

    const {
        page = [],
        setPageSelected,
        pageSelected
    } = props;

    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <span onClick={() => setPageSelected('About')}>
                        About Me
                    </span>
                </li>
                <li className={`mx-2 ${pageSelected && 'navActive'}`}>
                    <span onClick={() => setPageSelected('Contact')}>
                        Contact
                    </span>
                </li>
                <li className='mx-2'>
                    <span onClick={() => setPageSelected('Portfolio')}>
                        Portfolio
                    </span>
                </li>
                <li className='mx-2'>
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