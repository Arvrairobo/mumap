/*
 * Copyright (c) 2017 Vignesan Selvam
 *
 * Mu Maps is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the
 * Free Software Foundation; either version 3 of the License, or (at your
 * option) any later version.
 *
 * Mu Maps is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with Mu Maps; if not, see <http://www.gnu.org/licenses/>.
 *
 * Author: Vignesan Selvam <vignesanselvam@gmail.com>
 */

var map = new L.Map('map',{ 
center: [11.660978698779758, 78.15742492675781],
zoom: 7,
zoomControl:false 
});
map.attributionControl.setPrefix('');
map.on('click', function(e) {
        var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent("<center><b>Options</b></br> <input type=hidden id=value1 value="+e.latlng.lat+" /><input type=hidden id=value2 value="+e.latlng.lng+" /><img src=./css/images/bell.png onClick=location_alert(); /><img src=./css/images/toll.png onClick=toll(); /></br><img src=./css/images/speed-limit.png onClick=speed_limit(); /> <img src=./css/images/info.png onClick=info(); /></center>")
        .openOn(map);
    });

//watermark lines
L.Control.Watermark = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = './css/images/logo.png';
        img.style.width = '50px';
        return img;
    },
});
L.control.watermark = function(opts) {
    return new L.Control.Watermark(opts);
}
L.control.watermark({ position: 'bottomleft' }).addTo(map);
L.tileLayer.grayscale('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            noWrap: true,
            attribution: ' &copy; <a href="http://openstreetmap.org/copyright">osm.org</a> '
        }).addTo(map);

//location
map.locate({
                watch: true,
                dragging: true,
                enableHighAccuracy: true,
                timeout: 1000*60,
                maximumAge: 60000*60*60*60,
                frequency: 1,
            });
            var current_position, current_accuracy;
            function onLocationFound(e) {
            if (current_position) {
                map.removeLayer(current_position);
                map.removeLayer(current_accuracy);
            }
            var radius = e.accuracy / 8;
            lat=e.latlng.lat;
            lng=e.latlng.lng;
            current_position = L.marker(e.latlng).bindPopup("<b>Current Position</b></br><center><img src=./css/images/bus.png onClick=find_busstop(); /> <img src=./css/images/info.png onClick=info(); /></center>").addTo(map);
            current_accuracy = L.circle(e.latlng, radius).addTo(map);
            store();
            
}
        function onLocationError(e) {
            alert(e.message);
        }

        map.on('locationfound', onLocationFound);
        //map.on('locationerror', onLocationError);
