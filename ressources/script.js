document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.querySelector(".projects");

    projectList.addEventListener("click", function(event) {
        const clickedElement = event.target;

        if (clickedElement.tagName === "A") {
            const liElement = clickedElement.parentElement;
            const className = liElement.id;
            const img = projectList.querySelector(`img.${className}`);
            const p = projectList.querySelector(`p.${className}`);

            if (img && p) {
                toggleVisibility(img);
                toggleVisibility(p);
            }
        }
    });

    function toggleVisibility(element) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
    }
});



const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY = "3-31-2023";
    const BIRTH_DAY_DATE = new Date(BIRTH_DAY);
    const intlNumberFormatter = new Intl.NumberFormat("en-US");

    setInterval(() => {
      const now = new Date();
      const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
      );

      timeContainer.innerText = intlNumberFormatter.format(difference);
    }, 1000);