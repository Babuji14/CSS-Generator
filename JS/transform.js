document.addEventListener("DOMContentLoaded", () => {

    const rotate = document.getElementById("rotate");
    const scale = document.getElementById("scale");
    const translatey = document.getElementById("translatey");
    const translatex = document.getElementById("translatex");
    const skew = document.getElementById("skew");

    const rotate_value = document.getElementById("rotate_value");
    const scale_value = document.getElementById("scale_value");
    const translatex_value = document.getElementById("translatex_value");
    const translatey_value = document.getElementById("translatey_value");
    const skew_value = document.getElementById("skew_value");

    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var rotate_span = 0;
    var scale_span = 1;
    var skew_span = 0;
    var translatex_span = 0;
    var translatey_span = 0;

    function updateValues() {
        let transforms = [];

        rotate_span = rotate.value;
        rotate_value.innerHTML = rotate_span + "°";
        if (rotate_span != 0) {
            transforms.push(`rotate(${rotate_span}deg)`);
        }

        scale_span = scale.value;
        scale_value.innerHTML = scale_span;
        if (scale_span != 0) {
            transforms.push(`scale(${scale_span})`);
        }

        skew_span = skew.value;
        skew_value.innerHTML = skew_span + "°";
        if (skew_span != 0) {
            transforms.push(`skew(${skew_span}deg)`);
        }

        translatex_span = translatex.value;
        translatex_value.innerHTML = translatex_span + "px";
        translatey_span = translatey.value;
        translatey_value.innerHTML = translatey_span + "px";
        if (translatex_span != 0 || translatey_span != 0) {
            transforms.push(`translate(${translatex_span}px, ${translatey_span}px)`);
        }

        let coding = `
transform: ${transforms.join(' ')};
-webkit-transform: ${transforms.join(' ')};
-moz-transform: ${transforms.join(' ')};
        `;

        copy.value = coding.trim();
        container.style.cssText = coding;
    }

    rotate.addEventListener("input", updateValues);
    scale.addEventListener("input", updateValues);
    skew.addEventListener("input", updateValues);
    translatex.addEventListener("input", updateValues);
    translatey.addEventListener("input", updateValues);

    button.addEventListener("click", () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("Code Copied!");
    });
});