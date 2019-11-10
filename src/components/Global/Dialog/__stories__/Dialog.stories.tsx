import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Dialog from "../Dialog";
import AddEatery from "../../../../RootComponents/AddEatery";
const stories = storiesOf("Dialog", module);
stories.addDecorator(withKnobs);

stories.add("Dialog/Modal", () => {
  return (
    <Dialog>
      <h1>lol</h1>
    </Dialog>
  );
});
