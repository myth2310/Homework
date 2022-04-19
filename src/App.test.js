import { render, screen } from '@testing-library/react';
import App from './App';
import { Sample as NetworkCallSample } from "./pages/search/index";
import Card from '../src/components/table/table-body/index'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders PlaceholderText', () => {
  render(<NetworkCallSample />);
  const inputNode = screen.getByPlaceholderText('Searce')

  expect(inputNode).toBeInTheDocument();
});

test('renders button', () => {
  render(<Card />);
  const ButtonSelect = screen.getByText('Select');
  const ButtonDeselect = screen.getByText('Deselect');

  expect(ButtonSelect).toBeInTheDocument();
  expect(ButtonDeselect).toBeInTheDocument();
});
