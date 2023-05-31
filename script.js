// Créer un événement au scroll
// const navbar = document.querySelector("#navbar");
// const imgImprovise = document.querySelector("#imgImprovise");
let popupOpen = true;
window.addEventListener("scroll", () => {
  // Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
  if (window.scrollY > 90) {
    navbar.style.height = "60px";
  } else {
    navbar.style.height = "90px";
  }

  //   console.log(scrollPercent);
  // Faire apparaitre l'image de la partie improvise
  let scrollPercent =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (scrollPercent > 0.4) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }
  // Faire apparaitre la popup quand on est en bas du site
  if (scrollPercent > 0.9 && popupOpen) {
    popup.style.opacity = "1";
    popup.style.transform = "none";
  }
});

// Bonus : quand on clicke sur la popup elle disparait pour toujours
closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(400px)";
  popupOpen = false;
});