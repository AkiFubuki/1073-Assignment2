// Constants for query selector
var bgColorInput = document.getElementById("customNumber");
var randomColorBtn = document.getElementById("randColor");
var changeColorBtn = document.getElementById("custColor");
var selectList = document.getElementById("imageSelect");
var imageContainer = document.getElementById("images");
var studentIdDisplay = document.getElementById("myStudentId");

// Event listeners for on click event of buttons and select
selectList.addEventListener('click', changeImage);
randomColorBtn.addEventListener('click', changeRandomColor);
changeColorBtn.addEventListener('click', changeCustomColor);


// Event listener for on change event of select
selectList.addEventListener('change', addList());


// Function to change bg color from user input and add student id
function changeCustomColor() {
    const studentId = "1219275";
    studentIdDisplay.textContent = studentId;
    const inputValue = parseInt(bgColorInput.value);
    let bgColor;
    if (inputValue < 0 || inputValue > 100) {
        bgColor = 'red';
    } else if (inputValue >= 0 && inputValue < 20) {
        bgColor = 'green';
    } else if (inputValue >= 20 && inputValue < 40) {
        bgColor = 'blue';
    } else if (inputValue >= 40 && inputValue < 60) {
        bgColor = 'orange';
    } else if (inputValue >= 60 && inputValue < 80) {
        bgColor = 'purple';
    } else {
        bgColor = 'yellow';
    }
    document.body.style.backgroundColor = bgColor;
}

// Function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    bgColorInput.value = randomNumber;
    changeCustomColor();
}

// Function to generate options for select list
function addList() {
    const imageLocation = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"]; 
    for (let i = 0; i < imageLocation.length; i++) {
        const option = document.createElement('option');
        option.value = imageLocation[i];
        option.textContent = imageLocation[i];
        selectList.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = selectList.value; 
    console.log(selectedImage);
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="img/${selectedImage}" alt="${selectedImage}">`;
}