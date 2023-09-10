window.addEventListener("scroll", function () {
    const header = document.querySelector("header"); // Assuming your header element is <header>
    
    if (window.scrollY >= 100) {
      header.classList.add("active");
      header.classList.remove("before");
    } else {
      header.classList.remove("active");
      header.classList.add("before");
    }
});