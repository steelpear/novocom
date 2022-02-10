<template>
  <v-row v-masonry justify="center" align="start" dense>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      v-masonry-tile
      cols="12"
      md="4"
    >
      <v-hover
        v-slot="{ hover }"
        close-delay="100"
      >
        <v-card
          v-if="item.enclosure"
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
            class="white--text align-start text-right"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="250"
            :src="item.enclosure.url"
          >
            <v-chip
              class="ma-3"
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
            <div class="mb-4 text-body-1 content font-weight-regular grey--text text--darken-3">
              {{ item.content }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    items: Array
  }
}
</script>

<style lang="scss" scoped>
  a .feed_title {
    color: black;
    word-break: normal;
    line-height: 1.35em;
    transition: all .5s;
    &:hover {color: #F57C00;}
  }
  .content {line-height: 1.35em;}
</style>
