// Cambiar las imágenes de forma cíclica para cada cuadro
function cycleImages() {
    // Cambiar la imagen del cuadro de 'Icon'
    const iconImages = ['../Images/Bicon.png', '../Images/Bicon2.png'];
    let iconIndex = 0;
    setInterval(() => {
      document.getElementById('image-icon').src = iconImages[iconIndex];
      iconIndex = (iconIndex + 1) % iconImages.length; // Volver al inicio cuando llegue al final
    }, 2000); // Cambia cada 3 segundos
  
    // Cambiar la imagen del cuadro de 'Half Body'
    const halfBodyImages = ['../Images/Bh.png', '../Images/Bh2.png'];
    let halfBodyIndex = 0;
    setInterval(() => {
      document.getElementById('image-half-body').src = halfBodyImages[halfBodyIndex];
      halfBodyIndex = (halfBodyIndex + 1) % halfBodyImages.length; // Volver al inicio cuando llegue al final
    }, 2000); // Cambia cada 3 segundos
  
  }
  
  // Llamar a la función para iniciar el ciclo de imágenes
  cycleImages();