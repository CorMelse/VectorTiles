//mapboxgl.accessToken = 'pk.eyJ1IjoiY29ybSIsImEiOiJjampmZHUzdzUxNXR2M2twMm5xNnM2bXdhIn0.qpMR9aknOkfn5k2tVxg_1g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'style.json',
    hash: true,
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [ 4.8, 52.4]
});
