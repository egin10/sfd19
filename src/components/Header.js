import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="d-flex justify-content-between align-items-center">
            <h4>List Book</h4>
            <Link to='/create' className='btn btn-outline-primary'>Create Book</Link>
        </div>

    )
}

export default Header;