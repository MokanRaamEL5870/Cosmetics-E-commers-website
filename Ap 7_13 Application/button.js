const showCommercialBtn = document.querySelector('#show-commercial-btn');
const commercial = document.querySelector('#commercial');
showCommercialBtn.addEventListener('click', () => {
    commerical.style.display = "grid";
})

document.body.addEventListener('click', (e) => {
    if(e.target.id === "commercial"){
        commercial.style.display ="none"
    }
})