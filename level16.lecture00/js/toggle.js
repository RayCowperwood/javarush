      const button = document.getElementById("changeColorsButton");
      button.addEventListener("click", () => {
        const root = document.documentElement;
        const styles = getComputedStyle(root);
        const currentBgColor = styles
          .getPropertyValue("--main-bg-color")
          .trim();
        if (currentBgColor === "#442626") {
          root.style.setProperty("--main-bg-color", "#ccc");
          root.style.setProperty("--main-text-color", "#442626");
        } else {
          root.style.setProperty("--main-bg-color", "#442626");
          root.style.setProperty("--main-text-color", "#ccc");
        }
      });