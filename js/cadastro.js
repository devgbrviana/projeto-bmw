numeros = [0,10,30,50] criando uma array
print(numeros[2]) aqui ele printa o numero 30, pq o indice e 2.
numeros[1] = 25 aqui estou alterando ele para 25
print(numeros)

saida  = 0, 25, 30,50

entao uma array é uma estrutura de codigo onde percorremos a lista com um indice, podendo remover um numero, nome etc.. modificar a lista, como no codigo a cima

Eles servem pra organizar coisas de forma fácil e rápida, principalmente se você tem muitos dados que precisa acessar e manipular.


agora temos um exemplo de listas 

# Em Python
lista_compras = ["Pão", "Leite", "Ovos", "Arroz", "Feijão"]

# Acessar o primeiro item
print(lista_compras[0])  # Saída: Pão

# Adicionar um item na lista (se for uma lista mutável)
lista_compras.append("Manteiga")  
print(lista_compras)  # Saída: ["Pão", "Leite", "Ovos", "Arroz", "Feijão", "Manteiga"]

# Alterar um item (trocar "Leite" por "Suco")
lista_compras[1] = "Suco"
print(lista_compras)  # Saída: ["Pão", "Suco", "Ovos", "Arroz", "Feijão", "Manteiga"]


# Criando uma pilha usando lista
pilha = []

# Adicionar itens na pilha (Push)
pilha.append("Livro 1")
pilha.append("Livro 2")
pilha.append("Livro 3")
print("Pilha atual:", pilha)  # Saída: Pilha atual: ['Livro 1', 'Livro 2', 'Livro 3']

# Remover o item do topo (Pop)
topo = pilha.pop()
print("Removido:", topo)  # Saída: Removido: Livro 3
print("Pilha depois do Pop:", pilha)  # Saída: ['Livro 1', 'Livro 2']

# Ver o topo da pilha (Peek)
print("Topo da pilha:", pilha[-1])  # Saída: Livro 2
