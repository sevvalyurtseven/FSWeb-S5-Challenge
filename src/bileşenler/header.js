const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  // class'ı header olan bir div elementi olusturduk.

  const div = document.createElement("div");
  div.classList.add("header");

  // class'ı date olan bir span elementi olusturduk ve textContent ile icerisine tarih parametresini verdik.

  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = tarih;

  // h1 elementini olusturduk icerisine textContent ile baslik parametresini verdik.

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  // class'ı temp olan bir span elementi olusturduk ve textContent ile icerisine yazi parametresini verdik.

  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = yazi;

  // div elementine spanDate, h1, spanTemp elementlerini ekledik.

  div.append(spanDate, h1, spanTemp);

  return div;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const baslik = "Teknoloji Zamanı";
  const tarih = new Date(Date.now()).toLocaleDateString();
  const yazi = "Hava Durumu";

  const header = Header(baslik, tarih, yazi);
  document.querySelector(secici).append(header);
};

export { Header, headerEkleyici };
