---
layout: default
title: Events
meta: events
---
<section class="diamond-bg">
  <div class="container">
    <img src="../assets/img/event-banner.webp" class="img-fluid d-none d-md-block">
    <img src="../assets/img/event-banner02.webp" class="img-fluid d-block d-md-none">

    <style>
      [class^="bi-geo-alt-fill"]::before, [class*=" bi-geo-alt-fill"]::before {
        vertical-align: middle!important;
      }
    </style>

    <h2 class="display-1 shadow-text pt-5">2022 Fair Schedule Coming Soon</h2>

    {% assign cachedNow = 'now' | date: '%Y-%m-%d' %}
    
    <ul class="nav nav-pills nav-fill h5" id="myTab" role="tablist">
      {% include eventTabFirst.html day="dayOne" date="2021-07-07" %}
      {% include eventTab.html day="dayTwo" date="2021-07-08" %}
      {% include eventTab.html day="dayThree" date="2021-07-09" %}
      {% include eventTab.html day="dayFour" date="2021-07-10" %}
      {% include eventTab.html day="dayFive" date="2021-07-12" %}
      {% include eventTab.html day="daySix" date="2021-07-13" %}
      {% include eventTab.html day="daySeven" date="2021-07-14" %}
      {% include eventTab.html day="dayEight" date="2021-07-15" %}
      {% include eventTab.html day="dayNine" date="2021-07-16" %}
      {% include eventTabLast.html day="dayTen" date="2021-07-17" %}
    </ul>

    <div class="tab-content pt-3" id="myTabContent">
      <div class="tab-pane fade {% include eventActive.html date='2021-07-07' %}{% if cachedNow <= '2021-07-07' %}show active %}{% endif %}" id="dayOne" role="tabpanel" aria-labelledby="dayOne-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

          {% for event in site.data.schedule.day01.events %}
        
          <div class="col">
            <div class="card card-{{ event.style }} h-100">
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                <a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../info/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>

          {% endfor %}

        </div>
      </div>
      

      <!--<div class="tab-pane fade {% include eventActive.html date='2021-07-08' %}" id="dayTwo" role="tabpanel" aria-labelledby="dayTwo-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Midway Opens" time="5:00 PM" loc="Midway" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 1" time="5:00 PM" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 2" time="6:00 PM" %}
          {% include eventBlack.html title="Men's (35+) Division: Game 1" time="7:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 1" time="8:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 1" time="9:00 PM" %}  
          {% include eventGold.html title="Midway Closes" time="12:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-09' %}" id="dayThree" role="tabpanel" aria-labelledby="dayThree-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Midway Opens" time="5:00 PM" loc="Midway" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 3" time="5:00 PM" %}
          {% include eventBlack.html title="Tulli Okchi Ishko (14-17) Division: Game 1" time="6:00 PM" %}
          {% include eventBlack.html title="Men's (35+) Division: Game 2" time="7:00 PM" %}  
          {% include eventBlack.html title="Women's Division: Game 2" time="8:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 2" time="9:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 3" time="10:30 PM" %}
          {% include eventGold.html title="Midway Closes" time="12:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-10' %}" id="dayFour" role="tabpanel" aria-labelledby="dayFour-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Midway Opens" time="5:00 PM" loc="Midway" %}
          {% include eventBlack.html title="Tulli Okchi Ishko (14-17) Division: Game 2" time="5:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 3" time="6:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 4" time="7:00 PM" %}  
          {% include eventBlack.html title="Women's Division: Game 5" time="8:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 4" time="9:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 5" time="10:30 PM" %} 
          {% include eventGold.html title="Midway Closes" time="12:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-12' %}" id="dayFive" role="tabpanel" aria-labelledby="dayFive-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Midway Opens" time="5:00 PM" loc="Midway" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 4" time="5:00 PM" %}
          {% include eventBlack.html title="Tulli Okchi Ishko (14-17) Division: Game 3" time="6:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 6" time="7:00 PM" %}  
          {% include eventBlack.html title="Men's (35+) Division: Game 3" time="8:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 7" time="9:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 6" time="10:00 PM" %}  
          {% include eventGold.html title="Midway Closes" time="12:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-13' %}" id="daySix" role="tabpanel" aria-labelledby="daySix-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventBlue.html title="Intertribal Dancing" time="1:00 PM" loc="Dance Grounds" %}
          {% include eventGold.html title="Midway Opens" time="5:00 PM" loc="Midway" %}
          {% include eventRed.html title="Gospel Night" time="6:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 5" time="6:00 PM" %}
          {% include eventBlack.html title="Women's Division: Game 8" time="7:00 PM" %}
          {% include eventBlack.html title="Men's (35+) Division: Game 4" time="8:00 PM" %}  
          {% include eventBlack.html title="Women's Division: Game 9" time="9:00 PM" %}
          {% include eventBlack.html title="Men's Division: Game 7" time="10:00 PM" %}
          {% include eventGold.html title="Midway Closes" time="12:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-14' %}" id="daySeven" role="tabpanel" aria-labelledby="daySeven-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Gates Open" time="11:00 AM" loc="Fairgrounds" %}
          {% include eventBlue.html title="Choctaw Traditional Social Dancers" time="11:00 AM" loc="Dance Grounds" %}
          {% include eventRose.html title="Fairwell Visit:<br><i>2019-2021<br>Choctaw Indian Princess<br>Elisah Monique Jimmie</i>" time="11:45 AM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Crystal Ridge Social Dance Group" time="12:00 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Little Mr. & Miss. Choctaw Indian Fair Pageant" time="1:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventBlue.html title="Generations Social Dance Group" time="1:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="1:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Native Dance Group" time="2:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="2:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Hilháchi Alhîha Atoklo Social Dance Group" time="3:00 PM" loc="Dance Grounds" %}
          {% include eventGold.html title="Midway Opens" time="3:00 PM" loc="Midway" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 6" time="5:00 PM" %}
          {% include eventGold.html title="Opening Ceremonies" time="6:00 PM" loc="Main Stage" %}
          {% include eventBlack.html title="Tulli Okchi Ishko (14-17) Division: Game 4" time="6:00 PM" %}
          {% include eventRose.html title="Choctaw Indian Princess Pageant" time="7:00 PM" loc="Main Stage" %}
          {% include eventBlack.html title="Men's Division: Game 8" time="10:15 PM" %}  
          {% include eventGold.html title="Midway Closes" time="1:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-15' %}" id="dayEight" role="tabpanel" aria-labelledby="dayEight-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Gates Open" time="11:00 AM" loc="Fairgrounds" %}
          {% include eventBlue.html title="Bell Family Social Dance Group" time="11:00 AM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of<br><i>2021-2022<br>Choctaw Indian Princess<br>Shemah Ladania Crosby</i>" time="11:45 AM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Kabotcha Bóli Social Dance Group" time="12:00 PM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of Visiting Princesses" time="12:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Standing Pine Social Dancers" time="1:00 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Women's Time Trials" time="1:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventBlue.html title="Cultural Demonstration" time="1:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Pearl River Youth Dancers" time="2:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="2:45 PM" loc="Dance Grounds" %}
          {% include eventGold.html title="Midway Opens" time="3:00 PM" loc="Midway" %}
          {% include eventBlue.html title="Hilha Imachokma Alhíha Social Dance Group" time="3:00 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Men's Time Trials" time="3:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventRed.html title="Watermelon Eating Contest" time="5:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventBlue.html title="Tiak Hikíya Himittowa Hilha Social Dance Group" time="5:00 PM" loc="Main Stage" %}
          {% include eventBlack.html title="Pushmataha (10-13) Division: Game 7" time="5:00 PM" %}
          {% include eventBlue.html title="Conehatta Okla Hilha Social Dance Group" time="6:00 PM" loc="Main Stage" %}
          {% include eventBlack.html title="Tulli Okchi Ishko (14-17) Division: Game 5" time="6:00 PM" %}
          {% include eventBlue.html title="Conehatta Social Dancers" time="7:00 PM" loc="Main Stage" %}
          {% include eventGold.html div="Live Entertainment" title="Nightly DJ" time="8:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventGold.html div="Live Entertainment" title="Jimmie Allen in Concert" time="8:30 PM" loc="Main Stage" %}
          {% include eventBlack.html title="Men's Division: Game 9" time="10:15 PM" %}  
          {% include eventGold.html title="Midway Closes" time="1:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-16' %}" id="dayNine" role="tabpanel" aria-labelledby="dayNine-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventGold.html title="Gates Open" time="10:00 AM" loc="Fairgrounds" %}
          {% include eventBlue.html title="Chahta Alla Himittowa Alhíha Social Dance Group" time="10:00 AM" loc="Dance Grounds" %}
          {% include eventRed.html title="Tribal Member Cornhole Tournament" time="10:00 AM" loc="CCHS Gymnasium" %}
          {% include eventBlue.html title="Hilha Cho Social Dancers" time="11:00 AM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of<br><i>2021-2022<br>Choctaw Indian Princess<br>Shemah Ladania Crosby</i>" time="11:45 AM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Bogue Chitto Social Dancers" time="12:00 PM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of Visiting Princesses" time="12:45 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Women's Time Trials" time="1:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventBlue.html title="Oka Homma Alla Hilha Social Dance Group" time="1:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="1:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Chahta Alla Himittowa Hicha Chipota Alhíha Social Dance Group" time="2:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="2:45 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Men's Time Trials" time="3:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventBlue.html title="Mystic Wind Chahta Social Dancers" time="3:00 PM" loc="Dance Grounds" %}
          {% include eventGold.html title="Midway Opens" time="3:00 PM" loc="Midway" %}
          {% include eventRed.html title="Watermelon Eating Contest" time="5:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventBlack.html div="Pushmataha (10-13)" title="G8: Koni Osi vs Beaver Dam" time="5:00 PM" %}
          {% include eventBlue.html title="Hilháchi Alhíha Social Dance Group" time="5:00 PM" loc="Main Stage" %}
          {% include eventBlack.html div="Tulli Okchi Ishko (14-17)" title="G6: Pearl River vs Beaver Dam" time="6:00 PM" %}
          {% include eventBlue.html title="One Feather Dance Group" time="6:00 PM" loc="Main Stage" %}
          {% include eventBlue.html title="Bogue Chitto Youth Group" time="7:00 PM" loc="Main Stage" %}
          {% include eventGold.html div="Live Entertainment" title="Nightly DJ" time="8:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventGold.html div="Live Entertainment" title="Zach Williams in Concert" time="8:30 PM" loc="Main Stage" %}
          {% include eventBlack.html div="Men's (35+)" title="G5: Beaver Dam vs Koni Hata" time="10:15 PM" %}  
          {% include eventBlack.html div="Women's" title="G10: Bók Čito Ohóyo vs Pearl River" time="11:30 PM" %} 
          {% include eventGold.html title="Midway Closes" time="1:00 AM" loc="Midway" %}
        </div>
      </div>
      
      <div class="tab-pane fade {% include eventActive.html date='2021-07-17' %}{% if cachedNow >= '2021-07-17' %}show active{% endif %}" id="dayTen" role="tabpanel" aria-labelledby="dayTen-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% include eventRed.html title="REZ RUN 2021" time="7:00 AM" loc="Warrior Stadium" %}
          {% include eventGold.html title="Gates Open" time="10:00 AM" loc="Fairgrounds" %}
          {% include eventBlue.html title="Conehatta Development Club" time="10:00 AM" loc="Dance Grounds" %}
          {% include eventRed.html title="CIF Open Cornhole Tournament" time="10:00 AM" loc="CCHS Gymnasium" %}
          {% include eventBlue.html title="West TN Choctaw Social Dancers" time="11:00 AM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of<br><i>2021-2022<br>Choctaw Indian Princess<br>Shemah Ladania Crosby</i>" time="11:45 AM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Bogue Homa Social Group" time="12:00 PM" loc="Dance Grounds" %}
          {% include eventGold.html title="Midway Opens" time="12:00 PM" loc="Midway" %}
          {% include eventBlue.html title="Cultural Demonstration" time="12:45 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Women's Finals" time="1:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventBlue.html title="Fani Lakna Social Dancers" time="1:00 PM" loc="Dance Grounds" %}
          {% include eventRose.html title="Introduction of Visiting Princesses" time="1:45 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Young Natives Social Dance Group" time="2:00 PM" loc="Dance Grounds" %}
          {% include eventBlue.html title="Cultural Demonstration" time="2:45 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Iron Warrior: Men's Finals" time="3:00 PM" loc="In Front of Exhibit Hall" %}
          {% include eventBlue.html title="Tikbá Ilhkóli Social Dancers" time="3:00 PM" loc="Dance Grounds" %}
          {% include eventRed.html title="Watermelon Eating Contest" time="4:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventBlue.html title="Pearl River Social Dancers" time="5:00 PM" loc="Main Stage" %}
          {% include eventGold.html title="Closing Ceremonies" time="6:00 PM" loc="Main Stage" %}
          {% include eventBlue.html title="Himiffowa Alhíha Social Dance Group" time="7:00 PM" loc="Main Stage" %}
          {% include eventGold.html div="Live Entertainment" title="Nightly DJ" time="8:00 PM" loc="Áy<u>i</u>pa Village" %}
          {% include eventGold.html div="Live Entertainment" title="Brett Young in Concert" time="8:30 PM" loc="Main Stage" %}
          {% include eventBlack.html div="World Series of Stickball" title="Men's Division: Game 10" time="10:15 PM" %}
          {% include eventGold.html title="Midway Closes" time="2:00 AM" loc="Midway" %}
        </div>
      </div>-->
    </div>

  </div>
</section>
