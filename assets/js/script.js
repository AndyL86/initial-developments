document.querySelectorAll("#about > div.about-details-section > p").forEach((aboutText) => {
      aboutText.addEventListener('click', () => {
        aboutText.innerHTML = "In this time, I have built up my skillset and contributed to a real world, large scale retail business. I am keen to expand my skills, knowledge and experience!";
      })
});

document.querySelectorAll("#controller_up").forEach((upButton) => {
  upButton.addEventListener('click', () => {
    console.log("Up button pressed!")
  })
});
document.querySelectorAll("#controller_right").forEach((rightButton) => {
  rightButton.addEventListener('click', () => {
    console.log("Right button pressed!")
  })
});
document.querySelectorAll("#controller_down").forEach((downButton) => {
  downButton.addEventListener('click', () => {
    console.log("Down button pressed!")
  })
});
document.querySelectorAll("#controller_left").forEach((leftButton) => {
  leftButton.addEventListener('click', () => {
    console.log("Left button pressed!")
  })
});
document.querySelectorAll("#controller_a").forEach((aButton) => {
  aButton.addEventListener('click', () => {
    console.log("A button pressed!")
  })
});
document.querySelectorAll("#controller_b").forEach((bButton) => {
  bButton.addEventListener('click', () => {
    console.log("B button pressed!")
  })
});
