import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            books : [
                {id: 1, title: "Judul 1", desc: "Deskripsi 1"},
                {id: 2, title: "Judul 2", desc: "Deskripsi 2"},
                {id: 3, title: "Judul 3", desc: "Deskripsi 3"},
                {id: 4, title: "Judul 4", desc: "Deskripsi 4"}
            ]
        }
    }

    createBook = () =>{
        let books = this.state.books;
        books.push({
            id: books.length + 1,
            title: `Judul ${books.length + 1}`,
            desc: `Deskripsi ${books.length + 1}`
        });
        this.setState({books});
    }

    render(){
        return(
            <div className="d-flex flex-wrap align-items-center">
                {
                    this.state.books.map(book =>
                        <Card key={book.id} id={book.id} title={book.title} desc={book.desc} />
                    )
                }
                <button onClick={this.createBook} className="btn btn-primary">Create Book</button>
            </div>
        );
    }
}

export default List;