const upload = document.getElementById('upload');
const photo = document.getElementById('photo');
const download = document.getElementById('download');

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            photo.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

download.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const frame = document.getElementById('frame');

    const aspectRatio = photo.naturalWidth / photo.naturalHeight;
    canvas.width = 1000;
    canvas.height = canvas.width / aspectRatio;

    ctx.drawImage(photo, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

    const link = document.createElement('a');
    link.download = 'bem-vindo-ao-bando-de-loucos.png';
    link.href = canvas.toDataURL();
    link.click();
});