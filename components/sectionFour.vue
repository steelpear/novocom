<template>
  <v-row justify="center" align="start" dense class="px-1">
    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="12"
      md="6"
      sm="6"
      xs="12"
    >
      <v-card
        v-if="item.enclosure"
        class="ma-2"
        flat
        tile
      >
        <v-row justify="center" align="start" dense>
          <v-col cols="12" md="6" sm="6" xs="6">
            <a :href="item.link" target="_blank" class="text-decoration-none">
              <v-card-title class="feed_title py-0" :class="$vuetify.breakpoint.mdAndUp ? 'text-h6' : 'text-subtitle-1'">
                {{ item.title }}
              </v-card-title>
            </a>
          </v-col>
          <v-col cols="12" md="6" sm="6" xs="6" class="pa-0">
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
    color: #2C3B42;
    word-break: normal;
    line-height: 1.25em;
    transition: all .5s;
    &:hover {color: #F57C00;}
  }
</style>
