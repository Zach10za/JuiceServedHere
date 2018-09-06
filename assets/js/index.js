const dropdownMenu = document.getElementById("dropdown-menu");
const mainMenu = document.getElementsByClassName("menu-main")[0];
const menuItems = mainMenu.getElementsByTagName("a");
[...menuItems].forEach(item => item.addEventListener('click', toggleDropdown));

let dropdown = false; // dropdown starts hidden

function toggleDropdown(event) {
    event.stopPropagation();
    if (dropdown && event.target.classList.contains("active")) {
        dropdown = false;
        dropdownMenu.classList.remove("show");
        event.target.classList.remove("active");
    } else {
        [...menuItems].forEach(item => item.classList.remove("active"));
        dropdown = true;
        dropdownMenu.classList.add("show");
        event.target.classList.add("active");
    }
}

// Close dropdown if click not on nav
document.addEventListener("click", () => {
    dropdown = false;
    dropdownMenu.classList.remove("show");
    [...menuItems].forEach(item => item.classList.remove("active"));
});