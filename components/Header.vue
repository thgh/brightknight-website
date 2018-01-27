<template>
  <header class="header">
    <div class="section section--scale-lg">
      <div class="col">
        <h1>
          BrightKnight  
        </h1>
        <nav class="nav-main">
          <a href="/en" :class="{ active: $route.params.lang === 'en' }">en</a>
          |
          <a href="/fr" :class="{ active: $route.params.lang === 'fr' }">fr</a>
          |
          <a href="/nl" :class="{ active: $route.params.lang === 'nl' }">nl</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import '../assets/css/variables';

  .header {
    background: white;
    // padding: 1rem 1rem;
    text-align: center;
    h1 {
      display: block;
      margin: 0 auto;
      font-weight: normal;
      font-size: 1em;
      width: 11.708em;
      height: 2.666em;
      background: url(/brightknight-logo.png);
      background-size: 100%;
      text-indent: 12em;
      overflow: hidden;
    }
    .col {
      padding: .5rem;
    }
  }
  .nav-main {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    color: #ccc;
    a {
      display: inline-block;
      padding: 1em .5em;
      line-height: 1em;
      text-transform: uppercase;
      color: $brand;
      opacity: 1;
      transition: opacity .3s;
    }
    a:hover {
      color: black;
      text-decoration: underline;
    }
    a:last-child {
      padding-right: 2em;
    }
    .active {
      color: $altLight;
    }
  }
</style>
