window.dataLayer = window.dataLayer || [];

function gtag(){
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-R05H2DJ7PQ');


/**
 * Google Analytics - Capturador universal de data-cta
 */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-cta]").forEach((element) => {

        element.addEventListener("click", () => {

            const ctaName = element.getAttribute("data-cta");

            if (typeof gtag === "function") {

                gtag("event", "cta_click", {
                    cta_name: ctaName
                });

            }

        });

    });

});