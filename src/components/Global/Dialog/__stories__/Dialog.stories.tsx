import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Dialog from "../Dialog";
const stories = storiesOf("Dialog", module);
stories.addDecorator(withKnobs);

stories.add("Dialog/Modal", () => {
  return <Dialog onClick={console.log("Dialog in Storybook")}>Dialog</Dialog>;
});
