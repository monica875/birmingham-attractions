window.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedFontSize = localStorage.getItem("fontSize");
    
    const styleSheet = document.getElementById("pagestyle");
    const modeIcon = document.getElementById("modeIcon");

    if (savedTheme === "dark") {
        styleSheet.href = "DarkCSS.css";
        modeIcon.classList.replace("fa-regular", "fa-solid");
    } else {
        styleSheet.href = "LightCSS.css";
        modeIcon.classList.replace("fa-solid", "fa-regular");
    }

    if (savedFontSize === "large") {
        document.body.classList.add("large-font");
    }
};

function switchStyleSheet() {
    const styleSheet = document.getElementById("pagestyle");
    const modeIcon = document.getElementById("modeIcon");
    const isDark = styleSheet.getAttribute("href") === "DarkCSS.css";

    if (isDark) {
        styleSheet.href = "LightCSS.css";
        modeIcon.classList.replace("fa-solid", "fa-regular");
        localStorage.setItem("theme", "light");
    } else {
        styleSheet.href = "DarkCSS.css";
        modeIcon.classList.replace("fa-regular", "fa-solid");
        localStorage.setItem("theme", "dark");
    }
}

function largerFont() {
    const body = document.body;
    const isLarge = body.classList.toggle("large-font");
    localStorage.setItem("fontSize", isLarge ? "large" : "normal");
}