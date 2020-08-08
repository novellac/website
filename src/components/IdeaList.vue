<template>
  <div>
    <hr class="line" />
    <g-link :to="ideaPost.path"
      ><h1>{{ ideaPost.title }}</h1></g-link
    >
    <p>{{ ideaPost.techstack }}</p>
    <p>{{ ideaPost.experiencelevels }}</p>
  </div>
</template>

<script>
export default {
  props: ["ideaPost"],
};
</script>
