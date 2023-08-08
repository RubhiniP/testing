import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Counter2 from "./Counter2";
import userEvent from "@testing-library/user-event";

describe('Counter2 test User event', () => {
    test('renders correctly', () => {
        render(<Counter2 />);
        
        const countElement = screen.getByRole('heading', {
            level: 2
        });
        expect(countElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        });
        expect(buttonElement).toBeInTheDocument();

        const inputElement = screen.getByRole('spinbutton');
        expect(inputElement).toBeInTheDocument();

        const amountElement = screen.getByRole('button', {
            name: 'Set'
        });
        expect(amountElement).toBeInTheDocument();

        const showElement = screen.getByRole('button', {
            name: 'Show me'
        });
        expect(showElement).toBeInTheDocument();

        const imageElement = screen.queryByAltText('count');
        expect(imageElement).not.toBeInTheDocument();
    });

    test('count renders 0 initially', () => {
        render(<Counter2 />);

        const countElement = screen.getByRole('heading', {
            level: 2
        });
        expect(countElement).toHaveTextContent('0');
    });

    test('count is incremented to 1 when clicked', async () => {
        render(<Counter2 />);

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        });

        await act(() => userEvent.click(buttonElement))

        const countElement = screen.getByRole('heading', {
            level: 2
        });
        expect(countElement).toHaveTextContent('1');

    });

    test('count is incremented to 2 when clicked twice', async () => {
        render(<Counter2 />);

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        });

        await act(() => userEvent.click(buttonElement));
        act(() => fireEvent.click(buttonElement));
        
        const countElement = screen.getByRole('heading', {
            level: 2
        });
        expect(countElement).toHaveTextContent('2');
    });

    test('input element initially has value 1', () => {
        render(<Counter2 />);

        const inputElement = screen.getByRole('spinbutton');
        expect(inputElement).toHaveValue(1);
    });

    test('count element have value of 10 after clicking set button', async () => {

        userEvent.setup();
        render(<Counter2 />);

        const inputElement = screen.getByRole('spinbutton');
        await act(() => userEvent.clear(inputElement));
        await act(() => userEvent.type(inputElement, "10"));
        expect(inputElement).toHaveValue(10);
        const amountElement = screen.getByRole('button', {
            name: 'Set'
        });
        await act(() => userEvent.click(amountElement));
        const countElement = screen.getByRole('heading', {
            level: 2
        });
        expect(countElement).toHaveTextContent('10');
    })

    test('elements are focused in right order', async () => {
        userEvent.setup();
        render(<Counter2 />);

        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        await userEvent.tab();
        expect(incrementButton).toHaveFocus();
        const inputElement = screen.getByRole('spinbutton');
        await userEvent.tab();
        expect(inputElement).toHaveFocus();
        const amountButton = screen.getByRole('button', {
            name: 'Set'
        });
        await userEvent.tab();
        expect(amountButton).toHaveFocus();
    })

    test('image renders on dblclick', async () => {
        render(<Counter2 />);

        const showElement = screen.getByRole('button', {
            name: 'Show me'
        });
        await act(() => userEvent.dblClick(showElement));

        waitFor(() => {
            const imageElement = screen.getByAltText('count');
            expect(imageElement).toBeInTheDocument()
        }) 
    });

    
})