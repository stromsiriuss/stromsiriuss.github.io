for (let i = 0; i < 50; i++) {
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.backgroundColor = `hsl(${Math.random() * 30 + 350}, 80%, 85%)`;
  document.body.appendChild(heart);
}
