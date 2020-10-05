import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import FAQ from "../FAQ";
import "../FAQ.scss";
const stories = storiesOf("FAQ", module);
stories.addDecorator(withKnobs);

stories.add("FAQ", () => {
  return <FAQ />;
});
