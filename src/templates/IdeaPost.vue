<template>
  <Layout>
    <br />
    <g-link to="/" class="link"> &larr; Go Back</g-link>
    <div class="post-title">
      <h1>{{ $page.ideaPost.title }}</h1>
      <p>{{ $page.ideaPost.experiencelevels }}</p>
      <p>{{ $page.ideaPost.techstack }}</p>
    </div>
    <div class="post-content">
      <p v-html="$page.ideaPost.content" />
    </div>
  </Layout>
</template>

<page-query>
query IdeaPost ($path: String!) {
   ideaPost: ideaPost (path: $path) {
    id
    title
    content
    experiencelevels
    techstack
  }
}
</page-query>
