import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./Skills";

describe('Skills test', () => {
    const skills = [ 'HMTL', 'CSS', 'JavaScript' ];

    test('rendering ul', () => {
        render(<Skills skills={skills}/>);

        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('rendering li', () => {
        render(<Skills skills={skills}/>);

        const listitemElement =  screen.getAllByRole('listitem');
        expect(listitemElement).toHaveLength(skills.length);
    });

    test('rendering login button', () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);

        const loginButtonElement = screen.getByRole('button', {
            name: 'Login'
        });
        expect(loginButtonElement).toBeInTheDocument();
    });

    test('rendering startLearning button', () => {
        render(<Skills skills={skills} />);

        const startLearningButtonElement = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(startLearningButtonElement).not.toBeInTheDocument();
    });

    test('rendering startLearning button after few seconds', async () => {
        render(<Skills skills={skills}/>);

        // screen.debug();
        const startLearningButtonElement = await screen.findByRole('button', {
            name: 'Start learning'
        },
        {
            timeout: 2000
        });
        // screen.debug();
        expect(startLearningButtonElement).toBeInTheDocument();
    });

})