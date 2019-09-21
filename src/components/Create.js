import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Create extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc:''
        }
    }

    onSubmit = (e) => {
        let{title, desc} = this.state;
        e.preventDefault();
        console.log(title, desc);
    }

    render() {
        let {title, desc} = this.state;
        return (
            <div>
                <Link to='/'>Back</Link>

                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input
                            type='text'
                            id='title'
                            className='form-control'
                            value={title}
                            onChange={e => this.setState({title: e.target.value})} />
                        <label htmlFor='description'>Description</label>
                        <input 
                            type='text' 
                            id='description' 
                            className='form-control'
                            value={desc}
                            onChange={e => this.setState({desc: e.target.value})} />
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        );
    }
}

export default Create;