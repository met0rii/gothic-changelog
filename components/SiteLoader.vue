<template>
  <div>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <div v-if="render" class="loader">
        <div class="center">
          <div class="box">
            <div class="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SiteLoader.vue",
  data() {
    return {
      render: true
    }
  },
  mounted() {
    this.render = false;
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}

.loader {
  position: fixed;
  z-index: 1000;
  background: var(--orange-secondary);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.center {
  display: flex; /* establish flex container */
  flex-direction: column; /* make main axis vertical */
  justify-content: center; /* center items vertically, in this case */
  align-items: center; /* center items horizontally, in this case */
  height: 100%;
}


.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>
