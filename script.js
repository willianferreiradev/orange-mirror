const video = document.getElementById('camera');
const screw = document.getElementById('screw');
const flipButtton = document.getElementById('flip-button');
const screwButton = document.getElementById('screw-button');

flipButtton.addEventListener('click', () => {
  video.classList.toggle('flipped');
});

screwButton.addEventListener("click", () => {
  screw.classList.toggle('screw-visible')
})


navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error('Erro ao acessar a câmera:', err);
  });