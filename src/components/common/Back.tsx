import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IBackProps {
  to: string;
}

const style = {
  container: {
    position: "absolute" as "absolute",
    margin: "10px"
  },
  link: {
    textDecoration: "none" as "none"
  }
};

const Back: React.FC<IBackProps> = ({ to }) => (
  <div style={style.container}>
    <Link style={style.link} to={to}>
      <button className="btn btn-primary">
        <FontAwesomeIcon icon="arrow-left" />
      </button>
    </Link>
  </div>
);

export default Back;
