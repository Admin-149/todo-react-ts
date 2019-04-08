import { IGroupsState } from "./types";

const initialState: IGroupsState = {
  data: [],
  errors: null,
  loading: false
};

export const reducer = (state = initialState, action: any): IGroupsState => {
  switch (action.type) {
    default:
      return state;
  }
};
