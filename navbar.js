const buttons = document.querySelectorAll(".beforehover");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {

        button.classList.add("afterhover");
    });

    button.addEventListener("mouseleave", function () {

        button.classList.remove("afterhover");
    });
})

