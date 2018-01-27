<template>
  <footer class="footer section--text-center" id="contact">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Contact</h2>
          <p>
            Tel: <a href="tel:0032473365626">+32 473 36 56 26</a>
          </p>
          <p>
            <a target="_blank" href="https://www.google.be/maps/place/Karel+Rogierplein+11,+1210+Sint-Joost-ten-Node">
              Karel Rogierplein 11
              <br>1210 Sint-Joost-ten-Node
            </a>
          </p>
          <p>
            <a target="_blank" href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=674508405">BE 0674.508.405</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 2em 0;
  border-top: 1px solid #eee;
  background: white;
  color: #999;

  .col {
    padding: 1rem;
  }
  b {
    color: #333;
  }
  a {
    display: inline-block;
    border-bottom: 1px solid transparent;
  }
  a:hover {
    border-bottom: 1px solid black;
  }
}
</style>