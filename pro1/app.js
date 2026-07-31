let image = [
    "assest/images (1).jpg",
    "assest/images (2).jpg",
    "assest/images (3).jpg",
    "assest/images.jpg"
]
let slide = document.getElementById("img1");

let index = 0;
let changeimg =()=>{
    index++;
    if(index>=image.length){
        index=0;
    }
    slide.src = image[index];

}
setInterval(changeimg,1000);