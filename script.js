const colorScheme = document.getElementById("color-scheme");

document.getElementById("color-scheme-btn").addEventListener("click", () => {
  colorScheme.innerHTML = "";

  const colorHex = document.getElementById("color-pick").value;
  const colorMode = document.getElementById("color-mode").value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHex.slice(
      1
    )}&mode=${colorMode}&count=5`
  )
    .then((res) => res.json())
    .then((scheme) => {
      let colorCodesHtml = "";
      scheme.colors.forEach((color) => {
        const colorEl = document.createElement("div");
        colorEl.style.backgroundColor = color.hex.value;
        colorCodesHtml += `
          <div class="color-code">${color.hex.value}</div>
        `;
        colorScheme.appendChild(colorEl);
      });
      colorScheme.innerHTML += colorCodesHtml;
    });
});
