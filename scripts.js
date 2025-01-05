function initFunction() {
  let themeIndex = 0;
  document.getElementById("changeThemeButton").onclick = () => {
    const PATH_TO_THEMES = [
      "./compoments/themes/classic.css",
      "./compoments/themes/classic-dark.css",
      "./compoments/themes/everforest.css",
      "./compoments/themes/gruvbox.css",
    ];

    document.getElementById("themeStyleSheet").href =
      PATH_TO_THEMES[themeIndex];
    themeIndex = (themeIndex + 1) % PATH_TO_THEMES.length;
  };
}

initFunction();
