const togglebtn = document.querySelector(".sidebar-toggle");
let crossbtn = document.querySelector(".cross-btn");
let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");

togglebtn.addEventListener('click' , function() {
    sidebar.classList.toggle("hide-side-bar");
    togglebtn.classList.toggle("toggle");
    content.classList.toggle("content-change");
})

crossbtn.addEventListener('click' , function() {
    sidebar.classList.add("hide-side-bar");
    togglebtn.classList.toggle("toggle");
    content.classList.toggle("content-change");
})

// if(!(sidebar.classList.contains("hide-side-bar")))
// {
//     content.classList.add("content-change");
// }


const btns = document.querySelectorAll(".fa-solid");

const contents = document.querySelectorAll(".accordion-content");

btns.forEach(function(btn) {
    btn.addEventListener('click' , function(e) {
        
        e.currentTarget.classList.toggle("fa-angle-down");
        e.currentTarget.classList.toggle("fa-angle-up");
        e.currentTarget.parentElement.parentElement.children[1].classList.toggle("accordion-content-change");
    })
})
