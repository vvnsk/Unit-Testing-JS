import React from "react";

import { describe } from "riteway";
import render from "riteway/render-component";

import RejectionComponent from "./rejection-component.js";

describe("Rejection Component", async assert => {
  const $ = render(<RejectionComponent />);

  assert({
    given: "No Props",
    should: "Render add question button",
    actual: $(".add-question-button").length,
    expected: 1
  });
});
