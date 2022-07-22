let popup = document.querySelector("#pop-up-wrapper");
let html = document.querySelector("html");
let close_button = document.querySelector("#close-button");
popup.style.margin = ("50vh 50vw");
popup.style.height = ("20vh");
popup.style.width = ("20vw");
popup.style.backgroundColor = ("darkgrey");
popup.style.display = "none";

html.addEventListener("click", () => {
    console.log("hello");
    popup.style.display = "block";
});

close_button.addEventListener("click",(e) => {
    e.stopPropagation();
    popup.style.display = "none";
})

