import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "../Button";
import "../button.scss";
const stories = storiesOf("Dialog", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => {
  return (
    <Button
      className={"lol"}
      buttonText={"btn"}
      onClick={console.log("button")}
    >
      test
    </Button>
  );
});
