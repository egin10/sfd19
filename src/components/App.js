import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import Header from './Header';
import Create from './Create';

class App extends Component {
    render(){
        return(
            <div className="p-5">
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={List} />
                        <Route path='/create' exact component={Create} />
                        <Route path='/detail/:id' component={Detail} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;