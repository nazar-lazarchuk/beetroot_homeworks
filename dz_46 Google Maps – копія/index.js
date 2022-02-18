async function initMap() {
  const styles = await fetch("/style.json").then((res) => res.json()); //не працює в режимі developer
  const ratushaIf = { lat: 48.9227420953075, lng: 24.710265624615726 };
  const parkShevchenka = { lat: 48.91137845347971, lng: 24.696572644307988 };
  const townLake = { lat: 48.91265182622295, lng: 24.693726603152264 };
  const stometrivkaStreet = { lat: 48.9197333370389, lng: 24.7125952282762968 };
  const bastion = { lat: 48.92239917783547, lng: 24.707663623700224 };
  const promPruladRenovation = {
    lat: 48.91451722899282,
    lng: 24.71250940400194,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: ratushaIf,
    zoomControl: false,
    fullScreen: true,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: false,
    styles: styles,
  });


    //Park Shevchenka
    const contentStringPark = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Парк Шевченка</h1>' + '<div id="bodyContent">' + "<p>Міський парк ім. Т.Шевченка розташований на однойменній вулиці – одній із найдавніших, яка завжди вважалася відпочинковою зоною. На початку минулого століття автівкам тут можна було рухатися швидкістю не більше 6 км/год. Штраф за перевищення – півтисячі злотих або два місяці ув’язнення.  Також на вулиці Т. Шевченка свого часу мешкала третя велика любов І.Франка – шляхтянка Целіна Журовська.Саме з цієї вулиці у 1868 році розпочалася славнозвісна «Мармулядова пожежа», яка зруйнувала чверть усієї забудови міста. Коли на подвір’ї біля одного з будинків смажили повидло, подув сильний вітер, підхопивши жаринки, що перетворилися на полум’я. Той вогонь спалив понад 260 будівель Станиславова, серед яких, зокрема, ратуша, суд, вірменський костел.Вулиця Т.Шевченка відома ще з ХVII ст., коли вела до Звіринецької діброви, що базувалася на місці сучасного парку. Саме туди власники міста Потоцькі запрошували своїх гостей на полювання. Наприкінці XIX ст. територію почали окультурювати, проклали алеї, згодом викопали низку каскадних ставків. Нині це відпочинковий парк із мальовничими краєвидами та атракціонами.</p>" +"<img src='/assets/park.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowFirst = new google.maps.InfoWindow({
        content: contentStringPark,
        });
    const markerFirst = new google.maps.Marker({
    position: parkShevchenka,
    map: map,
        });
    markerFirst.addListener("click", () => {
    infowindowFirst.open({
      anchor: markerFirst,
      map,
      shouldFocus: true,
    });
        });

    //Ratusha
    const contentStringRatusha = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Ратуша</h1>' + '<div id="bodyContent">' + "<p>Міська ратуша, що на площі Ринок, – єдина в Україні зведена у стилі конструктивізму, який панував у 1930-х. Крім того, це єдина в Україні  світська споруда, яка має позолочений купол. Його позолотили під час масштабної реконструкції центру міста у 2000 році, витративши 200 г сусального золота.Ратуша – найвища будівля Івано-Франківська, її висота – 49,5 м (таку висоту має 16-поверхівка). Нинішня споруда є вже четвертою будівлею ратуші, за відбудову якої взялися в 1928 році. Цікаво, що її сконструювали у вигляді польського військового ордена Virtuti Militari (вигляд зверху), який вручали бійцям армії Галлера за ліквідацію ЗУНР. А найпершу версію ратуші, дерев’яну, звели ще в 1666-му. Ратуша того часу була як локацією місцевої адміністрації, так і спостережним пунктом. У ХVIII ст. підземелля ратуші слугувало місцем ув’язнення опришків. Під будівлею й досі збереглися підземні ходи, які, за переказами, ведуть аж за межі міста.</p>" + "<img src='/assets/ratusha.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowSecond = new google.maps.InfoWindow({
  content: contentStringRatusha,
        });
    const markerSecond = new google.maps.Marker({
    position: ratushaIf,
    map: map,
        });
    markerSecond.addListener("click", () => {
    infowindowSecond.open({
      anchor: markerSecond,
      map,
      shouldFocus: true,
    });
        });


    //Town Lake
    const contentStringLake = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Міське озеро</h1>' + '<div id="bodyContent">' + "<p>Станіславське море – так часто називають міське озеро, яке виникло 1955 року. До радянських часів на місці «моря» локалізувалися мисливські угіддя князів Потоцьких. В 1930-х тут викопали ставки, які з’єднувала річка Бистриця Солотвинська. Коли відкрили шлюзи на ставках, то з них розлилося ціле море, біля якого тепер і відпочивають іванофранківці. А просто посеред озера розташована романтична місцина для закоханих – «Острів любові». Зелена зона навколо озера, ставши справжнім райським куточком для містян, одночасно перетворилася і на ласий шмат землі для забудовників. Саме з цього приводу вже не один рік триває запекле протистояння між івано-франківськими активістами і хвацькими бізнесменами.</p>" + "<img src='/assets/lake.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowThird = new google.maps.InfoWindow({
     content: contentStringLake,
        });
    const markerThird = new google.maps.Marker({
    position: townLake,
    map: map,
        });
    markerThird.addListener("click", () => {
    infowindowThird.open({
      anchor: markerThird,
      map,
      shouldFocus: true,
    });
        });

    //Stometrivka
    const contentStringStometrivka = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Стометрівка</h1>' + '<div id="bodyContent">' + "<p>Оглядаючи цікаві місця Івано-Франківська, навряд чи вдасться оминути головну пішохідну зону – «стометрівку», або ж «сотку», як її називають у народі. Це частина вулиці Незалежності, яка насправді тягнеться майже півкілометра.«Сотка» є одним із «найживіших» осередків міста, місцем зустрічей та прогулянок, вуличних музикантів, книгарень, кав’ярень, крамничок. Особливого шарму додають і ковані скульптури, які тут кожного разу з’являються під час щорічного міжнародного фестивалю «Свято ковалів». Існують різні версії того, звідки взялася начебто необґрунтована назва «стометрівка». Наприклад, кажуть, що у 1984 році, коли на вул. Комарова (Шашкевича) збудували кафе «Молочне», то, аби розмістити там літній майданчик, перекрили всю вулицю. Ось її довжина становила рівно 100 м. А незабаром пішохідною зробили й сусідню вул. Радянську (Незалежності).</p>" + "<img src='/assets/stometrivka.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowFour = new google.maps.InfoWindow({
     content: contentStringStometrivka,
        });
    const markerFourth = new google.maps.Marker({
    position: stometrivkaStreet,
    map: map,
         });
    markerFourth.addListener("click", () => {
    infowindowFour.open({
      anchor: markerFourth,
      map,
      shouldFocus: true,
    });
        });

    
    //Bastion
    const contentStringBastion = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Фортечна галерея «Бастіон»</h1>' + '<div id="bodyContent">' + "<p>Завітавши до «Бастіону», ви неодмінно натрапите на якийсь цікавий мистецький захід. Тут постійно представляють змінні виставки різних напрямів мистецтва: фотографії, живопису, графіки, скульптури тощо. Проходять літературні читання та презентації книг. А на площі відбуваються різноманітні фестивалі, зокрема відомий міжнародний фестиваль «Свято ковалів». Галерея внесена до списку пам’яток архітектури, рекомендованих для відвідування офіційними делегаціями і туристичними групами. Тут можна безкоштовно переглянути фільм про історію Станиславівської фортеці та побачити живу історію – старий мур єдиного вцілілого південно-західного бастіону і каземати, які законсервовані й заховані під скло. Фортечна галерея також включає в себе кав’ярню, ресторан, галерею сучасного мистецтва і різноманітні крамнички.</p>" + "<img src='/assets/bastion.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowFifth = new google.maps.InfoWindow({
     content: contentStringBastion,
        });
    const markerFifth = new google.maps.Marker({
        position: bastion,
        map: map,
        });
    markerFifth.addListener("click", () => {
    infowindowFifth.open({
      anchor: markerFifth,
      map,
      shouldFocus: true,
    });
        });
    
    
    //Prom Prulad
    const contentStringPromPrulad = '<div id="content">' + '<div id="siteNotice">' + "</div>" + '<h1 id="firstHeading" class="firstHeading">Промприлад</h1>' + '<div id="bodyContent">' + "<p>Одна з нових візитівок Івано-Франківська — завод «Промприлад» (вул. Академіка Сахарова, 23). Завдяки ревіталізації завод перетворився з промислового об’єкту на популярне місце для зустрічей, роботи чи просто відпочинку. На його третьому поверсі зараз працюють коворкінг, галерея, майстерні та бар. Сюди можна прийти, якщо треба десь попрацювати у тиші, або хочеться випити хороших авторських коктейлів. Час від часу на Промприладі відбуваються концерти, нетворкінги або вечірки.</p>" + "<img src='/assets/promprylad.jpg' style='max-height: 200px'>" + "</div>" + "</div>";
    const infowindowSixth = new google.maps.InfoWindow({
     content: contentStringPromPrulad,
        });
    const markerSixth = new google.maps.Marker({
    position: promPruladRenovation,
    map: map,
         });
    markerSixth.addListener("click", () => {
    infowindowSixth.open({
    anchor: markerSixth,
    map,
    shouldFocus: true,
  });
        });
}

