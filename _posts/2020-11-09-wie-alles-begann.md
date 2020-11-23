---
layout: post
title:  "Wie alles begann"
date:   2020-11-09 08:02:29 +0100
author: Jan Weil
category: Technik
---

Als Uli mich Anfang September überzeugt hatte, das Projekt mit den vernetzten
CO<sub>2</sub>-Sensoren anzugehen, war das Berliner [The Things
Network](https://thethingsnetwork.org) eine naheliegende Lösung zur Anbindung
der Sensoren. Ich hatte mich schon länger mal mit
[LoRaWAN](https://de.wikipedia.org/wiki/Long_Range_Wide_Area_Network)
auseinandersetzen wollen, da uns diese Funktechnologie und ähnliche wie z. B.
[NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT) in früheren Projekten
mehrfach vorgeschlagen wurden.

Um alle Eigenarten des Systems zu verstehen, fingen wir ganz unten an und
bauten einen eigenen Prototyp auf. Nach etwas Recherche entschieden wir uns für
eine Kombination aus dem Radiofrüchtchen [Feather M0 RFM95 LoRa Radio
(900MHz)](https://www.adafruit.com/product/3178) von
[Adafruit](https://www.adafruit.com) und dem CO<sub>2</sub>-Sensor
[SCD30](https://www.sensirion.com/scd30/) von
[Sensirion](https://www.sensirion.com).

## Breadboard-Aufbau

Wir folgten dem [Adafruite
TTN-Tutorial](https://learn.adafruit.com/the-things-network-for-feather),
legten unsere erste TTN-Applikation an und waren dank des Gateways auf dem
Schöneberger EUREF-Campus tatsächlich innerhalb kürzester Zeit online.

Danach schlossen wir auf unserem simplen Breadboard-Layout den SCD30 per
[I<sup>2</sup>C](https://de.wikipedia.org/wiki/I%C2%B2C) an. Das Ergebnis sah
und sieht bis heute so aus:

![Clairchen]({{ "/img/clairchen.jpg" | relative_url }})

Zu besseren Übersicht in Draufsicht:

![Clairchen Draufsicht]({{ "/img/clairchen-draufsicht.jpg" | relative_url }})

Wir nutzten die
[SCD30-Arduino-Library](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library)
von [Sparkfun](https://www.sparkfun.com/), um den SCD30 anzusprechen und
konnten mit Freude nachvollziehen, wie die CO<sub>2</sub>-Messwerte in die Höhe
schossen, wenn man den SCD30 anhauchte.

## Software

Bis hierher hatten wir im Wesentlichen
[Arduino](https://www.arduino.cc/)-Beispiel-Sketches der verschiedenen Librarys
zusammenkopiert. Nun ging es darum, unserem Aufbau etwas mehr Intelligenz zu
gönnen.

Die größte Herausforderung war es dabei, die Anforderungen unserer Anwendung
mit der [Fair Access
Policy](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle.html) des TTN
in Einklang zu bringen. Unser Ziel war und ist es, Messdaten (zumindest zu
relevanten Tageszeiten) mit ausreichend hoher Auflösung und möglichest geringer
Latenz zur Verfügung zu stellen. Um z. B. die Entwicklung der
CO<sub>2</sub>-Konzentration in einem Klassenraum während einer Schulstunde
nachvollziehen zu können, reicht es nicht, drei Messwerte pro Stunde zu
übertragen, und wenn im richtigen Moment darauf aufmerksam gemacht werden soll,
dass das Fenster geöffnet werden sollte, sollten die Daten nicht mit einer
halben Stunde Verzögerung eintrudeln.

Die Fair Access Policy des TTN schreibt vor, dass jedes Gerät *max. 30 s
Airtime pro 24 Stunden* im Uplink belegen sollte. Die Herausforderung besteht
nun darin, dass ein Gerät, das relativ weit von einem Gateway entfernt ist,
einen hohen
[Spreading Factor](https://www.thethingsnetwork.org/docs/lorawan/modulation-data-rate.html)
verwenden muss, damit seine Nachrichten vom Gateway empfangen werden.
Solcherart kodierte Nachrichten können aber leider über eine Sekunde
lang werden, so dass das tägliche Airtime-Kontingent schnell verbraucht ist.
Deshalb haben wir für unseren Prototyp die Mess- und die Übertragungsfrequenz
vom jeweils aktuellen _Modulation and Coding Scheme_ abhängig gemacht. Die
Details unseres so entworfenen Übertragungsschemas sind in
[einem Design-Dokument](https://github.com/ClairBerlin/clair-doc/blob/master/node-protocol/sampling-and-transmission-scheme.pdf)
beschrieben.

Leider lassen sich für viele kommerziell verfügbaren Sensoren die
Übertragungschemata nicht in ähnlicher Weise anpassen, was sie, sofern nicht
ausreichend Gateways zur Verfügung stehen, für das TTN in unseren Augen schnell
unattraktiv macht.

Der Quellcode für unseren ersten Prototyp ist [auf
GitHub](https://github.com/ClairBerlin/clairchen) verfügbar.
