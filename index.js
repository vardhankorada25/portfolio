document.querySelector('.btn-scroll').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#project');
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' 
    });
});
document.querySelector('.scroll').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#hero');
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' 
    });
});
document.querySelector('.scroll1').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#project10');
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' 
    });
});
document.querySelector('.scroll2').addEventListener('click', function(event) {
    event.preventDefault(); 
    const targetSection = document.querySelector('#contact');
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' 
    });
});