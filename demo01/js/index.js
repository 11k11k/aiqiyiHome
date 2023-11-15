// 获取轮播图容器和轮播图包裹器
const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.getElementById('carouselWrapper');

// 设置轮播图的宽度和初始索引
const itemWidth = 1400;
let currentIndex = 0;

// 自动轮播
function autoSlide() {
  if (carouselWrapper && carouselWrapper.children) {
    currentIndex = (currentIndex + 1) % carouselWrapper.children.length;
    updateCarousel();
  }
}

// 更新轮播图的位置
function updateCarousel() {
  const newPosition = -currentIndex * itemWidth;
  carouselWrapper.style.transform = `translateX(${newPosition}px)`;
}

// 使用定时器触发自动轮播
let slideInterval = setInterval(autoSlide, 2000);
console.log('carouselContainer:', carouselContainer);
// 鼠标悬停时停止轮播
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// 鼠标移开时恢复轮播
carouselContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, 2000);
});

document.addEventListener('DOMContentLoaded', function () {
  // Show the button when scrolling down
  window.onscroll = function () {
    showScrollTopButton();
  };

  // Smooth scroll to top when the button is clicked
  document.getElementById('scrollToTopBtn').onclick = function () {
    scrollToTop();
  };
});

function showScrollTopButton() {
  var button = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
}
