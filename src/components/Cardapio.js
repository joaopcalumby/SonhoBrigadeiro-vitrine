import './Cardapio.css';
import Doce from './Doce';
import tradicionais from '../images/brigadeiros-tradicionais.jpg';
import especiais from '../images/brigadeiros-especiais.jpg';
import coxinha from '../images/coxinha-doce.jpg';
import charutinho from '../images/charutinho.jpg';
import cupcake from '../images/cupcake.jpg';

function Cardapio() {
  return (
    <section className="cardapio secao" id="cardapio">
      <h2 className="secao-titulo">Cardápio</h2>
      <hr className="secao-linha" />
      <div className="cardapio-lista">
        <Doce
          imagem={tradicionais}
          alt="Brigadeiros gourmet de sabores tradicionais"
          nome="Brigadeiros tradicionais"
          descricao="Brigadeiros gourmet artesanais feitos sob medida."
          preco="R$ 160,00 o cento"
          sabores="Chocolate, Ninho, Farinha Láctea, Moranguinho, Churros, Doce de leite com coco queimado, Coco, Cajuzinho e Paçoca."
        />
        <Doce
          imagem={especiais}
          alt="Brigadeiros gourmet de sabores especiais"
          nome="Brigadeiros especiais"
          descricao="Sabores de receita mais elaborada, para ocasiões especiais."
          preco="R$ 170,00 o cento"
          sabores="Olho de sogra, Romeu e Julieta, Meio a meio e Barbie."
        />
        <Doce
          imagem={coxinha}
          alt="Coxinha doce coberta de brigadeiro gourmet"
          nome="Coxinhas doces"
          descricao="Morango inteiro envolvido em brigadeiro gourmet, no formato de coxinha."
          preco="R$ 7,00 a unidade"
          sabores="Chocolate e Ninho."
        />
        <Doce
          imagem={charutinho}
          alt="Charutinho de brigadeiro gourmet recheado com chocolate"
          nome="Charutinhos"
          descricao="Brigadeiro gourmet enrolado e recheado com chocolate KitKat."
          preco="R$ 6,00 a unidade"
          sabores="Chocolate com KitKat ao leite e Ninho com KitKat branco."
        />
        <Doce
          imagem={cupcake}
          alt="Cupcake recheado com brigadeiro gourmet"
          nome="Cupcakes"
          descricao="Minibolo recheado com brigadeiro gourmet."
          preco="R$ 8,00 a unidade"
          sabores="Sabor combinado na encomenda."
        />
      </div>
    </section>
  );
}

export default Cardapio;
