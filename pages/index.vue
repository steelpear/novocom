<template>
  <div>
    <section class="mb-6">
      <v-row justify="center" align="start" dense>
        <v-col cols="12" md="10">
          <sectionOne :items="feed1" />
        </v-col>
        <v-col cols="12" md="2">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="pt-2" v-html="ads1" />
        </v-col>
      </v-row>
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
      feed3: [],
      ads1: `
        <a href="https://apyecom.com/click/620181ad2bfa812bd75196eb/173980/276001/subaccount"><img src="https://apycdn.com/cn/banner/16/24/45/16244552813676.png" width="160" height="600" alt="" title=""></a>
        <a href="https://apyecom.com/click/620181ad2bfa812bd75196eb/173980/276001/subaccount"><img src="https://apycdn.com/cn/banner/16/24/45/16244551695806.png" width="160" height="600" alt="" title=""></a>
      `
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
      this.feed2 = this.feed.splice(0, 4)
      this.feed3 = this.feed.splice(0, 4)
    }
  }
}
</script>
