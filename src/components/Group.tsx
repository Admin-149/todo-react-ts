import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IGroupProps {
  name: string;
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
    textDecoration: "none" as "none"
  }
};

const Group: React.FC<IGroupProps> = ({ name }) => (
  <Link style={style.link} to={`/${name}`}>
    <div style={style.container} className="btn btn-primary btn-block">
      <span>{name}</span>
      <div>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon="edit" />
        </button>
        <button className="btn btn-primary">
          <FontAwesomeIcon icon="times" />
        </button>
      </div>
    </div>
  </Link>
);

export default Group;
