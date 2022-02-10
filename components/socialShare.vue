<template>
  <div>
    <ShareNetwork
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="url"
      title="Новости"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitter-user="sharing.twitterUser"
      class="mx-1"
    >
      <v-icon size="30">
        {{ network.icon }}
      </v-icon>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sharing: {
        description: 'Новости сегодня: самые важные и свежие новости России и мира.',
        quote: 'Последние новости - картина дня, политика, экономика, спорт и другие события.',
        hashtags: 'новости, политика, экономика, спорт, шоу-бизнес, криминал',
        twitterUser: ''
      },
      networks: [
        { network: 'twitter', icon: 'fab fah fa-lg fa-twitter' },
        { network: 'telegram', icon: 'fab fah fa-lg fa-telegram-plane' },
        { network: 'facebook', icon: 'fab fa-facebook-f' },
        { network: 'vk', icon: 'fab fah fa-lg fa-vk' },
        { network: 'odnoklassniki', icon: 'fab fah fa-lg fa-odnoklassniki' },
        { network: 'whatsapp', icon: 'fab fah fa-lg fa-whatsapp' },
        { network: 'pinterest', icon: 'fab fah fa-lg fa-pinterest' }
      ]
    }
  },
  computed: {
    url () { return process.env.VUE_APP_URL }
  }
}
</script>
