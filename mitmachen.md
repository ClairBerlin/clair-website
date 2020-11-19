---
layout: page
title: Mitmachen
---

# Mitmachen

## Testbetrieb

Clair Berlin ist momentan im Testbetrieb mit einer kleinen Anzahl Sensoren.
Falls Du Interesse hast, als Betreiberin oder Betreiber von öffentlich
zugänglichen Räumen an der Clair-Berlin-Initiative teilzunehmen, registriere
Dich bitte über das folgende Formular.

Wir bitten um Verständnis, dass wir uns in der derzeitigen Phase aus operativen
Gründen auf den Raum Berlin beschränken.

## Registrierung

<form id="registration-form" action="https://usebasin.com/f/e2ea6ee517a9" method="POST">
  <div class="form-group">
    <label for="email">Deine Email-Adresse:</label>
    <input type="email" class="form-control" id="email" name="email" required aria-describedby="operatorEmailHelp">
    <small id="operatorEmailHelp" class="form-text text-muted">
      Wir verwenden Ihre Email-Adresse ausschließlich dazu, um Sie einmalig zu
      kontaktieren, sobald Ihr Konto freigeschaltet werden kann.
    </small>
  </div>
  <div class="form-group">
    <label for="operatorName">Dein Name (optional, aber gerne gesehen):</label>
    <input type="text" class="form-control" id="operatorName" name="operatorName" aria-describedby="operatorNameHelp">
  </div>
  <div class="form-group">
    <label for="numberSites">Wie viele Orte möchtest Du mit Sensoren ausstatten?</label>
    <input type="number" value="1" min="1" max="99" class="form-control" id="number" name="numberSites">
  </div>
  <div class="form-group">
    <label for="kind">Um was für Orte handelt es sich?</label>
    <input type="text" class="form-control" id="kind" name="kind" required aria-describedby="kindHelp">
    <small id="kindHelp" class="form-text text-muted">Restaurant, Schulungszentrum, Gallerie etc.</small>
  </div>
  <div class="form-group">
    <label for="numberRooms">Wie viele Räume möchtest Du ingesamt mit Sensoren ausstatten?</label>
    <input type="number" value="1" min="1" max="99" class="form-control" id="numberRooms" name="numberRooms">
  </div>
  <div class="form-group">
    <label for="locations">Wo liegen die Orte, die Du mit Sensoren ausstatten möchtest?</label>
    <input type="text" class="form-control" id="locations" name="locations" required aria-describedby="locationsHelp">
    <small id="locationsHelp" class="form-text text-muted">Berliner Bezirk, außerhalb von Berlin etc.</small>
  </div>
  <button type="submit" class="btn btn-primary">Registrieren</button>
  <div id="formMessage" class="my-4"></div>
</form>
<script type="text/javascript">
const form = document.getElementById("registration-form");
(function() {
 'use strict';
 window.addEventListener('load', function() {
     form.addEventListener('submit', function(event) {
         if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
         }
         form.classList.add('was-validated');
         }, false);
     }, false);
 })();
var formMessage = document.getElementById("formMessage");
form.onsubmit = function(event) {
  event.preventDefault();
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);
  xhr.onload = function(e) {
    console.log(xhr);
    var response = JSON.parse(xhr.response);
    if (xhr.status === 200) {
      formMessage.innerHTML = '\
<div class="alert alert-success alert-dismissible fade show" role="alert">\
  Wir haben Ihre Daten erhalten und danken für Ihr Interesse.\
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
    <span aria-hidden="true">&times;</span>\
  </button>\
</div>'
    } else {
      formMessage.innerHTML = '\
<div class="alert alert-warning alert-dismissible fade show" role="alert">\
  Ihre Daten konnten leider nicht entgegen genommen werden. Bitte versuchen Sie es zu einem späteren Zeitpunkt erneut.\
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
    <span aria-hidden="true">&times;</span>\
  </button>\
</div>'
      console.error(response.error)
    }
  };
  xhr.send(formData);
};
</script>
