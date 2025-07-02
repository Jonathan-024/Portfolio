document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          message.textContent = "Merci pour votre message !";
          form.reset();
        } else {
          message.textContent = "Une erreur est survenue.";
        }
      })
      .catch(() => {
        message.textContent = "Une erreur réseau s'est produite.";
      });
  });
});
