import React from 'react';
import {Link} from 'react-router-dom';

const Detail = (props) => {
    let {id} = props.match.params;

    return(
        <div>
            <h4>Judul {id}</h4>
            <p>Deskripsi dari book ke-{id}</p>

            <Link to={'/'} className="btn btn-outline-secondary br-2" >
                Back
            </Link>
        </div>
    )
}

export default Detail;