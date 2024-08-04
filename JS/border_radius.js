document.addEventListener("DOMContentLoaded", () => {
    const border_all = document.getElementById("border_all");
    const tlr = document.getElementById("tlr");
    const trr = document.getElementById("trr");
    const blr = document.getElementById("blr");
    const brr = document.getElementById("brr");
    const bw = document.getElementById("bw");

    const border_all_span = document.getElementById("border_all_span");
    const tlr_span = document.getElementById("tlr_span");
    const trr_span = document.getElementById("trr_span");
    const blr_span = document.getElementById("blr_span");
    const brr_span = document.getElementById("brr_span");
    const bw_span = document.getElementById("bw_span");

    const options = document.getElementById("options");
    const color = document.getElementById("color");
    const bgcolor = document.getElementById("bgcolor");
    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var borderRadiusValues = { tlr: 0, trr: 0, blr: 0, brr: 0 };

    function updateValues() {
        let border = [];
        let borderAll = parseInt(border_all.value);

        if (borderAll !== 0) {
            borderRadiusValues.tlr = borderAll;
            borderRadiusValues.trr = borderAll;
            borderRadiusValues.blr = borderAll;
            borderRadiusValues.brr = borderAll;
            tlr.value = borderAll;
            trr.value = borderAll;
            blr.value = borderAll;
            brr.value = borderAll;
            border_all_span.innerHTML = `${borderAll}px`;
            tlr_span.innerHTML = `${borderAll}px`;
            trr_span.innerHTML = `${borderAll}px`;
            blr_span.innerHTML = `${borderAll}px`;
            brr_span.innerHTML = `${borderAll}px`;
        } else {
            borderRadiusValues.tlr = parseInt(tlr.value);
            borderRadiusValues.trr = parseInt(trr.value);
            borderRadiusValues.blr = parseInt(blr.value);
            borderRadiusValues.brr = parseInt(brr.value);
            border_all_span.innerHTML = `0px`;
            tlr_span.innerHTML = `${borderRadiusValues.tlr}px`;
            trr_span.innerHTML = `${borderRadiusValues.trr}px`;
            blr_span.innerHTML = `${borderRadiusValues.blr}px`;
            brr_span.innerHTML = `${borderRadiusValues.brr}px`;
        }

        let borderColor = color.value;
        let backgroundColor = bgcolor.value;
        let borderWidth = parseInt(bw.value);
        let borderStyle = options.value;

        bw_span.innerHTML = `${borderWidth}px`;

        border = [
            `${borderRadiusValues.tlr}px`,
            `${borderRadiusValues.trr}px`,
            `${borderRadiusValues.blr}px`,
            `${borderRadiusValues.brr}px`
        ];

        let borderRadiusCSS = `border-radius: ${border.join(' ')};       
-webkit-border-radius: ${border.join(' ')};
-moz-border-radius: ${border.join(' ')};
`;

        let cssText = `
            ${borderRadiusCSS}
            border-width: ${borderWidth}px;
            border-style: ${borderStyle};
            border-color: ${borderColor};
            background-color: ${backgroundColor};
        `;

        copy.value = borderRadiusCSS.trim();
        container.style.cssText = cssText;
    }

    border_all.addEventListener("input", updateValues);
    tlr.addEventListener("input", () => {
        border_all.value = 0;
        updateValues();
    });
    trr.addEventListener("input", () => {
        border_all.value = 0;
        updateValues();
    });
    blr.addEventListener("input", () => {
        border_all.value = 0;
        updateValues();
    });
    brr.addEventListener("input", () => {
        border_all.value = 0;
        updateValues();
    });
    
    bw.addEventListener("input", updateValues);
    options.addEventListener("input", updateValues);
    color.addEventListener("input", updateValues);
    bgcolor.addEventListener("input", updateValues);

    button.addEventListener('click', () => {
        copy.select();
        document.execCommand('copy');
        alert("Code Copied!");
    });
});
