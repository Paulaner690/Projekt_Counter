const output = document.querySelector(".output");
let count = 0;

const superFunc = (value) => {
  count += value;
  output.innerHTML = count;
};

const malZwei = () => {
  count = count * 2;
  output.innerHTML = count;
};

const reseti = () => {
  count = 0;
  output.innerHTML = count;
};
