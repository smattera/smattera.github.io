---
layout: default
title: Home
meta: home
---
<header>
  <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>
  <!-- The HTML5 video element that will create the background video on the header -->
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="/assets/img/CIFVideoWeb_1.mp4" type="video/mp4">
  </video>
  <!-- The header content -->
  <div class="container h-100 d-block d-sm-none">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <img src="/assets/img/logos/fairlogo.webp" alt="Choctaw Indian Fair Logo" class="img-fluid">
      </div>
    </div>
  </div>
</header>

<section class="diamond-bg">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl">
        <img class="card-gold-border img-fluid" src="/assets/img/chiefprincess.webp" alt="Chief & Princess 2022"/>
      </div>
      <div class="col-xl">
        <br class="d-xl-none"/>
        <h1 class="display-1 mb-0 shadow-text">Halito!</h1>
        <p class="lead my-1 mb-3">
          Greetings from the Choctaw Indian Reservation. We invite you to join us <strong>July 12-15</strong> for our 73rd annual Choctaw Indian Fair. The fair takes place on our centuries-old homeland in beautiful Choctaw, Mississippi. We gather each July to celebrate our heritage and share our beautiful and vibrant culture with our friends and neighbors. This year’s fair theme is:
        </p>
        <p class="h3 display-3 mb-0">"The Choctaw Spirit Lives On"</p>
        <p class="lead my-1 mb-3">
          Fairgoers will experience the magnificent journey of our people through historical and cultural displays, social dancing, tribal arts &amp; crafts, Choctaw stickball – the granddaddy of all field sports – as well as the Choctaw Indian Princess Pageant and traditional Choctaw food. The fair also offers carnival rides and games for the young and old alike, Shawi’s Discovery Zone and chart-topping musical acts each night. There’s something for everyone at the Choctaw Indian Fair – we’ll see you soon!
        </p>
        <p class="h3 display-3">Yakoki!</p>
      </div>
    </div>
  </div>
</section>

<section class="diamond-bg2">
  <div class="container">
    {% include countdown-timer.html title="Countdown to the next Choctaw Indian Fair" end_date="July 12, 2023 11:00:00" border="gold" %}
    <row class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-0 card-gold-border mt-5">
      <div class="hero px-4 px-md-0">
        <h2 class="font-weight-bold mb-4 text-center">Ticket Presale Starts On Monday, June 12, 2023</h2>
        <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 h-100 text-center">
          <div class="bg-child rounded-md shadow-lg p-6 m-4 w-100 h-100">
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Child Pass</h2>
            <div class="border border-secondary rounded-lg mx-auto p-2 m-4 fs-2" style="text-shadow: 4px 4px 6px #333; box-shadow: 5px 5px 10px #333;">AGES 5 &amp; UNDER</div>
            <h2 class="display-1 fw-bold py-10" style="text-shadow: 5px 5px 10px #333; font-size: 5rem;">FREE</h2>
          </div>
          <div class="bg-student rounded-md shadow-lg p-6 m-4 w-100 h-100">
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Student Pass</h2>
            <div class="border border-secondary rounded-lg mx-auto p-2 m-4 fs-2" style="text-shadow: 4px 4px 6px #333; box-shadow: 5px 5px 10px #333;">AGES 6 - 17</div>
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Season $10</h2>
            <hr class="rounded-lg my-4" style="border: 3px solid #fff; box-shadow: 3px 3px 6px #333;">
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Day $7</h2>
          </div>
          <div class="bg-adult rounded-md shadow-lg p-6 m-4 w-100 h-100">
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Adult Pass</h2>
            <div class="border border-secondary rounded-lg mx-auto p-2 m-4 fs-2" style="text-shadow: 4px 4px 6px #333; box-shadow: 5px 5px 10px #333;">AGES 18 &amp; OVER</div>
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Season $20</h2>
            <hr class="rounded-lg my-4" style="border: 3px solid #fff; box-shadow: 3px 3px 6px #333;">
            <h2 class="display-2 fw-bold" style="text-shadow: 5px 5px 10px #333;">Day $12</h2>
          </div>
        </div>
      </div>
      <!-- <div class="col">
        <a href="/events/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Events.svg" alt="Events">
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/culture/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Culture.svg" alt="Culture">
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/stickball/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Stickball.svg" alt="Stickball">
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/pageant/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Pageant.svg" alt="Pageant">
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/competitions/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Competitions.svg" alt="Competitions">
          </div>
        </a>
      </div>
      <div class="col">
        <a href="/info/">
          <div class="card bg-transparent opaque">
            <img src="../assets/img/svg/Visitor Info.svg" alt="Visitor Info">
          </div>
        </a>
      </div> -->
    </row>
  </div>
</section>
