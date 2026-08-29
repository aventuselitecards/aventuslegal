(function () {
  const A = window.AVENTUS || {};
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const langBtn = document.querySelector("[data-lang]");
  const dict = {
    en: {},
    es: {
      "Legal and project support for teams that move fast.":
        "Apoyo legal y de proyectos para equipos que avanzan rápido.",
      "Start documents": "Iniciar documentos",
      "Call Rosie": "Llamar a Rosie",
      "Work with Aventus": "Trabajar con Aventus"
    }
  };
  let lang = "en";
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = lang === "en" ? "es" : "en";
      langBtn.textContent = lang === "en" ? "ES" : "EN";
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const en = el.getAttribute("data-i18n");
        el.textContent = (dict[lang] && dict[lang][en]) || en;
      });
    });
  }

  const payNow = document.querySelector("#pay-now");
  if (payNow && A.payment && A.payment.link) {
    payNow.href = A.payment.link;
    payNow.textContent = "Pay by card";
    payNow.target = "_blank";
    payNow.rel = "noopener";
  }

  const grid = document.querySelector("[data-gavel]");
  if (!grid) return;
  const flows = (A.gavel && A.gavel.workflows) || [];
  const portal = A.gavel && A.gavel.portal;
  if (!flows.length && !portal) {
    grid.innerHTML = `
      <div class="card">
        <h3>Gavel intake</h3>
        <p>Document interviews will open here. Call or email to start in the meantime.</p>
        <p class="fine">Add workflow links in js/config.js (Copy workflow link in Gavel).</p>
      </div>`;
    return;
  }
  const items = [];
  if (portal) {
    items.push({ title: "Client portal", blurb: "Sign in to continue a matter.", url: portal });
  }
  flows.forEach((f) => items.push(f));
  grid.innerHTML = items.map((f) => `
    <a class="card" href="${f.url}" target="_blank" rel="noopener">
      <h3>${f.title}</h3>
      <p>${f.blurb || "Start this Gavel workflow."}</p>
    </a>`).join("");
})();
