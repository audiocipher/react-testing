// write tests using the three A's
// Arrange - set up the test data (render the component), test conditions, and test environment
// Act - Execute the logic that should be tested (execute the function under test)
// Assert - Compare execution results with expected results (to see if our expectations were met)

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// defining a test suite
describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...

    // Assert
    const helloWorldElement = screen.getByText('hello world', { exact: false }); // exact: false means case-insensitive and will match substrings
    expect(helloWorldElement).toBeInTheDocument();
  });

  // can be thought of as an integration test, since we are also testing the Output.js component
  test(`renders "It's good to see you!" if the button was NOT clicked`, () => {
    render(<Greeting />);

    const outputElement = screen.getByText(`It's good to see you!`, {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button'); // only works because there's only one button on the screen
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  test(`does not render "It's good to see you!" if the button was NOT clicked`, () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button'); // only works because there's only one button on the screen
    userEvent.click(buttonElement);

    // Assert
    // use queryByText because it returns null if it doesn't find the text, whereas getByText throws and error
    const outputElement = screen.queryByText(`It's good to see you!`, {
      exact: true,
    });
    // expect(outputElement).not.toBeInTheDocument();
    expect(outputElement).toBeNull();
  });
});
