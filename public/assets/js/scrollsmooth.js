document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }, 3000); // Adjust the delay time as needed
    }
  });
});
