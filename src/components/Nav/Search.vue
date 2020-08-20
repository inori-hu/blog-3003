<template>
    <div class="nav-search" @keydown.enter="blog_search" >
        <Input v-model="searchValue" :style="inputContainerStyle" placeholder="搜索" ref="searchInput" />
    </div>
</template>

<script>
import { Input } from 'element-ui'
export default {
    data() {
        return {
            searchValue: '',
            inputContainerStyle: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    },
    components: {
        'Input': Input
    },
    methods: {
        blog_search: function(e) {
            this.$store.dispatch('getBlogList', this.searchValue)
            this.$refs.searchInput.blur();
        }
    }
}
</script>

<style>
.nav-search {
    width: 1000px;
    display: flex;
}
.nav-search .el-input__inner {
    height: 30px;
    width: 450px;
    font-size: 12px;
    background: rgba(0,0,0,0.06);
    border:none
}
.nav-search .el-input__inner:focus {
    background: white;
    border: 1px solid #ccc
}
</style>