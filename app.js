// Lista de códigos válidos
const validCodes = ["01NFT", "02NFT", "03NFT", "04NFT", "05NFT", "06NFT", "07NFT", "08NFT", "09NFT", "10NFT"];
// Lista de imágenes alojadas en el repositorio
const images = [
    "./img/nft1.png",
    "./img/nft2.png",
    "./img/nft3.png",
    "./img/nft4.png",
    "./img/nft5.png",
    "./img/nft6.png",
    "./img/nft7.png",
    "./img/nft8.png",
    "./img/nft9.png",
    "./img/nft10.png"
];

// Almacena los códigos usados
let usedCodes = JSON.parse(localStorage.getItem("usedCodes")) || [];
let savedNFTs = JSON.parse(localStorage.getItem("savedNFTs")) || [];

// Evento de validación y generación
document.getElementById("submitCode").addEventListener("click", function () {
    const codeInput = document.getElementById("codeInput").value.trim();

    if (validCodes.includes(codeInput)) {
        if (usedCodes.includes(codeInput)) {
            alert("Este código ya ha sido utilizado.");
        } else {
            // Selección aleatoria de imagen
            const randomImage = images[Math.floor(Math.random() * images.length)];
            const dateCreated = new Date().toLocaleString();

            // Mostrar el NFT generado
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `<img src="${randomImage}" alt="NFT Generado">`;

            // Guardar el NFT en almacenamiento local
            savedNFTs.push({ image: randomImage, date: dateCreated });
            usedCodes.push(codeInput);
            localStorage.setItem("savedNFTs", JSON.stringify(savedNFTs));
            localStorage.setItem("usedCodes", JSON.stringify(usedCodes));
            alert("NFT generado y guardado en tu perfil.");
        }
    } else {
        alert("Código inválido. Por favor, ingresa un código válido.");
    }
});

// Botón de reinicio
document.getElementById("resetButton").addEventListener("click", function () {
    localStorage.clear();
    alert("Se han reiniciado los datos. Ahora pueden probar diferentes usuarios.");
    location.reload();
});
