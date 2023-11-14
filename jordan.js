function changeMainImage(clickedImage) {
  var mainImage = document.getElementById('main-shoe-image');
  mainImage.src = clickedImage.src;
}


function changeSize(sizeNumber) {
  var selectedSize = document.getElementById('selected-size');
  selectedSize.textContent = 'Размер: ' + sizeNumber;
}
