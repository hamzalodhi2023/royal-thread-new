let home = document.querySelector(".home");
let shop = document.querySelector(".shop");
let aboutUs = document.querySelector(".aboutUs");
let comments = document.querySelector(".comments");

home.addEventListener("click", function(){
    if(this.className = "home active"){
        this.className = "home active";
        shop.classList.remove("active");
        aboutUs.classList.remove("active");
        comments.classList.remove("active");
    }else{
        this.classList.add("active");
    }
})

shop.addEventListener("click", function(){
    if(this.className = "shop"){
        this.classList.add("active");
        home.classList.remove("active");
        aboutUs.classList.remove("active");
        comments.classList.remove("active");
    }else{
        this.className = "shop active";
    }
})

aboutUs.addEventListener("click", function(){
    if(this.className = "aboutUs"){
        this.classList.add("active");
        shop.classList.remove("active");
        home.classList.remove("active");
        comments.classList.remove("active");
    }else{
        this.className = "aboutUs active"; 
    }
})

comments.addEventListener("click", function(){
    if(this.className = "comments"){
        this.classList.add("active");
        shop.classList.remove("active");
        home.classList.remove("active");
        aboutUs.classList.remove("active");
    }else{
        this.className = "comments active"; 
    }
})