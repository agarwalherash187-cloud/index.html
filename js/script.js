// ===============================
// UNIQUE SHOP - script.js
// ===============================

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header shadow on scroll
window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
    }else{
        header.style.boxShadow = "none";
    }

});

// Fade animation

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.padding="15px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#008080";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Floating WhatsApp Button

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/917008574958";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

document.body.appendChild(whatsapp);

whatsapp.style.position="fixed";
whatsapp.style.bottom="90px";
whatsapp.style.right="25px";
whatsapp.style.width="60px";
whatsapp.style.height="60px";
whatsapp.style.background="#25D366";
whatsapp.style.borderRadius="50%";
whatsapp.style.display="flex";
whatsapp.style.justifyContent="center";
whatsapp.style.alignItems="center";
whatsapp.style.fontSize="28px";
whatsapp.style.textDecoration="none";
whatsapp.style.color="white";
whatsapp.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
whatsapp.style.zIndex="999";

// Welcome Message

window.onload=()=>{

setTimeout(()=>{

alert("🎁 Welcome to Unique Shop! Explore our latest gifts and seasonal collections.");

},1000);

};
