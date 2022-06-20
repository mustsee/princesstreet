<template>
  <div>
    <splash />
    <div id="wrapper">
      <header-menu :list="list" />
      <div class="banner-info">
        <h1
          v-show="!pageData.layout"
          class="quote"
          v-html="pageData.title"
        ></h1>
        <div v-show="!pageData.layout">
          <p>{{ pageData.desc }}</p>
        </div>
        <div class="action-button-wrapper" v-show="!pageData.layout">
          <a href="https://beds24.com/booking2.php?propid=150425">
            <div class="action-button">
              <div>BOOK NOW</div>
              <span
                ><svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  class="svg-inline--fa fa-chevron-right fa-w-10"
                  style="width: 14px"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class=""
                  ></path></svg
              ></span>
            </div>
          </a>
        </div>
        <div v-if="!pageData.layout" class="container">
          <nuxt></nuxt>
        </div>
      </div>
      <footer-page />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import layout from "@/mixins/layout";
export default {
  mixins: [layout],
  computed: {
    ...mapState(["pageData"]),
  },
};
</script>
<style lang="scss">
@import "@/assets/css/base.scss";

/* #wrapper {
  max-width: 1480px;
  margin: auto;
} */

.banner-info {
  > div {
    white-space: pre-line;
  }
}

.action-button-wrapper {
  display: flex;
  justify-content: center;
  margin: 2em 0;
  .action-button {
    display: flex;
    width: fit-content;
    background-color: $mainColor;
    padding: 1em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: border-radius 0.2s ease-out;
    &:hover {
      background: linear-gradient(lighten($mainColor, 5%), $mainColor);
      border-top-right-radius: 1em;
      border-bottom-right-radius: 1.5em;
      transition: all 0.2s;
      span {
        margin-left: 1em;
        transition-delay: 0.3s;
        transition: all 0.3s;
      }
    }
    div {
      font-weight: 600;
      font-size: 1.6em;
      color: #fff;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 1em;
      font-size: 1.5em;
      transition: all 0.2s ease-out;
    }
  }
}
</style>
