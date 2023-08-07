import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe('Users test', () => {
    test('renders correctly', () => {
        render(<Users />);
        const headingElement = screen.getByRole('heading', {
            level: 2,
            name: 'Users'
        });
        expect(headingElement).toBeInTheDocument();
    })
})