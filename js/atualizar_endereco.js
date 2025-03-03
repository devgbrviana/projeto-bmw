const url = 'https://go-wash-api.onrender.com/api/auth/address/'; 
const id = new URLSearchParams(location.search).get('id')
console.log(id)

async function dadosEndereco(){
    let titulo = document.getElementById('titulo')
    let cep = document.getElementById('cep')
    let endereco = document.getElementById('endereco')
    let numero = document.getElementById('numero')
    let complemento = document.getElementById('complemento')
    let token = JSON.parse(localStorage.getItem('user')).access_token

    let api = await fetch(`${url}${id}`, {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    })

    if (api.ok) {
        let resposta = await api.json()
        titulo.value = resposta.data.title
        cep.value = resposta.data.cep
        endereco.value = resposta.data.address
        numero.value = resposta.data.number
        complemento.value = resposta.data.complement
    }
}

async function atualizarEndereco(){
    let titulo = document.getElementById('titulo').value
    let cep = document.getElementById('cep').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let complemento = document.getElementById('complemento').value
    let token = JSON.parse(localStorage.getItem('user')).access_token

    if(!titulo || !cep || !endereco || !numero){
        alert('Prencha todos os campos corretamente')
        return
    }

    let api = await fetch(`${url}${id}`, {
        method:'POST',
        body:JSON.stringify({
            "title": titulo,
            "cep": cep,
            "address": endereco,
            "number": numero,
            "complement": complemento
        }),
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${token}`
        }
    })

    if (api.ok) {
        alert('Endereço atualizado')
        window.location.assign('../view/listagemEndereco.html')
        return
    }
    alert('Erro ao atualizar endereço')
}

dadosEndereco()


