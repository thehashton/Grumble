import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../PostCodeChecker.scss";
import { MemoryRouter } from "react-router-dom";

import { PostCodeChecker } from "../PostCodeChecker";
const stories = storiesOf("PostCodeChecker", module);
stories.addDecorator(withKnobs);

storiesOf("PostCodeChecker", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Normal view", () => <PostCodeChecker />);
