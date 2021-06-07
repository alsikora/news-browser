import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
import News from './components/News'
import Search from './components/Search'
import NewsDetails from './components/NewsDetails'
import Categories from './components/Categories'
import NotFound from './components/NotFound'

export default function App() {
    return (
        <Router>
            <div className="ui container">
                <div className="ui top attached menu">
                    <NavLink to="/news" className="item" activeClassName="active">Top News</NavLink>
                    <NavLink to="/categories" className="item">Categories</NavLink>
                    <NavLink to="/search" className="item">Search</NavLink>
                </div>
                <div className="ui bottom attached segment">
                    <Switch>
                        <Redirect exact from="/" to="/news"/>
                        <Route exact path="/news">
                            <News/>
                        </Route>
                        <Route path="/news/:id">
                            <NewsDetails/>
                        </Route>
                        <Route path="/categories">
                            <Categories/>
                        </Route>
                        <Route path="/search">
                            <Search/>
                        </Route>
                        <Route path="/*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}