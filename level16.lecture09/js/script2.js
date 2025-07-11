      const root = document.documentElement;
      document
        .querySelector(".theme-toggle")
        .addEventListener("click", function () {
          let currentHue = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--hue")
          );
          const newHue = Math.floor(Math.random() * 360);
          root.style.setProperty("--hue", newHue);
          console.log(currentHue);
        });
