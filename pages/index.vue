<template>
  <main>
    <section class="section section--dark section--h section--intro row row--2 font-scale">
      <div class="col">
        <div class="content">
          <h1>
            Say&nbsp;hello&nbsp;to
            a virtual&nbsp;workforce
          </h1>
          <p class="font-normal">
            We help you create virtual workforces that allow you to outsource repetitive tasks.
          </p>
          <p>
            Get started now:
            <leave-email />
          </p>
        </div>
      </div>
      <div class="col">
        <img src="/5.jpg" class="img-fill" style="opacity: 1;">
        <button class="btn-play">
          <icon name="play" />
          <span class="hidden">Watch video about virtual workforces</span>
        </button>
      </div>
    </section>
<!--     <section class="section section--email">
      <div class="col">
        <div class="content">email</div>
      </div>
    </section> -->

    <section id="quote-1" class="section section--h section--example row row--2 font-scale"style="background: #fff;">
      <div class="col">
        <img src="/9.jpg" class="img-fill" style="opacity: 1;">
      </div>
      <div class="col">
        <div class="content">
          <h1 style="font-size: 1.2em">
            "The never-ending stream of requests gets handled even when I'm not there"
          </h1>
          <p class="font-normal">
            Carol explains how stuff is actually working out now. Previously things were really broken.
          </p>
        </div>
      </div>
    </section>

    <section id="quote-2" class="section section--dark section--h section--example row row--2 font-scale" >
      <div class="col">
        <div class="content">
          <h1 style="font-size: 1.2em">
            "76% reduction in distractions from typical problems"
          </h1>
          <p class="font-normal">
            Carol explains how stuff is actually working out now. Previously things were really broken.
          </p>
        </div>
      </div>
      <div class="col">
        <img src="/c.jpg" class="img-fill" style="opacity: 1;">
      </div>
    </section>

    <section id="how" class="section section--white section--example" >
      <div class="col">
        <h1 style="padding-top: 2em;">
          How do we pull this off?
        </h1>
      </div>
    </section>

    <section class="section section--white section--explain row row--3">
      <div class="col">
        <div class="content">
          <icon name="example" />
          <h2>
            Smart automation
          </h2>
          <p class="font-normal">
            Five lines about this and that. We do this with the most intelligent tools. We listen to you.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <icon name="autorenew" />
          <h2>
            Repeatable tasks
          </h2>
          <p class="font-normal">
            Five lines about this and that. We do this with the most intelligent tools. We listen to you.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <icon name="highway" />
          <h2>
            Scalability included
          </h2>
          <p class="font-normal">
            Five lines about this and that. We do this with the most intelligent tools. We listen to you.
          </p>
        </div>
      </div>
      <div style="padding-bottom: 4em;text-align: center;">
        <nuxt-link to="/services" class="cta--small">Learn more about our services</nuxt-link>
      </div>
    </section>

    <section id="how" class="section section--example" >
      <div class="col">
        <h1 style="padding-top: 2em;">
          What can RPA mean for you?
        </h1>
      </div>
    </section>

    <section id="why" class="section section--why row row--3">
      <div class="col">
        <div class="content">
          <icon name="quality-high" />
          <h2>
            Better
          </h2>
          <p class="font-normal">
            High success rates and in case of failure, you are immediately notified.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <icon name="clock-fast" />
          <h2>
            Faster
          </h2>
          <p class="font-normal">
            Doing lots of tasks at the same time.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="content">
          <icon name="account" />
          <h2>
            Cheaper
          </h2>
          <p class="font-normal">
            "Any task that takes up more than 6 hours per month is worth automating."
            &mdash;&nbsp;Source
          </p>
        </div>
      </div>
      <div style="padding-bottom: 4em;text-align: center;">
        <nuxt-link to="/what-is-rpa" class="cta--small">Learn more about RPA</nuxt-link>
      </div>
    </section>

    <section id="quote-3" class="section section--dark section--h section--example row row--2 font-scale" >
      <div class="col">
        <img src="/d.jpg" class="img-fill" style="opacity: 1;">
      </div>
      <div class="col">
        <div class="content">
          <h1 style="font-size: 1.2em">
            "Our staff could easily understand what the robot was doing."
          </h1>
          <p class="font-normal">
            After a chillax learning curve Eric could totally update the program when new exceptions were encountered.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--white section--example"
      style="padding: 2em 0;">
      <div class="col">
        <div style="text-align: center;">
          <h1>
            What are you waiting for?
          </h1>
          <p>Let us know when you are ready for the future</p>
          <p>
            <leave-email />
          </p>
          <p>
            Just like our clients:
          </p>
        </div>
      </div>
      <div class="clients">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
        <img src="/pixel.png" alt="" class="client__img">
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.title
{
  margin: 50px 0;
}
.section--intro {
}
.section--why {
    // color: white;
    // background: #624;
    font-weight: 300;
    .icon {
      font-size: 1.5em;
    }
    .fill-fg {
      // fill: white;
    }
}
.section.row--3 {
  .col {
    margin: 2em 0;
  }
}
.section--email {
  background: #222;
  color: white;
  padding: 2em 1em;
}
@media (min-width: 30rem) {
  .section--email {
    padding: 2em;
  }
}
.section--explain {
}
.btn-play {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -4em;
  margin-top: -4em;
  width: 8em;
  height: 8em;
  background: none;
  border: 0;
  outline: none;
  border-radius: 0;
  overflow: hidden;
  .icon {
    font-size: 4em;
  }
  .hidden {
    position: absolute;top:100%;
  }
}
.clients {
  text-align: center;
}
.client__img {
  width: 200px;
  height: 80px;
  background: #ddd;
  border-radius: 10px;
  margin: 1em;
}
.cta--small {
  text-decoration: underline;
  font-weight: normal;
}
</style>