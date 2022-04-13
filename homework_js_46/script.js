
async function initMap() {
   const styles = await fetch("/mapStyles.json").then((res) => res.json());
   const zoo = { lat: 46.96030624094536, lng: 32.03662608465601 };
   const squareHeartCity = { lat: 46.97208652430837, lng: 32.00410728465601 };
   const cathedralSquare = { lat: 46.976108079805975, lng: 31.993976136489206 };
   const eighthJetty = { lat: 46.97745769962676, lng: 31.963173694453236 };
   const beacon = { lat: 46.89431299994076, lng: 32.010789474421074 };



   const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: zoo,
      zoomControl: false,
      scaleControl: false
   });


   function addMarker(propertis) {
      let marker = new google.maps.Marker({
         position: propertis.coordinates,
         map,
         styles,
         icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      });

      if (propertis.info) {
         let InfoWindow = new google.maps.InfoWindow({
            content: propertis.info,
         });

         marker.addListener('click', function () {
            InfoWindow.open(map, marker)
         });
      };
   }


   let markers = [
      {
         coordinates: zoo,
         info: "<h2>Николаевский Зоопарк</h2><img src='/img/zoo.png'><p>Если путешествуешь с ребенком, то непременно загляни в николаевский зоопарк – он считается одним из лучших в Украине. Здесь можно увидеть более 100 видов птиц, 79 видов млекопитающих, рептилий, рыб. Заложи на посещение зоопарка не менее 2,5-3 часов, так как он довольно большой – площадь зоопарка 18 га.</p>",
      },

      {
         coordinates: squareHeartCity,
         info: "<h2>Сквер «Сердце Города»</h2><img src='/img/squareHeartCity.png'><p>Этот сквер в центре города также один из старейших. Его история интересна хотя бы тем, что он четыре раза менял свое название. </p>",
      },

      {
         coordinates: cathedralSquare,
         info: "<h2>Соборная площадь</h2><img src='/img/cathedralSquare.png'><p>Центральная площадь – это лицо любого города. Лицом Николаева является Соборная площадь.</p>",
      },

      {
         coordinates: eighthJetty,
         info: "<h2>8 причал</h2><img src='/img/eighthJetty.png'><p>Последние три года пространство *8 Причал стало центром отдыха для горожан. Его заметно облагородили, территория сталавыглядеть эстетично. На *8 Причале хочется отдыхать круглосуточно, ведь и днем, и вечером предстает прекрасный речной пейзаж. Кроме того, на Причале с завидной регулярностью проходят различные мероприятия, собирающие вокруг себя не одну тысячу горожан.</p>",
      },

      {
         coordinates: beacon,
         info: "<h2>Маяк</h2><img src='/img/beacon.png'><p>Передний Сиверсов маяк - один из самых популяных маяков на Николаевщине среди туристов. Он расположен на самом краю Сиверсовой косы, в конце косы расположен задний Сиверсов маяк. Оба сооружения были установлены тут в 1866 году и изначально были выполнены из дерева.</p>",
      }
   ];

   for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i])
   };

}

