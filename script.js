var observer = new IntersectionObserver(callback, {root : document.querySelector("#sections"), rootMargin: "0px", threshold: 0.5});

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            changeState(document.querySelector("#" + entry.target.id + "Link"));
        }
    });
}

document.querySelectorAll("section").forEach(section => {
    if (section) {
        observer.observe(section);
    }
})

function changeState(el) {
    document.querySelector("#homeLink").classList.remove("active");
    document.querySelector("#skillsLink").classList.remove("active");
    document.querySelector("#projectsLink").classList.remove("active");
    document.querySelector("#socialsLink").classList.remove("active");
    el.classList.add("active")
}