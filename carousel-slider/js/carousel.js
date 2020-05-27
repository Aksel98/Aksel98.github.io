const sliderImg = document.getElementsByClassName('slider-img')
const imgPosition = document.getElementById('images-count')
let imgIndex = 0
let intervalID;

autoChange()

function goForward() {
    imgIndex++
    if (imgIndex === sliderImg.length) {
        imgIndex = 0
        sliderImg[sliderImg.length - 1].style.opacity = '0'
    } else {
        sliderImg[imgIndex].style.opacity = '1'
        sliderImg[imgIndex - 1].style.opacity = '0'
    }
    clearTimeout(intervalID)
    autoChange()
}

function goBack() {
    imgIndex--
    if (imgIndex === -1) {
        imgIndex = sliderImg.length - 1
        sliderImg[imgIndex].style.opacity = '1'
        sliderImg[0].style.opacity = '0'
    } else {
        sliderImg[imgIndex].style.opacity = '1'
        sliderImg[imgIndex + 1].style.opacity = '0'
    }
    clearTimeout(intervalID)
    autoChange()
}

function autoChange() {
    sliderImg[0].style.opacity = '1'
    imgPosition.innerText = `${imgIndex + 1} / ${sliderImg.length}`
    intervalID = setInterval(goForward, 5000)
}
