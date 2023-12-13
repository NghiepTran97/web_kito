//change text content about
function changeContentLabel() { 
    const contentLabel = document.getElementById('contentLabel');
    if (window.matchMedia('(max-width: 576px)').matches) {
        contentLabel.textContent = 'SPRCICAL PRICE';
    } else {
      contentLabel.textContent = 'ABOUT US';
    }
  }
window.addEventListener('resize', changeContentLabel);
changeContentLabel();

//scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var body = document.querySelector('.body');
    var footer = document.querySelector('.footer');

    if (window.scrollY > body.offsetTop || window.scrollY > footer.offsetTop) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
});