import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe('Application', () => {
    test('renders all components', () => {
        render(<Application />);

        const detailElement = screen.getByRole('heading', {
            level: 1,
            name: 'Details'
        });
        expect(detailElement).toBeInTheDocument();

        const formElement = screen.getByRole('heading', {
            level: 2,
            name: 'Form'
        });
        expect(formElement).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are required', {
            selector: "p"
        });
        expect(paragraphElement).toBeInTheDocument();

        const paragraphElement2 = screen.getByText('all fields are required', {
            exact: false,
            selector: "div"
        });
        expect(paragraphElement2).toBeInTheDocument();

        const paragraphElement3 = screen.getByText(/required/, {
            selector: "div"
        });
        expect(paragraphElement3).toBeInTheDocument();

        const imageElement = screen.getByAltText(/camera/);
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: 'Name:'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText('Name:', {
            selector: "input"
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText('Enter your name');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue('Rubhini');
        expect(nameElement4).toBeInTheDocument();

        const aboutElement = screen.getByRole('textbox', {
            name: 'About:'
        });
        expect(aboutElement).toBeInTheDocument();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox', {
            checked: false
        });
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions');
        expect(termsElement2).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
})