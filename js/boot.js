document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".boot-line");
  const bootScreen = document.getElementById("boot-screen");
  let i = 0;
  const delay = 10; // adjust speed

  function showNext() {
    if (i < lines.length) {
      lines[i].textContent = lines[i].dataset.text;
      bootScreen.scrollTop = bootScreen.scrollHeight; // instant scroll
      i++;
      setTimeout(showNext, delay);
    } else {
      // Boot finished → show BSD menu
      if (typeof showBSDMenu === "function") {
        showBSDMenu();
      }
    }
  }

  showNext();
});

