import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import '!style-loader!css-loader!sass-loader!../src/scss/global.scss';
import Dialog from '../src/components/Global/Dialog';

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    < Button >
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button >
  ));

storiesOf("Dialog")
  .add("with some emoji", () => (
    <Dialog>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Dialog>
  ));
