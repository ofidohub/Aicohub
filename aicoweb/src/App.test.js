// App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders without crashing', () => {
    render(React.createElement(App, null));
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
