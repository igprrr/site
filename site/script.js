document.addEventListener("DOMContentLoaded", () => {
    const gif = document.getElementById("gif");

    gif.addEventListener("load", () => {
        gif.classList.add("visible");
    });

    // fallback caso o evento 'load' não dispare (ex: cache)
    if (gif.complete) {
        gif.classList.add("visible");
    }
});
