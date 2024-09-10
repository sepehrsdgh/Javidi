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
  DropDown: "DropDown",
};

const InputErrorMessageEnum = {
  outOfRange: "خارج از محدوده ی مجاز ",
  requiredDropDown: "انتخاب یکی از موارد ضروری می باشد.",
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
    this.divErrorPattern = `.input-${this.id}-error`;
    return this;
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
    signed,
    ReduxDispatch
  ) {
    super(id, rangeValue, regex, tabIndex, label, maxLength, ReduxDispatch);
    this.inputCount = inputCount;
    this.decimalCount = decimalCount;
    this.rangeValue = rangeValue;
    this.regex = regex;
    this.tabIndex = tabIndex;
    this.type = InputTypeEnum.Text;
    this.signed = signed;
    this.inputType = InputFormatEnum.Decimal;
  }

  handleInputChange = (e, index, inputs, setInputs) => {
    this.hideError();
    this.inputIdMaker(index);
    const value = e.target.value;

    if (
      (this.regex.test(value) || (index == 0 && this.signed)) &&
      value.length === 1
    ) {
      if (index == 0 && this.signed && value != "+" && value != "-") {
        const newInputs = [...inputs];
        newInputs[0] = "+";
        newInputs[1] = value;
        setInputs(newInputs);
        this.inputIdMaker(1);
        this.goToNextInput();
        return;
      }
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
    document.getElementById(this.firstInputInNextGroup)?.focus();
    //must dynamic
    if (this.validationCheck()) {
      this.showError();
    }
  };

  goToBeforeGroup = () => {
    document.getElementById(this.firstInputINBeforeGroup)?.focus();
  };

  goToBeforeInput = () => {
    document.getElementById(this.beforeNextInputIdIngroup)?.focus();
  };

  handleKeyDown = (e, index, inputs, setInputs) => {
    this.hideError();
    this.inputIdMaker(index);
    const newInputs = [...inputs];
    const format = e.target.dataset.format;
    const { key } = e;
    if (key === keyBoardEnum.Enter) {
      e.preventDefault();
      if (e.target.value == "" && format == InputFormatEnum.Decimal) {
        this.autoFillDecimalValue(index, newInputs, setInputs);
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
    const allInputs = Array.from(
      document.querySelectorAll(this.groupIdPattern)
    );
    let signNumber = 1;
    if (this.signed) {
      signNumber = allInputs.splice(0, 1)[0].value == "-" ? -1 : 1;
    }

    const integerPart = [];
    const decimalPart = [];

    allInputs.forEach((input) => {
      const format = input.dataset.format;
      const value = input.value.trim();

      if (format === InputFormatEnum.Decimal) {
        decimalPart.push(value);
      } else {
        if (!isNaN(value) && value !== "") {
          integerPart.push(value);
        }
      }
    });

    if (
      integerPart.length !=
      (this.signed ? this.inputCount - 1 : this.inputCount) - this.decimalCount
    ) {
      this.finalValue = undefined;
      this.showError();
      return;
    }

    const finalValue =
      this.decimalCount > 0
        ? `${integerPart.join("")}.${decimalPart
            .join("")
            .padEnd(this.decimalCount, "0")}`
        : integerPart.join("");

    this.finalValue = finalValue * signNumber;
    if (this.validationCheck()) {
      this.finalValue = undefined;
      this.showError();
    }
    return this;
  };

  autoFillDecimalValue = (index, newInputs, setInputs) => {
    const allInputs = document.querySelectorAll(this.groupIdPattern);
    const nonDecimalInputs = [];
    const decimalInputs = [];

    allInputs.forEach((input, index) => {
      const format = input.dataset.format;
      if (format === InputFormatEnum.Decimal) {
        decimalInputs.push({ index, data: input });
      } else {
        nonDecimalInputs.push({ index, data: input });
      }
    });

    nonDecimalInputs.forEach((input) => {
      if (input.data.value.trim() === "") {
        const groupId = input.data.id.split("-").slice(0, -1).join("-");
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
        input.data.value = "0";
      }
    });

    decimalInputs.forEach((input) => {
      if (input.data.value.trim() === "") {
        input.data.value = "0";
        newInputs[input.index] = "0";
        setInputs(newInputs);
      }
    });
    this.goToNextGroup();
  };

  validationCheck = () => {
    const [min, max] = this.rangeValue;
    return +this.finalValue < min || +this.finalValue > max;
  };

  showError = () => {
    const errorDiv = document.querySelector(this.divErrorPattern);
    //must correct format of validation and add []
    errorDiv.innerHTML = InputErrorMessageEnum.outOfRange + this.rangeValue;
    if (errorDiv && errorDiv.classList.contains("opacity-0")) {
      errorDiv.classList.remove("opacity-0");
      errorDiv.classList.add("opacity-100");
    }
  };

  hideError = () => {
    const errorDiv = document.querySelector(this.divErrorPattern);
    if (errorDiv && errorDiv.classList.contains("opacity-100")) {
      errorDiv.classList.remove("opacity-100");
      errorDiv.classList.add("opacity-0");
    }
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
    this.inputType = InputFormatEnum.DropDown;
  }

  afterSelect = () => {
    this.inputIdMaker();
    this.hideError();
    document.getElementById(this.firstInputInNextGroup)?.focus();
  };

  formatValue = () => {
    const dynamicId = `select-input-${this.id}-0`;
    const divElement = document.getElementById(dynamicId);
    this.finalValue = divElement.getAttribute("data-value");
    if (this.validationCheck()) {
      this.showError();
      this.finalValue = undefined;
    }
  };

  validationCheck = () => {
    return this.rangeValue.findIndex((ele) => ele.value == this.finalValue) < 0;
  };

  showError = () => {
    const errorDiv = document.querySelector(this.divErrorPattern);
    errorDiv.innerHTML = InputErrorMessageEnum.requiredDropDown;
    if (errorDiv && errorDiv.classList.contains("opacity-0")) {
      errorDiv.classList.remove("opacity-0");
      errorDiv.classList.add("opacity-100");
    }
  };

  hideError = () => {
    const errorDiv = document.querySelector(this.divErrorPattern);
    if (errorDiv && errorDiv.classList.contains("opacity-100")) {
      errorDiv.classList.remove("opacity-100");
      errorDiv.classList.add("opacity-0");
    }
  };
}

module.exports = { DecimalInputHandler, DropDownInputHandler };
