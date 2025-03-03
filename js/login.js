const url =  "https://go-wash-api.onrender.com/api/login";


async function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if(!email || !senha ) { 
        alert("Prencha os campos Obrigatorios")
        return;
    }


    let api = await fetch (url,{
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": senha,
            "user_type_id":1
            
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (api.ok) {
        let response = await api.json();
        localStorage.setItem('user', JSON.stringify(response))
        alert('Login realizado')
        window.location.assign("../index.html")
        return 
    };
    let responseError = await api.json();
    console.error("Erro no Cadastro", responseError);

    if (responseError.data.errors){
        alert(responseError.data.errors)
    }    
}