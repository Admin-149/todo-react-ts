import {
  IAppState,
  IAppActionTypes,
  ADD_GROUP,
  EDIT_GROUP,
  REMOVE_GROUP
} from "./types";

const initialState: IAppState = {
  data: [
    {
      id: 1,
      name: "Work",
      tasks: [
        { id: 10, name: "Finish project", completed: false },
        { id: 20, name: "Create presentation", completed: true }
      ]
    }
  ]
};

export const reducer = (
  state = initialState,
  action: IAppActionTypes
): IAppState => {
  switch (action.type) {
    case ADD_GROUP:
      return {
        ...state,
        data: [
          ...state.data,
          { id: Date.now(), name: action.payload, tasks: [] }
        ]
      };
    case EDIT_GROUP:
      return {
        ...state,
        data: [
          ...state.data.map(group => {
            if (group.id === action.payload.id) {
              group.name = action.payload.name;
            }
            return group;
          })
        ]
      };
    case REMOVE_GROUP:
      return {
        ...state,
        data: state.data.filter(group => group.id !== action.payload)
      };
    default:
      return state;
  }
};
