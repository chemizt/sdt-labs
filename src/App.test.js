import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import'@testing-library/jest-dom/extend-expect'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders query button with correct text', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('query-btn');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Bless me with Wisdom');
});

it('renders correct header text', () => {
  const { getByTestId } = render(<App />);
  const header = getByTestId('header-text');
  expect(header).toHaveTextContent('Wisdom of the Day');
});

it('renders button being enabled', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('query-btn');
  expect(button).toBeEnabled();
});

it('renders button being visible', () => {
  const { getByTestId } = render(<App />);
  const button = getByTestId('query-btn');
  expect(button).toBeVisible();
});