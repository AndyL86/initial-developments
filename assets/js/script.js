/* About me section */
        const aboutMe = {
        paraOne: "Hello! My name's Andy and I'm a Full Stack Developer. I started my journey as a Web Developer in 2023 with a specialism in Ecommerce applications. Click to continue.. ",
        paraTwo: "In this time, I have built up my skillset and contributed to a real world, large scale retail business as a Shopify Front End Developer. Click to continue..",
        paraThree: "I am keen to grow my experience and knowledge as a Full Stack Developer and further my career."
        };

        let count = 0;
        const skyline = Object.entries(aboutMe);
        document.getElementById("aboutText").innerHTML = skyline[count][1];
        document.getElementById("aboutText").addEventListener("click", function(){
        count++;
        if (count >= skyline.length) {
            count = 0;
        }
        this.innerHTML = skyline[count][1];
        });