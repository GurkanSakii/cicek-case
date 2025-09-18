import "../styles/footer.scss";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/x.svg";
import youtube from "../assets/youtube.svg";
import pen from "../assets/pen.svg";
import cicekLogo from "../assets/sepet.svg";
import appStore from "../assets/appStore.PNG";
import playStore from "../assets/playStore.PNG";
import qrCode from "../assets/qrCode.PNG";
import banner from "../assets/banner.PNG";

const Footer = () => {
  return (
    // generated-with-AI (revized)
    <footer className="footer">
      <div className="container">
        <div className="app-download">
          <div className="phones">
            <img src={banner} alt="Banner" />
          </div>
          <div className="download-info">
            <div className="qr-section">
              <img src={qrCode} alt="QR Kod" className="qr" />
              <span>
                <p className="title">Çiçek Sepeti Mobil Uygulamayı İndirin</p>
                <p className="subtitle">Mobil Uygulamayı QR Kod ile İndirin.</p>
              </span>
            </div>
            <div className="store-buttons">
              <img src={playStore} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="footer-left">
            <img src={cicekLogo} alt="ÇiçekSepeti" className="footer-logo" />
            <div className="social-icons">
              <img src={facebook} alt="Facebook" />
              <img src={instagram} alt="Instagram" />
              <img src={x} alt="X" />
              <img src={youtube} alt="YouTube" />
              <img src={pen} alt="Pen" />
            </div>
            <p className="kvkk">
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 6698 sayılı Kişisel Verilerin
              Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <a href="/">buradan</a> ulaşabilirsiniz.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <p>Faydalı Bilgiler</p>
              <ul>
                <li>Çiçek Bakımı</li>
                <li>Çiçek Eğlenceli Notlar</li>
                <li>Çiçek Anlamları</li>
                <li>Özel Günler</li>
                <li>Mevsimlere Göre Çiçekler</li>
                <li>BonnyFood Saklama Koşulları</li>
                <li>Site Haritası</li>
              </ul>
            </div>

            <div>
              <p>Kurumsal</p>
              <ul>
                <li>Hakkımızda</li>
                <li>Kariyer</li>
                <li>ÇiçekSepeti’nde Satış Yap</li>
                <li>Kurumsal Müşterilerimiz</li>
                <li>Reklamlarımız</li>
                <li>Basında Biz</li>
                <li>Kampanyalar</li>
                <li>Vizyonumuz</li>
              </ul>
            </div>

            <div>
              <p>İletişim</p>
              <ul>
                <li>Bize Ulaşın</li>
                <li>Sıkça Sorulan Sorular</li>
              </ul>
            </div>

            <div>
              <p>Gizlilik Sözleşmesi</p>
              <ul>
                <li>Mesafeli Satış Sözleşmesi</li>
                <li>Bilgi Toplumu Hizmetleri</li>
                <li>Gizlilik Sözleşmesi</li>
                <li>Ödeme Seçenekleri</li>
                <li>Hesap Bilgileri</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-text">
          <p>
            Türkiye’nin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek
            göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek
            gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve
            sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından
            beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü,
            yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla
            sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli
            BonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 ÇiçekSepeti İnternet Hizmetleri A.Ş</p>
      </div>
    </footer>
  );
};

export default Footer;
