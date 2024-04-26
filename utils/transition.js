export class Transition {
  constructor(state, showValue, hiddenValue, duration) {
    this.state = state;
    this.showValue = showValue;
    this.hiddenValue = hiddenValue;
    this.duration = duration;
  }

  getClass() {
    this.showValue = this.showValue || "translate-y-0 ";
    this.hiddenValue = this.hiddenValue || "translate-y-12  ";
    this.duration = this.duration || "duration-700";
    this.animationClass = `${
      this.state
        ? `${this.showValue} opacity-100`
        : `${this.hiddenValue} pointer-events-none `
    } transition-all ${this.duration}`;
    return this;
  }
}
