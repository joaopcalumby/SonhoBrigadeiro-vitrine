create table public.produtos (
  id integer primary key,
  ordem integer not null,
  nome text not null,
  descricao text not null,
  preco numeric(10,2) not null check (preco > 0),
  medida text not null check (medida in ('cento', 'unidade')),
  sabores text not null,
  imagem text not null,
  alt text not null
);

create table public.encomendas (
  id bigint generated always as identity primary key,
  criado_em timestamptz not null default now(),
  nome text not null check (char_length(nome) between 1 and 120),
  telefone text not null check (char_length(telefone) between 8 and 30),
  produto_id integer not null references public.produtos(id),
  quantidade integer not null check (quantidade between 1 and 10000),
  data_entrega date not null,
  observacoes text not null default '' check (char_length(observacoes) <= 1000)
);

create index encomendas_produto_id_idx on public.encomendas(produto_id);

alter table public.produtos enable row level security;
alter table public.encomendas enable row level security;

create policy "visitante le o cardapio" on public.produtos
  for select to anon, authenticated using (true);

create policy "visitante registra encomenda" on public.encomendas
  for insert to anon, authenticated with check (true);

revoke all on public.produtos from anon, authenticated;
revoke all on public.encomendas from anon, authenticated;
grant select on public.produtos to anon, authenticated;
grant insert on public.encomendas to anon, authenticated;

insert into public.produtos (id, ordem, nome, descricao, preco, medida, sabores, imagem, alt) values
(1, 1, 'Brigadeiros tradicionais', 'Brigadeiros gourmet artesanais feitos sob medida.', 160.00, 'cento', 'Chocolate, Ninho, Farinha Láctea, Moranguinho, Churros, Doce de leite com coco queimado, Coco, Cajuzinho e Paçoca.', '/images/brigadeiros-tradicionais.jpg', 'Brigadeiros gourmet de sabores tradicionais'),
(2, 2, 'Brigadeiros especiais', 'Sabores de receita mais elaborada, para ocasiões especiais.', 170.00, 'cento', 'Olho de sogra, Romeu e Julieta, Meio a meio e Barbie.', '/images/brigadeiros-especiais.jpg', 'Brigadeiros gourmet de sabores especiais'),
(3, 3, 'Coxinhas doces', 'Morango inteiro envolvido em brigadeiro gourmet, no formato de coxinha.', 7.00, 'unidade', 'Chocolate e Ninho.', '/images/coxinha-doce.jpg', 'Coxinha doce coberta de brigadeiro gourmet'),
(4, 4, 'Charutinhos', 'Brigadeiro gourmet enrolado e recheado com chocolate KitKat.', 6.00, 'unidade', 'Chocolate com KitKat ao leite e Ninho com KitKat branco.', '/images/charutinho.jpg', 'Charutinho de brigadeiro gourmet recheado com chocolate'),
(5, 5, 'Cupcakes', 'Minibolo recheado com brigadeiro gourmet.', 8.00, 'unidade', 'Sabor combinado na encomenda.', '/images/cupcake.jpg', 'Cupcake recheado com brigadeiro gourmet');
