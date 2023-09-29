import { render, screen } from '@testing-library/vue';
import RoutinesTable from "@/components/RoutinesTable.vue";
import {ref} from "vue";

describe('Test Routines table Unit Test', () => {
    it('should print table headers ', () => {
        render(RoutinesTable);

        expect(screen.getByText("Start At")).toBeInTheDocument()
        expect(screen.getByText("End At")).toBeInTheDocument()
        expect(screen.getByText("Title")).toBeInTheDocument()
    });

    it('should print each routing as one element in the table', () =>{
        const routines = ref([
            {startAt: '07:00', endAt: '08:00', title: 'Wake up'},
            {startAt: '08:00', endAt: '09:00', title: 'Reading'},
            {}
        ])

        render(RoutinesTable, {
            props: {routines}
        });

        expect(screen.getByText("07:00")).toBeInTheDocument()
        expect(screen.getByText("09:00")).toBeInTheDocument()
        expect(screen.getByText("Wake up")).toBeInTheDocument()
        expect(screen.getByText("Reading")).toBeInTheDocument()
    })
});