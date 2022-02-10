<template>
  <v-app>
    <v-main>
      <v-container class="py-8 mb-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      dark
      absolute
      color="#2c3b42"
      :class="$vuetify.breakpoint.mobile ? 'pa-8' : 'py-10 px-16'"
    >
      <v-row justify="center" :class="{'text-center':$vuetify.breakpoint.xsOnly}">
        <v-col cols="12" md="4" sm="5" xs="12" :class="{'pl-8' : $vuetify.breakpoint.mdAndUp}">
          <p>&copy; {{ new Date().getFullYear() }} Novocom.ru</p>
          <p>Вопросы и предложения: <a href="mailto:mail@novocom.ru">mail@novocom.ru</a></p>
        </v-col>
        <v-spacer />
        <v-col cols="12" md="4" sm="5" xs="12" :class="{'pl-12' : $vuetify.breakpoint.mdAndUp}">
          <v-row align="center" :justify="$vuetify.breakpoint.xsOnly ? 'center' : 'start'" class="ml-0 mb-4">
            <div v-if="!$vuetify.breakpoint.mobile" class="mr-2">
              Поделиться
            </div>
            <socialShare />
          </v-row>
          <p><a href="https://all-letters.ru/" target="_blank">Письма, благодарности, поздравления </a></p>
          <p><a href="https://qr-generator.ru/" target="_blank">QR-Generator - Генератор QR-кодов онлайн</a></p>
        </v-col>
      </v-row>
    </v-footer>
    <v-fab-transition>
      <v-btn
        v-if="!$vuetify.breakpoint.mobile"
        v-show="offsetTop > 5"
        :color="offsetTop > 98 ? 'white' : 'indigo'"
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

<style>
  a {
    color: inherit !important;
    text-decoration: inherit;
  }
</style>
