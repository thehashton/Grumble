import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import "../Contact.scss";
import Contact from "../Contact";
const stories = storiesOf("Contact", module);
stories.addDecorator(withKnobs);

stories.add("Contact page", () => {
  return <Contact />;
});
