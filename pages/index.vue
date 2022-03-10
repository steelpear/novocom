<template>
  <div>
    <v-fade-transition>
      <div v-if="skeleton" class="skeleton">
        <v-row justify="center" align="start">
          <v-col
            v-for="n in 9"
            :key="n"
            cols="12"
            md="4"
            sm="6"
            xs="12"
          >
            <v-skeleton-loader
              class="grey lighten-2"
              type="card"
              elevation="2"
            />
          </v-col>
        </v-row>
      </div>
    </v-fade-transition>
    <section class="mb-6">
      <v-row justify="center" align="start" dense>
        <v-col cols="12" :md="$vuetify.breakpoint.lgAndUp ? '10' : '12'" xs="12">
          <sectionOne :items="feed1" />
        </v-col>
        <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="2">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-if="$vuetify.breakpoint.lgAndUp" class="pt-2 text-center" v-html="ads[0]" />
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
      ads: [],
      skeleton: true,
      html: `<script language="JavaScript" type="text/javascript">
        (function() {var d=document; var s=d.createElement('script'); var id = Math.floor(Math.random()*999);d.write('<div id="x'+id+'"></div>');s.type = 'text/javascript';s.async = true;s.src = 'https://stvkr.com/v2/banner-BqLkR-J0jRL-jq0z0-08b19705?size=160x600&dv='+id; var x=d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); })();<//script>`
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
      this.skeleton = false
    }
  }
}
</script>

<style lang="stylus">
  .fade-transition
  &-leave-active
    position: absolute

  &-enter-active, &-leave, &-leave-to
    transition: $primary-transition

  &-enter, &-leave-to
    opacity: 0
</style>
