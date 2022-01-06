import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // replacing the fetch function with a mocked version
    // now we are no longer sending a real http request to the server
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    // use "find" queries instead of "get" when doing async operations
    const listItemElements = await screen.findAllByRole(
      'listitem'
      /*{ exact: false },
      { timeout: 1000 }*/
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
