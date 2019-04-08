import { Group } from "./../../models/types";

export interface IGroupsState {
  data: [Group] | [];
  errors: null | string;
  loading: Boolean;
}
