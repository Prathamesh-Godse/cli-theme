function showBSDMenu() {
  const bootScreen = document.getElementById("boot-screen");
  bootScreen.style.display = "none";

  const menu = document.getElementById("bsd-menu");
  menu.style.display = "block";

  const items = menu.querySelectorAll("li");
  let selected = 0;
  items[selected].classList.add("selected");

  document.addEventListener("keydown", (e) => {
    items[selected].classList.remove("selected");
    if (e.key === "ArrowDown") selected = (selected + 1) % items.length;
    if (e.key === "ArrowUp") selected = (selected - 1 + items.length) % items.length;
    if (e.key === "Enter") window.location.href = items[selected].dataset.link;
    items[selected].classList.add("selected");
  });
}

