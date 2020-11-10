---
layout: page
title: Technik
---

# Technik

## Einführung

Clair Berlin entwickelt eine offene Plattform für vernetzte Sensoren mit
Schwerpunkt auf CO<sub>2</sub>-Messwerte als [Freie
Software](https://www.gnu.org/philosophy/free-sw.de.html). Ziel ist es, durch
die Spezifikation offener Schnittstellen, die Anbindung beliebiger Sensortypen
zu erleichtern.

Die Mitarbeit in allen Bereichen der Initiative - Entwicklung, Design,
Kommunikation etc. - ist herzlich willkommen. Ebenso sind Gemeinschaften in
anderen Städten eingeladen, eine eigent Instanz des Systems zu betreiben und
ggf. die Software für ihre Anforderungen anzupassen.

## Sytemüberblick

Die folgende Abbildung zeigt das Systemschaubild des Clair-Netzwerks.

![Systemschaubild Clair-Netwerk]({{ "/img/clair-network.png" | relative_url }})

Kern des Systems ist der _Clair Berlin Server_, intern `managair` genannt, der
eine
[REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-Schnittstelle
bereitstellt, über die das System Daten aufnehmen und wieder zur Verfügung
stellen kann.

Das System wurde zunächst mit Fokus auf
[LoRaWAN](https://de.wikipedia.org/wiki/Long_Range_Wide_Area_Network)-Sensoren
entwickelt, die über das Berliner [The Things
Network](https://www.thethingsnetwork.org/) angebunden werden, andere
[IP](https://de.wikipedia.org/wiki/Internet_Protocol)-kompatible Protokolle
können aber in einfacher Weise ergänzt werden.

## Datenmodell

Das Clair Berlin Datenmodell ist in der folgenden Abbildung in vereinfachter
Weise als Entity-Relationship-Diagramm dargestellt.

![Clair Berlin Entity-Relationship-Diagramm]({{ "/img/clair-er-diagram.png" | relative_url }})

Organisationen verwalten Räumlichkeiten (_Sites_), die eine Adresse haben und
aus mehreren Räumen bestehen können. Ihnen gehören die Sensoren (_Nodes_), die
über bestimmte Zeiträume in einzelnen Räumen installiert werden können. Nutzer\*Innen
(_User_) des Systems sind Mitglieder in Organisationen. Jedes Mitglied hat eine
eindeutige Rolle, die ihre Zugriffsrechte auf das Inventar der jeweiligen
Organisation bestimmt.

## Quellcode

Der gesamte Quellcode ist in einzelnen Repositorys der [Clair Berlin
Organisation auf GitHub](https://github.com/ClairBerlin) verfügbar. Pull
Requests sind willkommen.

Den Kern des Systems bilden die folgenden Repositorys:

* [managair](https://github.com/ClairBerlin/managair), der zentrale Server, eine
  [Django](https://www.djangoproject.com/)-Anwendung, die das Datenmodell und
  die REST-Schnittstelle implementiert.
* [clair-stack](https://github.com/ClairBerlin/clair-stack), die Definition des
  [Docker-Service-Stacks](https://docs.docker.com/get-started/swarm-deploy/)
  der Gesamtinfrastruktur
* [clair-ttn](https://github.com/ClairBerlin/clair-ttn), eine in Python
  geschriebene TTN-Application, die zur Anbindung weiterer LoRaWAN-Sensoren
  erweitert werden kann
* [clair-admin-ui](https://github.com/ClairBerlin/clair-admin-ui), das mit
  Hilfe des [Quasar-Frameworks](https://quasar.dev/) entwickelte Frontend für
  die Betreiber der öffentlichen Räume
