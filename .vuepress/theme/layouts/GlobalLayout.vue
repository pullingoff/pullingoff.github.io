<template>
  <div id="global-layout">
    <component :is="$page.path ? 'Layout' : 'NotFound'" />
    <footer class="siteFooter">
      &copy; 개발자 박하은
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'
export default {
  name: 'GlobalLayout',
  computed: {
    layout () {
      const layout = this.getLayout()
      setGlobalInfo('layout', layout)
      return Vue.component(layout)
    }
  },
  methods: {
    getLayout () {
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout
        if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
          || this.$vuepress.getVueComponent(layout))) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>
