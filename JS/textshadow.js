document.addEventListener("DOMContentLoaded", () => {
    const hsl = document.getElementById("horizontal");
    const vsl = document.getElementById("vertical");
    const br = document.getElementById("blur_Radius");
    const sco = document.getElementById("shadow_opacity");

    const h_span = document.getElementById("horizontal_span");
    const v_span = document.getElementById("vertical_span");
    const b_span = document.getElementById("blur_span");
    const s_span = document.getElementById("shadow_span");

    const color = document.getElementById("color");
    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var textshadowvalues = { hsl: 0, vsl: 0, br: 0, sco: 0 };

    function updateValues() {
        textshadowvalues.hsl = hsl.value;
        h_span.innerHTML = textshadowvalues.hsl + "px";

        textshadowvalues.vsl = vsl.value;
        v_span.innerHTML = textshadowvalues.vsl + "px";

        textshadowvalues.br = br.value;
        b_span.innerHTML = textshadowvalues.br + "px";

        textshadowvalues.sco = sco.value;
        s_span.innerHTML = textshadowvalues.sco + "%";

        let colors = color.value;
        let rgbaColor = hexToRgba(colors, textshadowvalues.sco);

        let textShadow = `${textshadowvalues.hsl}px ${textshadowvalues.vsl}px ${textshadowvalues.br}px ${rgbaColor}`;

        const coding = `text-shadow: ${textShadow};`;
        copy.value = coding.trim();
        container.style.textShadow = textShadow;
    }

    function hexToRgba(hex, alpha) {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},${alpha})`;
    }

    hsl.addEventListener("input", updateValues);
    vsl.addEventListener("input", updateValues);
    br.addEventListener("input", updateValues);
    sr.addEventListener("input", updateValues);
    sco.addEventListener("input", updateValues);
    color.addEventListener("input", updateValues);

    button.addEventListener('click', () => {
        copy.select();
        document.execCommand('copy');
        alert("Code Copied!");
    });

});
