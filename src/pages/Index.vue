<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      This will be the front page
    </p>
  </Layout>
</template>
<script>
import IdeaList from "@/components/IdeaList.vue";
export default {
  components: {
    IdeaList,
  },
  metaInfo: {
    title: "Welcome to N's Den",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
