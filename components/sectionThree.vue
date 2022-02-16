<template>
  <div>
    <v-row justify="center" align="start" dense>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="3"
        sm="6"
        xs="12"
      >
        <v-hover
          v-slot="{ hover }"
          close-delay="100"
        >
          <v-card
            v-if="item.enclosure"
            class="ma-2"
            :elevation="hover ? 8 : 2"
            dark
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              />
            </template>
            <v-img
              class="text-right"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="250"
              :src="item.enclosure.url"
            >
              <a :href="item.link" target="_blank" class="text-decoration-none">
                <v-card-title
                  class="text-left title_feed"
                  :class="hover ? 'orange--text' : 'grey--text text--lighten-2'"
                >
                  {{ item.title }}
                </v-card-title>
              </a>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
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
 a .title_feed {
    background: rgba(0,0,0,.5);
    width: 100%;
    word-break: normal;
    height: 100%;
    line-height: 1.3em;
    transition: all .5s;

 }
</style>
