// load Document 

$(document).ready(function(){
    


// setup map

var map = L.map('map').setView([36.142000, -86.802843], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mikealbonetti.n1o740kd',
    accessToken: 'pk.eyJ1IjoibWlrZWFsYm9uZXR0aSIsImEiOiI5MzMwMmM4NGU5ZTc4NGRhZTMwNmUwODdhNjYwOGU1ZCJ9.7vD1iXBsAswoe5LsI10vRg'
}).addTo(map);

// load single marker

    var blueIcon = L.icon({
        iconUrl: '../images/marker-icon.png'
    });
    
    var marker = L.marker([36.142000, -86.802843], {icon: blueIcon});
    var popup = "Vandy";
    
    marker.bindPopup(popup);
    marker.addTo(map);
    

    
    
    
    
// end load document 
});