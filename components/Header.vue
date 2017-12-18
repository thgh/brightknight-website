<template>
  <header class="header">
    <div class="container">
      <h1>
        BrightKnight  
      </h1>
      <nav class="nav-main">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/en" style="float: right; margin-right: -1rem">en</nuxt-link>
        <nuxt-link to="/fr" style="float: right;">fr</nuxt-link>
        <nuxt-link to="/nl" style="float: right;">nl</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    background: white;
    padding: 1rem 1rem 0;
    h1 {
      margin: 0;
      padding: 1rem 0 .5rem;
      font-weight: normal;
    }
  }
  .nav-main {
    border-top: 1px solid #ddd;
    padding-bottom: 1em;
    a {
      display: inline-block;
      line-height: 1rem;
      padding: 1rem;
      font-size: 12px;
      text-transform: uppercase;
      opacity: .7;
      transition: opacity .3s;
    }
    a:hover {
      opacity: 1;
    }
    a:first-child {

    margin-left: -1rem;
    }
  }
</style>
