const CODEWORD_HASH =
  "ef490ea9b768d5b510ef2d4e8cda7d99c530ab08eb38918963c61f0d1904473e";

function normalizeCodeword(value) {
  return value.trim().toLocaleLowerCase("de-DE");
}

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

const codeForm = document.querySelector("#code-form");

if (codeForm) {
  const input = document.querySelector("#codeword");
  const errorMessage = document.querySelector("#error-message");

  codeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorMessage.hidden = true;

    const enteredHash = await sha256(normalizeCodeword(input.value));

    if (enteredHash === CODEWORD_HASH) {
      window.location.href = "geschenk.html";
      return;
    }

    errorMessage.hidden = false;
    input.select();
  });
}

const giftImage = document.querySelector("#gift-image");
const imagePlaceholder = document.querySelector("#image-placeholder");

if (giftImage && imagePlaceholder) {
  giftImage.addEventListener("error", () => {
    if (giftImage.src.endsWith("Geschenk.jpg")) {
      giftImage.src = "Geschenk.png";
      return;
    }

    giftImage.hidden = true;
    imagePlaceholder.hidden = false;
  });
}

const confetti = document.querySelector("#confetti");

if (confetti) {
  const colors = ["#dca6ae", "#e8c2b5", "#eed8ba", "#c7d9d0", "#f4d9d8"];

  for (let index = 0; index < 54; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.setProperty("--drift", `${Math.round(Math.random() * 180 - 90)}px`);
    piece.style.setProperty("--rotation", `${Math.round(Math.random() * 540 - 270)}deg`);
    piece.style.animationDelay = `${Math.random() * 0.15}s`;
    confetti.appendChild(piece);
  }

  window.setTimeout(() => {
    confetti.replaceChildren();
  }, 1500);
}
