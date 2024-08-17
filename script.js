document.addEventListener('DOMContentLoaded',() =>{
    const display = document.getElementById('display');
        const numButtons = document.querySelectorAll('.num');
        const opButtons = document.querySelectorAll('.op');
        const delButton = document.getElementById('del');
        const resetButton = document.getElementById('reset');
        const equalButton = document.getElementById('equal');

        let currentInput = "";

        numButtons.forEach((button) => {
            button.addEventListener("click", () => {
              currentInput += button.textContent;
              display.value = currentInput;
            });
          });
  
          opButtons.forEach((button) => {
            button.addEventListener("click", () => {
              if (currentInput) {
                currentInput += ` ${button.textContent} `;
                display.value = currentInput;
              }
            });
          });
  
          delButton.addEventListener("click", () => {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
          });
  
          resetButton.addEventListener("click", () => {
            currentInput = "";
            display.value = currentInput;
          });
  
          equalButton.addEventListener("click", () => {
            try {
              const result = eval(currentInput);
              display.value = result;
              currentInput = result;
            } catch (e) {
              display.value = "Error";
              currentInput = "";
            }
          });
});