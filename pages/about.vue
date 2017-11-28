<template>
  <main>
    <h1>Values</h1>

    <ul>
      <li>customer centricity</li>
      <li>People first</li>
    </ul>

    <h1>Meet the team</h1>
    <div class="team row">
      <div class="member" v-for="x in 9">
        <img src="/pixel.png" alt="">
        <div class="member__name">Person {{ x }}</div>
      </div>
      <div class="member">
        <img src="/pixel.png" alt="">
        <div class="member__name">You?</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.team {
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 0 auto;
padding: 3em 2em;
max-width: 54em;
}
.member {
  padding: 1em;
  float: left;
  width: 10em;
  img {
    display: block;
    margin: 0 auto;
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background: #ddd;
  }
}
.member__name {
  text-align: center;
}
</style>