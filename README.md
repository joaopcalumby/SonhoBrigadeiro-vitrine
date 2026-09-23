# Sonho de Brigadeiro

Vitrine web da doceria gourmet **Sonho de Brigadeiro**, desenvolvida como projeto da
disciplina de Programação Web I (UFAL Penedo).

## O problema

A doceria vende brigadeiros gourmet artesanais por encomenda e atende exclusivamente pelo
WhatsApp e pelo Instagram. Não existe endereço físico nem vitrine: cada cliente que chega
precisa que o cardápio, os sabores e os preços sejam repetidos na conversa, o que consome
tempo da responsável e atrasa a resposta. Quem está fazendo cotação entre duas docerias
normalmente desiste antes de esperar.

O site reúne produtos, sabores e preços num endereço único e público. O cliente chega à
conversa já sabendo o que quer pedir, e a conversa passa a ser sobre fechar a encomenda,
não sobre apresentar o cardápio.

## O que o site tem

- Apresentação da doceria e explicação de como encomendar
- Cardápio com os cinco produtos, seus sabores e seus preços
- Formulário de encomenda e tabela de resumo de preços
- Contato direto por WhatsApp, e-mail e Instagram
- Layout responsivo para celular, tablet e computador

## Tecnologias

- React 19 (Create React App)
- HTML5 semântico
- CSS3 com Flexbox e media queries

## Estrutura do projeto

```
public/
  index.html                 página que recebe a aplicação React
src/
  index.js                   conecta a aplicação ao navegador
  App.js                     monta a página na ordem das seções
  App.css                    cores, fontes e estilos compartilhados
  data/
    contato.js               telefone, e-mail e redes da doceria
  fonts/
    bakerie-regular.woff2    fonte idêntica à da logo importada localmente
  components/
    Cabecalho.js             logo, nome e menu
    Menu.js                  navegação por âncoras
    Destaque.js              chamada principal
    Sobre.js                 a doceria e como encomendar
    Cardapio.js              monta a lista de produtos
    Doce.js                  cartão de um produto, recebe os dados por props
    Encomenda.js             formulário e tabela de preços
    Rodape.js                contatos e redes
  images/                    fotos dos produtos e logotipo
```

Cada componente tem um arquivo `.css` com o mesmo nome, que contém apenas os estilos
daquela parte da página.

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org) instalado.

```bash
git clone https://github.com/joaopcalumby/SonhoBrigadeiro-vitrine.git
cd SonhoBrigadeiro-vitrine
npm install
npm start
```

A aplicação abre em `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
```

## Autor

João Pedro Silva Calumby Pereira — Sistemas de Informação, UFAL Penedo.
Disciplina de Programação Web I, professor Gustavo Miranda.
