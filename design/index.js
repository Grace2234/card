// function changeImage(){
//     const displayImage = document.getElementById('image')
//     if(displayImage.src.match('./image-product-desktop.jpg')){
//         displayImage.src = './img22.jpg'
//     } else {
//         displayImage.src = './image-product-desktop.jpg'
//     }
// }



function changeImage(){
    const img = document.getElementById('image');
    if(img.src.match('img22.jpg')){
        img.src = './image-product-desktop.jpg'
    }else {
        img.src = 'img22.jpg'
    }
    
}

const btn = document.getElementById('btn');
btn.addEventListener('click', changeImage)


console.log(btn);