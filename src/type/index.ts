export interface Task {
    id: string;
    content: string;
    completed: boolean;
}

export enum TabType {
    All,
    Active,
    Completed,
}
