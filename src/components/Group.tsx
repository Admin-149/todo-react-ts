import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { IGroup } from "../models/types";
import Input from "./Input";
import { removeGroup } from "../store/groups/actions";

interface IGroupProps {
  data: IGroup;
  editGroup: Function;
  removeGroup: Function;
}

const style = {
  container: {
    margin: "10px 0",
    textAlign: "left" as "left",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    textDecoration: "none" as "none",
    color: "inherit"
  },
  controlButtons: {
    display: "flex"
  },
  name: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "1.3rem"
  }
};

const Group: React.FC<IGroupProps> = ({ data, editGroup, removeGroup }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [name, setName] = React.useState(data.name);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEdit(false);
    editGroup({ id: data.id, name });
  };

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const toggleIsEdit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isEdit) {
      editGroup({ id: data.id, name });
    }
    setIsEdit(!isEdit);
  };

  const handleRemove = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeGroup(data.id);
  };

  return (
    <Link
      style={style.link}
      to={`/${data.name}`}
      onClick={e => (isEdit ? e.preventDefault() : null)}
    >
      <div style={style.container} className="btn btn-primary btn-block">
        {isEdit ? (
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={name}
              className="form-control"
            />
          </form>
        ) : (
          <div style={style.name}>{data.name}</div>
        )}
        <div style={style.controlButtons}>
          <button className="btn btn-primary" onClick={toggleIsEdit}>
            <FontAwesomeIcon icon="edit" />
          </button>
          <button className="btn btn-primary" onClick={handleRemove}>
            <FontAwesomeIcon icon="times" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Group;
