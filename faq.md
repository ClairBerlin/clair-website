---
layout: page
title: Antworten auf Deine Fragen
---
# Antworten auf Deine Fragen
<div class="accordion text-dark" id="faqAccordion">
  {% for faq in site.data.faq.questions %}
  <div class="card">
    <div class="card-header" id="heading{{ forloop.index }}">
      <h2 id="{{ faq.q | slugify }}"  class="mb-0">
        <a class="btn btn-link btn-block text-left" data-toggle="collapse" data-target="#collapse{{ forloop.index }}" aria-expanded="true" aria-controls="collapse{{ forloop.index }}">
          {{ faq.q }}
        </a>
      </h2>
    </div>

    <div id="collapse{{ forloop.index }}" class="collapse" aria-labelledby="heading{{ forloop.index }}" data-parent="#faqAccordion">
      <div class="card-body">
        {{ faq.a | markdownify }}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
