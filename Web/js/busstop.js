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
var busIcon = L.icon({
    iconUrl: './css/images/busicon.png',
    iconSize:[32,51]
});
function find_busstop(){
if (marker) {
map.removeLayer(marker);
}          
for (var i=0; i<busstop.length; i++) {  
var lon1 = busstop[i][0];
var lat1 = busstop[i][1];
R = 6378.137;
dLat = lat1 * Math.PI / 180 - lat * Math.PI / 180;
dLon = lon1 * Math.PI / 180 - lng * Math.PI / 180;
a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
d = R * c;
z = d * 1;
if(z<=2){  
var popupText = busstop[i][2];
var markerLocation = new L.LatLng(lat1, lon1);
var pulsingIcon = L.icon.pulse({iconSize:[14,14],color:'red'});
var marker = new L.marker(markerLocation,{icon: pulsingIcon});
//var marker = new L.Marker(markerLocation,{icon: busIcon});
map.addLayer(marker);
marker.bindPopup(popupText);
        }
    }
}
