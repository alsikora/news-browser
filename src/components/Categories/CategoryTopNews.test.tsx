import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom'
import {render, screen} from '@testing-library/react';
import CategoryTopNews from './CategoryTopNews';
import {CountryContext} from '../../contexts/CountryContext'

describe('News by category', () => {
    test('renders top news by category "Sports"', () => {
        render(
            <MemoryRouter initialEntries={['/categories/sports']}>
                <Route path='/categories/:category'>
                    <CategoryTopNews/>
                </Route>
            </MemoryRouter>
        )
        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toEqual('Top sports news from Great Britain:')
    });

    test('renders top news by category "Business" with context country "Australia"', () => {
        render(
            <MemoryRouter initialEntries={['/categories/business']}>
                <Route path='/categories/:category'>
                    <CountryContext.Provider value={{countryCode: 'au', name: 'Australia'}}>
                        <CategoryTopNews/>
                    </CountryContext.Provider>
                </Route>
            </MemoryRouter>
        )
        const heading = screen.getByRole('heading')

        expect(heading).toBeInTheDocument()
        expect(heading.textContent).toEqual('Top business news from Australia:')
    });
});
