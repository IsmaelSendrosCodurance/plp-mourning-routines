import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event'
import RoutinesTable from "@/components/RoutinesTable.vue";

describe('Test Routines table Unit Test', () => {
    describe('renders the ui components', () => {
        it('should render start date for a routine', () => {
            const { getByTestId } = render(RoutinesTable);
            expect(getByTestId('start-date')).toBeInTheDocument();
        });

        it('should render end date for a routine', () => {
            const { getByTestId } = render(RoutinesTable);
            expect(getByTestId('end-date')).toBeInTheDocument();
        });

        it('should render a title for a routine', () => {
            const { getByTestId } = render(RoutinesTable);
            expect(getByTestId('routine')).toBeInTheDocument();
        });

        it('should render a button for saving routines', () => {
            const { getByTestId } = render(RoutinesTable);
            expect(getByTestId('store-routine')).toBeInTheDocument();
        });
    });

    it('should emit a new routine when button is clicked', async () => {
        const { getByTestId, emitted } = render(RoutinesTable);

        const startInput = getByTestId('start-date') as HTMLInputElement
        await userEvent.type(startInput,'07:00')
        const endInput = getByTestId('end-date') as HTMLInputElement
        await userEvent.type(endInput,'08:00')
        const titleInput = getByTestId('routine') as HTMLInputElement
        await userEvent.type(titleInput,'wake up')

        await userEvent.click(getByTestId('store-routine'));

        const [[newRoutineCreated]] = emitted('newRoutine') as Array<Array<Object>>
        expect(newRoutineCreated).toEqual({'start-date': '07:00',
            'end-date': '08:00',
            'title': 'wake up' })
    });

    it('should print table headers ', () => {
        render(RoutinesTable);

        expect(screen.getByText("Start At")).toBeInTheDocument()
        expect(screen.getByText("End At")).toBeInTheDocument()
        expect(screen.getByText("Title")).toBeInTheDocument()
    });

    it('should print each routing as one element in the table', () =>{
        const routines = [
            {startAt: '07:00', endAt: '08:00', title: 'Wake up'},
            {startAt: '08:00', endAt: '09:00', title: 'Reading'},
            {}
        ]

        render(RoutinesTable, {
            props: {routines}
        });

        expect(screen.getByText("07:00")).toBeInTheDocument()
        expect(screen.getByText("09:00")).toBeInTheDocument()
        expect(screen.getByText("Wake up")).toBeInTheDocument()
        expect(screen.getByText("Reading")).toBeInTheDocument()
    })
});