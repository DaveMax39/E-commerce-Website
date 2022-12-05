//navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (scrollY >= 1890) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});

const collageImages = [...document.querySelectorAll(".collage-img")];
collageImages.map((item, _i) => {
  item.addEventListener("mouseover", () => {
    collageImages.map((image, _index) => {
      if (_index != 1) {
        image.style.filter = "blur(10px)";
        item.style.zIndex = 2;
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    collageImages.map((image, _index) => {
      image.style = null;
    });
  });
});
