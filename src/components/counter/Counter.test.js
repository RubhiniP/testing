import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from '@testing-library/user-event';

describe('Counter test', () => {

    test('render correctly', () => {
        render(<Counter count={0} />);

        const headerElement = screen.getByRole('heading', {
            name: 'Counter example - Mocking functions',
            level: 2
        });
        expect(headerElement).toBeInTheDocument();
    });

    test('click handlers are called', async () => {
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();

        render(<Counter count={0} 
        incrementCount={incrementHandler}
        decrementCount={decrementHandler}
        />)

        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement'
        });

        await user.click(incrementButton);
        await user.click(decrementButton);

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})