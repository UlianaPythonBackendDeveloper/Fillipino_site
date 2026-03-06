let currentPosition = 0;
const track = document.getElementById('track');
const cards = document.querySelectorAll('.slide-card');
const cardsToShow = 4; // Сколько фото видим одновременно
const totalCards = cards.length;

function moveSlide(direction) {
    const cardWidth = cards[0].offsetWidth + 20; // Ширина карты + gap
    const maxScroll = totalCards - cardsToShow;

    currentPosition += direction;

    // Зацикливание
    if (currentPosition < 0) {
        currentPosition = maxScroll;
    } else if (currentPosition > maxScroll) {
        currentPosition = 0;
    }

    const moveDistance = currentPosition * cardWidth;
    track.style.transform = `translateX(-${moveDistance}px)`;
}
document.getElementById('feedback-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('message', document.getElementById('message').value);

    try {
        const response = await fetch('http://localhost:8000/send-feedback', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        
        if (result.status === 'success') {
            alert(result.message);
            this.reset(); // Очистить форму
        } else {
            alert("Ошибка при отправке.");
        }
    } catch (error) {
        console.error('Ошибка:', error);
        alert("Сервер не отвечает. Проверь, запущен ли Python!");
    }
});