document.addEventListener("DOMContentLoaded", () => {
    const grayscale = document.getElementById("grayscale");
    const sepia = document.getElementById("sepia");
    const blur = document.getElementById("blur");
    const brightness = document.getElementById("brightness");
    const hue_rotate = document.getElementById("hue_rotate");
    const saturate = document.getElementById("saturate");
    const opacity = document.getElementById("opacity");
    const contrast = document.getElementById("contrast");
    const invert = document.getElementById("invert");

    const grayscale_span = document.getElementById("grayscale_span");
    const sepia_span = document.getElementById("sepia_span");
    const blur_span = document.getElementById("blur_span");
    const brightness_span = document.getElementById("brightness_span");
    const hue_rotate_span = document.getElementById("hue_rotate_span");
    const saturate_span = document.getElementById("saturate_span");
    const opacity_span = document.getElementById("opacity_span");
    const contrast_span = document.getElementById("contrast_span");
    const invert_span = document.getElementById("invert_span");

    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var filtervalues = { grayscale: 0, sepia: 0, blur: 0, brightness: 0,  hue_rotate: 0, saturate: 0, opacity: 0, contrast: 0, invert: 0 };

    function updateValues() {
        let filter = [];
        filtervalues.grayscale=grayscale.value;
        grayscale_span.innerHTML=filtervalues.grayscale+"%";
        if (filtervalues.grayscale != 0) {
            filter.push(`grayscale(${filtervalues.grayscale}%)`);
        }

        filtervalues.sepia=sepia.value;
        sepia_span.innerHTML=filtervalues.sepia+"%";
        if (filtervalues.sepia != 0) {
            filter.push(`sepia(${filtervalues.sepia}%)`);
        }
        
        filtervalues.blur=blur.value;
        blur_span.innerHTML=filtervalues.blur+"px"
        if (filtervalues.blur != 0) {
            filter.push(`blur(${filtervalues.blur}%)`);
        }

        filtervalues.brightness=brightness.value;
        brightness_span.innerHTML=filtervalues.brightness+"%"
        if (filtervalues.brightness != 100) {
            filter.push(` brightness(${filtervalues.brightness}%)`);
        }

        filtervalues.hue_rotate=hue_rotate.value;
        hue_rotate_span.innerHTML=filtervalues.hue_rotate+"°";
        if (filtervalues.hue_rotate != 0) {
            filter.push(`hue-rotate(${filtervalues.hue_rotate}deg)`);
        }
        
        filtervalues.saturate=saturate.value;
        saturate_span.innerHTML=filtervalues.saturate+"%";
        if (filtervalues.saturate !=100) {
            filter.push(`saturate(${filtervalues.saturate}%)`);
        }
        
        filtervalues.opacity=opacity.value;
        opacity_span.innerHTML=filtervalues.opacity+"%";
        if (filtervalues.opacity != 100) {
            filter.push(`opacity(${filtervalues.opacity}%)`);
        }
        
        filtervalues.contrast=contrast.value;
        contrast_span.innerHTML=filtervalues.contrast+"%";
        if (filtervalues.contrast != 100) {
            filter.push(`contrast(${filtervalues.contrast}%)`);
        }
        

        filtervalues.invert=invert.value;
        invert_span.innerHTML=filtervalues.invert+"%";
        if (filtervalues.invert != 0) {
            filter.push(`invert(${filtervalues.invert}%)`);
        }
        

        
        let coding = `
        filter: ${filter.join(' ')};
-webkit-filter: ${filter.join(' ')};
-moz-filter: ${filter.join(' ')};
        `;

        copy.value = coding.trim();
        container.style.cssText = coding;
    }


    grayscale.addEventListener("input", updateValues);
    sepia.addEventListener("input", updateValues);
    blur.addEventListener("input", updateValues);
    brightness.addEventListener("input", updateValues);
    hue_rotate.addEventListener("input", updateValues);
    saturate.addEventListener("input", updateValues);
    opacity.addEventListener("input", updateValues);
    contrast.addEventListener("input", updateValues);
    invert.addEventListener("input", updateValues);

    updateValues();
    button.addEventListener('click', () => {
        copy.select();
        document.execCommand('copy');
        alert("Code Copied!");
    });
});