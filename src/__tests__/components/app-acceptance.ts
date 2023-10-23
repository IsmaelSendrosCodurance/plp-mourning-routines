import { render, screen} from "@testing-library/vue";
import userEvent from '@testing-library/user-event'
import App from "@/App.vue";

describe('Routines App Acceptance Test', () => {
    // setup / tear down
    it('should register a new routine to be done', async () => {
        render(App);

        await userEvent.type(screen.getByTestId('start-date'), '09:00');
        await userEvent.type(screen.getByTestId('end-date'), '10:30');
        await userEvent.type(screen.getByTestId('routine'), 'Wake up');

        await userEvent.click(screen.getByTestId('store-routine'));

        expect(screen.getByText("09:00")).toBeInTheDocument()
        expect(screen.getByText("10:30")).toBeInTheDocument()
        expect(screen.getByText("Wake up")).toBeInTheDocument()
    });
})