<template>
<div id="main">
  <div id="nav">
    <Nav />
  </div>
  <div id="app">
    <router-view />
  </div>
</div >
</template>

<script>
import Nav from './components/Nav'
export default {
  data () {
    return {}
  },
  components: {
    Nav: Nav
  }
}
</script>

<style lang="scss">
#nav { width: 100%; height: 60px; background: #fcfcfc; box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05); }
#main { height: 100%; width: 100%; }
#app { height: 100%; width: 1200px; margin: 0 auto; margin-top: 10px }
body, html { width: 100%; height: 100% }
* { margin: 0; padding: 0; font-size: 12px; font-style: normal }
ol, ul, li { list-style: none }
img { border:0; vertical-align: middle }
body { color: #000000; background: #f7f7f8 }
.clear { clear: both; height: 1px; width: 100%; overflow: hidden; margin-top: -1px }
a { color: #000000; text-decoration:none }
a:hover {color: #BA2636; text-decoration: underline }
</style>
