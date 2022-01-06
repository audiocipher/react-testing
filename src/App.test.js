import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders learn react link', () => {
    render(<App />);
    // get an element by its text using a regular expression
    const linkElement = screen.getByText(/learn react/i);
    // assertion
    expect(linkElement).toBeInTheDocument();
  });
});
