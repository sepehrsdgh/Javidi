import {
  DecimalInputHandler,
  DropDownInputHandler,
} from "../components/input/input";

const input1 = new DropDownInputHandler(
  0,
  [
    {
      htmlTag: (
        <>
          A<sub class="text-xs">N</sub>
        </>
      ),
      value: "AN",
    },
    {
      htmlTag: (
        <>
          A<sub class="text-xs">D</sub>
        </>
      ),
      value: "AD",
    },
    {
      htmlTag: (
        <>
          A<sub class="text-xs">C</sub>
        </>
      ),
      value: "AC",
    },
    {
      htmlTag: <span>B</span>,
      value: "B",
    },
    {
      htmlTag: <span>C</span>,
      value: "C",
    },
  ],
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

const input6 = new DropDownInputHandler(
  6,
  [
    {
      htmlTag: (
        <>
          A<sub class="text-xs">N</sub>
        </>
      ),
      value: "AN",
    },
    {
      htmlTag: (
        <>
          A<sub class="text-xs">D</sub>
        </>
      ),
      value: "AD",
    },
    {
      htmlTag: (
        <>
          A<sub class="text-xs">C</sub>
        </>
      ),
      value: "AC",
    },
    {
      htmlTag: <span>B</span>,
      value: "B",
    },
    {
      htmlTag: <span>C</span>,
      value: "C",
    },
  ],
  null,
  6,
  "Type"
);
const input7 = new DecimalInputHandler(
  7,
  [0.0, 8.0],
  /^\d$/,
  7,
  "ECV",
  undefined,
  3,
  2,
  false
);
const input8 = new DecimalInputHandler(
  8,
  [0.0, 3.0],
  /^\d$/,
  8,
  "SC",
  undefined,
  3,
  2,
  false
);
const input9 = new DecimalInputHandler(
  9,
  [-600, 400],
  /^\d$/,
  9,
  "MEP",
  undefined,
  4,
  0,
  true
);
const input10 = new DecimalInputHandler(
  10,
  [0.0, 1.0],
  /^\d$/,
  10,
  "G",
  undefined,
  3,
  2,
  false
);

const allInputs = [
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10,
];

module.exports = { allInputs };
