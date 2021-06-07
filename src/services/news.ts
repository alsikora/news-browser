import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines',
    headers: {
        'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY,
    },
});

export const getTopNews = (countryCode: string) => newsApi.get('/', {
    params: {country: countryCode}
});