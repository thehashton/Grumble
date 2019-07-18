import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Login from "../Login";
import "../Login.scss";
const stories = storiesOf("Login", module);
stories.addDecorator(withKnobs);

stories.add("Login", () => {
  return <Login />;
});
