
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
const menuOption = profileDetails.filter((value) => value.category);
document.querySelectorAll(".screen").forEach((text) => {
  for (i = 0; i < menuOption.length; i++) {
    const option = menuOption[i].category;
    text.innerHTML += '<p>' + option + '</p>';
    }
})

document.querySelectorAll("#controller_b").forEach((bButton) => {
  bButton.addEventListener('click', () => {
    const menuOption = profileDetails.filter((value) => value.category);
    document.querySelectorAll(".screen").forEach((text) => {
    text.innerHTML = "";
      for (i = 0; i < menuOption.length; i++) {
        const option = menuOption[i].category;
        text.innerHTML += '<p>' + option + '</p>';
        }
        document.querySelector("#profile > div > div.screen-container > div.screen > p:nth-child(1)").classList.toggle("active");
    })
    console.log("BREAK")
  })
});

const highlight = document.querySelectorAll(".screen > p");
highlight[0].classList.toggle("active");

document.querySelectorAll("#controller_up").forEach((upButton) => {
  upButton.addEventListener('click', () => {
    if (highlight[2].classList.value == "active") {
      highlight[2].classList.toggle("active");
      highlight[1].classList.toggle("active");
    } else if (highlight[1].classList.value == "active") {
      highlight[1].classList.toggle("active");
      highlight[0].classList.toggle("active");
    }
  })
});
document.querySelectorAll("#controller_right").forEach((rightButton) => {
  rightButton.addEventListener('click', () => {
    console.log("Right button pressed!")
  })
});
document.querySelectorAll("#controller_down").forEach((downButton) => {
  downButton.addEventListener('click', () => {
    if (highlight[0].classList.value == "active") {
      highlight[0].classList.toggle("active");
      highlight[1].classList.toggle("active");
    } else if (highlight[1].classList.value == "active") {
      highlight[1].classList.toggle("active");
      highlight[2].classList.toggle("active");
    }
  })
});
document.querySelectorAll("#controller_left").forEach((leftButton) => {
  leftButton.addEventListener('click', () => {
    console.log("Left button pressed!")
  })
});

const menuOne = document.querySelector("#profile > div > div.screen-container > div.screen > p:nth-child(1)");
const menuTwo = document.querySelector("#profile > div > div.screen-container > div.screen > p:nth-child(2)");
const menuThree = document.querySelector("#profile > div > div.screen-container > div.screen > p:nth-child(3)");

  document.querySelectorAll("#controller_a").forEach((aButton) => {
    document.querySelectorAll(".screen > p").forEach((action) => {
    aButton.addEventListener('click', () => {
      action.innerHTML = "";
      if (menuOne.classList.value === "active") {
        menuOne.classList.toggle("active");
        action.innerHTML += '<p>' + profileDetails[0].experience[0].company + '</p>' + '<p>' + profileDetails[0].experience[0].role + '</p>' + '<p>' + profileDetails[0].experience[0].date + '</p>';
        menuTwo.classList.toggle("hide");
        menuThree.classList.toggle("hide");
      } else if (menuTwo.classList.value === "active") {
        menuTwo.classList.toggle("active");
        action.innerHTML += '<p>' + profileDetails[1].qualifications[0].institution + '</p>' + '<p>' + profileDetails[1].qualifications[0].qualification + '</p>' + '<p>' + profileDetails[1].qualifications[0].grade + '</p>';
        menuTwo.classList.toggle("hide");
        menuThree.classList.toggle("hide");
      } else if (menuThree.classList.value === "active") {
        menuThree.classList.toggle("active");
        action.innerHTML += '<p>' + profileDetails[2].languages[0].language + '</p>' + '<p>' + profileDetails[2].languages[1].frameworks + '</p>' + '<p>' + profileDetails[2].languages[2].version + '</p>';
        menuTwo.classList.toggle("hide");
        menuThree.classList.toggle("hide");
      }
    })
  });
});
