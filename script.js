function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
 
 /* pegar tag img */
  const img = document.querySelector("#profile img")

 /* substituir a imagem */
  if (html.classList.contains("ligth")) {
  /* se tiver light mode, adicionar */
  img.setAttribute("src", "./assets/avatar-light-esse.png")  
  } else {
  /* se nao tiver light mode, manter */
  img.setAttribute("src", "./assets/Avatar.png")  
  }
}


