import Splide from "@splidejs/splide";

const sliderFunction = function () {
  new Splide(".splide").mount();

  // slider
  const splide = new Splide(".splide");
  const bar = splide.root.querySelector(".my-carousel-progress-bar");
  // Updates the bar width whenever the carousel moves:
  splide.on("mounted move", function () {
    const end = splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
  });

  splide.mount();
};
export { sliderFunction };
