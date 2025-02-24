if (document.getElementById("article-form")) {
    const form = document.getElementById("article-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const title = document.getElementById("title").ariaValueMax;
        const content = document.getElementById("content").ariaValueMax;
        
    })
}