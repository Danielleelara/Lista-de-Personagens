import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Listar os Personagens/i);
  expect(linkElement).toBeInTheDocument();
});
