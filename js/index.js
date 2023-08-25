let elBlock1 = document.getElementById("block-1");
let elBlock2 = document.getElementById("block-2");
let elBlock3 = document.getElementById("block-3");
let elBlock4 = document.getElementById("block-4");
let logoText = document.getElementById("logo-text-123");
let socialIcons = document.getElementById("block-1__social-media123");
let mobileDesign123 = document.getElementById("mobile-design123");
let block2Inner__left = document.getElementById("block-2-inner__left123");
let block3InnerText = document.getElementById("block-3_inner_p");
let block3_img = document.getElementById("block-3_img");
let block_4_img = document.getElementById("block_4_img");
const eni = window.screen.width;
const heightWindow = window.screen.height;

if (eni > 1000) {
  setTimeout(() => {
    elBlock1.click();
  }, 500);
  elBlock1.addEventListener("click", (evt) => {
    elBlock1.classList.add("b-1-active");
    elBlock1.classList.remove("b-1-active-2");

    const { value: classValue } = elBlock2.classList;
    const { value: classValue3 } = elBlock3.classList;
    const { value: classValue4 } = elBlock4.classList;

    classValue.split(" ").map((item) => {
      if (item == "b-2-active") {
        elBlock1.classList.add("b-1-active");

        elBlock2.classList.remove("b-2-active");
        elBlock2.style.width = "55%";
        elBlock2.style.backgroundColor = "#ebf2e8";

        elBlock3.style.width = "75%";
      }
    });

    classValue3.split(" ").map((item) => {
      if (item == "b-3") {
        elBlock1.classList.add("b-1-active");

        elBlock2.style.width = "55%";

        elBlock3.style.backgroundColor = "#bdcfb5";
        elBlock3.style.width = "75%";

        elBlock3.classList.remove("b-3");
      }
    });

    classValue4.split(" ").map((item) => {
      if (item == "b-4") {
        elBlock1.classList.add("b-1-active");

        elBlock2.style.width = "55%";

        elBlock3.style.backgroundColor = "#bdcfb5";
        elBlock3.style.width = "75%";

        elBlock4.classList.remove("b-4");
      }
    });
  });

  elBlock2.addEventListener("click", () => {
    elBlock1.classList.add("b-1-active-2");

    elBlock2.style.width = "75%";
    elBlock2.classList.add("b-2-active");
    elBlock2.style.backgroundColor = "#fff";

    elBlock3.style.backgroundColor = "#bdcfb5";
    elBlock3.style.width = "90%";

    elBlock4.style.backgroundColor = "#ebf2e8";
  });

  elBlock3.addEventListener("click", () => {
    elBlock1.classList.add("b-1-active-2");

    elBlock2.style.width = "24%";
    elBlock2.style.backgroundColor = "#ebf2e8";

    elBlock3.style.width = "86%";
    elBlock3.style.backgroundColor = "#fff";

    elBlock4.style.backgroundColor = "#ebf2e8";

    elBlock3.classList.add("b-3");
  });

  elBlock4.addEventListener("click", () => {
    elBlock1.classList.add("b-1-active-2");
    elBlock4.classList.add("b-4");

    elBlock2.style.width = "24%";
    elBlock2.style.backgroundColor = "#ebf2e8";

    elBlock3.style.width = "45%";
    elBlock3.style.backgroundColor = "#bdcfb5";

    elBlock4.style.backgroundColor = "#fff";
  });
} else {
  //  block 1 actions
  elBlock1.addEventListener("click", () => {
    elBlock1.style.width = "30%";
    elBlock1.style.height = "70vh";
    logoText.style.opacity = 0;
    socialIcons.style.left = "32%";
    block3InnerText.style.left = "-100%";
    block3_img.style.left = "0";
    block3_img.style.bottom = "1vh";
    block_4_img.style.bottom = "1vh";
    block_4_img.style.right = "5%";
    mobileDesign123.style.right = "-20%";
    mobileDesign123.style.width = "70%";
    mobileDesign123.style.height = "50%";
    block2Inner__left.style.opacity = 1;
    setTimeout(() => {
      block2Inner__left.style.left = "5%";
    }, 100);

    elBlock2.style.width = "70%";
    elBlock2.style.height = "70vh";
    elBlock3.style.width = "30%";
    elBlock3.style.height = "30vh";
    elBlock3.style.top = "70vh";
    elBlock4.style.width = "70%";
    elBlock4.style.height = "30vh";
    elBlock4.style.top = "70vh";
  });
  //  block 2 actions
  elBlock2.addEventListener("click", () => {
    elBlock1.style.width = "30%";
    elBlock1.style.height = "70vh";
    elBlock2.style.width = "70%";
    elBlock2.style.height = "70vh";
    logoText.style.opacity = 0;
    socialIcons.style.left = "32%";
    block3InnerText.style.left = "-100%";
    block3_img.style.left = "0";
    block3_img.style.bottom = "1%";
    block_4_img.style.bottom = "1%";
    block_4_img.style.right = "5%";
    mobileDesign123.style.right = "-20%";
    mobileDesign123.style.width = "70%";
    mobileDesign123.style.height = "50%";
    mobileDesign123.style.top = "2%";
    block2Inner__left.style.opacity = 1;
    setTimeout(() => {
      block2Inner__left.style.left = "5%";
      block2Inner__left.style.zIndex = -1;
    }, 100);
    elBlock3.style.width = "30%";
    elBlock3.style.height = "30%";
    elBlock3.style.top = "70vh";
    elBlock4.style.width = "70%";
    elBlock4.style.height = "30vh";
    elBlock4.style.top = "70vh";
  });
  //  block 3 actions
  elBlock3.addEventListener("click", () => {
    elBlock1.style.width = "70%";
    elBlock1.style.zIndex = "17";
    // elBlock1.style.height = '30vh'
    logoText.style.opacity = 1;
    socialIcons.style.left = "-20%";
    block3InnerText.style.left = "10px";
    block3_img.style.left = "37%";
    block3_img.style.bottom = "40vh";
    mobileDesign123.style.right = "-8%";
    mobileDesign123.style.width = "30%";
    mobileDesign123.style.height = "20%";
    mobileDesign123.style.top = "2%";
    block_4_img.style.bottom = "40%";
    block_4_img.style.right = "5%";
    block2Inner__left.style.left = "0%";
    block2Inner__left.style.opacity = 0;
    elBlock2.style.width = "70%";
    elBlock2.style.height = "70vh";
    elBlock2.style.zIndex = "8";

    elBlock3.style.width = "70%";
    elBlock3.style.height = "70vh";
    elBlock3.style.top = "30vh";
    elBlock3.style.zIndex = "20";

    elBlock4.style.width = "30%";
    elBlock4.style.height = "70vh";
    elBlock4.style.top = "30vh";
    elBlock4.style.zIndex = "16";
  });
  //  block 4 actions
  elBlock4.addEventListener("click", () => {
    elBlock1.style.width = "30%";
    // elBlock1.style.height = "30vh";
    logoText.style.opacity = 0;
    socialIcons.style.left = "-20%";
    block3InnerText.style.left = "-100%";
    block3_img.style.left = "0";
    block3_img.style.bottom = "40%";
    block_4_img.style.bottom = "40%";
    block_4_img.style.right = "5%";
    mobileDesign123.style.right = "-8%";
    mobileDesign123.style.width = "30%";
    mobileDesign123.style.height = "20%";
    mobileDesign123.style.top = "2%";
    block2Inner__left.style.left = "-15%";
    setTimeout(() => {
      block2Inner__left.style.opacity = 0;
    }, 100);
    elBlock2.style.width = "70%";
    elBlock2.style.height = "70vh";

    elBlock3.style.width = "30%";
    elBlock3.style.height = "70%";

    elBlock3.style.top = "30vh";

    elBlock4.style.width = "70%";
    elBlock4.style.height = "70vh";
    elBlock4.style.top = "30vh";
    elBlock4.style.zIndex = "20";
  });
}
