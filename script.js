const openContent = document.querySelectorAll("[display-content]");

openContent.forEach((button) => {
  button.addEventListener("click", () => {
    window.confirm("Look at me! I'm learning JavaScript!");
  });
});
