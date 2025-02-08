const messages = [
    "Yakin Nihh?",
    "Yakinn bangettt??",
    "Betulann tak mauu?",
    "Pweasee Ibuuu...",
    "Coba Bacaa lagii dehh!",
    "Kalau tidak aku jadii sedboy nihh...",
    "Jadi sedboy aja lah...",
    "parahhh bangettt...",
    "yaudahh dehhh...",
    "ehh haruss mauuu! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}