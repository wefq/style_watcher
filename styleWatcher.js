const createModal = () => {
    const WATCHER = document.createElement("div");
    WATCHER.classList.add("styleWatcher");
    document.querySelector("body").appendChild(WATCHER);
};

const updateWatcherLocation = (e) => {
    const WATCHER = document.querySelector(".styleWatcher");

    WATCHER.style.left = `${e.pageX + 25}px`;
    WATCHER.style.top = e.clientY > window.innerHeight / 2 ? `${e.pageY - 25}px` : `${e.pageY + 25}px`;

    if (WATCHER.offsetLeft + WATCHER.offsetWidth > window.innerWidth) {
        WATCHER.style.left = `${window.innerWidth - WATCHER.offsetWidth - 20}px`;
    }
};

if (!document.querySelector(".styleWatcher")) {
    createModal()
}

window.addEventListener("mousemove", (e) => {
    updateWatcherLocation(e);
});

const getElementDescription = (e) => {
    const styles = getComputedStyle(e.target)

    console.log(styles.getPropertyValue('font-size'))

    const element = {
        tagName: e.target.tagName,
        classList: e.target.classList,
        id: e.target.id,
    }
    return element;
}
const allElems = document.body.querySelectorAll("*")

allElems.forEach(elem => {
    elem.addEventListener('mouseover', (e) => {
        e.target.style.outline = "dashed red";
        const WATCHER = document.querySelector(".styleWatcher");

        const element = getElementDescription(e);

        WATCHER.innerHTML =
            `Tag: ${element.tagName} 
            ${element.classList.length > 0 ? `Classes: ${element.classList}` : ""} 
            ${element.id ? `Id: ${element.id}` : ""}
            `;
    })

    elem.addEventListener('mouseout', (e) => e.target.style.outline = 'none')
})