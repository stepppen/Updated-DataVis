const button = document.getElementById("ABOUT");
let wasClicked = false;


button.addEventListener < 'click' > (
    function onClick(event) {
        if (!wasClicked) {
            event.target.style.opacity = 0.5;
            wasClicked = true;
        }
        else {
            event.target.style.opacity = 1;
            wasClicked = false;
        }
    })

