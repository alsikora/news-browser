import React from 'react';
import {MemoryRouter} from 'react-router-dom'
import {render, screen} from '@testing-library/react';
import NewsList from './NewsList';

const articles = [
    {
        source: {id: '123', name: 'BBC'},
        author: 'Tom',
        title: 'Title ABC',
        url: 'www.test.com',
        urlToImage: 'test.jpg',
        content: 'Very interesting content',
        description: 'xyz',
        publishedAt: '2001'
    }, {
        source: {id: '999', name: 'BBC'},
        author: 'Richard',
        title: 'Sunny holidays',
        url: 'www.testPage.com',
        urlToImage: '',
        content: 'Very interesting content',
        description: 'xyz',
        publishedAt: '2001'
    }

]

test('renders news list loading', () => {
    render(<NewsList articles={[]} backToPath='/test' loading={true}/>)
    expect(screen.getByText('Loading').parentElement).toHaveClass('active')
});

test('renders news list not loading', () => {
    render(<NewsList articles={[]} backToPath='/test' loading={false}/>)
    expect(screen.getByText('Loading').parentElement).not.toHaveClass('active')
});

test('renders news list articles', () => {
    render(<MemoryRouter><NewsList articles={articles} backToPath='/test' loading={false}/></MemoryRouter>)
    expect(screen.getAllByRole('img').length).toBe(1)
    expect(screen.getAllByRole('presentation').length).toBe(1)

    const links = screen.getAllByRole('link')
    expect(links.length).toBe(2)
    expect(links[0]).toHaveAttribute('href', '/news/0')
    expect(links[1]).toHaveAttribute('href', '/news/1')
});
