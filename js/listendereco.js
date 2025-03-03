const URL = 'https://go-wash-api.onrender.com/api/auth/address'
let token = JSON.parse(localStorage.getItem('user')).access_token

async function listarEndereco() {
    let table = document.getElementById('endereco')
    
    let api = await fetch(URL, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    )
    if (api.ok) {
        let resposta = await api.json();
        console.log(resposta);

        resposta.data.forEach((endereco) => {
            let row = document.createElement('tr');


            row.innerHTML = `
                
                <td>${endereco.id}</td>
                <td>${endereco.title}</td>
                <td>${endereco.cep}</td>
                <td>${endereco.address}</td>
                <td>${endereco.number}</td>
                <td>${endereco.complement ? endereco.complement : ''}</td>
                <td>
                    <button class="btn-atualizar" onclick="window.location.assign('./atualizar-endereco.html?id=${endereco.id}')">Atualizar</button>
                    <button class="btn-atualizar" onclick="deletar(${endereco.id})">Deletar</button>
                </td>

            `;
            table.appendChild(row);
        });

    }
}

async function deletar(id) {
    let confirmardelet = confirm('Você realmente quer deletar esse endereço ?')

    if (confirmardelet) {
        let api = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        )
        if(api.ok) {
            alert("Endereco deletado")
            window.location.reload()
        }
    }
}


listarEndereco()

