---
layout: page
title: Mitmachen
---

# Mitmachen

## Testbetrieb

Clair Berlin ist momentan im Testbetrieb mit einer kleinen Anzahl Sensoren.
Falls Sie Interesse haben, als Betreiber von öffentlich zugänglichen Räumen an
der Clair-Berlin-Initiative teilzunehmen, registrieren Sie sich bitte über das
folgende Formular.

Wir bitten um Verständnis, dass wir uns in der derzeitigen Phase aus operativen
Gründen auf den Raum Berlin beschränken.

## Registrierung

<form class="needs-validation" action="https://usebasin.com/f/e2ea6ee517a9" method="POST">
  <div class="form-group">
    <label for="operatorEmail">Ihre Email-Adresse:</label>
    <input type="operatorEmail" class="form-control" id="operatorEmail" name="operatorEmail" required aria-describedby="operatorEmailHelp">
    <small id="operatorEmailHelp" class="form-text text-muted">
      Wir verwenden Ihre Email-Adresse ausschließlich dazu, um Sie einmalig zu
      kontaktieren, wenn wir bereit sind, bla bla.
    </small>
  </div>
  <div class="form-group">
    <label for="operatorName">Ihr Name (optional):</label>
    <input type="text" class="form-control" id="operatorName" name="operatorName" aria-describedby="operatorNameHelp">
  </div>
  <div class="form-group">
    <label for="numberSites">Wie viele Orte möchten Sie mit Sensoren ausstatten?</label>
    <input type="number" value="1" min="1" max="99" class="form-control" id="number" name="numberSites">
  </div>
  <div class="form-group">
    <label for="kind">Um was für Orte handelt es sich?</label>
    <input type="text" class="form-control" id="kind" name="kind" required aria-describedby="kindHelp">
    <small id="kindHelp" class="form-text text-muted">Restaurant, Schulungszentrum, Gallerie etc.</small>
  </div>
  <div class="form-group">
    <label for="numberRooms">Wie viele Räume möchten Sie ingesamt mit Sensoren ausstatten?</label>
    <input type="number" value="1" min="1" max="99" class="form-control" id="numberRooms" name="numberRooms">
  </div>
  <div class="form-group">
    <label for="locations">Wo liegen die Orte, die Sie mit Sensoren ausstatten möchten?</label>
    <input type="text" class="form-control" id="locations" name="locations" required aria-describedby="locationsHelp">
    <small id="locationsHelp" class="form-text text-muted">Berliner Bezirk, außerhalb von Berlin etc.</small>
  </div>
  <button type="submit" class="btn btn-primary">Registrieren</button>
</form>
<script>
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
