const config = {
    type: 'carousel',
    perView: 4,
    autoplay: '2000',
    breakpoints: {
        1069:{
            perView: 3,
        },
        817:{
            perView: 2,
        },
        535:{
            perView: 1,
        }
    }
}


const config2 = {
    type: 'carousel',
    perView: 1,
    autoplay: '4000',
}

const config3 = {
    type: 'carousel',
    perView: 1,
    autoplay: '4000',
}

new Glide('.glide', config).mount()

new Glide('.glide2', config2).mount()
//aa

$("#Glide").glide({
    type: "carousel",
    autoplay: "5000"
  });
  