# 🎓 Estude++ · Plataforma Escolar Integrada

App escolar criado na **aula de Apps com IA**. A proposta da aula foi mostrar como uma ferramenta de inteligência artificial pode ajudar a tirar uma ideia do papel: descrevemos o que queríamos e fomos construindo o app junto com o **Gemini Canvas**, testando, pedindo ajustes e melhorando cada parte até chegar nesta versão.

O resultado é um "portal do aluno" com quatro ferramentas para o dia a dia da escola, todas na mesma página e com a mesma identidade verde.

## ✨ Funcionalidades

| Ferramenta | O que faz |
|---|---|
| ⏱️ **Foco Total** | Cronômetro de estudos no estilo Pomodoro: 25 min de estudo, 5 min de pausa ou 1 min rápido. Conta os ciclos concluídos e toca um som no final. Tem uma "pegadinha" nos últimos 10 segundos. 😉 |
| 🧮 **Calculadora de Notas** | Você informa as notas dos 3 primeiros bimestres e ele calcula quanto precisa tirar na 4ª prova para fechar com média 6,0 (24 pontos). Avisa se já passou ou se vai para a recuperação. |
| 📅 **Contfalta** | Controle de faltas por matéria, com histórico, edição de registros e um "semáforo" (verde, amarelo e vermelho) de acordo com a meta de faltas que você define. |
| 🔮 **Tarô da Prova** | Um oráculo divertido: escolha a matéria e tire uma carta para descobrir se precisa estudar ou se pode relaxar. Se a carta mandar estudar, um botão leva direto para o cronômetro. |

No topo da página, um painel de resumo mostra os números das quatro ferramentas, e a barra de filtro deixa ver tudo junto ou uma ferramenta de cada vez. No celular aparece uma barra de navegação embaixo.

## 🛠️ Tecnologias

- **HTML**, **CSS** e **JavaScript** em um único arquivo (`index.html`)
- [Tailwind CSS](https://tailwindcss.com) para o visual
- [Phosphor Icons](https://phosphoricons.com) para os ícones
- [Tone.js](https://tonejs.github.io) para os sons do cronômetro
- Fonte **Inter** do Google Fonts
- `localStorage` do navegador para salvar as faltas e os ciclos de estudo

## ▶️ Como usar

Não precisa instalar nada: é só abrir o arquivo `index.html` no navegador (clique duplo, ou arraste para uma aba).

No VS Code, também dá para usar a extensão **Live Server**: clique com o botão direito no `index.html` e escolha **Open with Live Server**.

> É preciso estar com internet, porque o Tailwind, os ícones, a fonte e o Tone.js são carregados de fora.
>
> As faltas e os ciclos ficam salvos **só no navegador onde você usou o app**. Se limpar os dados do navegador ou abrir em outro computador, eles começam do zero.

## 📁 Arquivos

```
AULA INFORMATICA/
├── index.html   # o app inteiro (estrutura, estilo e lógica)
└── README.md
```

## 👤 Autor

Aula conduzida por **Isac Alves** ([@LHAMA-prog](https://github.com/LHAMA-prog)), com o app desenvolvido com a ajuda do **Gemini Canvas**.
