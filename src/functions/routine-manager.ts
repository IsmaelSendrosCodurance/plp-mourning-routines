import type {Routine} from "@/model/types";

export interface RoutineManager{
    routines: Array<Routine>
    getRoutines():Array<Routine>
}

