// load Document 

$(document).ready(function(){
    


// setup map

var map = L.map('map').setView([36.142000, -86.802843], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 17,
    minZoom: 14,
    id: 'mikealbonetti.n1o740kd',
    accessToken: 'pk.eyJ1IjoibWlrZWFsYm9uZXR0aSIsImEiOiI5MzMwMmM4NGU5ZTc4NGRhZTMwNmUwODdhNjYwOGU1ZCJ9.7vD1iXBsAswoe5LsI10vRg'
}).addTo(map);

//////////////////  end map setup ///////////////////////////
    
/////////// import map icons //////////////
    
// Load Icon files
    
var markerIcon = L.Icon.extend({
    options: {
        shadowUrl: '../images/custom_markers/shadow.png',
        iconSize: [25,41],
        shadowSize:   [60,60],
        iconAnchor:   [0,0],
        shadowAnchor: [0,0],
        popupAnchor:  [14, 1]
    }
});
    
var blueMarker = new markerIcon({iconUrl: '../images/custom_markers/blue_marker.png' }), 
    
    redMarker = new markerIcon({iconUrl: '../images/custom_markers/red_marker.png' }), 
    greenMarker = new markerIcon({iconUrl: '../images/custom_markers/green_marker.png' }), 
    
    yellowMarker = new markerIcon({iconUrl: '../images/custom_markers/yellow_marker.png' }) 

/* test marker 
    var marker = L.marker([36.142000, -86.802843], {icon: redMarker});
    var popup = "Vandy";
    
    marker.bindPopup(popup);
    marker.addTo(map);
    end test marker  */
    
//////////////// GeoJson///////////////////////////



// apply popup and set icon color in one marker variable 
    
function geoDataStyle (feature, layer){
    layer.bindPopup("<div class='popupData'><p>Building Name - " + feature.properties.BuildingName + "</p><p>Area - " + feature.properties.Area + "</p><p>Address - " + feature.properties.Address + "</p><p>Alt. Address - " + feature.properties.AltAddress + "</p></div>");
    
    layer.setIcon(redMarker);
        
};

L.geoJson(vandyData, {
    onEachFeature: geoDataStyle
}).addTo(map);

    

    
    
    
    
 
});  // end load document