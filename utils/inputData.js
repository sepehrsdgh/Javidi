import {
  DecimalInputHandler,
  DropDownInputHandler,
} from "../components/input/input";

const input1 = new DropDownInputHandler(
  0,
  ["Apple", "Banana", "Cherry", "Grapes", "Orange"],
  null,
  0,
  "Type"
);
const input2 = new DecimalInputHandler(
  1,
  [0.0, 8.0],
  /^\d$/,
  1,
  "ECV",
  undefined,
  3,
  2,
  false
);
const input3 = new DecimalInputHandler(
  2,
  [0.0, 3.0],
  /^\d$/,
  2,
  "SC",
  undefined,
  3,
  2,
  false
);
const input4 = new DecimalInputHandler(
  3,
  [-600, 400],
  /^\d$/,
  3,
  "MEP",
  undefined,
  4,
  0,
  true
);
const input5 = new DecimalInputHandler(
  4,
  [0.0, 1.0],
  /^\d$/,
  4,
  "G",
  undefined,
  3,
  2,
  false
);

const allInputs = [input1, input2, input3, input4, input5];

module.exports = { allInputs };
