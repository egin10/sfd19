import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
    let {id, title, desc} = props;

    return(
        <Link to={`/detail/${id}`} className="card mb-2 mr-2 text-dark">
            <div className="card-body">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

export default Card;