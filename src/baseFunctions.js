// //dash-board
const sideMenu = document.querySelector('aside');
const headerButton = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close-btn");
const backDrop = document.getElementById("backdrop");
const darkmode = document.querySelector('.dark-mode')

headerButton.addEventListener('click',() =>{
  //sideMenu.style.display = 'block';
  sideMenu.classList.add('aside-fixed');
  backDrop.style.display = 'block';
});

closeBtn.addEventListener('click',() =>{
    // sideMenu.style.display = 'none';
  sideMenu.classList.remove('aside-fixed');
  backDrop.style.display = 'none';
});

backDrop.addEventListener('click',() =>{
  sideMenu.classList.remove('aside-fixed');
  backDrop.style.display = 'none';
})

darkmode.addEventListener('click',()=>{
  const root = document.documentElement;

  if (root.getAttribute('data-theme') === 'dark') {
      root.removeAttribute('data-theme');
  } else {
      root.setAttribute('data-theme', 'dark');
  }
  darkmode.querySelector('span:nth-child(1)').classList.toggle('active');
  darkmode.querySelector('span:nth-child(2)').classList.toggle('active');
})
// //end-dash-board

//Log-in
const container = document.getElementById('login-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',() =>{
  container.classList.add("active");
})
loginBtn.addEventListener('click',() =>{
  container.classList.remove("active");
})
//End-log-in