let text = document.querySelector('#text-input');
let preview = document.querySelector('#meme-text');
text.addEventListener('keyup', () => {
  preview.innerHTML = text.value;
})

// A parte do Url foi vista na página que foi sugerida na aba de dica. Pág: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
let img = document.querySelector('#meme-insert');
let imgPreview = document.createElement('img');
let divPreview = document.querySelector('#meme-image');
divPreview.appendChild(imgPreview);
img.addEventListener('change', () => {
  imgPreview.src = URL.createObjectURL(img.files[0]);
  imgPreview.style.backgroundSize = 'cover';
  imgPreview.style.backgroundPosition = 'center';
  imgPreview.style.width = '400px'
  imgPreview.style.height = '450px'
})