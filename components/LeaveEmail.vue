<template>
  <form class="font-normal leave-email" data-netlify="true" name="email" method="post">
    <input type="hidden" name="form-name" value="email" />
    <p>
      <input type="email" class="leave-email__input" :placeholder="data && data.placeholder || 'email address'" name="email" v-model="email">
      <button type="submit" class="leave-email__button" :class="{ empty: !email }" :disabled="disabled">
        {{ data && data.button || '' }}
        <icon name="send" />
      </button>
    </p>
    <input type="hidden" name="language" :value="$route.params.lang || 'en'" />
  </form>
</template>

<script>
export default {
  props: {
    data: null
  },
  data () {
    return {
      email: ''
    }
  },
  computed: {
    disabled () {
      return !/.+@.+\..+/.test(this.email)
    }
  }
}  
</script>

<style lang="scss">
@import '../assets/css/variables';

.leave-email {
  margin-top: -.3em;
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
  height: 3.8em;
  line-height: 2em;
  font-size: 1em;
  background: none;
  color: $brand;
  width: 100%;
  max-width: 13.5em;
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
  padding: 1em 1em 1em 1.5em;
  height: 3.8em;
  white-space: nowrap;
  line-height: 1.8em;
  font-size: 1em;
  background: $altLight;
  color: $altDark;
  border: none;
  border-radius: 15px;
  outline: none;
  transition: transform .2s;
  &.empty {
    background: $brand;
    color: white;
  }
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
    max-width: 25em;
  }
  .leave-email__button {
    margin-left: 1em;
    background: #43DEF0;
    color: #425C6C;
    &.empty {
      background: white;
      color: $brand;
    }
  }
  .fill-fg {
  }
}
</style>
