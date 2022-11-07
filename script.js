let mainImg = document.querySelector('.main-img img')
let otherImg = document.querySelectorAll('.other-img img')

for (let i =0; i<otherImg.length; i++){
    otherImg[i].addEventListener('click',()=>{
        mainImg.src = otherImg[i].getAttribute('src')
        
    })

}


let data = 0;
document.getElementById('root').innerHTML=data;
function decrement(){
    if(data){
        data = data - 1;
        console.log(data)
    document.getElementById('root').innerText=data;
    }else{
        console.log(data)
        document.getElementById('root').innerText=0;
    }
}
document.getElementById('root').innerHTML=data;
function increment(){
    data = data + 1;
    document.getElementById('root').innerText=data;
}






let btnAddToCard = document.querySelector('.btn')

btnAddToCard.addEventListener('click', addToCart)