import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../EateryItem.scss";
import { EateryItem } from "../EateryItem";
const stories = storiesOf("EateryItem", module);
stories.addDecorator(withKnobs);

stories.add("EateryItem", () => {
  return (
    <EateryItem
      id={"12345"}
      name={"Bunks"}
      address={"123 Fake address Lane"}
      foodType={"Chicken"}
    />
  );
});
