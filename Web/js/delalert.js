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
function remove_localert(){
swal({
  title: "Delete Alarm",
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
latitude = null; 
longitude = null;
map.removeLayer(marker);
swal("Alert Removed"," ", "success");
  } else {
    swal("Alert will work ", " ", "error");
  }
});

}
