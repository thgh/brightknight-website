<template>
  <form class="font-normal leave-email" data-netlify="true" name="email" method="post">
    <input type="hidden" name="form-name" value="email" />
    <input type="hidden" name="language" :value="$route.params.lang" />
    <p>
      <input type="email" class="leave-email__input" :placeholder="data && data.placeholder || 'email address'" name="email">
      <button type="submit" class="leave-email__button">
        {{ data && data.button || '' }}
        <icon name="send" />
      </button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    data: null
  }
}  
</script>

<style lang="scss">
@import '../assets/css/variables';

.leave-email {
  margin-top: .3em;
  display: block;
  overflow: auto;
  position: relative;
}
.leave-email__input {
  display: inline-block;
  margin: 0 .5em .5em 0;
  border-width: 0;
  border: 2px solid $brand;
  padding: .5em;
  height: 3em;
  line-height: 2em;
  font-size: 1em;
  background: none;
  color: $brand;
  width: 100%;
  max-width: 13em;
  outline: none;
  &::placeholder {
    font-style: italic;
    color: inherit;
    opacity: 1;
    text-align: center;
  }
}
.leave-email__button {
  right: 0;
  top: 0;
  padding: .75em 1em;
  height: 3em;
  width: 100%;
  max-width: 13em;
  line-height: 1.5em;
  font-size: 1em;
  background: $altDark;
  color: $altLight;
  border: none;
  border-radius: 15px;
  outline: none;
  transition: transform .2s;
  .icon {
    margin-left: .4em;
  }
  .fill-fg {
    fill: currentColor;
  }
  // &:focus, &:hover  {
  //   + .leave-email__load {
  //     width: 100%;
  //   }
  // }
}

.section--dark {
  .leave-email__input {
    background: rgba(255, 255, 255, .1);
    border-color: white;
    color: white;
    &::placeholder {
      color: white;
      opacity: .7;
    }
  }
}

.section--bg-brand {
  .leave-email__input {
    border-color: white;
    color: white;
  }
  .leave-email__button {
    background: $altLight;
    color: $altDark;
  }
  .fill-fg {
  }
}
</style>
