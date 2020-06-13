/*galeria */
function galeriaImagenes() {
    const highlight = document.querySelector(".crepes-gallery");
    const previews = document.querySelectorAll(".crepes-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
  }
  
  galeriaImagenes();