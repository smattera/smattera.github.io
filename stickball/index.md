---
layout: default
title: Stickball
meta: stickball
---
<section class="diamond-bg2 bebas">
  <div class="container">
    <h1 class="display-1 shadow-text lh-1 mb-5">World Series Stickball</h1>
    <!--<img src="../assets/img/stickball-banner.webp" class="img-fluid">-->
    {% assign cachedNow = 'now' | date: '%F %T' %}
    {% if cachedNow < '2022-06-06 18:00:00' %} 
      {% include countdown-timer.html title="Countdown to 2022 Bracket Day" end_date="June 6, 2022 18:00:00" border="black" %}
    {% endif %}
    <!--Men's Division-->
    <h2 class="display-2 shadow-text pt-5">2022 Men's Division</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
      {% for card in site.data.games.mens.cards %}
      <div class="col">
        <a type="button" data-bs-toggle="modal" data-bs-target="#mens-g{{ card.game }}"
          style="text-decoration: none;">
          <div class="row row-cols-3 g-1 p-1 card-black-border"
            style="background: linear-gradient(to bottom, rgba(20,20,20,1), rgba(80,80,80,1));">
            <div class="col-4 card mt-0 position-relative {% if card.team1color %}card-{{ card.team1color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team1 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team1score %}{{ card.team1score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
            <div class="col-4 card text-white p-1" style="background: transparent;border:none;">
              <img class="img-fluid my-2 lighten" src="../assets/img/logos/wss.webp">
              <div style="background: white; color: #555;">
                <p class="h4 mb-0 pt-1">GAME {{ card.game }}</p>
              </div>
              <p class="card-text h4 pt-1" style="font-size:1.6rem;">{{ card.date }}<br>{{ card.hour }}</p>
            </div>
            <div class="col-4 card mt-0 position-relative {% if card.team2color %}card-{{ card.team2color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team2 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team2score %}{{ card.team2score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
      <!--{% include modal/mens/game01.html %}
      {% include modal/mens/game02.html %}
      {% include modal/mens/game03.html %}
      {% include modal/mens/game04.html %}
      {% include modal/mens/game05.html %}
      {% include modal/mens/game06.html %}
      {% include modal/mens/game07.html %}
      {% include modal/mens/game08.html %}
      {% include modal/mens/game09.html %}
      {% include modal/mens/game10.html %}-->
    </div>
    <!--Women's Division-->
    <h2 class="display-2 shadow-text pt-5">2022 Women's Division</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
      {% for card in site.data.games.womens.cards %}
      <div class="col">
        <a type="button" data-bs-toggle="modal" data-bs-target="#womens-g{{ card.game }}"
          style="text-decoration: none;">
          <div class="row row-cols-3 g-1 p-1 card-black-border"
            style="background: linear-gradient(to bottom, rgba(20,20,20,1), rgba(80,80,80,1));">
            <div class="col-4 card mt-0 position-relative {% if card.team1color %}card-{{ card.team1color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team1 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team1score %}{{ card.team1score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
            <div class="col-4 card text-white p-1" style="background: transparent;border:none;">
              <img class="img-fluid my-2 lighten" src="../assets/img/logos/wss.webp">
              <div style="background: white; color: #555;">
                <p class="h4 mb-0 pt-1">GAME {{ card.game }}</p>
              </div>
              <p class="card-text h4 pt-1" style="font-size:1.6rem;">{{ card.date }}<br>{{ card.hour }}</p>
            </div>
            <div class="col-4 card mt-0 position-relative {% if card.team2color %}card-{{ card.team2color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team2 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team2score %}{{ card.team2score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
      <!--{% include modal/womens/game01.html %}
      {% include modal/womens/game02.html %}
      {% include modal/womens/game03.html %}
      {% include modal/womens/game04.html %}
      {% include modal/womens/game05.html %}
      {% include modal/womens/game06.html %}
      {% include modal/womens/game07.html %}
      {% include modal/womens/game08.html %}
      {% include modal/womens/game09.html %}
      {% include modal/womens/game10.html %}-->
    </div>
    <!--Men's (35+) Division-->
    <h2 class="display-2 shadow-text pt-5">2022 Men's (35+) Division</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
      {% for card in site.data.games.mens35.cards %}
      <div class="col">
        <a type="button" data-bs-toggle="modal" data-bs-target="#mens35-g{{ card.game }}"
          style="text-decoration: none;">
          <div class="row row-cols-3 g-1 p-1 card-black-border"
            style="background: linear-gradient(to bottom, rgba(20,20,20,1), rgba(80,80,80,1));">
            <div class="col-4 card mt-0 position-relative {% if card.team1color %}card-{{ card.team1color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team1 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team1score %}{{ card.team1score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
            <div class="col-4 card text-white p-1" style="background: transparent;border:none;">
              <img class="img-fluid my-2 lighten" src="../assets/img/logos/wss.webp">
              <div style="background: white; color: #555;">
                <p class="h4 mb-0 pt-1">GAME {{ card.game }}</p>
              </div>
              <p class="card-text h4 pt-1" style="font-size:1.6rem;">{{ card.date }}<br>{{ card.hour }}</p>
            </div>
            <div class="col-4 card mt-0 position-relative {% if card.team2color %}card-{{ card.team2color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team2 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team2score %}{{ card.team2score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
      <!--{% include modal/mens35/game01.html %}
      {% include modal/mens35/game02.html %}
      {% include modal/mens35/game03.html %}
      {% include modal/mens35/game04.html %}
      {% include modal/mens35/game05.html %}-->
    </div>
    <!--Tulli Okchi Ishko (14-17) Division-->
    <h2 class="display-2 shadow-text pt-5">2022 Tulli Okchi Ishko (14-17) Division</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
      {% for card in site.data.games.tulli.cards %}
      <div class="col">
        <a type="button" data-bs-toggle="modal" data-bs-target="#tulli-g{{ card.game }}"
          style="text-decoration: none;">
          <div class="row row-cols-3 g-1 p-1 card-black-border"
            style="background: linear-gradient(to bottom, rgba(20,20,20,1), rgba(80,80,80,1));">
            <div class="col-4 card mt-0 position-relative {% if card.team1color %}card-{{ card.team1color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team1 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team1score %}{{ card.team1score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
            <div class="col-4 card text-white p-1" style="background: transparent;border:none;">
              <img class="img-fluid my-2 lighten" src="../assets/img/logos/wss.webp">
              <div style="background: white; color: #555;">
                <p class="h4 mb-0 pt-1">GAME {{ card.game }}</p>
              </div>
              <p class="card-text h4 pt-1" style="font-size:1.6rem;">{{ card.date }}<br>{{ card.hour }}</p>
            </div>
            <div class="col-4 card mt-0 position-relative {% if card.team2color %}card-{{ card.team2color }}
            {% else %}card-blank{% endif %}">
              <div class="card-head pt-3 h5" style="font-size:1.2rem;">{{ card.team2 }}</div>
              <div class="card-footer position-absolute bottom-0 start-50 translate-middle-x p-0 text-nowrap"
                style="background: transparent; font-size: 120px; border: none;">{% if card.team2score %}{{ card.team2score }}{% else %}<span class="icon-sticks"></span>{% endif %}</div>
            </div>
          </div>
        </a>
      </div>
      {% endfor %}
      <!--{% include modal/tulli/game01.html %}
      {% include modal/tulli/game02.html %}
      {% include modal/tulli/game03.html %}
      {% include modal/tulli/game04.html %}
      {% include modal/tulli/game05.html %}
      {% include modal/tulli/game06.html %}-->
    </div>
    <!--Pushmataha (10-13) Division-->
    <h2 class="display-2 shadow-text pt-5">2022 Pushmataha (10-13) Division</h2>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xxl-3 g-4">
      {% include game.html div="pushmataha" g="1" d="Thu, Jul 08" hr="5:00 PM" t1="pearl river" t1c="0,0,128"
      t1c2="255,255,255" t1s="4" t2="nanih waiya attitude" t2c="0,0,0" t2c2="255,255,255" t2s="1" %}
      {% include game.html div="pushmataha" g="2" d="Thu, Jul 08" hr="6:00 PM" t1="koni osi" t1c="0,0,255"
      t1c2="255,255,255" t1s="5" t2="bók čito" t2c="255,255,255" t2c2="255,0,0" t2s="4" %}
      {% include game.html div="pushmataha" g="3" d="Fri, Jul 09" hr="5:00 PM" t1="beaver dam" t1c="255,0,0"
      t1c2="255,255,255" t1s="5" t2="oka homma" t2c="255,255,0" t2c2="255,0,0" t2s="0" %}
      {% include game.html div="pushmataha" g="4" d="Mon, Jul 12" hr="5:00 PM" t1="fani lakna osi" t1c="0,128,0"
      t1c2="255,255,0" t1s="6" t2="warriors" t2c="128,0,0" t2c2="255,255,255" t2s="4" %}
      {% include game.html div="pushmataha" g="5" d="Tue, Jul 13" hr="6:00 PM" t1="tiak hikíya osi" t1c="128,0,128"
      t1c2="255,255,0" t1s="6" t2="pearl river" t2c="0,0,128" t2c2="255,255,255" t2s="4" %}
      {% include game.html div="pushmataha" g="6" d="Wed, Jul 14" hr="5:00 PM" t1="tiak hikíya osi" t1c="128,0,128"
      t1c2="255,255,0" t1s="2" t2="koni osi" t2c="0,0,255" t2c2="255,255,255" t2s="4" %}
      {% include game.html div="pushmataha" g="7" d="Thu, Jul 15" hr="5:00 PM" t1="beaver dam" t1c="255,0,0"
      t1c2="255,255,255" t1s="9" t2="fani lakna osi" t2c="0,128,0" t2c2="255,255,0" t2s="0" %}
      {% include game.html div="pushmataha" g="8" d="Fri, Jul 16" hr="5:00 PM" t1="koni osi" t1c="0,0,255"
      t1c2="255,255,255" t1s="0" t2="beaver dam" t2c="255,0,0" t2c2="255,255,255" t2s="4" %}
    </div>
  </div>
</section>
