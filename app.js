const navbar = document.querySelector('.navbar')
const btn_left = document.querySelector('.button-left ')
const btn_right = document.querySelector('.button-right')

let count = 0;

btn_right.addEventListener("click",(e)=>{
      navbar.style.left = "49px";
      count++
      console.log(count) 
      
      const result = 49 + ( count + 1)
      const i = navbar.style.left =`${result}px`
      
      
      navbar.style.margin = "0 0px";
      if(count >= 48){
            navbar.style.left = '97px'
      }
})

btn_left.addEventListener("click",(e)=>{
      navbar.style.left = "49px";
      count++
      console.log(count) 
      
      const result = 49 - ( count + 1)
      const i = navbar.style.left =`${result}px`
      
      
      navbar.style.margin = "0 0px";
      if(count >= 47){
            navbar.style.left = '-1px'
      }
})



