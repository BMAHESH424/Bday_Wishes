// script.js

// Wait until the page and animations are done
window.addEventListener('load', () => {
    // Delay the confetti start until the cake/candle animations are finished
    setTimeout(() => {
        startConfetti();
    }, 5000); // Adjust delay if animations are longer
});

function startConfetti() {
    const container = document.createElement('div');
    container.id = 'confetti-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
    `;
    document.body.appendChild(container);

    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#a4ffc4', '#ffffff'];

    // Create hundreds of confetti dots
    for (let i = 0; i < 40; i++) {
        const dot = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const delay = Math.random() * 5; // stagger start
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -20px;
            left: ${Math.random() * 100}vw;
            border-radius: 50%;
            opacity: ${Math.random()};
            transform: translateY(0) rotate(${Math.random() * 360}deg);
            animation: confettiFall ${Math.random() * 3 + 3}s linear ${delay}s infinite;
        `;
        container.appendChild(dot);
    }

    // Add CSS for the fall animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}


document.addEventListener("DOMContentLoaded",()=>{
const btn=document.getElementById("surpriseBtn");
if(btn){
btn.addEventListener("click",()=>{
document.getElementById("messageCard").classList.remove("hidden");
startConfetti();
});
}
});

function createStar(){
const star=document.createElement("div");
star.innerHTML="✨";
star.style.position="fixed";
star.style.left=Math.random()*100+"vw";
star.style.top="100vh";
star.style.zIndex="999";
document.body.appendChild(star);
star.animate([{transform:"translateY(0)"},{transform:"translateY(-120vh)"}],{duration:8000});
setTimeout(()=>star.remove(),8000);
}
setInterval(createStar,500);


