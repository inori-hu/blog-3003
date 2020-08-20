<template>
	<div class="nav-bar">
		<ul><router-link to="/" tag="li">博客vue</router-link></ul>
		<Search />
		<QuickAccess />
	</div>
</template>

<script>
import Search from './Nav/Search'
import QuickAccess from './Nav/QuickAccess'
export default {
	data(){
		return {}
	},
	methods: {
	},
	components: {
		'Search': Search,
		'QuickAccess': QuickAccess,
  }
}
</script>

<style scoped>
div.nav-bar { display: flex; width: 1200px; margin: 0 auto; height: 100%; line-height: 60px;  }
ul { display: flex; width: 100px; height: 100%; line-height: 60px;  }
li { padding: 0 10px; cursor: pointer; font-size: 13px; letter-spacing: 1px; }
</style>