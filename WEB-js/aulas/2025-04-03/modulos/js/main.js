import usuarios from "./users.js"
import manageUsers from "./manageUsers.js"

window.addEventListener("DOMContentLoaded", () => {
    manageUsers.showMachos(usuarios, "M");
    manageUsers.showAllUsers(usuarios)
})