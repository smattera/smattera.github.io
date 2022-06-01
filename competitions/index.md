---
layout: default
title: Competitions
meta: competitions
---
<section class="diamond-bg6">
  <div class="container">
    <h1 class="display-1 shadow-text lh-1">Competitions</h1>
    <!--<img src="../assets/img/competition-banner.png" class="img-fluid pb-5">-->
    <div class="row row-cols-1 row-cols-xl-2 row-cols-xxl-3 g-4">

      {% for competition in site.data.competitions %}
        <div class="col">
          <div class="card card-red-border card-platinum text-dark h-100">
            <img src="../assets/img/logos/{{ competition.image }}.webp" class="card-img-top" alt="{{ competition.title }}">
            <div class="card-body">
              <p class="card-title">{{ competition.title }}</p>
              <p class="card-text">{{ competition.desc }}</p>
              <!--{% if competition.contact %}
              <p class="card-text">For more information, please call {{ competition.contact }} at 
                <a href="tel:{{ competition.phone | replace: '-', '' }}" class="text-nowrap">{{ competition.phone }}</a></p>
              {% endif %}-->
            </div>
            <div class="card-footer">
              {% if competition.alert %}
                <div class="alert alert-danger" role="alert">
                  {{ competition.alert }}
                </div>
              {% endif %}
              <div class="d-grid gap-2 d-md-block">
                {% if competition.firstLink %}
                <a href="{{ competition.firstLink }}" class="btn btn-light" target="_blank">{{ competition.firstAction }}</a>
                {% endif %}
                {% if competition.secondLink %}
                  <a href="{{ competition.secondLink }}" class="btn btn-danger" target="_blank">{{ competition.secondAction }}</a>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      {% endfor %}

    </div>

  </div>
</section>
