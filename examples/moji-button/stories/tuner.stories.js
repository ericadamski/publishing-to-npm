import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Tuner from "../index";

storiesOf("Tuner", module).add("Default", () => (
  <Tuner onClick={action("Click")}>Click Me</Tuner>
));
