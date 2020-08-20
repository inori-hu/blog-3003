<template>
  <div>
    <ul class="index-blog-list">
      <li v-for="item in $store.state.blogList" :key="item.id">
        <p class="blog-title">{{item.title}}</p>
        <p class="blog-content">
          <span class="blog-tag">auth:</span>
          <span>{{item.author}}</span>
          <span class="blog-content-text">{{item.content}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$store.dispatch('getBlogList', '')
  }
}
</script>

<style scoped>
.index-blog-list {
  width: 1200px;
  margin: 0 auto;
  background: #fcfcfc;
  box-sizing: border-box;
  padding: 0 24px 20px;
  border: 1px solid #eeeeee;
}
.index-blog-list li {
  padding: 9px 0 11px;
  border-bottom: 1px solid #f4f4f4;
  cursor: pointer;
}
.index-blog-list li:nth-last-child(1) {
  border: none;
  padding-bottom: 0;
}
.index-blog-list li .blog-title {
  font-size: 18px;
  margin-bottom: 6px;
  color: #3d3d3d;
}
.index-blog-list li .blog-title:hover {
  color: #ca0c16;
}
.blog-content {
  display: flex;
  line-height: 1.5;
}
.blog-content span {
  font-size: 14px;
}
.blog-content span:hover {
  color: #157dcf
}
.blog-content-text {
  margin-left: 20px;
  color: #8a8a8a;
  width: 700px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
span.blog-tag {
  color: #8a8a8a;
  font-size: 12px;
  line-height: 1.8;
  display: block;
  margin-right: 6px;
}
span.blog-tag:hover {
  color: #aaaaaa;
}
</style>
