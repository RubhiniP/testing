import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greet from "./Greet";

describe('Greet test', () => {
    test("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();

        const listboxElement = screen.getByRole('listbox');
        expect(listboxElement).toBeInTheDocument();
    });

    test("select dropdown allows multiple selections", async () => {
        userEvent.setup();
        render(<Greet />);
        const listboxElement = screen.getByRole('listbox');
        await userEvent.selectOptions(listboxElement, ['AU', 'IN']);
        expect(screen.getByRole('option', {
            name: 'Australia'
        }).selected).toBe(true);
        expect(screen.getByRole('option', {
            name: 'India'
        }).selected).toBe(true);
        expect(screen.getByRole('option', {
            name: 'United States'
        }).selected).toBe(false);
    });
})