# clair-berlin.de

In diesem Repository liegt der Quellcode der Clair Berlin Website. Wir
verwenden [Jekyll](https://jekyllrb.com/) als _Static Site Generator_.

## How To Development

Install dependencies: `gem install jekyll bundler`
Deploy locally: `jekyll serve --livereload`

Server will listen on `http://127.0.0.1:4000`

## Inhalte

Die einzelnen Seiten der Website werden aus Markdown-Dateien im obersten
Verzeichnis des Repositorys generiert. Lediglich dieses `README.md` ist in der
[Jekyll-Konfigarionsdatei](_config.yml) explizit ausgeschlossen. Jekyll
verwendet [kramdown](https://kramdown.gettalong.org/) und unterstützt
dementsprechend dessen [erweiterte
Syntax](https://kramdown.gettalong.org/syntax.html).

Daten für die Navigation, die Angaben im _Footer_ und vor allem die Homepage
werden in [YAML](https://yaml.org/)-Dateien im [\_data-Verzeichnis](_data/)
gepflegt.

## Layout

Jede Seite sollte im [_Front Matter_](https://jekyllrb.com/docs/front-matter/)
das zu verwendende Layout angeben, z. B.:

```
layout: page
```

Die verschiedenen Layouts liegen im [\_layouts-Verzeichnis](_layouts/). Das
Standard-Layout ist `page`, das Kerngerüst ist in `default.html` definiert.

Das derzeitige Design verwendet [Bootstrap](https://getbootstrap.com/) und
[Font Awesome Icons](https://fontawesome.com/icons/), deren [SASS (bzw.
SCSS)](https://sass-lang.com/)-Dateien im [\_sass-Verzeichnis](_sass) liegen
und in [main.scss](css/main.scss) eingebunden werden.

_Partials_, die in mehreren Layouts verwendet werden, wie z. B. Footer und
Navigation liegen im [\_includes-Verzeichnis](_includes).

## Navigation

Die Links der Navigation werden in der Datei [nav.yml](_data/nav.yml) gepflegt.
Bei Bedarf muss [das dazu gehörige Partial](_includes/nav.html) angepasst
werden.

## Bilder und Downloads

Grundsätzlich kopiert Jekyll im Wesentlichen sämtliche Dateien ohne _Front
Matter_ inklusive Unterordner in die gerenderte Website. Bilder sollten im
Verzeichnis `img` abgelegt werden, allgemeine Downloads wie z. B. PDF-Dokumente
unter `downloads`.

Das Format für die Markdown-Einbindung von Bildern sieht dann so aus

```
![Alternativer Text]({{ "/img/bild.jpg" | relative_url }})
```

das für Downloads so:

```
[Link-Text]({{ "/downloads/file.pdf" | relative_url }})
```

Die Verwendung des [Liquid](https://jekyllrb.com/docs/liquid/)-Filters
`relative_url` stellt sicher, dass z. B. für Test-Deployments in einem
Unterverzeichnis, für das die
[`baseurl`-Konfiguration](https://jekyllrb.com/docs/configuration/options/)
verwendet wird, die Links korrekt funktionieren.

## Neuigkeiten (Blog)

Neuigkeiten bzw. anekdotische Blog-Posts sollten Jekylls
[Standard-Post-Mechanismus](https://jekyllrb.com/docs/posts/) folgen.

Folgende Kategorien sollten verwendet werden:

* Technik
* Presse
