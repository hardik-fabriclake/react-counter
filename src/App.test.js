import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Upgraded dependencies
// Remove any outdated dependencies and install the latest versions of the libraries used in the project

/*
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "devDependencies": {
    "@testing-library/react": "^12.1.2",
    "@testing-library/jest-dom": "^5.14.1"
  }
*/