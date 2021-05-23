import L from 'leaflet';

const MarkerPlane = new L.Icon({
    iconUrl: require('./airplane.svg'),
    iconRetinaUrl: require('./airplane.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: 'leaflet-div-icon'
});

export { MarkerPlane };