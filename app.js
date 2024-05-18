const icons = document.querySelectorAll(".icon");
const send_btn = document.querySelector("#send_btn");
const main = document.querySelector(".main_container");
const app_heading = document.querySelector(".app_heading");
let icon_name = "";

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon_name = icon.id;
    let icon_emoji;
    if (icon_name === "Unhappy") {
      icon_emoji = "😒";
    } else if (icon_name === "Neutral") {
      icon_emoji = "😐";
    } else if (icon_name === "Satisfied") {
      icon_emoji = "😆";
    }
    app_heading.innerHTML = `Your Feedback is ${icon_name} ${icon_emoji}`;
    get_icon_name(icon_name, icon_emoji);
  });
});

function get_icon_name(icon_name, icon_emoji) {
  send_btn.addEventListener("click", () => {
    main.innerHTML = `<html>
        <span>💖</span>
        <span>Thank You!</span>
        <span>Feedback: ${icon_name} ${icon_emoji}</span>
        <span>copyright: @dev_ricksaha2k24</span>
      </html>`;
    const spans = document.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.add("span_zoom");
    }
  });
}
