function smoothscroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// smoothscroll();

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "body",
    start: "top 27%",
    end: "top 0",
    scrub: 2,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "join"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "join"
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "join"
);

let cursar = document.getElementById("cursar");

document.addEventListener("mousemove", function (mouse) {
  gsap.to(cursar, {
    top: mouse.y,
    left: mouse.x,
  });
});


gsap.to(".page2", {
  backgroundColor: "white",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 35%",
    end: "top 0",
    scrub: 3,
  },
});

let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 10%",
    end: "top 0",
    // markers:true,
    scrub: 3,
  },
});

tl1.to(
  ".page3 .page3-center #m1",
  {
    x: 50,
  },
  "scroll"
);

tl1.to(
  ".page3 .page3-center #m2",
  {
    x: -50,
  },
  "scroll"
);

let bos = document.querySelectorAll(".bos");
console.log(bos)

