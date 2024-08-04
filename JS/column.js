document.addEventListener("DOMContentLoaded", () => {
    const count = document.getElementById("column_count");
    const gap = document.getElementById("column_gap");
    const width = document.getElementById("column_width");

    const count_span = document.getElementById("count_span");
    const gap_span = document.getElementById("gap_span");
    const width_span = document.getElementById("width_span");
   
    const options = document.getElementById("options");
    const color = document.getElementById("color");
    const copy = document.getElementById("copy");
    const container = document.querySelector(".container-output-box");
    const button = document.querySelector(".btn");

    var columnvalues = { count: 0, gap: 0, width: 0};

    function updateValues() {
        column_style = options.value;
        column_color = color.value;

        columnvalues.count = count.value;
        count_span.innerHTML = columnvalues.count;

        columnvalues.gap = gap.value;
        gap_span.innerHTML = columnvalues.gap + "px";

        columnvalues.width = width.value;
        width_span.innerHTML = columnvalues.width + "px";

        const coding = `
        column-count: ${columnvalues.count};
-webkit-column-count: ${columnvalues.count};
-moz-column-count: ${columnvalues.count}; 

column-gap: ${columnvalues.gap}px;
-webkit-column-gap: ${columnvalues.gap}px;
-moz-column-gap: ${columnvalues.gap}px;

column-rule: ${columnvalues.width}px ${column_style} ${column_color};
-webkit-column-rule: ${columnvalues.width}px ${column_style} ${column_color};
-moz-column-rule: ${columnvalues.width}px ${column_style} ${column_color};
`;
        copy.value = coding.trim();
        container.style.cssText = coding;
    }

    count.addEventListener("input", updateValues);
    gap.addEventListener("input", updateValues);
    width.addEventListener("input", updateValues);
    color.addEventListener("input", updateValues);
    options.addEventListener("input", updateValues);

    button.addEventListener('click', () => {
        copy.select();
        document.execCommand('copy');
        alert("Code Copied!");
    });

    updateValues();
});
