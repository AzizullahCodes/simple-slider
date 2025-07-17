
let currentImg = 0;
let getImgBoxes = document.querySelectorAll('.image-box');

function showImage(index) {
  for (let i = 0; i < getImgBoxes.length; i++) {
    getImgBoxes[i].classList.remove('active');
  }
  getImgBoxes[index].classList.add('active');
}

function next() {
  currentImg = (currentImg + 1) % getImgBoxes.length;
  showImage(currentImg);
}

function previous() {
  currentImg = (currentImg - 1 + getImgBoxes.length) % getImgBoxes.length;
  showImage(currentImg);
}

// Initialize: show first image
 showImage(currentImg);
