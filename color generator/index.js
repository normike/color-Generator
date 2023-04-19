const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);
    
}
function randomColor(){
    const chars = '0123456789abcdef';
    const colorCodeLength=6;
    for (let index = 0; index< colorCodeLength; index++){
        const randomNum = math.floor(math.random() * chars.length); colorCode += chars.substring(randomNum, randomNum + 1);
        console.log(colorCode);
    }
}