document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const msg = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // empêche le rechargement de page

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        msg.textContent = "✅ Merci, votre message a bien été envoyé !";
        form.reset();
      } else {
        const json = await res.json();
        msg.textContent = json.error || "❌ Une erreur est survenue.";
      }
    } catch (err) {
      msg.textContent = "❌ Erreur de réseau. Veuillez réessayer.";
    }
  });
});
