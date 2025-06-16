/* About me section */
const aboutMe = {
  paraOne:
    "Hello! My name's Andy and I'm a Full Stack Developer. I started my journey as a Web Developer in 2023 with a specialism in Ecommerce applications. Click to continue.. ",
  paraTwo:
    "In this time, I have built up my skillset and contributed to a real world, large scale retail business as a Shopify Front End Developer. Click to continue..",
  paraThree:
    "I am keen to grow my experience and knowledge as a Full Stack Developer and further my career.",
};

let count = 0;
const skyline = Object.entries(aboutMe);
document.getElementById("aboutText").innerHTML = skyline[count][1];
document.getElementById("aboutText").addEventListener("click", function () {
  count++;
  if (count >= skyline.length) {
    count = 0;
  }
  this.innerHTML = skyline[count][1];
});



/* Profile section */
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
    {language: ["HTML", " CSS", " Javascript", " Python"]},
    {frameworks: ["Shopify Liquid", " Bootstrap", " Tailwind", " JQuery", " ReactJS", " Django"]},
    {version: ["GIT", " SourceTree", " Bitbucket"]},
    {analytics: ["Google analytics", "Google tag manager", "Dynamic Yield"]}
  ]
}
]

document.querySelectorAll("#controller_b").forEach((bButton) => {
  bButton.addEventListener('click', () => {
    document.querySelectorAll(".inner-screen").forEach((text) => {
    text.innerHTML = "";
    tester();
    // console.log("B BUTTON")
  })
})
});

function tester() {
const menuOption = profileDetails.filter((value) => value.category);
document.querySelectorAll(".inner-screen").forEach((text) => {
  for (i = 0; i < menuOption.length; i++) {
    const option = menuOption[i].category;
    text.innerHTML += '<p>' + option + '</p>';
    }
})



const highlight = document.querySelectorAll(".inner-screen > p");
highlight[0].classList.toggle("active");

document.querySelectorAll("#controller_up").forEach((upButton) => {
  upButton.addEventListener('click', () => {
    console.log("UP BUTTON")
    if (highlight[2].classList.value == "active") {
      highlight[2].classList.toggle("active");
      highlight[1].classList.toggle("active");
    } else if (highlight[1].classList.value == "active") {
      highlight[1].classList.toggle("active");
      highlight[0].classList.toggle("active");
    }
  })
});
document.querySelectorAll("#controller_down").forEach((downButton) => {
  downButton.addEventListener('click', () => {
    // console.log("DOWN BUTTON")
    if (highlight[0].classList.value == "active") {
      highlight[0].classList.toggle("active");
      highlight[1].classList.toggle("active");
    } else if (highlight[1].classList.value == "active") {
      highlight[1].classList.toggle("active");
      highlight[2].classList.toggle("active");
    }
  })
});
// document.querySelectorAll("#controller_right").forEach((rightButton) => {
//   rightButton.addEventListener('click', () => {
//     console.log("Right button pressed!")
//   })
// });
// document.querySelectorAll("#controller_left").forEach((leftButton) => {
//   leftButton.addEventListener('click', () => {
//     console.log("Left button pressed!")
//   })
// });

const menuOne = document.querySelector("#profile > div > div.screen-container > div.screen > div.inner-screen > p:nth-child(1)");
const menuTwo = document.querySelector("#profile > div > div.screen-container > div.screen > div.inner-screen > p:nth-child(2)");
const menuThree = document.querySelector("#profile > div > div.screen-container > div.screen > div.inner-screen > p:nth-child(3)");

  document.querySelectorAll("#controller_a").forEach((aButton) => {
    document.querySelectorAll(".inner-screen > p").forEach((action) => {
    aButton.addEventListener('click', () => {
    // console.log("A BUTTON")
      action.innerHTML = "";
      if (menuOne.classList.value === "active") {
        menuOne.classList.toggle("active");
        action.innerHTML = '<p>' + 'Company: ' + profileDetails[0].experience[0].company + '</p>' + '<p>' + 'Role: ' + profileDetails[0].experience[0].role + '</p>' + '<p>' + 'Date: ' + profileDetails[0].experience[0].date + '</p>';
      } else if (menuTwo.classList.value === "active") {
        menuTwo.classList.toggle("active");
        action.innerHTML = '<p>' + 'Institution: ' + profileDetails[1].qualifications[0].institution + '</p>' + '<p>' + 'Qualification: ' + profileDetails[1].qualifications[0].qualification + '</p>' + '<p>' + 'Grade: ' + profileDetails[1].qualifications[0].grade + '</p>';
      } else if (menuThree.classList.value === "active") {
        menuThree.classList.toggle("active");
        action.innerHTML = '<p>' + 'Languages: ' + profileDetails[2].languages[0].language + '</p>' + '<p>' + 'Frameworks: ' + profileDetails[2].languages[1].frameworks + '</p>' + '<p>' + 'Version Control: ' + profileDetails[2].languages[2].version + '</p>';
        const removeMarginOne = document.querySelectorAll(".inner-screen > p");
        const removeMarginTwo = document.querySelectorAll(".inner-screen > p > p");
        for (i = 0; i < removeMarginOne.length; i++) {
        removeMarginOne[i].style.marginBottom = "0px";
        removeMarginOne[0].style.paddingTop = "5px";
        }
        for (i = 0; i < removeMarginTwo.length; i++) {
          removeMarginTwo[i].style.marginBottom = "0px";
          }
      }
    })
  });
});
}

tester();