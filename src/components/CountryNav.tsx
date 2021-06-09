import React, {FC} from 'react'
import {useRouteMatch} from "react-router-dom";
import {countries} from '../contexts/CountryContext';
import {Country} from '../types'

type CountryNavProps = {
    onCountryChanged: (value: Country) => void;
    selectedCountry: string;
}

const CountryNav: FC<CountryNavProps> = ({onCountryChanged, selectedCountry}) => {
    const newsDetailsPage = useRouteMatch('/news/:id')
    const disabled = newsDetailsPage?.isExact ? ' disabled' : ''

    const getButtons = (): JSX.Element[] => {
        const buttons: JSX.Element[] = [];
        Object.entries(countries).forEach(
            ([key, value]) => (
                buttons.push(<button key={key}
                                     className={`ui button basic${selectedCountry === value.countryCode ? ' active' : ''}${disabled}`}
                                     onClick={() => onCountryChanged(value)}>{value.countryCode}</button>)
            ))
        return buttons;
    }

    return (
        <div className="ui buttons">
            {getButtons()}
        </div>
    )
}

export default CountryNav