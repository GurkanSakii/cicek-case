import "../styles/promotion-section.scss";
import courier from "../assets/courier.PNG";
import notebook from "../assets/notebook.PNG";
import gift from "../assets/gift.PNG";

const PromotionSection = () => {
  return (
    <div className="promotion-section">
      <div className="promo-cards">
        <div className="promo-card pink">
          <img src={courier} alt="Teslimat" />
          <span>
            <p>75 TL Üzerine Teslimat Ücreti Bizden</p>
            <button>Detaylı Bilgi</button>
          </span>
        </div>

        <div className="promo-card blue ">
          <img src={gift} alt="Hediye" />
          <span>
            <p>Kırtasiye Kategorisi için Sepette %15 İndirim</p>
            <button>Hediye Ürünleri</button>
          </span>
        </div>

        <div className="promo-card green">
          <img src={notebook} alt="Kırtasiye" />
          <span>
            <p>Hediye Kategorisi için Sepette %15 İndirim</p>
            <button>Detaylı Bilgi</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
