
document.addEventListener("DOMContentLoaded", function () {

    const billingToggle = document.getElementById("billingToggle");

    const prices = document.querySelectorAll(".amount");

    const billingNotes = document.querySelectorAll(".billing-note");

    
    billingToggle.addEventListener("change", function () {

        prices.forEach(function (price, index) {

            if (billingToggle.checked) {
                price.textContent = price.dataset.yearly;
                billingNotes[index].textContent = "Billed yearly";
            } else {
                price.textContent = price.dataset.monthly;
                billingNotes[index].textContent = "Billed monthly";
            }

        });

    });

    const buttons = document.querySelectorAll(".plan-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest(".card");
            const planName = card.querySelector("h2").textContent;

            alert("Thank you! You selected the " + planName + " plan.");

        });

    });

});
