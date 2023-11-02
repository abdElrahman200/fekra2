let nav =document.querySelector('.aside-nav');
let menu =document.querySelector('.iii');
const login = document.querySelector('.sbt1')
const llogin = document.querySelector('.lbt1')
const signup = document.querySelector('.sbt2')
const lsignup = document.querySelector('.lbt2')
const span = document.querySelector('.move')
const span2 = document.querySelector('#spanmove2')
const navbtlog = document.querySelector('.nav-bt-log')
const navbtsign = document.querySelector('.nav-bt-sign')
const signupform = document.querySelector('.si1')
const cont = document.querySelector('.mycont')
const loginform = document.querySelector('.Login')
const cross = document.querySelector('.cross')
const cross2 = document.querySelector('.cross2')
const btsig = document.querySelector('.btsig')
let togle =false

// start nav

menu.addEventListener('click',()=>{
  togle =!togle
 if(togle){
  nav.style.display ='flex'
  
}else{
    nav.style.display ='none'
  }

})


navbtlog.addEventListener('click',()=>{
  loginform.style.display ='flex';

  signupform.style.display ='none';
  cont.style.opacity = 0.5
  loginform.style.opacity =10;
  
  })


  navbtsign.addEventListener('click',()=>{
    signupform.style.display ='flex';
    span.style.cssText='transform: translateX(154px);';
    loginform.classList.remove('show');

    loginform.style.display ='none';
    cont.style.opacity = 0.5
    signupform.style.opacity =10;
    
    })

    cross.addEventListener('click',()=>{
      signupform.style.display ='none';
      loginform.style.display ='none';
      cont.style.opacity = 10
      
      })

      cross2.addEventListener('click',()=>{
        signupform.style.display ='none';
        loginform.style.display ='none';
        cont.style.opacity = 10
        
        })


// end nav
// start slider
login.addEventListener('click',()=>{
  span2.style.cssText='transform: translateX(0px);';
  signupform.style.display ='none';
        loginform.style.display ='flex';

})

llogin.addEventListener('click',()=>{
  span.style.cssText='transform: translateX(0px);';
  signupform.style.display ='none';
        loginform.style.display ='flex';
})



signup.addEventListener('click',()=>{
  // if(){}
  span2.style.cssText='transform: translateX(154px);'
  signupform.style.display ='flex';
        loginform.style.display ='none';
})

lsignup.addEventListener('click',()=>{
  // if(){}
  span.style.cssText='transform: translateX(154px);';
  signupform.style.display ='flex';
  loginform.style.display ='none';
})

// end slider

let inputName =document.querySelector('.nam');
let inpuemail =document.querySelector('.email');
let inputpassword =document.querySelector('.password');
let inputCpassword =document.querySelector('.confpassword');
// email

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  





btsig.addEventListener('click',()=>{
  let test1 =emailRegex.test(inpuemail.value)
if(test1 && inputCpassword.value ===inputpassword.value &&inputName.value,inpuemail.value,inputpassword.value,inputCpassword.value !=''){
  alert(`thanks ${inputName.value} pleas vist your Email`)
}else{alert('Error');}

})

// dark mod
function color(co){

  let h1 =document.getElementsByTagName("h1")[0].style.color=`${co}`;
  let h2 =document.getElementsByTagName("h1")[1].style.color=`${co}`;
   let h3 =document.getElementsByTagName("h1")[2].style.color=`${co}`;
  return h1 ,h2 ,h3}
  color("red")
  
  
  function clic(){
  document.body.classList.toggle('dark-mode')
  if(document.body.classList.contains('dark-mode')){
      document.querySelector('.icon').classList.remove('fa-sun')
      document.querySelector('.icon').classList.add('fa-moon')
      document.querySelector('.between').style.color = 'white'

  }else{
      document.querySelector('.icon').classList.add('fa-sun')
      document.querySelector('.icon').classList.remove('fa-moon')
      document.querySelector('.between').style.color = 'black'
  }
  }


