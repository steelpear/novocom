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
            <v-chip
              class="ma-3"
              color="primary"
            >
              {{ item.categories[0] }}
            </v-chip>
            <a :href="item.link" target="_blank" class="text-decoration-none">
              <v-card-title class="dark_title text-left">
                {{ item.title }}
              </v-card-title>
            </a>
          </v-img>
          <v-card-text>
            <div class="mb-4 text-body-1 content font-weight-regular grey--text text--lighten-1">
              {{ item.content }}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
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
  a .dark_title {
    word-break: normal;
    line-height: 1.35em;
    transition: all .5s;
    width: 100%;
    color: #F57C00;
    background: rgba(0,0,0,.5);
    position: absolute;
    bottom: 10px;
    &:hover {color: azure;}
  }
  .content {line-height: 1.35em;}
</style>
