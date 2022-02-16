<template>
  <div>
    <section class="mb-6">
      <v-row justify="center" align="start" dense>
        <v-col cols="12" md="10" xs="12">
          <sectionOne :items="feed1" />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="2">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="pt-2" v-html="ads[0]" />
        </v-col>
      </v-row>
    </section>
    <section class="mb-6">
      <sectionThree :items="feed2" />
    </section>
    <section class="mb-6">
      <sectionFour :items="feed3" />
    </section>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="$vuetify.breakpoint.lgAndUp" class="pt-2 text-center" v-html="ads[1]" />
    <section>
      <sectionTwo :items="feed" />
    </section>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="$vuetify.breakpoint.lgAndUp" class="pt-2 text-center" v-html="ads[2]" />
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
      feed3: [],
      ads: []
    }
  },
  mounted () {
    this.getFeed()
  },
  methods: {
    async getFeed () {
      const response = await this.$axios.get(process.env.VUE_APP_SERVER + '/api/feed')
      this.feed = response.data
      this.feed1 = this.feed.splice(0, 6)
      this.feed2 = this.feed.splice(0, 4)
      this.feed3 = this.feed.splice(0, 4)
      this.getAds()
    },
    async getAds () {
      const response = await this.$axios.get(process.env.VUE_APP_SERVER + '/api/feed/ads')
      this.ads = response.data
    }
  }
}
</script>
