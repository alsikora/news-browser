import React from 'react'

export const countries = {
    gb: {
        countryCode: 'gb',
        name: 'Great Britain'
    },
    us: {
        countryCode: 'us',
        name: 'United States'
    }
}

export const CountryContext = React.createContext(countries.gb);