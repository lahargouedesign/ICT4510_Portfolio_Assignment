/**
        Name: Michael C. Lahargoue
        Course: ICT-4510 Adv Website Design & Mgmt(Online Asynchronous)
        Term: Winter Quarter 2023
        Date: 03.11.2023
        Instructor: Fernando Reyes
        Assignment Name: Week 10 Portfolio Assignment 
        Assignment Description: RESTAURANT WEB APPLICATION | Map Script 
*/

const LAT = 39.678380;
const LONG = -104.961753;

let mymap = L.map('map').setView([LAT, LONG], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbGxhaGFyZ291ZSIsImEiOiJjbGU3aHg3cXIwNW40M3FwZ3JkMGxvdTllIn0.LarW83sTrG1tHJk4DsUdqA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

L.marker([LAT, LONG]).addTo(mymap).bindPopup("Miguelitos Denver at the University of Denver | Latitude: 39.678121 Longitude: -104.961753 | 2023 ");
L.popup();

