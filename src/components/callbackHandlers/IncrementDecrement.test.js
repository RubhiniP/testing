import { render, screen } from "@testing-library/react";
import IncrementDecrement from "./IncrementDecrement";
import userEvent from "@testing-library/user-event";

describe('IncrementDecrement', () => {
    test('renders correctly', () => {
        render(<IncrementDecrement count={0}/>);
        const headingElement = screen.getByRole('heading', {
            level: 2
        });
        expect(headingElement).toBeInTheDocument();
    });

    test('callback handlers are called', async () => {
        userEvent.setup();
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(<IncrementDecrement 
                count={0}
                incrementHandler={incrementHandler}
                decrementHandler={decrementHandler}
                />);
        
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement'
        });
        await userEvent.click(incrementButton);
        await userEvent.click(decrementButton);

        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    });
})