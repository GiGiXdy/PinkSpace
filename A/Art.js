function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = img.src; // Copia la ruta de la imagen
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
