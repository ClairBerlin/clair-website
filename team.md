---
layout: page
title: Team
---
# Team

Clair Berlin wurde Anfang September 2020 ins Leben gerufen von Ulrich Schuster
und Jan Weil, inzwischen sind mehrere Freiwillige dazugestoßen. Gemeinsam haben
wir bereits viele Stunden Arbeit investiert.

<div class="container w-75">
  {% for member in site.data.team %} 
  <div class="card bg-light row flex flex-row align-items-center p-4 my-4">
    <div class="col-12 col-md-4">
      <img class="rounded-circle" src="{{ member.img | relative_url }}"/>
    </div>
    <div class="col-12 col-md-8 mt-4">
      <h2 class="text-primary">{{ member.name }}</h2>
      {{ member.description | markdownify }}
      <p class="my-3">
        <a href="{{ member.url }}">{{ member.url }}</a>
      </p>
    </div>
  </div>
  {% endfor %}
</div>

<div class="my-5 text-center">
Von folgenden Partnern wird Clair Berlin organisatorisch und ideell unterstützt:
</div>

{% include partners.html %}
