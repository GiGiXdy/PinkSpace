// Cambiar las imágenes de forma cíclica para cada cuadro
function cycleImages() {
    // Cambiar la imagen del cuadro de 'Icon'
    const iconImages = ['../Images2/ChibiCon.png', '../Images2/ChibiCon2.png', '../Images2/ChibiCon3.jpg'];
    let iconIndex = 0;
    setInterval(() => {
      document.getElementById('image-icon').src = iconImages[iconIndex];
      iconIndex = (iconIndex + 1) % iconImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  
    // Cambiar la imagen del cuadro de 'Half Body'
    const halfBodyImages = ['../Images2/ChibiH2.png', '../Images2/ChibiH.png', '../Images2/ChibiH.png'];
    let halfBodyIndex = 0;
    setInterval(() => {
      document.getElementById('image-half-body').src = halfBodyImages[halfBodyIndex];
      halfBodyIndex = (halfBodyIndex + 1) % halfBodyImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  
    // Cambiar la imagen del cuadro de 'Full Body'
    const fullBodyImages = ['../Images2/ChibiFull.png', '../Images2/ChibiFull2.png', '../Images2/ChibiFull3.png'];
    let fullBodyIndex = 0;
    setInterval(() => {
      document.getElementById('image-full-body').src = fullBodyImages[fullBodyIndex];
      fullBodyIndex = (fullBodyIndex + 1) % fullBodyImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  }
  
  // Llamar a la función para iniciar el ciclo de imágenes
  cycleImages();
  