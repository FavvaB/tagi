// Array de URLs de imágenes - asegúrate de reemplazarlas con los enlaces de tus imágenes en Drive
const images = [
    "https://drive.google.com/uc?export=view&id=1HS1jX8e71GcX3sZphl0KqY0XVfmAkoQP",
    "https://drive.google.com/uc?export=view&id=1zcJeI7mJTxl_KQiT10YlU0xlrxCh5mcQ",
    "https://drive.google.com/uc?export=view&id=1TMp744QfG25YbP5K9mkJL8MSwQPx-ef3",
    "https://drive.google.com/uc?export=view&id=1N2EAjj-HXHfQSdYkSzLEoEq1dEj2zT26",
    "https://drive.google.com/uc?export=view&id=10rNuiQJ8jDpFeLbCmsrG6pcRNtAF5VTS",
    "https://drive.google.com/uc?export=view&id=1MY7teR4YedIFFYZcpEA1voXXNUiXjLo7",
    "https://drive.google.com/uc?export=view&id=1x8ORVts1RsTzwdSY-TLkwokSNCq6ikMb",
    "https://drive.google.com/uc?export=view&id=1IGQuE-TPhu8zYvDtMIEjFO_AMBYmlCok",
    "https://drive.google.com/uc?export=view&id=1XEP3bkEtvfU-K53yQKqTrNEzoYsvlt7E",
    "https://drive.google.com/uc?export=view&id=13dVSXwbtcggBaj-WiawbxHoqhZvqj0QU"
];

// Referencia a los elementos HTML
const displayImageElement = document.getElementById("displayImage");
const scanButton = document.getElementById("scanButton");
const messageElement = document.getElementById("message");

// Evento para el botón
scanButton.addEventListener("click", function() {
    // Seleccionar una imagen aleatoria
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Mostrar la imagen con el marco dorado
    displayImageElement.src = randomImage;
    displayImageElement.style.display = "block";

    // Desactivar el botón y mostrar el mensaje de agradecimiento
    scanButton.disabled = true;
    messageElement.style.display = "block";
});
