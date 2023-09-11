import { render, screen } from '@testing-library/vue';
import RoutinesTable from "@/components/RoutinesTable.vue";

describe('Test Routines table contains headers From, To and Description', () => {
    it('should ', () => {
        render(RoutinesTable, {props: {task: 'Learn Vue'}});

        expect(screen.getByText("From")).toBeInTheDocument()
        expect(screen.getByText("To")).toBeInTheDocument()
        expect(screen.getByText("Description")).toBeInTheDocument()
    });
});