const Section01Spans = document.querySelectorAll(".section01-box span");
const Section03Spans = document.querySelectorAll(".section03-box span");
const section01Down = document.querySelector(".section01-box.down");
const section03Down = document.querySelector(".section03-box.down");

window.onload = function () {
  const logoLis = document.querySelectorAll(".title-log li");
  logoLis.forEach((li, index) => {
    li.style.transform = "translate(0px)";
    li.style.transitionDelay = `0.${index}s`;
  });
};

const init = () => {
  flowText(section01Down, Section01Spans); // 초기 .down > p > span의 너비 == .down 너비
  flowText(section03Down, Section03Spans);
  fontSize(Section01Spans, 32); // 초기 section01-box span 폰트크기
  fontSize(Section03Spans, 24);
};

const titleLogoTransform = function (scrollVal) {
  const logoLis = document.querySelectorAll(".title-log li");

  logoLis.forEach((li, index) => {
    if (index === 0) {
      li.firstChild.style.transform = "translate(0px)";
    } else if (index == 4 || index == 5) {
      li.firstChild.style.transform = `translateX(-${scrollVal}px)`;
    } else {
      li.firstChild.style.transform = `translateY(-${scrollVal}px)`;
    }
  });
};
const flowText = (down, spans) => {
  spans.forEach((span) => {
    span.style.width = `${down.offsetWidth}px`;
  });
};
const fontSize = (spans, fonsSize) => {
  spans.forEach((span) => {
    span.style.fontSize = `${
      fonsSize -
      (window.screen.width - window.innerWidth) *
        (100 / window.screen.width) *
        (fonsSize / 100)
    }px`;
  });
};
const upSliderText = (downPs, startIndex = 0) => {
  downPs.forEach((p, index) => {
    if (startIndex <= index) {
      p.style.width = 0;
    }
  });
  if (startIndex) {
    downPs[startIndex - 1].style.width = "100%";
  }
};

const scrollFontSizeUp = (fontSize) => {
  const h2 = document.querySelector(".section03 h2");
  if (scrollY >= 2900) {
    h2.style.transform = "translateY(0)";
    h2.style.scale = "1";
  } else {
    h2.style.transform = "translateY(100vh)";
    h2.style.scale = "5";
  }
};
// header scroll
window.addEventListener("scroll", () => {
  const titleLogoImgs = document.querySelectorAll(".title-log img");
  const ASYLogoWidth =
    titleLogoImgs[1].offsetWidth +
    titleLogoImgs[2].offsetWidth +
    titleLogoImgs[3].offsetWidth;
  if (scrollY <= ASYLogoWidth) {
    titleLogoTransform(scrollY);
  } else {
    titleLogoTransform();
  }
});
// header scroll
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".title-log");
  const logoSmall = document.querySelector(".title-log-small");
  const logoSmallImg = document.querySelectorAll(".title-log-small img");
  if (scrollY <= 700) {
    logo.style.display = "flex";
    logoSmall.style.display = "none";
  } else {
    logoSmall.style.display = "flex";
    logo.style.display = "none";
  }
  if (scrollY <= 900) {
    logoSmallImg.forEach((img) => {
      img.style.height = "170px";
    });
  } else {
    logoSmallImg.forEach((img) => {
      img.style.height = "100px";
    });
  }
});
// header resize
let prevWindowWidth = 0;
let translateX = document.querySelector(".title-log img").style.transform;
window.addEventListener(`resize`, function () {
  document.querySelectorAll(".title-log img").forEach((img) => {
    img.style.height = `${
      170 -
      (100 / window.screen.width) * (window.screen.width - window.innerWidth)
    }px`;
    if (prevWindowWidth > window.innerWidth) {
      translateX--;
    } else {
      translateX++;
    }
    prevWindowWidth = window.innerWidth;
    img.style.transform = `translateX${translateX}px`;
  });
});

// section01 fontSize, flowText
window.addEventListener(`resize`, function () {
  flowText(section01Down, Section01Spans);
  flowText(section03Down, Section03Spans);
  fontSize(Section01Spans, 32);
  fontSize(Section03Spans, 24);
});

// section01 p upSliderText
window.addEventListener("scroll", () => {
  const downPs = document.querySelectorAll(".section01-box.down p");
  if (scrollY < 600) {
    upSliderText(downPs);
    // section01.style.top = `${scrollY - 700}px`;
  } else if (scrollY < 700) {
    upSliderText(downPs, 1);
  } else if (scrollY < 800) {
    upSliderText(downPs, 2);
  } else if (scrollY < 900) {
    upSliderText(downPs, 3);
  } else if (scrollY < 1000) {
    upSliderText(downPs, 4);
  }
});

// section02 line
for (let i = 0; i < 50; i++) {
  const section02Box = document.createElement("div");
  document.querySelector(".section02").append(section02Box);
  for (let j = 0; j < 12; j++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.animationDelay = `${i / 2}s`;
    line.style.animationDuration = `${50 - i}s`;
    section02Box.append(line);
  }
}

// section03 h2
window.addEventListener("scroll", () => {
  scrollFontSizeUp();
});

//section03 p
window.addEventListener("scroll", () => {
  console.log(scrollY);
  const downPs = document.querySelectorAll(".section03-box.down p");

  if (scrollY <= 3100) {
    upSliderText(downPs);
  } else if (scrollY <= 3200) {
    upSliderText(downPs, 1);
  } else if (scrollY <= 3300) {
    upSliderText(downPs, 2);
  } else if (scrollY <= 3400) {
    upSliderText(downPs, 3);
  } else if (scrollY <= 3500) {
    upSliderText(downPs, 4);
  }
});

window.addEventListener("scroll", () => {
  console.log(scrollY);
  const section03Box = document.querySelector(".section03-box");
  if (scrollY >= 3000 && scrollY < 3700) {
    section03Contents.style.opacity = "1";
    section03Contents.style.top = "65%";
  } else {
    section03Contents.style.opacity = "0";
    section03Contents.style.top = "70%";
  }
});
window.addEventListener("scroll", () => {
  console.log(scrollY);
  const section03H2 = document.querySelector(".section03 h2");
  if (scrollY >= 2800 && scrollY < 3700) {
    section03H2.style.opacity = "1";
  } else {
    section03H2.style.opacity = "0";
  }
});
init();
