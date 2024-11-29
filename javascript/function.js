
function toggleContent(element) {
    const text = element.querySelector("p");
    const img = element.querySelector("img");

    if (text && img) {
        if (text.style.display === "none") {
            text.style.display = "block";
            img.style.display = "none";
            element.style.backgroundColor = "#b0e0e6"; 
        } else {
            text.style.display = "none";
            img.style.display = "block";
            element.style.backgroundColor = "#ffffff";
        }
    }
}