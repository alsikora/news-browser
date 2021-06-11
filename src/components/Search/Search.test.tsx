import React from 'react';
import {render, screen, fireEvent,} from '@testing-library/react';
import Search from './Search';

test('renders search page', () => {
    render(<Search/>);
    screen.getByText('Search top news from Great Britain by term:')

    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {value: 'Test search term'}})
    expect(screen.getByDisplayValue('Test search term')).toBe(input)
});
