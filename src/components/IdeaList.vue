<template>
  <div>
    <hr class="line" />
    <g-link :to="ideaPost.path"
      ><h2>{{ ideaPost.title }}</h2></g-link
    >
    <p>{{ ideaPost.shortdescription }}</p>
    <p>{{ ideaPost.techstack }}</p>
    <p>{{ ideaPost.experiencelevels }}</p>
  </div>
</template>

<script>
export default {
  props: ["ideaPost"],
};
</script>
