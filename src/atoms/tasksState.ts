import {atom} from "recoil";
import {Task} from "../type";

export const tasksState = atom<Task[]>({
    key: 'tasksState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
