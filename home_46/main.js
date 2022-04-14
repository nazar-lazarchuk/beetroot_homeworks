const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

let map;

function initMap() {
  const pirogovsEstate = { lat: 49.21447499806541, lng: 28.408825191031745 };
  const roshensFountain = { lat: 49.2332255293135, lng: 28.48555776029333 };
  const waterTower = { lat: 49.23501102268713, lng: 28.46981541672779 };
  const hitlersBunker = { lat: 49.307867313014285, lng: 28.497390911245375 };

  map = new google.maps.Map(document.getElementById("map"), {
    center: roshensFountain,
    zoom: 12,
    styles: mapStyle,
    mapTypeControl: false,
    streetViewControl: false,
    draggable: false,
    zoomControl: false,
    fullScreen: true,
  });

  //1
  const contentRoshensFountain = `
  <div id="content">
  <h1>Фонтан та набережна Roshen</h1>
  <img src='/assets/фонтан.jpg' style='max-height: 200px'>
  <p>Найбільший у світі річковий світломузичний Фонтан на відкритих водоймищах та реконструйована Набережна «Roshen» були відкриті 4 вересня 2011 року. «Фонтан» розташований в руслі річки Південний Буг й має довжину 140 метрів і висоту струменя до 60 м.</p>
  </div>
`;
  const infoWindowFirst = new google.maps.InfoWindow({
    content: contentRoshensFountain,
  });
  const markerFirst = new google.maps.Marker({
    position: roshensFountain,
    map: map,
  });
  markerFirst.addListener("click", () => {
    infoWindowFirst.open({
      anchor: markerFirst,
      map,
      shouldFocus: true,
    });
    map.setCenter(roshensFountain);
  });

  //2
  const contentPirogovsEstate = `
  <div id="content">
  <h1>Національний музей-садиба М.І. Пирогова</h1>
  <img src='/assets/усадьба.jpg' style='max-height: 200px'>
  <p>Музей Пирогова відкритий на території садиби Вишня, де останні 20 років жив і працював видає хірург, анатом, вчений і педагог Микола Іванович Пирогов, якого вважають засновником військово-польової хірургії, а також Товариства Червоного Хреста.</p>
  </div>
`;
  const infoWindowSecond = new google.maps.InfoWindow({
    content: contentPirogovsEstate,
  });
  const markerSecond = new google.maps.Marker({
    position: pirogovsEstate,
    map: map,
  });
  markerSecond.addListener("click", () => {
    infoWindowSecond.open({
      anchor: markerSecond,
      map,
      shouldFocus: true,
    });
    map.setCenter(pirogovsEstate);
  });

  //3
  const contentWaterTower = `
    <div id="content">
    <h1>Водонапірна вежа</h1>
    <img src='/assets/вежа.jpeg' style='max-height: 200px'>
    <p>Візитівка Вінниці – 106-річна Башта на Європейській площі, вона була побудована в 1911 році для першого міського водопроводу, як Водонапірна вежа у Вінниці. Дивно, але будівля пір виглядає майже так само, як і раніше.</p>
    </div>
  `;
  const infoWindowThird = new google.maps.InfoWindow({
    content: contentWaterTower,
  });
  const markerThird = new google.maps.Marker({
    position: waterTower,
    map: map,
  });
  markerThird.addListener("click", () => {
    infoWindowThird.open({
      anchor: markerThird,
      map,
      shouldFocus: true,
    });
    map.setCenter(waterTower);
  });

  //4
  const contentHitlersBunker = `
        <div id="content">
        <h1>Ставка Гітлера Вервольф</h1>
        <img src='/assets/вервольф.jpeg' style='max-height: 200px'>
        <p>Незважаючи на те, що зараз колишня ставка Гітлера Вервольф практично зруйнована - комплекс є одним з найзагадковіших споруд в центральному регіоні України. Сюди досі влаштовують експедиції.</p>
        </div>
      `;
  const infoWindowFourth = new google.maps.InfoWindow({
    content: contentHitlersBunker,
  });
  const markerFourth = new google.maps.Marker({
    position: hitlersBunker,
    map: map,
  });
  markerFourth.addListener("click", () => {
    infoWindowFourth.open({
      anchor: markerFourth,
      map,
      shouldFocus: true,
    });
    map.setCenter(hitlersBunker);
  });
}
