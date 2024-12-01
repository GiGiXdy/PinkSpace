// Cambiar las imágenes de forma cíclica para cada cuadro
function cycleImages() {
    // Cambiar la imagen del cuadro de 'Icon'
    const iconImages = ['../Images/A1.png', '../Images/AS2.png', '../Images/AS3.png'];
    let iconIndex = 0;
    setInterval(() => {
      document.getElementById('image-icon').src = iconImages[iconIndex];
      iconIndex = (iconIndex + 1) % iconImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  
    // Cambiar la imagen del cuadro de 'Half Body'
    const halfBodyImages = ['../Images/AH.png', '../Images/AH2.png', '../Images/AH3.png'];
    let halfBodyIndex = 0;
    setInterval(() => {
      document.getElementById('image-half-body').src = halfBodyImages[halfBodyIndex];
      halfBodyIndex = (halfBodyIndex + 1) % halfBodyImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  
    // Cambiar la imagen del cuadro de 'Full Body'
    const fullBodyImages = ['../Images/AFULL.png', '../Images/AFULL2.png', '../Images/AFULL3.jpg'];
    let fullBodyIndex = 0;
    setInterval(() => {
      document.getElementById('image-full-body').src = fullBodyImages[fullBodyIndex];
      fullBodyIndex = (fullBodyIndex + 1) % fullBodyImages.length; // Volver al inicio cuando llegue al final
    }, 1000); // Cambia cada 3 segundos
  }
  
  // Llamar a la función para iniciar el ciclo de imágenes
  cycleImages();
  