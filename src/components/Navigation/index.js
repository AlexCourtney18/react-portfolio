import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {

    const {
        page = [],
        setCurrentPage,
        currentPage,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#about' onClick={() => setContactSelected(false)}>
                        About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>
                
                ))
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