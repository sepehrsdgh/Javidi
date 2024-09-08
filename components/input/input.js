const {
  addInputError,
  deleteInputError,
} = require("../../context/slices/inputSlice");

const keyBoardEnum = {
  Enter: "Enter",
  Backspace: "Backspace",
  Delete: "Delete",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
};

const InputTypeEnum = {
  Number: "number",
  Text: "text",
  Email: "email",
  Password: "password",
  Tel: "tel",
  Url: "url",
  Date: "date",
  Time: "time",
  File: "file",
  Checkbox: "checkbox",
  Radio: "radio",
  Range: "range",
  Color: "color",
  Search: "search",
};

const InputFormatEnum = {
  Decimal: "decimal",
};

class CatchyInput {
  constructor(
    id,
    rangeValue,
    regex,
    tabIndex,
    label,
    maxLength,
    ReduxDispatch
  ) {
    this.id = id;
    this.rangeValue = rangeValue;
    this.regex = regex;
    this.tabIndex = tabIndex;
    this.finalId;
    this.nextInputIdInGroup;
    this.beforeNextInputIdIngroup;
    this.firstInputInNextGroup;
    this.firstInputINBeforeGroup;
    this.type;
    this.label = label;
    this.maxLength = maxLength ? maxLength : "1";
    this.ReduxDispatch = ReduxDispatch;
    this.finalValue;
  }

  inputIdMaker = (index = 0) => {
    this.finalId = `input-${this.id}-${index}`;
    this.nextInputIdInGroup = `input-${this.id}-${index + 1}`;
    this.beforeNextInputIdIngroup = `input-${this.id}-${index - 1}`;
    this.firstInputINBeforeGroup = `input-${this.id - 1}-${0}`;
    this.firstInputInNextGroup = `input-${this.id + 1}-${0}`;
    this.groupIdPattern = `[id^="input-${this.id}-"]`;
  };
}

class DecimalInputHandler extends CatchyInput {
  constructor(
    id,
    rangeValue,
    regex,
    tabIndex,
    label,
    maxLength,
    inputCount,
    decimalCount,
    ReduxDispatch
  ) {
    super(id, rangeValue, regex, tabIndex, label, maxLength, ReduxDispatch);
    this.inputCount = inputCount;
    this.decimalCount = decimalCount;
    this.rangeValue = rangeValue;
    this.regex = regex;
    this.tabIndex = tabIndex;
    this.type = InputTypeEnum.Text;
  }

  handleInputChange = (e, index, inputs, setInputs) => {
    this.ReduxDispatch(deleteInputError({ id: this.id }));
    this.inputIdMaker(index);
    const value = e.target.value;

    if ((this.regex.test(value) || value === ".") && value.length === 1) {
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);

      if (value !== "." && index < this.inputCount - 1) {
        this.goToNextInput();
      }

      if (value !== "." && index === this.inputCount - 1) {
        this.goToNextGroup();
      }
    }
  };

  goToNextInput = () => {
    document.getElementById(this.nextInputIdInGroup)?.focus();
  };

  goToNextGroup = () => {
    this.formatValue();
    if (this.finalValue > 8) {
      this.ReduxDispatch(
        addInputError({ id: this.id, message: "out of range!" })
      );
    }
    document.getElementById(this.firstInputInNextGroup)?.focus();
  };

  goToBeforeGroup = () => {
    document.getElementById(this.firstInputINBeforeGroup)?.focus();
  };

  goToBeforeInput = () => {
    document.getElementById(this.beforeNextInputIdIngroup)?.focus();
  };

  handleKeyDown = (e, index, inputs, setInputs) => {
    this.ReduxDispatch(deleteInputError({ id: this.id }));
    this.inputIdMaker(index);
    const newInputs = [...inputs];
    const format = e.target.dataset.format;
    const { key } = e;
    if (key === keyBoardEnum.Enter) {
      e.preventDefault();
      if (e.target.value == "" && format == InputFormatEnum.Decimal) {
        this.autoFillDecimalValue();
      } else {
        this.goToNextGroup();
      }
    }

    if (key === keyBoardEnum.Backspace || key === keyBoardEnum.Delete) {
      newInputs[index] = "";
      setInputs(newInputs);

      if (key === keyBoardEnum.Backspace && index > 0) {
        this.goToBeforeInput();
      } else if (index === 0) {
        this.goToBeforeGroup();
      }
    }

    if (key === keyBoardEnum.ArrowLeft && index > 0) {
      this.goToBeforeInput();
    } else if (
      e.key === keyBoardEnum.ArrowRight &&
      index < this.inputCount - 1
    ) {
      this.goToNextInput();
    }
  };

  formatValue = () => {
    const allInputs = document.querySelectorAll(this.groupIdPattern);

    let integerPart = "";
    let decimalPart = "";

    allInputs.forEach((input) => {
      const format = input.dataset.format;
      const value = input.value.trim();

      if (format === InputFormatEnum.Decimal) {
        decimalPart = value;
      } else {
        integerPart = value;
      }
    });

    const finalValue =
      this.decimalCount > 0
        ? `${integerPart}.${decimalPart.padEnd(this.decimalCount, "0")}`
        : integerPart;

    this.finalValue = finalValue;
  };

  autoFillDecimalValue = () => {
    const allInputs = document.querySelectorAll(this.groupIdPattern);
    const nonDecimalInputs = [];
    const decimalInputs = [];

    allInputs.forEach((input) => {
      const format = input.dataset.format;
      if (format === InputFormatEnum.Decimal) {
        decimalInputs.push(input);
      } else {
        nonDecimalInputs.push(input);
      }
    });

    nonDecimalInputs.forEach((input) => {
      if (input.value.trim() === "") {
        const groupId = input.id.split("-").slice(0, -1).join("-");
        const groupDecimalInputs = decimalInputs.filter((decimalInput) =>
          decimalInput.id.startsWith(groupId)
        );

        let hasNonEmptyDecimalInput = groupDecimalInputs.some(
          (decimalInput) => decimalInput.value.trim() !== ""
        );
        if (!hasNonEmptyDecimalInput) {
          groupDecimalInputs.forEach((decimalInput) => {
            if (decimalInput.value.trim() === "") {
              decimalInput.value = "0";
            }
          });
        }

        input.value = "0";
      }
    });

    decimalInputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.value = "0";
      }
    });
    this.goToNextGroup();
  };
}

class DropDownInputHandler extends CatchyInput {
  constructor(id, rangeValue, regex, tabIndex, label) {
    super(id, rangeValue, regex, tabIndex);
    this.rangeValue = rangeValue;
    this.regex = regex;
    this.tabIndex = tabIndex;
    this.type = InputTypeEnum.Text;
    this.label = label;
  }

  afterSelect = () => {
    this.inputIdMaker();
    document.getElementById(this.firstInputInNextGroup)?.focus();
  };
}

module.exports = { DecimalInputHandler, DropDownInputHandler };
