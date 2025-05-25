const examDate = new Date("2025-07-10T00:00:00").getTime();
const countdown = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const distance = examDate - now;
  if (distance < 0) {
    countdown.innerHTML = "🌟 The big day has arrived! 🌟";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  countdown.innerHTML =`Only ${days}d ${hours}h ${minutes}m ${seconds}s <br>left  for Exam!`;
}, 1000);


