const btnShare = document.querySelector('.share_btn');
const socialClass = document.querySelector('.share_social');

btnShare.addEventListener('click',()=>{
    console.log('Btn Share clicked');
    socialClass.classList.toggle('hidden');
})