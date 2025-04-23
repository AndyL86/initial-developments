
const profileDetails = [{
  category: "Work Experience",
  experience: [
    {company: "Mamas and Papas", role: "Shopify Front End Developer", date: "October 2023 - March 2025"},
    {company: "Project Kahn", role: "Product Manager", date: "March 2021 - July 2023"},
    {company: "LTE Scientific", role: "Purchasing Manager", date: "March 2020 - March 2021"}
  ]
},
{
  category: "Qualifications",
  qualifications: [
    {institution: "The Code Institute", qualification: "Full Stack Web Development", grade: "Diploma - Merit", date: "2022 - 2023"},
    {institution: "Myerscough College", qualification: "Motorsport Supply Chain Management and Logistics", grade: "First Class BSc (Hons)", date: "2013 - 2016"}
  ]
},
{
  category: "Coding Languages",
  languages: [
    {language: ["HTML", "CSS", "Javascript", "Python"]},
    {frameworks: ["Shopify Liquid", "Bootstrap", "Tailwind", "JQuery", "ReactJS", "Django"]},
    {version: ["GIT", "SourceTree", "Bitbucket"]},
    {analytics: ["Google analytics", "Google tag manager", "Dynamic Yield"]}
  ]
}
]


document.querySelectorAll("#about > div.about-details-section > p").forEach((aboutText) => {
      aboutText.addEventListener('click', () => {
        aboutText.innerHTML = "In this time, I have built up my skillset and contributed to a real world, large scale retail business. I am keen to expand my skills, knowledge and experience!";
      })
});

document.querySelectorAll(".screen").forEach((text) => {
  const menuOption = profileDetails.filter((value) => value.category);
  for (i = 0; i < menuOption.length; i++) {
    const option = menuOption[i].category;
    text.innerHTML += '<p>' + option + '</p>';
    }
})

const highlight = document.querySelectorAll(".screen > p");
for (i = 0; i < highlight.length; i++) {
  highlight[0].classList.toggle("active");
}

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
