---
layout: page
title: Ein CO<sub>2</sub>-Sensor zum Selberbauen
---

# Ein CO<sub>2</sub>-Sensor zum Selberbauen

Vernetzte CO<sub>2</sub>-Sensoren sind in größeren Stückzahlen ab 100€ erhältlich. Wem das zu viel ist, wer sowieso gerne selbst Hand anlegt oder mehr über Technik und Konzepte des Internet-of-Things (IoT) lernen möchte, kann für etwas weniger Geld einen Sensor selbst bauen, der sehr gut mit der Clair-Plattform zusammenarbeitet.

Auch wir selbst haben so angefangen: Noch vor der Clair-Plattform bauten und testeten wir einen eigenen CO<sub>2</sub>-Sensor um zu verstehen, wie die Messdaten aussehen und wie gut die Funkanbindung mittels LoRaWAN funktioniert. Das Ergebnis ist _Clairchen_, welches in zweifacher Ausführung seit inzwischen gut zwei Monaten seinen Dienst verrichtet und uns mit Testdaten versorgt.

![Clairchen]({{ "/img/clairchen.jpg" | relative_url }})

Im Folgenden zeigen wir euch, wie ihr selbst ein Clairchen bauen und es mit der Clair Plattform verbinden könnt.

## Hardware

Eigentlich ist Clairchen ein gefedertes Früchtchen, denn der Kern ist ein [Adafruit Feather](https://www.adafruit.com/feather) Board mit eingebautem LoRa-Modul. Dazu kommt ein CO<sub>2</sub> Sensormodul, welches zusätzlich noch Temperatur und Luftfeuchtigkeit messen kann:

- [Adafruit Feather M0 mit RFM95 LoRa Radio](https://www.adafruit.com/product/3178). Technische Details zu diesem Board findet ihr [hier](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/downloads), inkl. [Pinout](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/pinouts).
- [Sensirion SCD30](https://www.sensirion.com/en/environmental-sensors/carbon-dioxide-sensors/carbon-dioxide-sensors-co2/), mit [Pinout](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf).

Hinzu kommen einige Kleinteile:

- Breadboard.
- Einen Satz Jumper-Kabel.
- Ein paar "Header" von AdaFruit. Das sind Pfostenstecker für das Adafruit Board, um dieses sicher in das Breadboard zu stecken.

Für die Stromversorgung:

- Micro-USB-Kabel.
- USB-Ladegerät.

Alternativ zum USB-Ladegerät könnt ihr Clairchen auch per Akku versorgen. Passend für das AdaFruit Board benötigt ihr eine 3,7V Lithium-Ion Polymer Batterie mit JST-PH Connector. Allerdings ist unsere Software (s.u.) nicht auf geringen Energieverbrauch optimiert, so dass eine Akkuladung von 2000mAh nur für ca. 3 Tage Betrieb ausreicht.

### Board-Aufbau

Wie ihr das Board anschließt, ist sehr gut im folgenden [AdaFruit Tutorial](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module) beschrieben. Dazu müsst ihr die Headers an das Board löten und dann mit einigen Jumper-Kabeln die im Tutorial genannten Pins verbinden.

Für die Antenne könnt ihr wie [hier](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/antenna-options) beschrieben ein Stück isolierten Draht verwenden (8,2 cm lang!), oder eine echte Antenne anlöten. Wenn eure Lötfertigkeiten und eure Lötstation es zulassen, könnt ihr natürlich auch eine echte Antenne anbringen. Dann braucht ihr:

- Eine U.FL SMT LP-Buchse, mindestens DC-2GHz.
- Ein UFL - SMA(F) HF-Kabel.
- Eine Stub-Antenna für 868MHz (für LoRa oder Sigfox).

### Sensor

Der Sensirion SCD30 ist ein optischer CO<sub>2</sub>-Sensor. Er liefert recht genaue Messwerte, braucht aber auch relativ viel Energie. Nachdem ihr einen Header an seine offenen Pins gelötet habt, könnt ihr ihn ebenfalls in das Breadboard einstecken, wie im Bild oben zu sehen. Das Feather-Board stellt praktischerweise eine reguliert Spannungsversorgung bereit, so dass ihr einfach Vdd und Gnd des SCD30 mit den entsrpechenden Ausgangs-Pins des Feather-Boards verbinden könnt. Das [Pinout](https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/9.5_CO2/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf) SCD 30 ist sehr einfach, mit Vdd, Gnd, Tx, RX in einer Reihe.

Da wir den SCD30 seriell per [I<sup>2</sup>C](https://de.wikipedia.org/wiki/I%C2%B2C) ansprechen, sind nur zwei weitere Verbindungen nötig:

- zwischen SCD30 RX/SDA und Feather SDA/#20. Dies ist der I<sup>2</sup>C Datenpin.
- zwischen SCD30 TX/SCL und Feather SCL/#21. Dies ist der I<sup>2</sup>C Clock Pin.

In Draufsicht:

![Clairchen Draufsicht]({{ "/img/clairchen-draufsicht.jpg" | relative_url }})

## Software

Kern des AdaFruit Boards ist ein ATMEL SAMD21G18 ARM Cortex M0 Prozessor. Dies ist der gleiche Chip wie auf dem [Arduiono Zero](https://www.arduino.cc/en/Guide/ArduinoZero). Daher können wir Clairchen-Software mit der Arduiono Entwicklungsumgebung schreiben und auf eine große Anzahl von Arduino-Bibliotheken zurückgreifen.

### Arduino IDE Setup

Installiere die [Arduino IDE](https://www.arduino.cc/en/software) auf Deinem Entwicklungsrecher und lade das _Board Support Package_ (BSP) für das Feather Board, wie [hier](https://learn.adafruit.com/adafruit-feather-m0-radio-with-lora-radio-module/setup) beschrieben. Relevant für uns ist das BSP für _Adafruit SAMD Boards_. Du kannst eines der mitgelieferten Beispielprogramme ausführen und über eine USB-Verbindung auf das Feather-Board laden und dort ausführen.

### LoRaWAN mit der LMIC Bibliothek

Das LoRa-Modul auf dem Feather-Board liefert den _Physical Layer_ (PHY) der LoRa-Spezifikation, sorgt also für die Übertragung von Byte-Paketen. Die Koordination des Kanalzugriffs (Medium Access Control - MAC) muss in Software abgebildet werden. Erst der MAC-Layer macht das Radio zu einem LoRaWAN Gerät. Die [Spezifikation](https://lora-alliance.org/resource-hub/lorawanr-specification-v11) der LoRaWAN Alliance ist recht umfangreich. Praktischerweise gibt es die sehr gute [MCCI LoRaWAN LMIC](https://github.com/mcci-catena/arduino-lmic) Bibliothek, welche einen kompletten spezifikationskonformen MAC-Layer implementiert. Diese musst Du über den Arduino Library Manager installieren.

Um ein Gefühl für LoRaWAN und das LoRaWAN Community-Netz [The Things Network](https://thethingsnetwork.org) zu erhalten, kannst Du mit den mitgelieferten Beispielen etwas spielen, wie [hier](https://learn.adafruit.com/the-things-network-for-feather) oder [hier](https://blog.werktag.io/posts/adafruit-feather-m0-lora-on-ttn/) beschrieben. Grundlegende Konzepte der LoRaWAN Technologie sind [hier](https://docs.exploratory.engineering/lora/lora_key_concepts/) und [hier](https://www.thethingsnetwork.org/docs/lorawan/architecture.html) erklärt. Beachte, dass Du die Konfigurationsdatei für das LoRa Frequenzband anpassen musst. Die Konfigurationsdatei liegt im Verzeichnis der LMIC Library unter `<arduino_dir>/libraries/MCCI_LoRaWAN_LMIC_library/project_config`.

### Kommunikation mit dem Sensirion SCD30

Die Kommunikation mit dem SCD 30 erfolgt über das serielle I<sup>2</sup>C-Protokoll. Das Sensormodul kennt verschiedene Modie und erlaubt eine detaillierte Konfiguration. Anstatt aber einzelne Bits zu setzen oder zu lesen, nutzen wir auch hier eine Bibliothek: Mit der [SCD30-Arduino-Library](https://github.com/sparkfun/SparkFun_SCD30_Arduino_Library) von [SparkFun](https://www.sparkfun.com/) sehen wir CO<sub>2</sub>-Werte statt Bits, und das Auslesen des Sensors erfolgt in nur zwei Zeilen Code.

### Der Clairchen Software Stack

Die größte Herausforderung ist es, die Anforderungen unser Anwendung zu erfüllen nach

- einem kurzen Intervall zwischen aufeinanderfolgenden Messungen,
- sowie einer geringen Latenz zwischen Messung und Übertragung der Messdaten an die Clair Plattform.

Kritisch sind hier zwei Faktoren: Zum einen, dass bei schlechtem Empfang der LoRaWAN MAC automatisch die Datenrate reduziert. Bei einem sehr schlechten Funkkanal kann eine Nachricht somit gut 1,5s lange dauern. Das wiederum ist ein Problem in Bezug auf die [Fair Access Policy](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle.html) des TTN. Unser Ziel war und ist es, Messdaten (zumindest zu relevanten Tageszeiten) mit ausreichend hoher Auflösung und möglichest geringer
Latenz zur Verfügung zu stellen. Um z. B. die Entwicklung der CO<sub>2</sub>-Konzentration in einem Klassenraum während einer Schulstunde
nachvollziehen zu können, reicht es nicht, drei Messwerte pro Stunde zu übertragen. Und um im richtigen Moment darauf hinzuweisen das Fenster zu öffnen, dürfen die Messdaten nicht mit einer halben Stunde Verzögerung an der Clair Plattform ankommen.

Die Fair Access Policy des TTN schreibt vor, dass jedes Gerät *max. 30 s Airtime pro 24 Stunden* im Uplink belegen sollte. Die Herausforderung besteht
nun darin, dass ein Gerät, das relativ weit von einem Gateway entfernt ist, eine hohen [Spreading Factor](https://www.thethingsnetwork.org/docs/lorawan/modulation-data-rate.html) verwenden muss, damit seine Nachrichten vom Gateway empfangen werden.
Solcherart kodierte Nachrichten können aber leider über eine Sekunde lang werden, so dass das tägliche Airtime-Kontingent schnell verbraucht ist.
Deshalb haben wir für unsere Clairchen-Software die Mess- und die Übertragungsfrequenz vom jeweils aktuellen _Modulation and Coding Scheme_ abhängig gemacht. Die
Details unseres so entworfenen Übertragungsschemas sind in einem [Design-Dokument](https://github.com/ClairBerlin/clair-doc/blob/master/node-protocol/sampling-and-transmission-scheme.pdf) beschrieben.

Die komplette Clairchen-Software mit der oben beschriebenen Optimierung liegt in einem [Github Repository](https://github.com/ClairBerlin/clairchen) bereit. Ihr könnt sie direkt aufspielen und benutzen, oder sie verbessern und euren Bedürfnissen anpassen.

### Konfiguration und Anbindung an die Clair Plattform

Unsere Clairchen-Software nutz das Things Network als LoRaWAN Backend. Der eigentliche LoRa Funkkanal endet am nächsten TTN Gateway. Diese werden von Mitgliedern der [TTN Community](https://www.thethingsnetwork.org/community/berlin/) auf freiwilliger Basis betrieben. Ein TTN Gateway leitet die empfangene Nachricht an den TTN _Network Server_ weiter, der sie einer _TTN Application_ zuordnet und für diese in einer [MQTT](https://mqtt.org) Queue bereithält. Details zur Architektur findet ihr [hier](https://www.thethingsnetwork.org/article/the-things-network-architecture-1).

Die eigentliche TTN Anwendung ist Teil der Clair Plattform. Hier nehmen wir die Sensordaten entgegen. Je nach Sensormodell können die Messdaten unterschiedlich kodiert sein. Für Clairchen haben wir uns ein sehr effizientes Codierungsschema ausgedacht, das [hier](https://github.com/ClairBerlin/clairchen/blob/master/docs/co2-sample-spec.md) und [hier](https://github.com/ClairBerlin/clairchen/blob/master/docs/message-format.md) beschrieben ist. Andere Sensormodelle nutzen jeweils eigene Formate, so dass wir für jedes Sensor-Modell die Messdaten in der Clair-Plattform leicht unterschiedlich handhaben müssen.

Um ein Clairchen das erste mal mit der Plattform zu verbinden, nutzen wir [Over-The-Air-Activation (OTAA)](https://www.thethingsnetwork.org/docs/lorawan/addressing.html). Um die JOIN-Nachrichten zu verschlüsseln und an die richtige TTN-Anwendung zu schicken, muss das Clairchen den _JOIN Key_ (auch Application Key genannt) unserer TTN Application kennen. Diesen müsst ihr im Code hinterlegen, ebenso wie die _DeviceEUI_, welche fix im LoRa Funkmodul eingebrannt ist. Im Beispielcode für unser "Clairchen Rot" sind [hier](https://github.com/ClairBerlin/clairchen/blob/master/euis_black.h) Test-Keys eingetragen. Ihr könnt zuerst eine eigene [TTN-Anwendung](https://www.thethingsnetwork.org/docs/applications/) anlegen zum testen. Entsprechend müsst ihr dann die Schlüssel dieser Anwendung in einer eigenen Datei `euis_<my_node> ` eintragen. Wollt ihr euer selbstgebautes Clären mit der Clair Plattform verbinden, übermitteln wir euch auf Anfrage gerne die geheimen Schlüssel.

## Erweiterungs- und Verbesserungsmöglichkeiten

Unser Clairchen hat kein Gehäuse und kein Ampel-Display. Die Software kann bislang nicht mit Fehlerfällen umgehen. Vor allem aber läuft das Sensor-Modul, das LoRa Radio und der Prozessor die ganze Zeit durch. Deswegen ist die Batterie nach spätestens drei Tagen leer. Im Vergleich dazu: Kommerziell erhältliche Sensoren halten ein bis vier Jahre ohne Batteriewechsel. Es gibt also noch genügend Verbesserungspotenzial für interessierte IoT-Zauberer. Natürlich freuen wir uns, wenn ihr eure Verbesserungen als Pull-Request bereitstellt, damit auch andere davon profitieren.

## Andere Bausätze und Bauanleitungen

Neue Bauanleitungen für CO<sub>2</sub>-Ampeln werden derzeit gefühlt jeden Tag veröffentlicht. Das Grundprinzip ist einfach und kann teilweise ganz ohne Software umgesetzt werden. Sensoren mit Netzwerkverbindung, egal ob per Kabel oder drahtlos, sind nicht viel aufwändiger in Sachen Hardware, aber ohne Software geht hier nichts.

- [CO<sub>2</sub>-Ampel des Umwelt/Campus Birkenfeld](https://www.umwelt-campus.de/forschung/projekte/iot-werkstatt/ideen-zur-corona-krise-1) der Hochschule Trier mit WLAN-Anbindung. Mit dem Sensiron SCD30-Sensor und einem AdaFruit Huzza Board mit WLAN.
- [Tindie<sub>2</sub>-Ampel ](https://www.tindie.com/products/FabLab/diy-octopus-with-scd30-and-nodemcu-v2/) mit LoRaWAN und SCD30.
