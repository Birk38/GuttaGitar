const searchInput = document.querySelector("[data-search]");
const søkekort = document.querySelector(".søkekort");
const pElements = document.querySelectorAll(".kort-tekst");

// Hide søkekort initially
søkekort.style.display = 'none';

searchInput.addEventListener("focus", () => {
  søkekort.style.display = 'block'; // Show søkekort when search bar is focused
});

document.body.addEventListener("click", (e) => {
  if (!searchInput.contains(e.target) && !søkekort.contains(e.target)) {
    søkekort.style.display = 'none'; // Hide søkekort if clicked outside search bar and søkekort
  }
});

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  pElements.forEach(p => {
    const isVisible = p.textContent.toLowerCase().includes(value);
    p.parentElement.classList.toggle("hide", !isVisible);
  });
});