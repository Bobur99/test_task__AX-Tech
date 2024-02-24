document.addEventListener("DOMContentLoaded", function() {
  // Скрыть прелоадер при полной загрузке страницы
  document.querySelector('.pre_loader').style.display = 'none';

  let $popup = document.getElementById("popup");
let $popup_section = document.getElementById("popup_section");

document.getElementById('download_btn').addEventListener("click", function (e) {
  e.preventDefault();
  $popup.style.animationName = 'none';
  $popup.style.animationName = 'popup1';
  $popup.style.animationDuration = '0.7s';

  $popup.style.display = "block";
  $popup_section.style.display = "block";
});

document.getElementById('close_popup').addEventListener("click", function (e) {
  e.preventDefault();

  $popup.style.animationName = 'popup-reverse';
  $popup.style.animationDuration = '0.7s';

  setTimeout(function () {
    $popup.style.display = "none";
    $popup_section.style.display = "none";
  }, 500);
});

function openPopup(popupId) {
  closePopup();
  document.getElementById(popupId).style.display = 'block';
}

function closePopup() {
  document.querySelectorAll('.popup_img').forEach(function(popup) {
    popup.style.display = 'none';
  });
}

document.getElementById('inform_text-m1').addEventListener('click', function() {
  openPopup('popup_img');
});
document.getElementById('inform_text-r2').addEventListener('click', function() {
  openPopup('popup_img1');
});
document.getElementById('inform_text-p1').addEventListener('click', function() {
  openPopup('popup_img2');
});
document.getElementById('inform_text-m2').addEventListener('click', function() {
  openPopup('popup_img3');
});

document.querySelectorAll('.close_img').forEach(function (closeBtn) {
  closeBtn.addEventListener('click', closePopup);
});

});




