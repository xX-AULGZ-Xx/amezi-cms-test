<template>
  <div>
    <nevbar></nevbar>
    <b-container>
      <br>
      <b-img v-if="post.image" center :src="post.image"></b-img>
    <h1>{{post.title}}</h1>
    <p>{{post.description}}</p>
    <hr>
    <nuxt-content :document="post">
    </nuxt-content>
    </b-container>
    <br>
  </div>
</template>

<script>
export default {
  async asyncData({$content,params}) {
    const postData = await $content('posts', params.slug).fetch()
    return {
      post: postData,
    };
  },
  mounted() {
    console.log('THIS.POST', this.post)
  }
};
</script>

<style lang="CSS" scoped>

</style>
