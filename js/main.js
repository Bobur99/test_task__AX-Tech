function togglePopup() {
    let popup = document.getElementById("popup");
    let popup_section = document.getElementById("popup_section");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
    popup_section.style.display = (popup_section.style.display === "none") ? "block" : "none";
  }

  document.getElementById('inform_text-m1').addEventListener('click', function() {
    document.getElementById('popup_img').style.display = 'block';
  });
  
  document.getElementById('closePopup_img').addEventListener('click', function() {
    document.getElementById('popup_img').style.display = 'none';
  });

  document.getElementById('inform_text-r2').addEventListener('click', function() {
    document.getElementById('popup_img1').style.display = 'block';
  });
  
  document.getElementById('closePopup_img1').addEventListener('click', function() {
    document.getElementById('popup_img1').style.display = 'none';
  });

  document.getElementById('inform_text-p1').addEventListener('click', function() {
    document.getElementById('popup_img2').style.display = 'block';
  });
  
  document.getElementById('closePopup_img2').addEventListener('click', function() {
    document.getElementById('popup_img2').style.display = 'none';
  });

  document.getElementById('inform_text-m2').addEventListener('click', function() {
    document.getElementById('popup_img3').style.display = 'block';
  });
  
  document.getElementById('closePopup_img3').addEventListener('click', function() {
    document.getElementById('popup_img3').style.display = 'none';
  });