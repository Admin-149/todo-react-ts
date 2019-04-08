import React from "react";
import Container from "../components/common/Container";
import Input from "../components/Input";
import Group from "../components/Group";
import Back from "../components/common/Back";

const GroupsPage = () => (
  <>
    <Container>
      <h1>GroupsPage</h1>
      <Input />
      <Group name="Test" />
      <Group name="Work" />
      <Group name="Hobby" />
    </Container>
  </>
);

export default GroupsPage;
