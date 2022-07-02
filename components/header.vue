<template>
  <header id="header">
    <div class="logo">
      <nuxt-link to="/" :title="$store.state.company.name">
        <figure>
          <img
            :src="routerBase + 'images/assets/logo.png'"
            :alt="$store.state.company.name"
            data-pin-nopin="true"
          />
        </figure>
      </nuxt-link>
    </div>
    <div class="hamburger-menu">
      <div class="hamburger-menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ul class="menu">
      <li
        v-for="(item, i) in list"
        :key="i"
        :class="[
         'menu-item' +
          (item.submenu ? ' menu-item--dropdown' : '') +
          (item.mobileOnly ? ' menu-item--responsive' : ''),
          item.extraCss ? 'wrapper-book-button' : ''
        ]">
        <a
          v-if="item.outOfPSH"
          target="_blank"
          :class="[getActiveClass(item), item.extraCss ? 'book-button' : '']"
          :title="item.name"
          :href="item.path"
          >{{ item.name }}</a>
        <nuxt-link
          v-else
          :to="item.path"
          :title="item.name"
          :class="getActiveClass(item)"
          >{{ item.name }}</nuxt-link
        >
        <ul v-if="item.submenu" class="menu-item--dropdown-content">
          <li
            v-for="(subitem, k) in item.submenu"
            :key="k"
            class="menu-item--dropdown-item"
          >
            <nuxt-link :to="subitem.path" :title="subitem.name">{{
              subitem.name
            }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>
<script>

export default {
  props: ["list"],
  computed: {
    routerBase() {
      return this.$router.options.base;
    },
  },
  methods: {
    getActiveClass(item) {
      if (item.submenu) {
        let hasActiveSubmenu = false;
        item.submenu.some((subitem) => {
          if (subitem.path == this.$route.path) {
            hasActiveSubmenu = true;
            return true;
          }
        });
        return hasActiveSubmenu ? "active" : "";
      } else {
        if (item.path === "/")
          return this.$route.path == item.path ? "active" : "";
        return this.$route.path.indexOf(item.path) == 0 ? "active" : "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/css/base.scss";

  .wrapper-book-button {
    margin-left: 4em;
    background-color: $secondColor;
    font-weight: normal;
    letter-spacing: 0.1em;
    &:hover {
      background-color: rgba($secondColor, 0.5);
      transition: all 0.3s;
    }
    .book-button {
      padding: 0.75em 2em;
      color: #121212;
      &:hover {
        background: inherit;
      }
    }
  }

  .best-price {
    line-height: 3em;
    text-align: center;
    background-color: rgba(#008c3c, 0.8);
    color: #fff;
  }

</style>