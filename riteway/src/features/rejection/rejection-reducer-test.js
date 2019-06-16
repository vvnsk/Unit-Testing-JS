import { describe } from "riteway";

import { reducer, addQuestion, getScore } from "./rejection-reducer.js";

describe("reducer", async assert => {
  assert({
    given: "no arguments",
    should: "return a valid initial state",
    actual: reducer(),
    expected: []
  });

  {
    const question = {
      question: "Can I have a raise?",
      askee: "Boss",
      status: "Accepted"
    };

    assert({
      given: "a new question",
      should: "add the question to the state",
      actual: reducer(reducer(), addQuestion(question)),
      expected: [question]
    });
  }
});

describe("reducer: getScore", async assert => {
  const actions = [
    addQuestion({
      question: "Can I have a raise?",
      askee: "Boss",
      status: "Accepted"
    }),
    addQuestion({
      question: "Can buy me a burget?",
      askee: "Coworker",
      status: "Rejected"
    }),
    addQuestion({
      question: "Can I take some time to grab my wallet?",
      askee: "Boss",
      status: "Accepted"
    })
  ];
  const state = actions.reduce(reducer, []);

  assert({
    given: "Some Questions",
    should: "calculate the correct score",
    actual: getScore(state),
    expected: 12
  });
});
