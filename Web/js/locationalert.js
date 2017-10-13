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
var lati,longi,marker,lat,lng,lat2,lon2,R,dLat,dLon,a,c,d,z
var latitude=null
var longitude=null
var destIcon = L.icon({
    iconUrl: './css/images/placeholder.png',
    iconSize:[32,32]
});
function location_alert(){
swal({
  title: "Are you sure?",
  type: "warning",
  showCancelButton: true,
  confirmButtonColor: "#7dc37d",
  closeButtonColor:"red",
  confirmButtonText: "OK!",
  cancelButtonText: "Cancel!",
  closeOnConfirm: false,
  closeOnCancel: false
},
function(isConfirm){
  if (isConfirm) {
latitude = document.getElementById("value1").value 
longitude = document.getElementById("value2").value
if (marker) {
        map.removeLayer(marker);
    }
marker = L.marker([latitude,longitude],{icon: destIcon}).bindPopup("Alarm Saved <img src=./css/images/trash.png onClick=remove_localert(); /><img src=./css/images/settings.png onClick=location_settings(); />").addTo(map);
swal("Location Saved"," ", "success");
  } else {
    swal("Location Cancelled", " ", "error");
  }
});
}
function store(e){
localStorage.setItem('latitude', JSON.stringify(latitude));
localStorage.setItem('longitude', JSON.stringify(longitude));
lati = JSON.parse(localStorage.getItem('latitude'));
longi = JSON.parse(localStorage.getItem('longitude'));
lat2=lati;
lon2=longi;
R = 6378.137;
dLat = lat2 * Math.PI / 180 - lat * Math.PI / 180;
dLon = lon2 * Math.PI / 180 - lng * Math.PI / 180;
a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
d = R * c;
z = d * 1;
if(z<=1){   
document.getElementById('location').play();      
remove_localert();
}
}

