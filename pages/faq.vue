<template>
  <div>
    <!-- Add information about tram and bus to go to/from the hostel -->
    <Body v-if="body" :list="body" />
    <Extras v-if="extras" :list="extras" />
  </div>
</template>
<script>
import page from "@/mixins/page";
import Body from "@/components/body";
import Extras from "@/components/extras";

export default {
  components: {
    Body,
    Extras,
  },
  mixins: [page],
};
</script>