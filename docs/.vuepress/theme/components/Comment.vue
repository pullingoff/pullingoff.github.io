<template>
  <div ref="comment"></div>
</template>
<script>
export default {
  mounted() {
    // script tag 생성
    const utterances = document.createElement('script');
    utterances.type = 'text/javascript';
    utterances.async = true;
    utterances.crossorigin = 'anonymous';
    utterances.src = 'https://utteranc.es/client.js';
    
    utterances.setAttribute('issue-term', 'title'); // pathname|url|title|og:title 중 택 1
    utterances.setAttribute('theme','github-light'); 
    utterances.setAttribute('repo',`pullingoff/til-comments`); // 사용할 repository

    // script tag 삽입
    this.$refs.comment.appendChild(utterances);
  }
}
</script>