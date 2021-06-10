import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
import News from './components/News'
import Search from './components/Search/Search'
import NewsDetails from './components/NewsDetails/NewsDetails'
import Categories from './components/Categories/Categories'
import CategoryTopNews from './components/Categories/CategoryTopNews'
import NotFound from './components/NotFound'
import CountryNav from './components/CountryNav'
import {Country} from './types';
import {countries, CountryContext} from './contexts/CountryContext'

export default function App() {
    const [country, setCountry] = useState<Country>(countries.gb);

    return (
        <Router>
            <div className="ui container">
                <div className="ui top attached menu" role="navigation" aria-label="Main navigation">
                    <NavLink to="/news" className="item" activeClassName="active">Top News</NavLink>
                    <NavLink to="/categories" className="item">Categories</NavLink>
                    <NavLink to="/search" className="item">Search</NavLink>

                    <div className="right menu">
                        <CountryNav onCountryChanged={setCountry} selectedCountry={country.countryCode}/>
                    </div>
                </div>

                <div className="ui bottom attached segment">
                    <Switch>
                        <Redirect exact from="/" to="/news"/>
                        <Route exact path="/news">
                            <CountryContext.Provider value={country}>
                                <News/>
                            </CountryContext.Provider>
                        </Route>
                        <Route path="/news/:id">
                            <NewsDetails/>
                        </Route>
                        <Route exact path="/categories">
                            <CountryContext.Provider value={country}>
                                <Categories/>
                            </CountryContext.Provider>
                        </Route>
                        <Route path="/categories/:category">
                            <CountryContext.Provider value={country}>
                                <CategoryTopNews/>
                            </CountryContext.Provider>
                        </Route>
                        <Route path="/search">
                            <CountryContext.Provider value={country}>
                                <Search/>
                            </CountryContext.Provider>
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