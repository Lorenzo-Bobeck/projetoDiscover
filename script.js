function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.src = "./assets/avatar-light.png"
    img.alt =
      "Foto de perfil do Mayk Brito sorrindo, com óculos escuros e fundo azul"
  } else {
    img.src = "./assets/avatar.png"
    img.alt = "Foto de perfil do Mayk Brito sério, com óculos e fundo azul"
  }
}
