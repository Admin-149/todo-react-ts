import * as React from "react";

interface IInputProps {
  add: Function;
}

const Input: React.FC<IInputProps> = ({ add }) => {
  const [name, setName] = React.useState("");

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    add(name);
    setName("");
  };

  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setName(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className="form-control"
      />
    </form>
  );
};

export default Input;
