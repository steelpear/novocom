<template>
  <v-app>
    <v-main>
      <v-container class="py-8 mb-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      dark
      color="#2c3b42"
      :class="$vuetify.breakpoint.mobile ? 'pa-8' : 'py-10 px-16'"
    >
      <span>{{ new Date().getFullYear() }}</span>
      <span>&ensp;&copy;&nbsp;Novocom.ru</span>
    </v-footer>
    <v-fab-transition>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        v-show="offsetTop > 5"
        :color="offsetTop === 100 ? 'white' : 'indigo'"
        fab
        icon
        outlined
        plain
        fixed
        bottom
        right
        @click="$vuetify.goTo(0)"
      >
        <v-icon>
          mdi-arrow-up
        </v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
      offsetTop: 0
    }
  },
  beforeMount () {
    window.addEventListener('scroll', (e) => {
      requestAnimationFrame(() => {
        const scrollPos = window.scrollY
        const winHeight = window.innerHeight
        const docHeight = document.documentElement.scrollHeight
        const perc = (100 * scrollPos) / (docHeight - winHeight)
        this.offsetTop = perc
      })
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', (e) => {})
  }
}
</script>
