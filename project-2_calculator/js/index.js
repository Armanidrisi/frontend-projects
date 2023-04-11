      const buttons = document.querySelectorAll("#btn");
      const display = document.getElementById("display");
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          display.value += button.value;
        });
      });