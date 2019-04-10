export type ITask = {
  id: number;
  name: string;
  completed: Boolean;
};

export type IGroup = {
  id: number;
  name: string;
  tasks: ITask[];
};
