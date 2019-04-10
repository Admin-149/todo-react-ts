import {
  ADD_GROUP,
  EDIT_GROUP,
  REMOVE_GROUP,
  IEditGroup,
  IRemoveGroup,
  IAddGroup
} from "./types";

export const addGroup = (payload: IAddGroup) => ({ type: ADD_GROUP, payload });
export const editGroup = (payload: IEditGroup) => ({
  type: EDIT_GROUP,
  payload
});
export const removeGroup = (payload: number) => ({
  type: REMOVE_GROUP,
  payload
});
