// scopo: local onde a variavel é visivel/acessível

{
  {
    {
      {
        {
          var sera = "Será??";
          console.log(sera)
        }
      }
    }
  }
}
console.log(sera)


//só vai ler o que estiver dentro da função
function teste(){
    var local = 123
    console.log(local) // vai ler
}
console.log(local)// não vai ler