import { navigateTo } from "./router.js";
console.log("app.js is running!");

window.login = () => {
    const mail = document.querySelector("#login-mail").value;
    const password = document.querySelector("#login-password").value;

    console.log(mail, password);

    if(mail === "test" && password === "test") {
        console.log("User is authenticated");
        localStorage.setItem("userIsAuthenticated", true);
        navigateTo("#/");
    } else {
        console.log("User is not authenticated");
    }
}
