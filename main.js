console.log('hi')

//let url = 'https://jordan.ashton.fashion/api/goods/30/comments',{

//}
//let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
function then(){
    fetch('https://jordan.ashton.fashion/api/goods/30/comments',{
        mode: 'no-cors',
        method:'POST',
         headers:{
             'Content-type':'application/json'
         },
         body:JSON.stringify({
             name:'i am '
             
         }) 
    })
      .then(res => res.json())
      .then(data => 
        document.querySelector('.root').innerHTML = 
        JSON.stringify(data)).catch(error =>{
            console.log(error)
        });
}
function now(){
    fetch('https://jordan.ashton.fashion/api/goods/30/comments')
    .then(res => res.json())
    .then(data => 
      document.querySelector('.root').innerHTML = 
      JSON.stringify(data)).catch(error =>{
          console.log(error)
      });
}
let temp = document.querySelector('.temp')
    //data.map(data=>console.log(data.name))
    async function fromer(){
      let  response = await fetch('https://jordan.ashton.fashion/api/goods/30/comments')
      let content = await response.json()
      content = content.data
      console.log(content)
      let key
for( key in content){

//console.log(content[key])
temp.innerHTML += `<ul>
<li>${content[key].name}</li>
<li>${content[key].text}</li>
</ul>
`
}
    }
    fromer()