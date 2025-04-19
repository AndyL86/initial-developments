document.querySelectorAll("#about > div.about-details-section > p").forEach((aboutText) => {
      aboutText.addEventListener('click', () => {
        aboutText.innerHTML = "In this time, I have built up my skillset and contributed to a real world, large scale retail business. I am keen to expand my skills, knowledge and experience!";
      })
});