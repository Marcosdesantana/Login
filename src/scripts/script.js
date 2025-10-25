let n = 0
function menu(){
    let menu = document.getElementById('menu')
    if(n == 0){
      menu.style.display = 'flex'
      menu.style.flexDirection = 'column'
      menu.style.justifyContent = 'space-between'
      n = 1
    }else{
      menu.style.display = 'none'
      n = 0
  
    }
}