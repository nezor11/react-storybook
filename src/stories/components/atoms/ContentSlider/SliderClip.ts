class SliderClip {
  el: HTMLElement;
  Slides: HTMLElement[];
  Nav: HTMLElement[];
  totalSlides: number;
  current: number;
  autoPlay: boolean;
  timeTrans: number;
  IndexElements: number[];

  constructor(el: HTMLElement) {
    this.el = el;
    this.Slides = Array.from(this.el.querySelectorAll("li"));
    this.Nav = Array.from(this.el.querySelectorAll("nav a"));
    this.totalSlides = this.Slides.length;
    this.current = 0;
    this.autoPlay = true;
    this.timeTrans = 4000;
    this.IndexElements = Array.from(Array(this.totalSlides).keys());

    if (this.Slides.length > 0 && this.Nav.length > 0) {
      this.setCurret();
      this.initEvents();
    }
  }

  setCurret() {
    if (this.Slides[this.current]) {
      this.Slides[this.current].classList.add("current");
      this.Nav[this.current].classList.add("current_dot");
    }
  }

  initEvents() {
    if (this.Nav.length === 0 || this.Slides.length === 0) return;

    this.Nav.forEach((dot, index) => {
      dot.addEventListener("click", (event) => {
        event.preventDefault();
        this.changeSlide(index);
      });
    });

    this.el.addEventListener("mouseenter", () => (this.autoPlay = false));
    this.el.addEventListener("mouseleave", () => (this.autoPlay = true));

    setInterval(() => {
      if (this.autoPlay) {
        this.current =
          this.current < this.Slides.length - 1 ? this.current + 1 : 0;
        this.changeSlide(this.current);
      }
    }, this.timeTrans);
  }

  changeSlide(index: number) {
    this.Nav.forEach((dot) => dot.classList.remove("current_dot"));
    this.Slides.forEach((slide) => slide.classList.remove("prev", "current"));

    const prevElements = this.IndexElements.filter((i) => i < index);
    prevElements.forEach((i) => this.Slides[i].classList.add("prev"));

    this.Slides[index].classList.add("current");
    this.Nav[index].classList.add("current_dot");
  }
}

export default SliderClip;
