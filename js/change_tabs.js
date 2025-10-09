// Funcionalidad para cambiar entre pestañas
document.addEventListener('DOMContentLoaded', function() {
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const informationSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    if (productTab && imagesTab) {
        productTab.addEventListener('click', function() {
            informationSection.classList.remove('hidden');
            imagesSection.classList.add('hidden');
            productTab.classList.add('bg-blue-600', 'text-white');
            productTab.classList.remove('bg-gray-100', 'text-gray-700');
            imagesTab.classList.add('bg-gray-100', 'text-gray-700');
            imagesTab.classList.remove('bg-blue-600', 'text-white');
        });

        imagesTab.addEventListener('click', function() {
            imagesSection.classList.remove('hidden');
            informationSection.classList.add('hidden');
            imagesTab.classList.add('bg-blue-600', 'text-white');
            imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
            productTab.classList.add('bg-gray-100', 'text-gray-700');
            productTab.classList.remove('bg-blue-600', 'text-white');
        });
    }
});

// Funcionalidad para cambiar imágenes
function toExchangeImage(element) {
    const mainImage = document.getElementById('img_main');
    if (mainImage && element.src) {
        mainImage.src = element.src;
    }
}

// Funcionalidad para ver imagen en modal
function viewImage(src) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    if (modal && modalImage) {
        modalImage.src = src;
        modal.classList.remove('hidden');
    }
}

// Funcionalidad para cerrar modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});