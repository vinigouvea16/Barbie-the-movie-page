const modalContainer = document.getElementById("modalContainer");
const openModal = document.getElementById("openModal");
const youtubeIframe = document.getElementById("youtubeIframe");

const speakerOn = document.querySelector(".ph-speaker-high")
const speakerOff = document.querySelector(".ph-speaker-slash")

openModal.addEventListener("click", () =>{
  modalContainer.style.display = 'block';
})

window.addEventListener('click', (e) => {
  if(e.target == modalContainer) {
    modalContainer.style.display = 'none'
    youtubeIframe.src = youtubeIframe.src;
  }
})

function playAudio(){
  let music = document.getElementById("music")
  music.play()
  speakerOn.style.display = 'none';
  speakerOff.style.display = 'block';
}

function pauseAudio(){
  let music = document.getElementById("music")
  music.pause()
  speakerOff.style.display = 'none';
  speakerOn.style.display = 'block';
}


// speakerOn.addEventListener("click", () =>{
//   speakerOn.style.display = 'none';
//   speakerOff.style.display = 'block';
// })

// speakerOff.addEventListener("click", () =>{
  // speakerOff.style.display = 'none';
  // speakerOn.style.display = 'block';
// })

