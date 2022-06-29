// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var axios = require('axios');

function salvar(Dia, Semana, Escala, Nome, Horario){
    axios.post('https://sheetdb.io/api/v1/5qwh9zkd9y2mo',{
        "data": {
          "Dia": Dia, 
          "Semana": Semana, 
          "Escala": Escala,
          "Nome": Nome,
          "Horario": Horario,
        }
    },{
      "auth": {
        "username": "l256d9pi",
        "password": "0w7b8fkviq4i6eev573x"
      }
	    }
    ).then(response => {
      console.log(response.data)
    })
}

//salvar ("25/05", "terça", "Datashow", "Rubens", "10h")

{function coletar(){
  axios.get('https://sheetdb.io/api/v1/5qwh9zkd9y2mo', {
      "auth": {
        "username": "l256d9pi",
        "password": "0w7b8fkviq4i6eev573x"
      }
  })
   .then( response => {
        console.log(response.data);
    });
}
}
//coletar ()

function escalaDe(ID){
  axios.get(`https://sheetdb.io/api/v1/5qwh9zkd9y2mo/search?ID=${ID}`, {
      "auth": {
        "username": "l256d9pi",
        "password": "0w7b8fkviq4i6eev573x"
      }
  })
   .then( response => {
     const data = response.data;
     const usuario = data[0]
     const escala = usuario.nome
     console.log(response.data);
    });
}

//escalaDe("2") //Todas as Escalas determinado usuário

function itemDe(Nome){
  axios.get(`https://sheetdb.io/api/v1/5qwh9zkd9y2mo/search?Nome=${Nome}`, {
      "auth": {
        "username": "l256d9pi",
        "password": "0w7b8fkviq4i6eev573x"
      }
  })
   .then( response => {
     const data = response.data;
     const usuario = data[0]
     const Escala = usuario.Escala
     console.log(Escala);
    });
}

//itemDe("ROSIER") //Um item do usuário

function atualizar(Dia, Semana, Escala, Nome, Horario){
  axios.patch(`https://sheetdb.io/api/v1/5qwh9zkd9y2mo/Nome/${Nome}`,{
    "data": {"Dia": Dia,
             "Semana": Semana,
             "Escala": Escala,
             "Nome": Nome,
             "Horario": Horario,
             
            }
  }, {
    "auth": {
      "username": "l256d9pi",
      "password": "0w7b8fkviq4i6eev573x"
    }
  }).then( response => {
    console.log(response.data);
  })
}

//atualizar("25/05", "terça", "SOM", "ROSIER", "10h")

//escalaDe(2)

