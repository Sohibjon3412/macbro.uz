let elSliderItem = document.querySelectorAll('.mac__slider-img');
const elSlider = document.querySelector('.mac__big-img-sec');
const elRam = document.querySelectorAll('.price__ram ');
const elRom = document.querySelectorAll('.price__rom');
const priceRam = document.querySelector('.price-ram');
const romPrice = document.querySelector('.price-romm');
const priceColor = document.querySelectorAll('.color-border');
const elColor = document.querySelector('.price-colorr');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

const i1 = document.querySelector('.i1');
const i2 = document.querySelector('.i2');
const i3 = document.querySelector('.i3');
const i4 = document.querySelector('.i4');
const i5 = document.querySelector('.i5');

const minusInd = document.querySelector('.cena__minus');
const plusInd = document.querySelector('.cena__plus');
const macCount = document.querySelector('.cena__count');
const macPrice = document.querySelector('.cena-big-price');
let price = 10000000;

macPrice.textContent = price;




elSliderItem.forEach((item)=> {
  item.addEventListener('click', ()=> {
    removeActiveSliders();
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
function removeActiveSliders() {
  elSliderItem.forEach((item)=> {
    item.classList.remove('active-slider');
  });
};


elRam.forEach((item)=> {
  item.addEventListener('click', ()=> {
    
  if(item.className !="price__ram border gb512 active-border" && item.className != "price__ram border active-border gb512" && item.id ==1){
    price = price-2000000
    macPrice.textContent = price;
    
  }
  if(item.className !="price__ram border active-border" && item.id ==2){
    price = price+2000000
    macPrice.textContent = price
  }
 
    removeActiveSlider();
    item.classList.add('active-border')
    if(item.id == 1) {
      priceRam.textContent = 8;
      document.querySelector('.tb1').style.display = "none";
      
      
    } else if (item.id == 2) {
      priceRam.textContent = 16;
      document.querySelector('.tb1').style.display = "inline-block";
      document.querySelector('.tb1').style.textAlign = "center";
     
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
    if(item.className !="price__rom border active-border" && item.id ==1){
      price = price-2000000
      macPrice.textContent = price;
    }
    if(item.className != "price__rom border active-border" && item.id ==2){
      price = price+2000000
      macPrice.textContent = price
   console.log(item.className);

    }
    if(item.className != "price__rom border tb1 active-border" && item.id ==3){
      price = price+2000000
      macPrice.textContent = price 
      price = price-4000000

    }
   console.log(item.className);

    removeActiveSliderr();
    item.classList.add('active-border')
    if(item.id == 1) {
      romPrice.textContent = 256;
      document.querySelector('.gb512').style.display = "block"
      document.querySelector('.gb512').style.textAlign = "center";
    } else if (item.id == 2) {
      romPrice.textContent = 512;
      document.querySelector('.gb512').style.display = "block"
      document.querySelector('.gb512').style.textAlign = "center";
    } else if (item.id == 3) {
      romPrice.textContent = "1tb";
      document.querySelector('.gb512').style.display = "none"
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
      img1.src = "https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2";
      img2.src = "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da"
      img3.src = "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1";
      img4.src = "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad"
      img5.src = "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3";

      i1.src = "https://cdn.macbro.uz/macbro/003a584a-0d7d-4123-9f03-b3386914c6c2";
      i2.src = "https://cdn.macbro.uz/macbro/b8166836-a68f-4886-bf74-04d2ae1e38da"
      i3.src = "https://cdn.macbro.uz/macbro/dfd7cc8c-8f26-430c-ba64-7820b90d4df1";
      i4.src = "https://cdn.macbro.uz/macbro/355da324-69f8-41d0-a143-605d8e470bad"
      i5.src = "https://cdn.macbro.uz/macbro/2aa0ef46-60b7-469c-8eea-11d8bf09d9f3";
    } else if (item.id == 2) {
      elColor.textContent = "Silver";
      img1.src = "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8";
      img2.src = "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f"
      img3.src = "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e";
      img4.src = "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58"
      img5.src = "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c";

      i1.src = "https://cdn.macbro.uz/macbro/cf510327-b4e8-4378-a001-cbd8779504b8";
      i2.src = "https://cdn.macbro.uz/macbro/67762a5d-aa1e-4d3c-b3cd-fda8b50b937f"
      i3.src = "https://cdn.macbro.uz/macbro/51b73a16-4170-4944-80cf-6f8bca51351e";
      i4.src = "https://cdn.macbro.uz/macbro/e622b5e0-65fc-4e91-a70d-9025fc30fd58"
      i5.src = "https://cdn.macbro.uz/macbro/d90e01d1-2087-48a3-9462-912f58ea138c";
    } else if (item.id == 3) {
      elColor.textContent = "Grey";
      img1.src = "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045";
      img2.src = "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181"
      img3.src = "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275";
      img4.src = "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae"
      img5.src = "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943";

      i1.src = "https://cdn.macbro.uz/macbro/edb6411f-3f34-47b1-a118-36045811f045";
      i2.src = "https://cdn.macbro.uz/macbro/7f956a88-c90a-44b4-ba40-50aac4807181"
      i3.src = "https://cdn.macbro.uz/macbro/dfda6000-e242-4442-ad59-bac513806275";
      i4.src = "https://cdn.macbro.uz/macbro/eb6d4a3e-b892-4c4f-aff6-46d333c494ae"
      i5.src = "https://cdn.macbro.uz/macbro/66715875-b08c-45a0-9f79-5f4a222e5943";
    }
  })
})
function removeActiveSlide() {
  priceColor.forEach((item)=> {
    item.classList.remove('active-border');
  });
};

