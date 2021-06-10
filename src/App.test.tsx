import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders top navigation', () => {
    render(<App />);
    const navElement = screen.queryByRole('navigation')

    expect(navElement).toBeInTheDocument();
    expect(navElement?.childElementCount).toEqual(4);
    expect(navElement?.firstChild?.textContent).toEqual('Top News')
    expect(navElement?.childNodes[1]?.textContent).toEqual('Categories')
    expect(navElement?.childNodes[2]?.textContent).toEqual('Search')
});
