<template>
  <v-row justify="center" align="start">
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <div v-for="item in feed.items">
      <v-hover
        v-slot="{ hover }"
        close-delay="100"
      >
        <v-card
          class="ma-2"
          max-width="374"
          :elevation="hover ? 8 : 2"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>
          <v-img
            v-if="item.enclosure"
            class="white--text align-start text-right"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250"
            :src="item.enclosure.url"
          >
            <v-chip
              class="ma-2"
              color="primary"
            >
              {{ item.categories[0] }}
            </v-chip>
          </v-img>
          <a :href="item.link" target="_blank" class="text-decoration-none">
            <v-card-title class="feed_title pb-0">
              {{ item.title }}
            </v-card-title>
          </a>
          <v-card-text>
            <div class="my-4 text-body-1 text--secondary font-weight-regular grey--text text--darken-3">
              {{ item.content }}
            </div>
            <v-divider class="my-1" />
            <div class="text-caption text-right">
              {{ feed.title }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      feed: []
    }
  },
  mounted () {
    this.getFeeds()
  },
  methods: {
    async getFeeds () {
      const response = await this.$axios.get(process.env.VUE_APP_SERVER + '/api/feed')
      const feedsList = response.data
      this.getFeed(feedsList[0])
    },
    async getFeed (rss) {
      const response = await this.$axios.post(process.env.VUE_APP_SERVER + '/api/feed', { url: rss })
      this.feed = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
  a .feed_title {
    color: black;
    word-break: normal;
    line-height: 1.4em;
    transition: all .5s;
    &:hover {color: #F57C00;}
  }
</style>
