import { IGroup } from "./../../models/types";

export const ADD_GROUP = "@@groups/ADD_GROUP";
export const EDIT_GROUP = "@@groups/EDIT_GROUP";
export const REMOVE_GROUP = "@@groups/REMOVE_GROUP";

export interface IAppState {
  data: IGroup[];
}

export interface IAddGroup {
  type: typeof ADD_GROUP;
  payload: string;
}

export interface IEditGroup {
  type: typeof EDIT_GROUP;
  payload: IGroup;
}

export interface IRemoveGroup {
  type: typeof REMOVE_GROUP;
  payload: number;
}

export type IAppActionTypes = IAddGroup | IEditGroup | IRemoveGroup;
