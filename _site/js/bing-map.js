function GetMap() {
    var map = new Microsoft.Maps.Map('#bing-map',{
        credentials: 'AgifgS4JSoxV961JvJyy4XUmYPRfUNjjZhyyH0EDo_j0Uk7p2qEJ9ddsQosdIbpn',
        center: new Microsoft.Maps.Location(41.881832, -87.623177),
        zoom: 4
    });

    var center = map.getCenter();

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
        icon: 'images/loc.png',
        //anchor: new Microsoft.Maps.Point(12, 39)
    });

    //Add the pushpin to the map
    map.entities.push(pin);
}