---
layout: default
title: Forms
---

<section class="diamond-bg">
    <div class="container">
        <h1 class="display-1 shadow-text lh-1">2022 Forms</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pb-5">
        {% for card in site.data.forms.cards %}
            <div class="col">
                <a href="../assets/pdf/{{ card.file }}.pdf" target="_blank" class="text-decoration-none">
                    <div class="card text-dark text-center bg-warning mb-3 h-100" style="max-width: 18rem;">
                        <div class="card-header text-center display-1"><i class="bi bi-file-earmark-pdf"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">{{ card.title }}</h5>
                        </div>
                    </div>
                </a>
            </div>
        {% endfor %}
        </div>
        <div class="container bg-dark">
            <h1 class="display-1 shadow-text lh-1">Important Dates</h1>
            <div class="table-responsive text-start">
                <table class="table table-dark table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">May 2</th>
                            <td>6 PM</td>
                            <td>Stickball Coaches Meeting @ Amphitheater</td>
                        </tr>
                        <tr>
                            <th scope="row">May 6</th>
                            <td>1 PM</td>
                            <td>Dance Group Entry Deadline @ CAP Office</td>
                        </tr>
                        <tr>
                            <th scope="row">May 7</th>
                            <td>1 PM</td>
                            <td>Dance Group Registration Deadline @ CAP Office</td>
                        </tr>
                        <tr>
                            <th scope="row">May 12</th>
                            <td>6:30 PM</td>
                            <td>Dance Group Drawing @ Office of Economic Development</td>
                        </tr>
                        <tr>
                            <th scope="row">May 16</th>
                            <td>4 PM</td>
                            <td>Adult Stickball Team Entry Deadline @ Amphitheater</td>
                        </tr>
                        <tr>
                            <th scope="row">May 19</th>
                            <td>COB</td>
                            <td>CIF T-Shirt Orders Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">May 20</th>
                            <td>COB</td>
                            <td>REZ RUN and IRON WARRIOR T-shirt Orders Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">May 27</th>
                            <td>4:30 PM</td>
                            <td>Choctaw Princess Contestant Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">May 27</th>
                            <td>4:30 PM</td>
                            <td>Choctaw Princess Pageant Escort Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">June 1</th>
                            <td>COB</td>
                            <td>Youth Stickball Team Entry Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">June 6</th>
                            <td>6 PM</td>
                            <td>Stickball Bracket Day @ Amphitheater</td>
                        </tr>
                        <tr>
                            <th scope="row">June 7</th>
                            <td>10 AM</td>
                            <td>CIF Food Concessions & Parking Bids Due</td>
                        </tr>
                        <tr>
                            <th scope="row">June 8</th>
                            <td>COB</td>
                            <td>CIF Souvenir Program Book Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">June 9</th>
                            <td>10 AM</td>
                            <td>Bid Opening Day @ Entertainment Trailer</td>
                        </tr>
                        <tr>
                            <th scope="row">June 10</th>
                            <td>4:30 PM</td>
                            <td>Intertribal Dancers Registration Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">June 17</th>
                            <td>COB</td>
                            <td>Deadline for Community Booths</td>
                        </tr>
                        <tr>
                            <th scope="row">June 20 - July 12</th>
                            <td>8 AM - 4:30 PM</td>
                            <td>4-H, Adult and Youth Division Pre-Registration. Register @ Natural Resources (Mon-Fri
                                Only)</td>
                        </tr>
                        <tr>
                            <th scope="row">June 22</th>
                            <td>COB</td>
                            <td>Deadline for Tent and Exhibit Hall Vendors</td>
                        </tr>
                        <tr>
                            <th scope="row">June 24</th>
                            <td>4:00 PM</td>
                            <td>Deadline for Arts & Crafts Pavilion Vendors</td>
                        </tr>
                        <tr>
                            <th scope="row">June 24</th>
                            <td>COB</td>
                            <td>Iron Warrior, $25 Pre-registration Deadline. Fee increases to $30 after this date</td>
                        </tr>
                        <tr>
                            <th scope="row">June 24</th>
                            <td>COB</td>
                            <td>Rez Run, Pre-registration Deadline for Rez Run shirt</td>
                        </tr>
                        <tr>
                            <th scope="row">June 25</th>
                            <td></td>
                            <td>SDPI Unity Walk on Recreation Road & Stage Event</td>
                        </tr>
                        <tr>
                            <th scope="row">July 4</th>
                            <td>COB</td>
                            <td>4-H, Adult, Youth Division Booth Completion Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">July 11</th>
                            <td>9 AM - 8 PM</td>
                            <td>Register Exhibit Items @ PR Gym</td>
                        </tr>
                        <tr>
                            <th scope="row">July 11</th>
                            <td>COB</td>
                            <td>Organization Exhibit Item Deadline</td>
                        </tr>
                        <tr>
                            <th scope="row">July 12</th>
                            <td>8:30 AM - 11 AM</td>
                            <td>Register Exhibit Items @ PR Gym</td>
                        </tr>
                        <tr>
                            <th scope="row">July 12</th>
                            <td>1:30 PM</td>
                            <td>Exhibit Judging</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
