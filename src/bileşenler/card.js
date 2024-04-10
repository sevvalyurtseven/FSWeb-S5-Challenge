import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  // class'ı card olan bir div elementi olusturduk.

  const div = document.createElement("div");
  div.classList.add("card");

  // class'ı headline olan bir div elementi olusturduk ve textContent ile icerisine anabaslik parametresini verdik.

  const headLine = document.createElement("div");
  headLine.classList.add("headline");
  headLine.textContent = makale.anabaslik;

  // class'ı author olan bir div elementi olusturduk.

  const author = document.createElement("div");
  author.classList.add("author");

  // class'ı img-container olan bir div elementi olusturduk.

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  // bir img elementi olusturduk ve source bilgisini yazarFoto parametresi ile verdik.

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  //bir span elementi olusturduk ve textContent ile icerisine yazarAdi parametresini verdik.

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + " tarafından";

  imgContainer.append(img); //imgContainer elementinin icerisine img elementini ekledik.

  author.append(imgContainer, yazarAdi); //author elementinin icerisine imgContainer ve yazarAdi elementlerini ekledik.

  div.append(headLine, author); //div elementinin icerisine headLine ve author elementlerini ekledik.

  div.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return div;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      //console.log(response.data.makaleler);
      const newCard = document.querySelector(secici);
      const makaleler = response.data.makaleler;
      for (let key in makaleler) {
        makaleler[key].forEach((element) => {
          const card = Card(element);
          newCard.append(card);
        });
      }
    })
    .catch((error) => {
      console.err(error);
    });
};

export { Card, cardEkleyici };
