const text = document.querySelector('#text-input');
const preview = document.querySelector('#meme-text');
text.addEventListener('keyup', () => {
  preview.innerHTML = text.value;
});

// A parte do Url foi vista na página que foi sugerida na aba de dica. Pág: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const img = document.querySelector('#meme-insert');
// let imgPreview = document.createElement('img');
const imgPreview = document.querySelector('#meme-image');
// divPreview.appendChild(imgPreview);
img.addEventListener('change', () => {
  imgPreview.src = URL.createObjectURL(img.files[0]);
});

const fire = document.createElement('button');
fire.id = 'fire';
fire.innerText = 'Fire 🔥';
fire.style.color = 'white';
fire.style.backgroundColor = 'red';
document.body.appendChild(fire);
const container = document.querySelector('#meme-image-container');
fire.addEventListener('click', () => {
  container.style.border = '3px dashed rgb(255, 0, 0)';
});

const water = document.createElement('button');
water.id = 'water';
water.innerText = 'Water 💦';
water.style.color = 'white';
water.style.backgroundColor = 'blue';
document.body.appendChild(water);
water.addEventListener('click', () => {
  container.style.border = '5px double rgb(0, 0, 255)';
});

const earth = document.createElement('button');
earth.id = 'earth';
earth.innerText = 'Earth 🌎';
earth.style.color = 'white';
earth.style.backgroundColor = 'green';
document.body.appendChild(earth);
earth.addEventListener('click', () => {
  container.style.border = '6px groove rgb(0, 128, 0)';
});

const memeTitle = document.createElement('div');
memeTitle.innerText = 'Memes pré prontos';
memeTitle.id = 'meme-title';
document.body.appendChild(memeTitle);
const memesContainer = document.createElement('div');
memesContainer.id = 'memes-container';
document.body.appendChild(memesContainer);

const meme1 = document.createElement('div');
meme1.id = 'meme-1';
meme1.className = 'memes';
memesContainer.appendChild(meme1);
const meme2 = document.createElement('div');
meme2.id = 'meme-2';
meme2.className = 'memes';
memesContainer.appendChild(meme2);
const meme3 = document.createElement('div');
meme3.id = 'meme-3';
meme3.className = 'memes';
memesContainer.appendChild(meme3);
const meme4 = document.createElement('div');
meme4.id = 'meme-4';
meme4.className = 'memes';
memesContainer.appendChild(meme4);

meme1.addEventListener('click', () => {
  imgPreview.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  imgPreview.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  imgPreview.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  imgPreview.src = 'imgs/meme4.png';
});
