let elSliderItem = document.querySelectorAll('.mac__slider-img');
const elSlider = document.querySelector('.mac__big-img-sec');
const elRam = document.querySelectorAll('.price__ram ');
const elRom = document.querySelectorAll('.price__rom');
const priceRam = document.querySelector('.price-ram');
const romPrice = document.querySelector('.price-romm');
const priceColor = document.querySelectorAll('.color-border');
const elColor = document.querySelector('.price-colorr');

elSliderItem.forEach((item)=> {
  item.addEventListener('click', ()=> {
    removeActiveSlider();
    item.classList.add('active-slider')
    if(item.id == 1) {
      elSlider.style.transform = "translateX(0)";
    } else if(item.id == 2) {
      elSlider.style.transform = "translateX(-100%)";
    } else if (item.id == 3) {
      elSlider.style.transform = "translateX(-200%)";
    } else if (item.id == 4) {
      elSlider.style.transform = "translateX(-300%)";
    } else if (item.id == 5) {
      elSlider.style.transform = "translateX(-400%)";
    }
  })
})
function removeActiveSlider() {
  elSliderItem.forEach((item)=> {
    item.classList.remove('active-slider');
  });
};


elRam.forEach((item)=> {
  item.addEventListener('click', ()=> {
    removeActiveSlider();
    item.classList.add('active-border')
    if(item.id == 1) {
      priceRam.textContent = 8;
    } else if (item.id == 2) {
      priceRam.textContent = 16;
    }
  })
})
function removeActiveSlider() {
  elRam.forEach((item)=> {
    item.classList.remove('active-border');
  });
};

elRom.forEach((item)=> {
  item.addEventListener('click', ()=> {
    removeActiveSliderr();
    item.classList.add('active-border')
    if(item.id == 1) {
      romPrice.textContent = 256;
    } else if (item.id == 2) {
      romPrice.textContent = 512;
    } else if (item.id == 3) {
      romPrice.textContent = "1tb";
    }
  })
})
function removeActiveSliderr() {
  elRom.forEach((item)=> {
    item.classList.remove('active-border');
  });
};


priceColor.forEach((item)=> {
  item.addEventListener('click', ()=> {
    removeActiveSlide();
    item.classList.add('active-border')
    if(item.id == 1) {
      elColor.textContent = "Gold";
      // item.id[1].style.
    } else if (item.id == 2) {
      elColor.textContent = "Silver";
    } else if (item.id == 3) {
      elColor.textContent = "Grey";
    }
  })
})
function removeActiveSlide() {
  priceColor.forEach((item)=> {
    item.classList.remove('active-border');
  });
};