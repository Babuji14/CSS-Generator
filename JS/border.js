document.addEventListener("DOMContentLoaded", () => {
    // Border Size
    const border_size = document.getElementById("border_size");
    const border_span = document.getElementById("border_span");

    // Border Style
    const options = document.getElementById("options");

    // Container
    const container = document.querySelector(".container-output-box");

    // Button
    const button = document.querySelector(".btn");

    // Color Inputs
    const color = document.getElementById("color");
    const bgcolor = document.getElementById("bgcolor");

    // Textarea
    const copy = document.getElementById("copy");

    let border_value = border_size.value;
    let border_style = options.value;
    let border_color = color.value;
    let background_color = bgcolor.value;

    function updateCSS() {
        border_value = border_size.value;
        border_style = options.value;
        border_color = color.value;
        background_color = bgcolor.value;

        border_span.innerHTML = border_value + "px";

        const coding = `
border-width: ${border_value}px;
border-style: ${border_style};
border-color: ${border_color};
background-color: ${background_color};
        `;

        copy.value = coding.trim();
        container.style.cssText = coding;
    }

    // Event listeners for the inputs
    border_size.addEventListener("input", updateCSS);
    options.addEventListener("input", updateCSS);
    color.addEventListener("input", updateCSS);
    bgcolor.addEventListener("input", updateCSS);

    // Event listener for the copy button
    button.addEventListener('click', () => {
        copy.select();
        document.execCommand('copy');
        alert("Code Copied!");
    });
});
