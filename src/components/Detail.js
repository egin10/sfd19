import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc: ''
        }
    }

    componentDidMount(){
        document.title = "Detail | SFD2019";
        this.getData();
    }

    getData = async () => {
        const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`);
        console.log(todo.data);
        this.setState({
            title: todo.data.title,
            desc: todo.data.completed.toString()
        })
    }

    render(){
        let {title, desc} = this.state;
        return(
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>
    
                <Link to={'/'} className="btn btn-outline-secondary br-2" >
                    Back
                </Link>
            </div>
        )
    }
}

export default Detail;