document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Empêche la redirection classique

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
        redirect: "manual", // Empêche le navigateur de suivre la redirection de Formspree
      });

      if (res.status === 200 || res.status === 0) {
        msg.textContent = "Merci ! Votre message a bien été envoyé.";
        msg.style.color = "#0a66c2";
        form.reset();
      } else {
        msg.textContent = "❌ Une erreur est survenue. Veuillez réessayer.";
        msg.style.color = "red";
      }
    } catch (error) {
      msg.textContent = "❌ Erreur de réseau. Vérifiez votre connexion.";
      msg.style.color = "red";
    }
  });
});