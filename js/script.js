/* J.Batista Guincho 24 Horas — interações do site
   Mantido enxuto de propósito (performance / boas práticas de SEO técnico) */

document.addEventListener("DOMContentLoaded", function () {
  /* Menu mobile */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Ano automático no rodapé */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Clique-para-ligar / WhatsApp: registra intenção (placeholder para GA4) */
  document.querySelectorAll("[data-cta]").forEach(function (el) {
    el.addEventListener("click", function () {
      if (window.gtag) {
        gtag("event", "generate_lead", { cta: el.getAttribute("data-cta") });
      }
    });
  });

  /* Formulário de contato: monta mensagem e abre WhatsApp (site estático, sem backend) */
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome.value.trim();
      var cidade = form.cidade.value;
      var veiculo = form.veiculo.value.trim();
      var mensagem = form.mensagem.value.trim();
      var texto = "Olá! Meu nome é " + nome + ". Cidade: " + cidade + ". Veículo: " + veiculo + ". " + mensagem;
      window.open("https://wa.me/5547999832710?text=" + encodeURIComponent(texto), "_blank");
    });
  }

  /* Animações de entrada (fade-up) e caminhão cruzando a linha de pista */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });

    var truckWrap = document.querySelector(".lane-divider-wrap");
    if (truckWrap) {
      var truckObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      truckObserver.observe(truckWrap);
    }
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
});
