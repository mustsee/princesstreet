<template>
  <div>
    <div v-for="(item, index) in list" :key="index" >
      <div class="text-block-wrapper">
        <div class="question">{{ item.question }}</div>
        <div class="answer" v-html="item.answer"></div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
}
</script>

<style lang="scss" scoped>
  .text-block-wrapper {
    margin-bottom: 1rem;
  }
  .question {
    font-weight: bold;
    line-height: 2.0;
  }
</style>