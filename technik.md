---
layout: page
title: Technik
---

# Technik

Clair Berlin entwickelt eine offene Plattform für vernetzte Sensoren mit
Schwerpunkt auf CO<sub>2</sub>-Messwerten. Die Clair-Plattform ist [Freie
Software](https://www.gnu.org/philosophy/free-sw.de.html). Derzeit nutzen wir zur Anbindung der Sensoren die für Messdaten optimierte LoRaWAN Funktechnologie. Aber die Clair-Plattform legen wir so aus, dass über offene Schnittstellen beliebige Sensortypen und Sensor-Netzwerke angebunden werden können.

## Sytemüberblick

Das Clair-Netzwerk besteht aus den in öffentlich zugänglichen Räumen installierten Sensoren, einem Kommunikationsnetzwerk, der Clair-Plattform, sowie verschiedenen Client-Anwendungen. Die folgende Abbildung gibt einen Systemüberblick.

![Systemschaubild Clair-Netzwerk]({{ "/img/clair-network.png" | relative_url }})

### Sensoren und Sensor-Netzwerk

CO<sub>2</sub>-Sensoren messen die CO<sub>2</sub>-Konzentration in mehr oder weniger regelmäßigen Abständen. Zusammen mit ggf. weiteren Messgrößen wie Temperatur oder Luftfeuchtigkeit entsteht ein _Sample_. Jeder Sensor schickt seine gemessenen Samples regelmäßig an die Clair Plattform. Die Kommunikation erfolgt typischerweise drahtlos bis zu einem Gateway und von dort weiter über das Internet.

Kommerziell erhältliche Sensoren nutzen verschiedene Funknetzwerke: Die auf Messwerte spezialisierten Technologien [LoRaWAN](https://lora-alliance.org/about-lorawan) und [SigFox](https://www.sigfox.com/en), das vom Mobilfunk abgeleitete [NB-IoT](https://en.wikipedia.org/wiki/Narrowband_IoT), aber auch bekannte Consumer-Funknetzwerke wie [WiFi](https://www.wi-fi.org) oder [Bluetooth](https://www.bluetooth.com). Die auf Messwert- und Internet-of-Things- (IoT) Kommunikation spezialisierten Technologien bieten größere Reichweiten und geringeren Energieverbrauch. Nutzer müssen hier zumeist keine eigenen Gateways aufstellen, und die Sensoren können über Jahre hinweg mit einem Satz Batterien betrieben werden. Allerdings ist die zulässige Datenrate sehr niedrig, so dass nur wenige Samples pro Stunde aufgenommen und übertragen werden dürfen.

In der ersten Ausbaustufe des Clair-Netzwerks setzen wir auf LoRaWAN, da diese Funktechnologie die Grundlage ist des freien, durch eine offene Community betriebenen [The Things Network](https://www.thethingsnetwork.org/community/berlin/). Bei Bedarf und Interesse binden wir aber gerne weitere Sensornetzwerke und Sensortypen ein.

### Clair Plattform

Für Sensoren, die ins Clair-Netzwerk eingebunden werden sollen, konfigurieren wir eine Verbindung zu einem bestimmten Endpunkt im Things Network, einer sog. _TTN Anwendung_. Diese TTN-Anwendung wiederum leitet die Messdaten an die Clair-Plattform weiter.

Eine Übersicht der Clair-Plattform zeigt die folgende Abbildung.
![Die Clair Plattform]({{ "/img/clair-stack.png" | relative_url }})

Technisch gesehen besteht die Plattform aus mehreren Anwendungen, welche wir als [Docker](https://docs.docker.com/get-started/) Container verpacken und über [Docker Swarm](https://docs.docker.com/engine/swarm/) orchestrieren. 

Die _Forwarder_ empfangen Messdaten eines bestimmten Sensortyps aus dem Things Network, entschlüsseln und decodieren diese und leiten sie weiter an die `ingestair` genannte Anwendung, welche die Daten aufnimmt und in der zentralen Datenbank speichert.

Wenn neue Sensormodelle oder ein neues Funknetzwerk angebunden werden sollen, welche Daten über [IP](https://de.wikipedia.org/wiki/Internet_Protocol)-kompatible Protokolle bereitstellen,
müssen wir lediglich einen passenden neuen Forwarder schreiben; der Rest der Plattform ändert sich nicht.

Kern des Systems ist der _Clair Server_, intern `managair` genannt, der
eine
[REST](https://de.wikipedia.org/wiki/Representational_State_Transfer)-Schnittstelle
bereitstellt. Diese REST-Schnittstelle steht allen Client-Anwendungen offen, um Messdaten zu beziehen und Sensoren zu verwalten.

### Datenmodell des Clair-Servers

Die Clair Plattform bildet real existierende Entitäten ab:

- _User_ sind natürliche Personen. Sie können sich ein Konto anlegen und sich mittels Benutzername und Passwort über eine Client-Anwendung an der Plattform anmelden.
- _Organisationen_ sind die Betreiber von Räumen im juristischen Sinn, also z.B. Firmen oder Vereine. Jede Organisation hat einen oder mehrere _User_ als _Mitglieder_. Ein User kann gleichzeitig Mitglied mehrerer Organisationen sein - z.B. eine Teilzeitkraft, die in zwei Cafés angestellt ist.
- Eine Organisation ist Clair-Teilnehmer, weil sie vernetzte CO<sub>2</sub>-Sensoren betreibt. Diese Sensoren sind als _Nodes_ in der Clair Plattform abgebildet und fest der jeweiligen Organisation zugeordnet.
- Jede Organisation hat mindestens einen durch eine _Adresse_ identifizierten _Ort_ (Site). Dort befindet sich beispielsweise ein Geschäft, Restaurant oder eine Praxis. Eine Organisation kann auch mehrere Orte betreiben, wie z.B. bei einer Café-Kette.
- Jeder Ort kann über ein oder mehrere _Räume_ verfügen, in denen wiederum ein oder mehrere Sensoren installert sein können. Eine _Installation_ kann von begrenzter Dauer sein. Somit ist es möglich, einen Sensor nach einer bestimmten Zeit aus einem Raum in einen anderen umzuhängen.

Dieses Datenmodell ist in der folgenden Abbildung in vereinfachter
Weise als Entity-Relationship-Diagramm dargestellt.

![Clair Berlin Entity-Relationship-Diagramm]({{ "/img/clair-er-diagram.png" | relative_url }})

### Client-Anwendungen

Der Zugriff auf die Clair Plattform erfolgt grundsätzlich über die REST-Schnittstelle des Clair Servers. Je nach Nutzer sehen wir verschiedene Client-Anwendungen vor:

- Das _Clair Widget_ richtet sich an die Öffentlichkeit; es visualisert den Verlauf der  CO<sub>2</sub>-Konzentration an einem bestimmten Ort - sofern doe zugehörige Organisation die Installationen am jeweiligen Ort als _öffentlich_ freigegeben hat. Das Widget ist eine kleine JavaScript-Anwendung, die in Websites oder Smartphone-Apps eingebunden werden kann.
- Das _Betreiber-Dashboard_ dient den Mitgliedern einer Organisation zur Verwaltung ihrer Sensoren, Orte, Räume und Installationen. Über das Dashboard können Betreiber alle Messwerte aller Sensoren einsehen und entscheiden, welche davon sie veröffentlichen möchten. Nur die Messwerte der als _öffentlich_ gekennzeichneten Installationen stehen nicht angemeldeten Benutzern zur Verfügung.
- Das _Admin-UI_ dient der Wartung des Systems sowie der Pflege aller Daten im Testbetrieb. Nur Systemadministratoren haben Zugang.

## Quellcode

Der gesamte Quellcode der Clair Plattform ist in einzelnen Repositorys der [Clair Berlin
Organisation auf GitHub](https://github.com/ClairBerlin) verfügbar. Pull
Requests sind willkommen. Den Kern des Systems bilden die folgenden Repositories:

* [clair-stack](https://github.com/ClairBerlin/clair-stack): Die Definition des
  [Docker-Service-Stacks](https://docs.docker.com/get-started/swarm-deploy/)
  der Gesamtinfrastruktur
* [managair](https://github.com/ClairBerlin/managair), der zentrale Server: Eine
  [Django](https://www.djangoproject.com/)-Anwendung, die das Datenmodell und
  die REST-Schnittstelle implementiert.
* [clair-ttn](https://github.com/ClairBerlin/clair-ttn): Eine in Python
  geschriebene TTN-Application, die zur Anbindung weiterer LoRaWAN-Sensoren
  erweitert werden kann.
* [clair-admin-ui](https://github.com/ClairBerlin/clair-admin-ui): das mit
  Hilfe des [Quasar-Frameworks](https://quasar.dev/) entwickelte Betreiber-Dashboard.

## Mitarbeit und Nutzung der Clair-Plattform

Clair Berlin ist eine gemeinnützige Initiative; sämtliche oben beschriebenen _Assets_ liegen im Quellcode vor und können durch Dritte genutzt werden. Wenn ihr mitarbeiten möchtet, so ist dies in allen Fachgebieten möglich: Entwicklung, Design, Kommunikation etc.

Die Clair REST-Schnittstelle ist komplett dokumentiert und folgt der [JSON:API](https://jsonapi.org)-Spezifikation, so dass ihr auch einfach eigene Client-Anwendungen entwickeln könnt.

Wir denken die Clair Plattform _regional_, und betreiben derzeit die erste Instanz in Berlin. Wenn ihr in einer anderen Region ebenfalls ein Clair Netzwerk aufbauen möchtet, so setzt ihr dazu am besten jeweils eine neue Instanz der Clair Plattform auf. Dabei unterstützen wir euch gerne!
