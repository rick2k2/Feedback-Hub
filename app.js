const icons = document.querySelectorAll(".icon");
const send_btn = document.querySelector("#send_btn");
const main = document.querySelector(".main_container");
let icon_name = "";

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon_name = icon.id;
    get_icon_name(icon_name);
  });
});

function get_icon_name(icon_name) {
  console.log(icon_name);
  send_btn.addEventListener("click", () => {
    console.log("send button fired");
    let icon;
    if (icon_name === "Unhappy") {
      icon = "😒";
    } else if (icon_name === "Neutral") {
      icon = "😐";
    } else if (icon_name === "Satisfied") {
      icon = "😆";
    }
    main.innerHTML = `<html>
        <span>💖</span>
        <span>Thank You!</span>
        <span>Feedback: ${icon_name} ${icon}</span>
        <span>copyright: @dev_ricksaha2k24</span>
      </html>`;

    console.log(main.innerHTML);
    const spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.add("span_zoom");
    }
  });
}
