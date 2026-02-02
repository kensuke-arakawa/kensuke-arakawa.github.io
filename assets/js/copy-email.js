document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.querySelector('a[href^="mailto:"]');

  if (!emailLink) return;

  const email = emailLink
    .getAttribute("href")
    .replace("mailto:", "")
    .trim();

  emailLink.addEventListener("click", function (e) {
    e.preventDefault();

    navigator.clipboard.writeText(email).then(() => {
      const icon = emailLink.querySelector("i");

      if (icon) {
        icon.classList.remove("fa-envelope");
        icon.classList.add("fa-check");

        setTimeout(() => {
          icon.classList.remove("fa-check");
          icon.classList.add("fa-envelope");
        }, 1500);
      }
    });
  });
});