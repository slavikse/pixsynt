<template>
  <div class="App">
    <div class="welcome">
      <div class="title">
        <div>PIX</div>
        <div>SYNT</div>
      </div>

      <div class="waiting">
        COMING SOON...
      </div>

      <div class="timer">
        {{ timer }}
      </div>

      <div
        v-if="timer < threshold"
        class="thank-you"
      >
        THANK YOU! YOU HAVE SLIGHTLY ACCELERATED THE APPEARANCE OF THE GAME ON STEAM!
      </div>
    </div>
  </div>
</template>

<script>
const time = 2 ** 6;
const step = 2;

let intervalId;

export default {
  name: 'App',

  data() {
    return {
      threshold: 64,
      timer: document.documentElement.clientHeight,
    };
  },

  mounted() {
    intervalId = setInterval(this.scroll, time);
  },

  /* eslint-disable vue/no-deprecated-destroyed-lifecycle */
  destroyed() {
    clearInterval(intervalId);
  },

  methods: {
    scroll() {
      this.timer -= step;

      if (this.timer < 0) {
        this.timer = document.documentElement.clientHeight;
      }
    },
  },
};
</script>

<style
  scoped
  lang="scss"
>
.App {
  margin: 0 auto;
  max-width: 512px;
  height: 100vh;
  font-family: "Overlorder", serif;
  user-select: none;

  .welcome {
    height: 512px;
    background-color: var(--medium);
    overflow: hidden;

    .title {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      height: 128px;
      font-size: 256px;
      line-height: 0.2;
      color: var(--light);
    }

    .waiting {
      margin-top: 32px;
      height: 64px;
      text-align: center;
      font-size: 128px;
      line-height: 0.4;
      color: var(--black);
    }

    .timer {
      margin-top: 64px;
      text-align: center;
      font-size: 64px;
      line-height: 0.6;
      color: var(--black);
    }

    .thank-you {
      position: absolute;
      margin-top: 16px;
      max-width: 512px;
      min-height: 128px;
      padding: 0 16px;
      text-align: center;
      font-size: 64px;
      line-height: 0.4;
      color: var(--light);
    }
  }
}
</style>
