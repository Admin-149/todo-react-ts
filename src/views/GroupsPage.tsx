import React from "react";
import Container from "../components/common/Container";
import Input from "../components/Input";
import Group from "../components/Group";
import { connect } from "react-redux";
import {
  IAppState,
  IEditGroup,
  IAddGroup,
  IRemoveGroup
} from "../store/groups/types";
import { Dispatch } from "redux";
import { addGroup, editGroup, removeGroup } from "../store/groups/actions";
import { IGroup } from "../models/types";

interface IPropsFromState {
  data: IGroup[];
}

interface IPropsFromDispatch {
  addGroup: typeof addGroup;
  editGroup: typeof editGroup;
  removeGroup: typeof removeGroup;
}
type IGroupsProps = IPropsFromState & IPropsFromDispatch;

const GroupsPage: React.FC<IGroupsProps> = ({
  data,
  addGroup,
  editGroup,
  removeGroup
}) => (
  <>
    <Container>
      <Input add={addGroup} />
      {data.map(group => (
        <Group data={group} editGroup={editGroup} removeGroup={removeGroup} />
      ))}
    </Container>
  </>
);

const mapStateToProps = (state: IAppState) => ({
  data: state.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addGroup: (name: IAddGroup) => dispatch(addGroup(name)),
  editGroup: (payload: IEditGroup) => dispatch(editGroup(payload)),
  removeGroup: (payload: number) => dispatch(removeGroup(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsPage);
