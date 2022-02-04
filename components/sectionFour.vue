<template>
  <div>
    <v-row justify="center" align="start" dense>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="6"
      >
        <v-card
          v-if="item.enclosure"
          class="ma-2"
          elevation="0"
        >
          <v-row justify="center" align="start" dense>
            <v-col cols="12" md="6">
              <a :href="item.link" target="_blank" class="text-decoration-none">
                <v-card-title class="feed_title py-0">
                  {{ item.title }}
                </v-card-title>
              </a>
            </v-col>
            <v-col cols="12" md="6" class="pa-0">
              <v-img
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="150"
                :src="item.enclosure.url"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-divider class="mt-4" />
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
  a .feed_title {
    color: black;
    word-break: normal;
    line-height: 1.35em;
    transition: all .5s;
    &:hover {color: #F57C00;}
  }
</style>
