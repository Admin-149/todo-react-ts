export type Task = {
  id: number;
  name: string;
  completed: Boolean;
};

export type Group = {
  id: number;
  name: string;
  tasks: [Task];
};
