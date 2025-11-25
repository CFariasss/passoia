import "./Lancamento.scss";
import { useState } from "react";

// MINIATURAS (kits) — não alteram a imagem principal
import batons1 from "../../assets/batons1.png";
import batons2 from "../../assets/batons2.png";
import batons3 from "../../assets/batons3.png";

// IMAGENS DA MODELO COM CADA COR
import vermelho1 from "../../assets/vermelho1.png";
import lilas1 from "../../assets/lilas1.png";
import vinho1 from "../../assets/vinho1.png";
import nude1 from "../../assets/nude1.png";

export default function Lancamento() {
  const [currentImage, setCurrentImage] = useState(nude1);

  return (
    <section className="showcase">
      <h2 className="showcase__title">APROVEITE OS LANÇAMENTOS</h2>

      <div className="showcase__content">

        {/* MINIATURAS — apenas exibem */}
        <div className="showcase__thumbs">
          <img src={batons1} alt="Kit 1" />
          <img src={batons2} alt="Kit 2" />
          <img src={batons3} alt="Kit 3" />
        </div>

        {/* IMAGEM PRINCIPAL */}
        <div className="showcase__main">
          <img src={currentImage} alt="Modelo com batom" />
        </div>

        <div className="showcase__info">
          <div className="stars">★★★★★</div>

          <h3>Matte Premium</h3>

          <p className="label">Cores disponíveis</p>

          <div className="colors">
            <span
              style={{ background: "#b30026" }}
              onClick={() => setCurrentImage(vermelho1)}
            ></span>

            <span
              style={{ background: "#c28bff" }}
              onClick={() => setCurrentImage(lilas1)}
            ></span>

            <span
              style={{ background: "#3b0628" }}
              onClick={() => setCurrentImage(vinho1)}
            ></span>

            <span
              style={{ background: "#c79e84" }}
              onClick={() => setCurrentImage(nude1)}
            ></span>
          </div>

          <p className="label">Descrição</p>

          <p className="description">
            O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
          </p>
        </div>

      </div>
    </section>
  );
}
