# 🔮 Oráculo da Sorte

Aula experimental de **back-end básico** com **Python** e **FastAPI**, pensada para iniciantes de 13 a 17 anos.

Em 30 minutos, criamos um pequeno servidor que funciona como um "Oráculo da Sorte": a cada acesso ele responde uma previsão aleatória e, se você colocar seu nome no endereço, ele responde uma previsão personalizada para você.

## 🍽️ A ideia por trás (a analogia do restaurante)

| No restaurante | No computador | No nosso código |
|---|---|---|
| Cozinha | Servidor (back-end) | o `uvicorn` rodando no terminal |
| Prato do cardápio | Rota | `/`, `/sorte`, `/sorte/{nome}` |
| Receita | Lógica | `random.choice` e o `if` |
| Pedido personalizado ("para a Maria") | Parâmetro | o `{nome}` no endereço |

## 📁 Estrutura

```
ORACULO/
├── oraculo-pronto/
│   └── main.py          # código final do Oráculo
├── requirements.txt     # bibliotecas necessárias
└── README.md
```

## ▶️ Como rodar

1. Entre na pasta do projeto e crie um ambiente virtual:

   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

   > No Windows, ative com `.venv\Scripts\activate`.

2. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```

3. Inicie o servidor:

   ```bash
   cd oraculo-pronto
   uvicorn main:app --reload
   ```

4. Abra no navegador:

   | Endereço | O que faz |
   |---|---|
   | http://localhost:8000 | mensagem de boas-vindas |
   | http://localhost:8000/sorte | uma previsão aleatória (atualize a página para ver outras) |
   | http://localhost:8000/sorte/Maria | uma previsão personalizada com o nome |
   | http://localhost:8000/docs | página automática com todas as rotas |

Para parar o servidor, aperte **Ctrl+C** no terminal.

## 🛠️ Problemas comuns

| Problema | Solução |
|---|---|
| `uvicorn: comando não encontrado` | Ative o ambiente com `source .venv/bin/activate` ou rode `python3 -m uvicorn main:app --reload` |
| `Address already in use` | Já tem outro servidor na porta 8000: feche-o com Ctrl+C ou use `--port 8001` |
| A página não muda depois de editar | Salve o arquivo: o `--reload` só percebe mudanças salvas |

## 👤 Autor

Feito por **Isac Alves** ([@LHAMA-prog](https://github.com/LHAMA-prog)) — estudante de Sistemas de Informação na UFU.
