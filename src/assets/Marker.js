import L from 'leaflet';

const MarkerPlane = new L.Icon({
    iconUrl: require('./avion.png'),
    iconRetinaUrl: require('./avion.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: 'leaflet-div-icon'
});

export { MarkerPlane };