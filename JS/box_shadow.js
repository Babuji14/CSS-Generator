document.addEventListener("DOMContentLoaded", () => {
    const hsl = document.getElementById("horizontal");
    const vsl = document.getElementById("vertical");
    const br = document.getElementById("blur_Radius");
    const sr = document.getElementById("spread_Radius");
    const sco = document.getElementById("shadow_opacity");

    const h_span = document.getElementById("horizontal_span");
    const v_span = document.getElementById("vertical_span");
    const b_span = document.getElementById("blur_span");
    const sp_span = document.getElementById("spread_span");
    const s_span = document.getElementById("shadow_span");

    const color = document.getElementById("color");
    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var boxshadowvalues = { hsl: 0, vsl: 0, br: 0, sr: 0, sco: 0 };

    function updateValues() {
        boxshadowvalues.hsl = hsl.value;
        h_span.innerHTML = boxshadowvalues.hsl + "px";

        boxshadowvalues.vsl = vsl.value;
        v_span.innerHTML = boxshadowvalues.vsl + "px";

        boxshadowvalues.br = br.value;
        b_span.innerHTML = boxshadowvalues.br + "px";

        boxshadowvalues.sr = sr.value;
        sp_span.innerHTML = boxshadowvalues.sr + "px";

        boxshadowvalues.sco = sco.value;
        s_span.innerHTML = Math.round(boxshadowvalues.sco * 1) + "%";

        let colors = color.value;
        let rgbaColor = hexToRgba(colors, boxshadowvalues.sco);

        let boxShadow = `${boxshadowvalues.hsl}px ${boxshadowvalues.vsl}px ${boxshadowvalues.br}px ${boxshadowvalues.sr}px ${rgbaColor}`;

        const coding = `box-shadow: ${boxShadow};`;
        copy.value = coding.trim();
        container.style.boxShadow = boxShadow;
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

    updateValues();


});
