<template>
  <div class="contact-wrapper">
    <h1>{{ list.textTopOne }}</h1>
    <p>{{ list.textTopTwo }}</p>
    <p>{{ list.textTopThree }}</p>
    <div class="buttons-wrapper">
      <a 
        href="https://wa.me/447553137828" 
        class="wa-button" 
        rel="noopener" 
        title="Open WhatsApp" 
        target="_blank"
      >
        <span>WhatsApp</span>
        <span class="wa-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#25D366"
              d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            />
          </svg>
        </span>
      </a>
      <a 
        href="mailto:hello@princesstreethostel.com"
        class="email-button"
        rel="noopener"
        title="Open Email"
        target="_blank"
      >
        <span>Email</span>
        <span class="email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path 
              fill="#ef4444" 
              d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
            />
            </svg>
        </span>
      </a>
    </div>
    <p v-html="list.textBottomOne"></p>
    <br>
    <br>
    <p class="biz" v-html="list.textBottomTwo"></p>
  </div>
</template>

<script>
export default {
  props: ["list"]
}
</script>

<style lang="scss" scoped>
  .contact-wrapper {
    text-align: center;
    h1 {
      margin-bottom: 0.8em;
    }
    .biz {
      font-size: 1em;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 0.4em;
    }
    .buttons-wrapper {
      padding: 2em 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      a {
        width: 300px;
        display: flex;
        justify-content: center;
        margin: 2em;
        background: white;
        color: inherit;
        padding: 0.6em 2em;
        border-radius: 12px;
        font-size: 1.3em;
        font-weight: 600;
        cursor: pointer;
        outline: inherit;
        border: 2px solid lightgray;
        transition: all 0.2s;
        &:hover {
        border: 2px solid darkgray;
        transition: all 0.2s;
        }
      }
      .wa-button {
        display: flex;
        align-items: center;
        .wa-icon {
          height: 24px;
          width: 24px;
          margin-left: 0.5em;
        }
      }
      .email-button {
        display: flex;
        align-items: center;
        .email-icon {
          height: 22px;
          width: 22px;
          margin-left: 0.5em;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .contact-wrapper {
      text-align: initial;
      .email-button {
        margin-top: 0.5em !important;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .contact-wrapper {
      .wa-button, .email-button {
        font-size: 1em !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .wa-icon .email-icon {
        height: 16px !important;
        width: 16px !important;
        
      }
    }
  }
</style>