import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../header.scss";
import Header from "../Header";
import { MemoryRouter } from "react-router-dom";
const stories = storiesOf("Header", module);
stories.addDecorator(withKnobs);

storiesOf("Header", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Normal view", () => <Header />);
