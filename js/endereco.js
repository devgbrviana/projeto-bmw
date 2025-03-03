const url =  "https://go-wash-api.onrender.com/api/auth/address";


async function endereco() {
    let titulo = document.getElementById('titulo').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let token = JSON.parse(localStorage.getItem('user')).access_token;

    if ( !titulo || !cep || !endereco || !numero || !complemento || !token){
        alert("Prencha os campos obrigatorios")
        return;
    }


    let api = await fetch (url,{
        method: "POST",
        body: JSON.stringify({
            "title": titulo,
            "cep": cep,
            "address": endereco,
            "number": numero,
            "complement": complemento
            
            
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if (api.ok) {
        alert('Endereço cadastrado com sucesso!')
        window.location.assign("../index.html")
    };
    
}
