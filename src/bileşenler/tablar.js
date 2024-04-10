import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  // class'ı topics olan bir div elementi olusturduk.

  const div = document.createElement("div");
  div.classList.add("topics");

  // forEach ile her bir konuyu class'ı tab olan bir div elementi olarak olusturduk textContent ile icerisindeki metini ekledik. Daha sonra her bir konuyu div elementine ekledik.

  konu.forEach((element) => {
    const divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = element;
    div.append(divTab);
  });
  return div;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios
    .get(`http://localhost:5001/api/konular`)
    .then((response) => {
      //console.log(response.data.konular);

      const newTab = document.querySelector(secici);
      const tablar = Tablar(response.data.konular);
      newTab.append(tablar);
    })
    .catch((error) => {
      console.err(error);
    })
    .finally(() => {
      console.log("İşlem tamamlandı");
    });
};

export { Tablar, tabEkleyici };
