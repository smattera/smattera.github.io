---
layout: default
title: Pageant
meta: pageant
---
<section class="diamond-bg5">
  <div class="container">
    <h1 class="display-1 shadow-text lh-1">Choctaw Indian Princess Pageant</h1>
    <img src="../assets/img/princess-banner.webp" class="img-fluid">
    
    <h2 class="display-2 shadow-text pt-5">2022 Contestants Coming Soon</h2>

    <h2 class="shadow-text pt-5">2021 Contestants</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4 mt-1">

      {% for card in site.data.contestants.cards %}
      <div class="col">
        <div class="card mb-3 card-rose-border mx-auto" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-5" style="background: transparent;">
              <img src="/assets/img/contestants/{{ card.img }}.webp" class="img-fluid" alt="{{ card.name }}">
            </div>
            <div class="col-7 d-flex align-items-center" style="background: linear-gradient(#969,#ffd,#fcc);">
              <div class="card-body">
                <p class="card-title h4 display-4 shadow-text">Contestant #{{ card.number }}</p>
                <p class="card-text h5 display-5 shadow-text">{{ card.name }}</p>
                <p class="card-text"><small class="text-muted">Sponsored by<br>{{ card.sponsor }}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}

    </div>
  </div>
</section>
