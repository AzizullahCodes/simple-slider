let currentImg = 0;
let getImg = document.querySelectorAll('img');
console.log(getImg);
// first function 
function showImage(index){for(let i = 0;i < getImg.length;i++){getImg[i].classList.remove('visib')}
getImg[index].classList.add('visib')}

// second function
function previous(){currentImg = (currentImg + 1)% getImg.length;
    showImage(currentImg)
}
// third function 
function next(){currentImg = (currentImg - 1 + getImg.length)% getImg.length;
    showImage(currentImg)
}