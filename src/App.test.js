import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Hero from './components/Hero';

test('Renders the Hero heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByText("Reserve table");
    fireEvent.click(reserveButton);
});

