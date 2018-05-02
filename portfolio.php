<?php
  include("includes/head.php");
?>
<?php
  include("includes/navbar.php");
?>

<div class="container">
  <div class="portfolio-container">
    <h2 class="section-title rotated-up-rb">Portfolio</h2>
    <!-- <i class="fas fa-folder-open"></i> -->
    <section>
      <div class="project-title"><h3>Jbly</h3></div>
      <div class="project-info">
        <div class="project-img"><img src="images/jbly-logo.png"/></div>
        <div class="project-links">
          <p><span class="strong">Type: </span>MERN Stack App</p>
          <p><span class="strong">Time: </span>1 week (pair project)</p>
          <p style="padding-right: 30px"><span class="strong">Tech: </span>MongoDB, Express, React, Node.js, Git (Mocha & Chai for test coverage)</p>
          <p>
            <a class="button" target="_blank" href="http://jbly.herokuapp.com/">View app</a>
            <a class="button" target="_blank" href="https://github.com/suishum/WDI_LDN_PROJECT4">View GitHub</a>
          </p>
        </div>
      </div>
      <div class="project-blurb">
        <p>Jbly is an app that was made with the idea of simplifying the job search process for web developers. User profiles contain details like their preferred languages and the number of years they’ve been practising.</p>
        <p>For this project I chose to work in a team to give myself more practice with collaborative working on Git. We built the backend together and split the different user routes between ourselves. We had also switched up the routes several times during the project to familiarise ourselves with each others code.</p>
      </div>
    </section>
    <section>
      <div class="project-title"><h3>MateDate</h3></div>
      <div class="project-info">
        <div class="project-img"><img src="images/m8d8-logo.svg"/></div>
        <div class="project-links">
          <p><span class="strong">Type: </span>MEAN Stack App</p>
          <p><span class="strong">Time: </span>1 week (pair project)</p>
          <p><span class="strong">Tech: </span>MongoDB, Express, AngularJS, Node.js, Git (Mocha & Chai for test coverage)</p>
          <p>
            <a class="button" target="_blank" href="http://matedate.herokuapp.com/">View App</a>
            <a class="button" target="_blank" href="https://github.com/suishum/WDI_LDN_PROJECT3">View GitHub</a>
          </p>
        </div>
      </div>
      <div class="project-blurb">
        <p>The third project was a MEAN full stack app. We created MateDate, an app that allows users to create and plan events, using the google places, google maps, and yelp APIs.</p>
        <p>We started by building the app’s backend controllers, models, APIs and seeded the user database with information so that we had some information to work with. Next, we built MVCs for the front end, services and directives for external APIs. We used Trello to manage workflow and Git for collaborative working version control.</p>
      </div>
    </section>
    <section>
      <div class="project-title"><h3>The Dining Dog</h3></div>
      <div class="project-info">
        <div class="project-img"><img src="images/thediningdog-img.png"/></div>
        <div class="project-links">
          <p><span class="strong">Type: </span>Express App</p>
          <p><span class="strong">Time: </span>1 week (solo project)</p>
          <p><span class="strong">Tech: </span>Express, MongoDB, EJS, Git</p>
          <p>
            <a class="button" target="_blank" href="https://thediningdog.herokuapp.com/">View App</a>
            <a class="button" target="_blank" href="https://github.com/suishum/WDI_LDN_PROJECT2">View GitHub</a>
          </p>
        </div>
      </div>
      <div class="project-blurb">
        <p>For my second project I built a RESTful express app for dog friendly restaurants, with authentication and APIs. It utilised Google’s Autocomplete API and Maps which worked in tandem to get and set coordinates on a map.</p>
        <p>I had a rough idea for what I wanted the site to do, the information I wanted to capture and the layout. I built each model, view and controller for users, and venues in turn and then styled the site!</p>
      </div>
    </section>
    <section>
      <div class="project-title"><h3>Jimba, The Cropdusting Pug</h3></div>
      <div class="project-info">
        <div class="project-img"><img src="images/jimba.gif"/></div>
        <div class="project-links">
          <p><span class="strong">Type: </span>JavaScript Game</p>
          <p><span class="strong">Time: </span>1 week (solo project)</p>
          <p><span class="strong">Tech: </span>JavaScript, HTML, CSS, Git</p>
          <p>
            <a class="button" target="_blank" href="https://jimba.herokuapp.com/">View App</a>
            <a class="button" target="_blank" href="https://github.com/suishum/WDI_LDN_PROJECT1">View GitHub</a>
          </p>
        </div>
      </div>
      <div class="project-blurb">
        <p>This was the first of the projects at General Assembly. ‘Jimba, the Cropdusting Pug’ is based on my dog and plays similarly to bomberman. I thoroughly enjoyed making this game and the joy it brought to its players.</p>
        <p>‘Jimba’ started with a grid and restricting the main characters movements. Each step that followed was planned slowly and methodically to allow for extension of the game. I added an enemy and various power-ups. I had also found a way to increase the difficulty of the game as time passed. Lastly, I styled the game using assets that I had hand drawn.</p>
      </div>
    </section>

  </div>

</div>
