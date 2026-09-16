const imageUrls = [
    "https://picsum.photos/400/600?random=1",
    "https://picsum.photos/400/400?random=2",
    "https://picsum.photos/400/800?random=3",
    "https://picsum.photos/400/500?random=4",
    "https://picsum.photos/400/700?random=5",
    "https://picsum.photos/400/450?random=6",
    "https://picsum.photos/400/550?random=7",
    "https://picsum.photos/400/650?random=8",
    "https://picsum.photos/400/350?random=9",
    "https://picsum.photos/400/750?random=10",
    "https://picsum.photos/400/400?random=11",
    "https://picsum.photos/400/600?random=12",
    "https://picsum.photos/400/500?random=13",
    "https://picsum.photos/400/800?random=14",
    "https://picsum.photos/400/450?random=15",
    "https://picsum.photos/400/700?random=16",
    "https://picsum.photos/400/650?random=17",
    "https://picsum.photos/400/400?random=18",
    "https://picsum.photos/400/550?random=19",
    "https://picsum.photos/400/750?random=20"
];

const pinContainer = document.getElementById('pin-container');

function createPin(imageUrl) {
    const pin = document.createElement('div');
    pin.classList.add('pin');

    const img = document.createElement('img');
    img.src = imageUrl;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerText = 'Save';

    const bottomIcons = document.createElement('div');
    bottomIcons.classList.add('bottom-icons');
    
    const shareBtn = document.createElement('button');
    shareBtn.classList.add('icon-btn');
    shareBtn.innerHTML = '<span class="material-icons">ios_share</span>';
    
    const moreBtn = document.createElement('button');
    moreBtn.classList.add('icon-btn');
    moreBtn.innerHTML = '<span class="material-icons">more_horiz</span>';

    bottomIcons.appendChild(shareBtn);
    bottomIcons.appendChild(moreBtn);

    overlay.appendChild(saveBtn);
    overlay.appendChild(bottomIcons);

    pin.appendChild(img);
    pin.appendChild(overlay);

    return pin;
}

for (let i = 0; i < imageUrls.length; i++) {
    const newPin = createPin(imageUrls[i]);
    pinContainer.appendChild(newPin);
}
