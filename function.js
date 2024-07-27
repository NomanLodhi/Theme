window.addEventListener('scroll',()=>{
    let scroll=window.scrollY;
    let Navbar=document.getElementsByClassName('header')[0];
    let Scrolltop=document.getElementsByClassName('scroll-top')[0];
    if(scroll>=200){
        Navbar.classList.add('bg-nav-scroll')
        Scrolltop.classList.add('d-block')
      }
      else{
        Navbar.classList.remove('bg-nav-scroll')
        Scrolltop.classList.remove('d-block')
    }
})
  document.getElementById('nav-profile-design').addEventListener('click',()=>{
      document.getElementsByClassName('dev-row')[0].style.display='none'
    })
  document.getElementById('nav-profile-dev').addEventListener('click',()=>{
      document.getElementsByClassName('dev-row')[0].style.display='flex'
    })

  