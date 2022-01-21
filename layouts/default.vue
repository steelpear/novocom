<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <v-fab-transition>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        v-show="offsetTop > 5"
        color="indigo"
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
