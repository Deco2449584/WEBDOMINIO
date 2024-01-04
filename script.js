document.addEventListener("DOMContentLoaded", function () {
  const lightsButton = document.getElementById("lights-button");
  const curtainsButton = document.getElementById("curtains-button");
  const tvButton = document.getElementById("tv-button");

  lightsButton.addEventListener("click", function () {
    // Lógica para encender/apagar luces
    console.log("Lights button clicked");
  });

  curtainsButton.addEventListener("click", function () {
    // Lógica para subir/bajar cortinas
    console.log("Curtains button clicked");
  });

  tvButton.addEventListener("click", function () {
    // Lógica para encender/apagar TV
    console.log("TV button clicked");
  });
});
