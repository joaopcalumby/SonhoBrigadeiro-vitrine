# Sonho de Brigadeiro

Vitrine web da doceria gourmet **Sonho de Brigadeiro**, desenvolvida como projeto da
disciplina de Programação Web I (UFAL Penedo).

**O protótipo em produção pode ser conferido também pelo deploy na Vercel em:** [sonhobrigadeiro-vitrine.vercel.app](https://sonhobrigadeiro-vitrine.vercel.app/)

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

- Três páginas com rotas próprias: Início (`/`), Cardápio (`/cardapio`) e Encomendar (`/encomendar`),
  além de uma página para endereços que não existem
- Cardápio carregado do banco de dados, com os sabores de cada doce abertos por um botão
- Formulário de encomenda que calcula o total estimado, grava o pedido no banco e gera a
  mensagem de confirmação para o WhatsApp
- Contato direto por WhatsApp, e-mail e Instagram
- Identidade visual da marca Sonho de Brigadeiro (assinatura, carimbo, cores e tipografia do
  manual de marca)
- Layout responsivo para celular, tablet e computador

## Tecnologias

- React 19 (Create React App)
- React Router para as rotas entre páginas
- React Icons para os ícones
- Supabase (PostgreSQL) como banco de dados
- HTML5 semântico
- CSS3 com Flexbox e media queries

## Estrutura do projeto

```
banco/
  esquema.sql                tabelas, permissões e cardápio inicial do banco
public/
  index.html                 página que recebe a aplicação React
  favicon.svg                símbolo da marca
  images/                    fotos dos produtos
src/
  index.js                   conecta a aplicação ao navegador
  App.js                     cabeçalho, rotas das páginas e rodapé
  App.css                    cores da marca, fontes e estilos compartilhados
  data/
    banco.js                 conexão com o banco: busca o cardápio e grava encomendas
    contato.js               telefone, e-mail e redes da doceria
    formatos.js              formatação de preço e de data
  paginas/
    Inicio.js                página inicial: destaque e sobre
    Cardapio.js              lista os doces vindos do banco
    Encomendar.js            formulário e tabela de preços
    NaoEncontrada.js         endereço inexistente
  components/
    Cabecalho.js             assinatura da marca e menu
    Menu.js                  links das rotas com ícones
    Destaque.js              chamada principal
    Sobre.js                 a doceria e como encomendar
    Doce.js                  cartão de um produto, recebe os dados por props
    Encomenda.js             formulário com estado, total e confirmação
    Rodape.js                carimbo, contatos e redes
  images/                    assinatura e carimbo da marca
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

A aplicação abre em `http://localhost:3000` e já se conecta ao banco do projeto.

## Banco de dados

O banco é um PostgreSQL hospedado no Supabase, com duas tabelas: `produtos`, que guarda o
cardápio, e `encomendas`, que guarda os pedidos feitos pelo formulário. A estrutura completa
está em `banco/esquema.sql`.

A chave usada em `src/data/banco.js` é a chave pública do Supabase, feita para ficar no
navegador. Quem protege os dados são as regras de acesso do próprio banco: o visitante pode ler
o cardápio e registrar uma encomenda, mas não pode ler as encomendas de outras pessoas nem
alterar o cardápio.

Para gerar a versão de produção:

```bash
npm run build
```

## Autor

João Pedro Silva Calumby Pereira - Sistemas de Informação, UFAL Penedo.
Disciplina de Programação Web I, professor Gustavo Miranda.
