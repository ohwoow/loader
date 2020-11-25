setTimeout(() => {
  const preloader = document.querySelector('.preloader')  
  const preloaderGif = document.querySelector('.preloader__gif')  
  preloader.classList.add('hide')
  preloaderGif.classList.add('hide')
  
  setTimeout(() => {
    preloader.classList.add('close')
  }, 1000)
}, 6000)