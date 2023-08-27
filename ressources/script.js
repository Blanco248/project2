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