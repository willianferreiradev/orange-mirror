const captureButton = document.getElementById('capture-button');
const video = document.getElementById('camera');
const moldura = document.querySelector('.mirror');
const screw = document.getElementById('screw');

captureButton.addEventListener('click', () => {
  // Criar um canvas do tamanho da moldura
  const canvas = document.createElement('canvas');
  const width = moldura.width; // pega largura da imagem da moldura
  const height = moldura.height; // pega altura da imagem da moldura
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Desenha o frame atual do vídeo centralizado no canvas
  ctx.drawImage(video, (width - video.videoWidth) / 2, (height - video.videoHeight) / 2, video.videoWidth, video.videoHeight);

  // Desenha a moldura por cima
  ctx.drawImage(moldura, 0, 0, width, height);

  // Se o parafuso estiver visível, desenha ele também
  if (screw.classList.contains('screw-visible')) {
    ctx.drawImage(screw, 3, 10, screw.width, screw.height);
  }

  // Converter para imagem e baixar
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'espelho-laranja.png';
  link.click();
});