import type {RoutineManager} from "@/functions/routine-manager"
import type {Routine} from "@/model/types";
// import fs from 'fs';

export class InMemoryRoutineManager implements RoutineManager{
    routines: Array<Routine> = [];
    getRoutines(): Array<Routine> {
        return [];
        // this.routines = <Routine[]>JSON.parse(fs.readFile('@/assets/routines-sample.json'))
        // return this.routines
    }
}