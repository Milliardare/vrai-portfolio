// Dynamisme pour le message de bienvenue selon l'heure
document.addEventListener("DOMContentLoaded", function () {
  const welcomeMessage = document.getElementById("welcome-message");
  const hours = new Date().getHours();

  if (hours < 12) {
    welcomeMessage.textContent = "Bonjour, bienvenue sur mon portfolio !";
  } else if (hours < 18) {
    welcomeMessage.textContent = "Bon après-midi, explorez mon travail !";
  } else {
    welcomeMessage.textContent = "Bonsoir, merci de visiter mon portfolio !";
  }

  // Dynamique pour les informations de contact (modifiable via JavaScript)
  const phoneElement = document.getElementById("phone");
  const emailElement = document.getElementById("email");

  // Tu peux modifier ces informations dans ce fichier si besoin
  phoneElement.textContent = "+241 077310915";
  emailElement.textContent = "troisphent@gmail.com";
});
