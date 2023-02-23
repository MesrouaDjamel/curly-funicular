import { Calculator } from "./function.js";

window.onload = () => {
  const elements = document.querySelectorAll(
    ".column-calculator1 .line-calculator >*"
  );
  const screen = elements[0];
  const cancel = elements[1];
  const del = elements[2];

  const touches = [].slice.call(elements).slice(3);
  Calculator.initEvent(touches);
};
