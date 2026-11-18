import random
from fastapi import FastAPI

app = FastAPI()

previsoes = [
    "hoje você vai encontrar um bug... e vencer ele!",
    "uma pizza inesperada está no seu caminho.",
    "seu próximo código vai rodar de primeira.",
    "alguém vai te pedir ajuda com o Wi-Fi.",
    "a sorte favorece quem salva o arquivo antes de rodar.",
    "um café vai salvar o seu dia.",
]

@app.get("/")
def inicio():
    return {"mensagem": "Seja bem-vindo ao Oráculo da Sorte!"}

@app.get("/sorte")
def sorte():
    return {"previsao": random.choice(previsoes)}

@app.get("/sorte/{nome}")
def sorte_personalizada(nome: str):
    if nome.lower() == "isac":
        return {"previsao": "Isac, o Oráculo diz: hoje a aula vai ser um sucesso!!!"}
    return {"previsao": f"{nome}, {random.choice(previsoes)}"}