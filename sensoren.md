---
layout: page
title: CO<sub>2</sub>-Sensoren
image: /img/elsys-ers-co2-lite.jpg
---

# CO<sub>2</sub>-Sensoren

Je mehr vernetzte CO<sub>2</sub>-Sensoren es in der Stadt gibt, desto nützlicher wird die Clair Plattform. Wie kommt ihr also an Sensoren? Wie bindet ihr diese an die Plattform an?

### Bezugswege

Derzeit gibt es drei Möglichkeiten, Räume mit Sensoren auszustatten und diese an die Clair-Plattform anzubinden.

### Variante 1: Early-Bird Testteilnehmer

Für Testzwecke haben unsere Partner [CityLAB Berlin](https://www.citylab-berlin.org), [HPI](https://hpi.de/entrepreneurship/) und [IHK](https://www.ihk-berlin.de/) 20 Testgeräte angeschafft, die wir euch teilweise zur verfügung stellen können. Melde Dich bei Interesse einfach mittels unseres [Mitmach-Formulars](mitmachen.md) an. Wir suchen für den Testbetrieb nach möglichst unterschiedlichen Orten - in Bezug auf die Raumgröße, Nutzung und die geographische Lage. Wenn Du zum Zug kommst, erhältst Du einen fix- und fertig konfigurierten
[Elsys ERS CO<sub>2</sub> Lite](https://www.elsys.se/en/ers-co2-lite/) Sensor von uns.

![ERS CO<sub>2</sub> Lite]({{ "/img/elsys-ers-co2-lite.jpg" | relative_url }})

Wir kommen vorbei, um uns den Raum anzusehen, helfen Dir den Sensor anzubringen und erklären Dir Deinen Account auf der Clair Plattform. In den darauffolgenden Wochen möchten wir gerne mit Dir regelmäßig die Daten ansehen, um die Besonderheiten verschiedener Räume zu verstehen; ggf. würden wir den Sensor nochmals an einer anderen Stelle aufhängen. Idealerweise bist Du damit einverstanden, dass die Messdaten aus dem Testbetrieb durch die Forschungsgruppe von [Prof. Müller an der HTW Berlin](https://www.htw-berlin.de/forschung/online-forschungskatalog/projekte/person/?eid=4648) analysiert werden.

### Variante 2: Early-Adopter

Du möchtest unbedingt vorne dabei sein, hast aber keinen Platz als Test-Teilnehmer mehr erhalten? Dann kannst Du trotzdem sofort loslegen, wenn Du Dir selbst einen Sensor zulegst. Weiter unten auf der Seite haben wir einige kommerziell erhältliche Sensoren aufgelistet. Am schnellsten geht es mit dem bereits genannten Elsys ERS CO<sub>2</sub> Lite. Aber auch andere Sensoren binden wir gerne an.

Auch für diese Variante solltest Du Dich zuerst über unser [Mitmach-Formular](mitmachen.md) registrieren, um die nötigen Zugangsdaten und Schlüssel zu erhalten.

#### Anbindung de Elsys ERS CO<sub>2</sub> Lite

Das Gerät kannst Du auf diversen IoT-Marktplätzen (z.B. [hier](https://iot-shop.de)) oder direkt beim [Hersteller](https://www.elsys.se/shop/product-category/sensors/ers-series/?v=f003c44deab6) bestellen. Wenn Du es an uns liefern lässt, konfigurieren wir es für Dich.

Zum Selberkonfigurieren benötigst Du ein Smartphone mit [NFC](https://de.wikipedia.org/wiki/Near_Field_Communication) Funktionalität und gehe dann wie folgt vor:

- Lies Dir das [Handbuch](https://elsys.se/public/manuals/Operating_Manual_ERSCO2_Lite.pdf) durch (ja, wirklich!).
- Installiere Dir die passende NFC-APP:
  - Android: Elsys [Sensor Settings](https://play.google.com/store/apps/details?id=se.elsys.nfc.sensorsettings&hl=sv). Eine Anleitung für die Settings-App gibt es [hier](https://www.elsys.se/en/android-help/). Damit der Sensor mit der Clair Plattform zusammenspielt, solltest Du nur die unten genannten Parameter ändern.
  - iOS: [NFC Tools](https://apps.apple.com/se/app/nfc-tools/id1252962749). Leider ist diese App nicht spezifisch auf ERS-Sensoren ausgerichtet. Unter Android ist daher die Konfiguration wesentlich komfortabler. Dieses [Video](https://www.elsys.se/en/nfc-tools-application/) zeigt die leider recht umständliche Konfiguration unter iOS.
- Von den vielen Parametern sind für uns nur die folgenden von Belang.
  - `AppEui`, die eindeutige ID der Clair-Berlin TTN Application.
  - `AppKey`, auch `JOINKey` genannt, ein kryptografischer Schlüssel um sich sicher mit der Clair Berlin Plattform zu verbinden. Beide Parameter erhaltet ihr von uns.
  - `SplPer` =
  - `TempPer` =
  - `SendPer` =
  - `qsize` =
- Wenn Du die Einstellungen vorgenommen hast, kannst Du sie an den Sensor per NFC übertragen. Dazu musst Du das Smartphone nahe an das Sensorgehäuse heranführen, wie jeweils in der App-Anleitung beschrieben.
- Nach erfolgter Konfiguration versucht der Sensor automatisch, sich mit der Clair Berlin Plattform zu verbinden. Je nach Empfangsqualität und Auslastung des TTN kann diese sehr schnell gehen oder bis zu zwei Tagen dauern. Während jedes Verbindungsversuchs blinkt der Sensor Orange.

#### Was machen bei schlechtem Empfang?

Ähnlich zum Mobilfunk braucht auch ein LoRaWAN-Netzwerk Baisstationen, hier _Gateways_ genannt. Anders aber als im Mobilfunk, wo kommerzielle Funklochanbieter Abdeckung gegen Geld anbieten, lebt das TTN von Gateways, die Freiwillige unentgeltlich bereitstellen. Es kann also sein, dass genau in Deinem Raum der Empfang schlecht ist, oder es keinen Empfang gibt. Anders als beim Mobilfunk kannst Du Dir selbst helfen, indem Du ein eigenes Gateway installierts. Das ist vergleichbar schwierig oder einfach wie einen WLAN-Router aufzusetzen. Es gibt günstige Indoor-Gateways mit geringer Reichweite für unter 100€ (z.B. das [TTN Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/)), oder professionelle Outdoor-Gateways für das zehnfache, wie diese [Übersicht](https://www.thethingsnetwork.org/docs/gateways/) zeigt.

Jedes LoRaWAN Gateway steht automatisch allen Nutzern in der Umgebung zur Verfügung. Wenn Du ein eigenes Gateway installierst, verbesserst Du somit gleichzeitig den Empfang für viele Andere und untersützt die TTN-Community. Das einfache TTN-Indoor-Gateway verbindest Du mit einem lokalen WLAN. Da LoRaWAN Sensoren so wenig Daten schicken, fällt die zusätzliche Datenmenge eines TTN-Gateways nicht ins Gewicht.

## Andere Sensormodelle und andere Kommunikationstechnik

Die Clair Plattform ist darauf ausgelegt, Messdaten von verschiedenen Sensortypen und über unterschiedliche Kommunikationsnetzwerke entgegenzunehmen. Tatsächlich angebunden haben wir derzeit nur Sensoren von Elsys und Talkpool mit LoRaWAN Funktechnik über das [Things Network](https://www.thethingsnetwork.org) (TTN), sowie unseren [do-it-yourself Clairchen](selbstbau-sensor.md) Sensor.

Aber wir sind interessiert daran, weitere Modelle zu unterstützen, wenn sich der Bedarf abzeichnen. Solltest Du also bereits einen vernetzten CO<sub>2</sub>-Sensor im Einsatz oder vorrätig haben, dann tritt einfach mit uns in [Kontakt](mitmachen.md). Wenn Du technsich interessiert bist und es sich um einen LoRaWAN Sensor handelt, kannst Du den [TTN-Forwarder](https://github.com/ClairBerlin/clair-ttn) der Clair Plattform erweitern und einen [Pull Request](https://guides.github.com/activities/hello-world/#pr) stellen. Alternativ müsstest Du uns technische Informationen und ein Muster der Sensors bereitstellen, so dass wir einen neuen Forwarder in die Plattform einbauen können.

## Marktübersicht

Im folgenden listen wir kommerziell erhältliche Sensoren auf, die wir während der Entwicklung der Clair-Plattform gefunden haben. Die meisten kennen wir nur von Websites und Datenblättern, da uns die Hersteller keine Muster bereitgestellt haben. Es kann dennoch gut sein, dass wir diese Modelle an die Clair Plattform anbinden können, wie oben beschrieben. Sprecht uns bei Interesse bitte an!

Sensoren, welche nur in Kombination mit einer proprietären Plattform verwendet werden können, haben wir bewusst nicht in die Übersicht aufgenommen - denn solche Sensoren können wir weder an die Clair-Plattform anbinden, noch könnt ihr sie in Zukunft mit anderen Backend-Systemen verbinden als mit dem des jeweiligen Herstellers.

### LoRaWAN

Der [TTN-Forwarder](https://github.com/ClairBerlin/clair-ttn) ist eine [Things Network Application](https://www.thethingsnetwork.org/docs/applications/) und kann prinzipiell Nachrichten verschiedener Sensormodelle empfangen. Da die meisten Modelle jedoch ihre Messdaten unterschiedlich kodieren, braucht jedes Sensor-Modell einen eigenen Decoder.

#### Einschränkungen durch die TTN Fair-Use-Policy

Als offenes Community-Netzwerk ist das TTN auf die Kooperation aller Nutzer angewiesen. Die TTN Fair-Use Policy (TTN-FUP) legt fest, dass die summierte Sendezeit eines Sensors nicht mehr als 30 Sekunden auf 24 Stunden betragen darf. Viele kommerziell erhältiche Sensoren berücksichtigen diese Einschränkung nicht, weil sie zur Nutzung in privaten Netzen entwickelt wurden.

Bei sehr gutem Empfang sind die Nachrichten sehr kurz, so dass die TTN-FUP keine Rolle spielt. Bei schlechtem Empfang jedoch dehnt das TTN die Nachrichten aus (Spreading genannt), sie werden sehr lange. Folglich können nur noch wenige Messwerte am Tag übertragen werde. Nur wenige kommerziell erhältiche Sensoren können so eingestellt werden, dass sie bei schlechtem Empfang die Messdaten komprimieren und effizient mehrere Messwerte mit einer Nachricht verschiecken.

#### Angebundene LoRaWAN-Sensoren

Derzeit haben wir Decoder implementiert für folgende Sensoren:

- [Elsys ERS CO<sub>2</sub>](https://www.elsys.se/en/ers-co2/) and [Elsys ERS CO<sub>2</sub> Lite](https://www.elsys.se/en/ers-co2-lite/). Der Elsys ERS-Sensor ist oben näher beschrieben. Wir setzen ihn aktuell im Testbetrieb ein. Bei schlechtem Empfang lassen wir die Messwerte für Temperatur und Luftfeuchtigkeit weg, und senden mehrere Messwerte pro Nachricht. Damit gelingt es meistens, die TTN-FUP einzuhalten.
- [Talkpool OY1210](https://talkpool.com/oy1210-lorawan-co2-meter/). Der Hersteller hat uns freundlicherweise ein Testgerät bereitgestellt, so dass wir auch dieses Modell bereits an die Clair Plattform angebunden haben. Leider ist die Programmierung dieses Sensors weniger flexibel, er sendet immer genau einen CO<sub>2</sub>, Temperatur und Luftfeuchtigkeit pro Nachricht. Bei schlechtem Empfang hält er damit die TTN-FUP nicht ein.

#### Weitere LoRaWAN-Sensoren

Die folgend aufgelisteten LoRaWAN-Sensoren sind aktuell am Markt verfügbar. Wir haben sie jedoch noch nicht an die Clair Plattform angebunden, da uns bislang keine Muster zur Verfügung stehen und teilweise auch keine Dokumentation vorliegt.

- [Sensair Explora CO2](https://senseair.com/products/aercast-explora-family/exploraco2/); baugleich mit dem oben besprochenen Talkpool OY1210.
- [Sensair Aercast](https://senseair.com/products/aercast-explora-family/aercast/); ab Januar 2021 erhältlich. Bietet zusätzlich eine lokale Ampel-Anzeige.
- [Clickey Comfort Sensor](https://www.clickey.eu/en/products/clickey-devices/clickey-comfort-sensor)
- [DecentLab DL-IAM](https://www.decentlab.com/products/indoor-ambiance-monitor-including-co2-tvoc-and-motion-sensor-for-lorawan)
- [ewattch Ambience CO2](https://ewattch.com/ambiance-mesure-co2/)
- [mcf88 LW12CO2](https://www.mcf88.it/prodotto/mcf-lw12co2/)
- [GlobalSat LP-111](https://www.globalsat.com.tw/en/product-225265/CO2-and-Temperature-Humidity-Detector-with-LoRaWAN™-Certified-Module-LS-111P.html)

Wenn in dieser Liste Modelle fehlen, nehmen wir sie gerne auf!

### WiFi/WLAN

WiFi ist zwar zu Hause weit verbreitet und schnell, aber der Energieverbrauch ist hoch. Die Batterie eines CO<sub>2</sub>-Sensor mit WiFi müsste daher alle paar Tage aufgeladen werden, oder es ist direkt ein Netzteil erforderlich. Die Auswahl an Sensoren mit einer proprietären Plattform im Hintergrund ist sehr groß. Ob welche davon auch mit der Clair-Plattform betrieben werden können, wissen wir nicht. Für Informationen sind wir dankbar!

### NB-IoT

Narrowband-IoT ist eine Funktechnik auf Basis von 4G-Mobilfunk, aber optimiert für niedrige Datenraten und geringen Energieverbrauch. die Geräte haben eine SIM-Karte. Zumeist fallen aber keine laufenden Kosten an; vielmehr sind diese Kosten für das Mobilfunknetz bereits im Kaufpreis enthalten.

- [Pikkerton NBS-180](https://www.pikkerton.de/Produkte/NB-IoT-Cat-M1/90.htm)