const OBJECT_COORDINATES = [55.01302073879865, 36.501839846557615];
const ZOOM_DEFAULT = 15;

export default function init() {
  var myMap = new ymaps.Map("route-map", {
    center: OBJECT_COORDINATES,
    zoom: ZOOM_DEFAULT,
    controls: ['geolocationControl', 'routeButtonControl', 'typeSelector', 'fullscreenControl', 'zoomControl']
  });

  const placemark = new ymaps.Placemark(OBJECT_COORDINATES,
    {
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/icons/icon-address.svg',
      iconImageSize: [32, 32],
      iconOffset: [-5, -4],
      hasBalloon: false,
    }
  );

  myMap.geoObjects.add(placemark);

  const routeControl = myMap.controls.get('routeButtonControl');
  routeControl.routePanel.state.set({
    toEnabled: false,
    to: OBJECT_COORDINATES,
  });

  routeControl.routePanel.options.set({
    types: {
      auto: true,
      masstransit: true,
      pedestrian: true,
      bicycle: false,
    }
  });
}
