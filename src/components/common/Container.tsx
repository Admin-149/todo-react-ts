import * as React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const style = {
  container: {
    display: "flex",
    justifyContent: "center"
  },
  containerChild: {
    width: "400px",
    textAlign: "center" as "center"
  }
};

const Container: React.FC<IContainerProps> = ({ children }) => (
  <section style={style.container}>
    <div style={style.containerChild}>{children}</div>
  </section>
);

export default Container;
