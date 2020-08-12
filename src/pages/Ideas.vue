<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>These are some project ideas you can use to build your programming portfolio (well mostly - there are also some just fun project ideas in here, too).</p>
    <p>Disclaimer: While I did think of these ideas, I'm sure there are others who have done all or most of these ideas before.</p>
    <p>Have an idea that should be added? DM me on Twitter or make a PR, and join in the fun!</p>
    <p>Note: Folks who use this site, and all project ideas, should abide by the site's license.</p>
    <section class="posts">
      <IdeaList
        v-for="edge in $page.allIdeaPost.edges"
        :key="edge.node.id"
        :ideaPost="edge.node"
      />
    </section>
  </Layout>
</template>
<page-query>
query {
  allIdeaPost {
    totalCount
    edges {
      node {
        id
        title
        path
        experiencelevels
        techstack
        shortdescription
      }
    }
  }
}
</page-query>
<script>
import IdeaList from "@/components/IdeaList.vue";
export default {
  components: {
    IdeaList,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
