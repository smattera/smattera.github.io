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

      {% for card in site.data.comp.cards %}
        <div class="col">
          <div class="card card-red-border card-platinum text-dark h-100">
            <img src="../assets/img/logos/{{ card.img }}.webp" class="card-img-top" alt="{{ card.title }}">
            <div class="card-body">
              <p class="card-title">{{ card.title }}</p>
              <p class="card-text">{{ card.desc }}</p>
              <!--{% if card.contact %}
              <p class="card-text">For more information, please call {{ card.contact }} at 
                <a href="tel:{{ card.phone | replace: '-', '' }}" class="text-nowrap">{{ card.phone }}</a></p>
              {% endif %}-->
            </div>
            <div class="card-footer">
              {% if card.alert %}
                <div class="alert alert-danger" role="alert">
                  {{ card.alert }}
                </div>
              {% endif %}
              <div class="d-grid gap-2 d-md-block">
                {% if card.firstLink %}
                <a href="{{ card.firstLink }}" class="btn btn-light" target="_blank">{{ card.firstAction }}</a>
                {% endif %}
                {% if card.secondLink %}
                  <a href="{{ card.secondLink }}" class="btn btn-danger" target="_blank">{{ card.secondAction }}</a>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      {% endfor %}

      {% include comp.html 
        img="rezrun"
        title="Rez Run"
        desc="The run is held in Choctaw, MS and trails through the reservation of the Mississippi
        Choctaw and the Choctaw Indian fairgrounds. The Mississippi Band of Choctaw Indians proudly welcomes all
        runners and visitors to the 72nd Annual Choctaw Indian Fair."
        contact="John Ferguson"
        phone="601-650-1765"
        alert="Pre-register by June 24, 2022. Pre-registered competitors are guaranteed an official Rez Run t-shirt!"
        firstLink="https://raceroster.com/events/2022/60504/rez-run"
        firstAction="Register Online"
        secondLink="../assets/pdf/2022 Rez Run Registration.pdf"
        secondAction="Registration Form"
         %}
      
      {% include comp.html
        img="ironwarrior"
        title="Iron Warrior"
        desc="Iron Warrior consists of obstacles such as the steel log, yoke carry, tire flip, and
        truck pull. In the end of the competition, the winner will have to endure eight total obstacles in order
        to be called the 2022 IRON WARRIOR!"
        contact="Sam Farve"
        phone="601-656-0620"
        alert="Pre-register for $25 by June 24, 2022. Pre-registered competitors are guaranteed an official Iron Warrior t-shirt!"
        firstLink="../assets/pdf/2022 Iron Warrior Flyer.pdf"
        firstAction="Download Flyer"
        secondLink="../assets/pdf/2022 Iron Warrior Registration.pdf"
        secondAction="Registration Form"
         %}
      
      {% include comp.html
        img="cornhole"
        title="Cornhole Tournament"
        desc="Think you have good cornhole skills? Come to the Cornhole Tournament and compete against other players for cash prizes."
         %}

      {% include comp.html
        img="gospel-night"
        title="Gospel Night"
        desc="Gospel Night is the first concert of the Choctaw Indian Fair where Christian music groups and soloists perform at Áyipa Village."
        secondLink="../assets/pdf/2022 CIF Gospel Night Entry Form.pdf"
        secondAction="Registration Form"
         %}

      {% include comp.html
        img="lil-pageant"
        title="Little Mr. & Miss. Choctaw Indian Fair Pageant"
        desc="In this inaugural Little Mr. & Miss. Choctaw Indian Fair Pageant, participants will compete in their traditional attire. 
        The age divisions are: 0-23 months, 2-4 yrs, 5-8 yrs, and 9-12 yrs."
        contact="Krystal Robinson"
        phone="601-663-7790"
         %}
      
      {% include comp.html
        img="frybread"
        title="Fry Bread Making Contest"
        desc="Contest is open to all individuals. There will be an on-site registration area so sign up and submit your fry bread. A panel of judges will review the submission and present awards for OVERALL BIGGEST, OVERALL FLUFFIEST, and OVERALL GOLDEN FRY BREAD."
        contact="Breanna Isaac"
        phone="601-663-7838"
         %}

      {% include comp.html
        img="creative-arts"
        title="Creative Arts Contest"
        desc="Submit your Arts & Crafts entry & let your creativity shine! Entries may include seasonal crafts, ceramic work, leather work, graphic arts, legos, jewelry, and more."
        contact="Breanna Isaac"
        phone="601-663-7838"
         %}
      
      {% include comp.html
        img="photo-shootout"
        title="Photo Shootout"
        desc="Enter into a Creative Living competition & show off your shutter skills! Photographers can compete in a traditional photography competition, an on-site competition where photographers spend the day documenting the fair."
        contact="Breanna Isaac"
        phone="601-663-7838"
         %}
      
      {% include comp.html
        img="watermelon"
        title="Watermelon Eating Contest"
        desc="Who can eat watermelon the fastest? One entry per particpiant, 20 participants per competition, two competitions per day. Contest is open to the public."
        contact="Breanna Isaac"
        phone="601-663-7838"
         %}
      
      {% include comp.html
        img="trivia"
        title="Choctaw Indian Fair: Trivia Edition"
        desc="Open to all individuals. Preliminary winners will receive 2 passes to Geyser Falls Water Park. Finals winners will receive dinner for 2 at Pearl River Resort."
        contact="Breanna Isaac"
        phone="601-663-7838"
         %}
    </div>

  </div>
</section>
