const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const contactBtn = document.querySelector('#contact-btn');
const linkedBtn = document.querySelector('#linked-btn');
const gitBtn = document.querySelector('#git-btn');
const cvBtn = document.querySelector('#cv-btn');
const visitBtn = document.querySelector('#visit-btn');




menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

contactBtn.onclick = () =>{
    window.location.href = '#contact';
}

linkedBtn.onclick = () =>{
    window.location.href = 'https://www.linkedin.com/in/obaidar-omar/';
}

gitBtn.onclick = () => {
    window.location.href = 'https://github.com/Doppy6'
}

cvBtn.onclick = () =>{
    let link = document.createElement('a');
    link.href = '/Obaidar_CV.pdf';
    link.download = 'Obaidar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}

visitBtn.onclick = () =>{
    window.location.href = 'https://github.com/Doppy6'
}

