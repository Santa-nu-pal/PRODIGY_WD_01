const buttons = document.querySelectorAll(".beforehover");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {

        button.classList.add("afterhover");
    });

    button.addEventListener("mouseleave", function () {

        button.classList.remove("afterhover");
    });
})

const accountbuttons = document.querySelectorAll(".beforehoveraccountoptions");

accountbuttons.forEach(button => {
    button.addEventListener("mouseenter", function () {

        button.classList.add("afterhoveraccountoptions");
    });

    button.addEventListener("mouseleave", function () {

        button.classList.remove("afterhoveraccountoptions");
    });
})