// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active for user login modal
const userLoginModal = document.querySelector('.user-login-modal');
document.querySelector('#login-button').onclick = (e) => {
  userLoginModal.classList.toggle('active');
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
const am = document.querySelector('#login-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }

  if (!am.contains(e.target) && !userLoginModal.contains(e.target)) {
    userLoginModal.classList.remove('active');
  }
});

// ... (existing code)

// Modal Box for Item Detail
// Select the modals
const itemDetailModal1 = document.querySelector('#item-detail-modal-1');
const itemDetailModal2 = document.querySelector('#item-detail-modal-2');
const itemDetailModal3 = document.querySelector('#item-detail-modal-3');

// Select the buttons to open the modals
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const itemDetailButton1 = itemDetailButtons[0];
const itemDetailButton2 = itemDetailButtons[1];
const itemDetailButton3 = itemDetailButtons[2];

// Function to open the modal
function openModal(modal) {
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Attach event listeners to open and close modals
itemDetailButton1.addEventListener('click', function () {
  openModal(itemDetailModal1);
});

itemDetailButton2.addEventListener('click', function () {
  openModal(itemDetailModal2);
});

itemDetailButton3.addEventListener('click', function () {
  openModal(itemDetailModal3);
});

// Attach event listeners to close modals
itemDetailModal1.querySelector('.close-icon').addEventListener('click', function () {
  closeModal(itemDetailModal1);
});

itemDetailModal2.querySelector('.close-icon').addEventListener('click', function () {
  closeModal(itemDetailModal2);
});

itemDetailModal3.querySelector('.close-icon').addEventListener('click', function () {
  closeModal(itemDetailModal3);
});

// <!-- Modal Box Item Detail start -->

// klik tombol close modal
itemDetailButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    window.history.replaceState({}, '', window.location.href);
  });
});

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

function redirectToWhatsApp() {
  var phoneNumber = '62085348848511'; 
  var whatsappLink = 'https://wa.me/' + phoneNumber;
  window.open(whatsappLink, '_blank');
}

