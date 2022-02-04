<template>
  <div>
    <section class="mb-6">
      <sectionOne :items="feed1" />
    </section>
    <section class="mb-6">
      <sectionThree :items="feed2" />
    </section>
    <section class="mb-6">
      <sectionFour :items="feed3" />
    </section>
    <section>
      <sectionTwo :items="feed" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      feed: [],
      feed1: [],
      feed2: [],
      feed3: []
    }
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    async getFeed () {
      const response = await this.$axios.get(process.env.VUE_APP_SERVER + '/api/feed')
      this.feed = response.data.items
      this.feed1 = this.feed.splice(0, 6)
      this.feed2 = this.feed.splice(0, 8)
      this.feed3 = this.feed.splice(0, 4)
    }
  }
}
</script>
