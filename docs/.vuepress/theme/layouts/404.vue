<template>
  <div class="theme-container">
    <div class="theme-default-content">
      <h1>404</h1>
      <article style="line-height:2rem">
      안녕하세요! <br/> 
      이 페이지는 아직 준비되어있지 않아요. <br/>
      
      <RouterLink to="/">
        ✨ 홈으로 돌아가기
      </RouterLink>
      
      </article>
    </div>
  </div>
</template>

<script>
const msgs = [
  `안녕하세요! 이 페이지는 아직 준비되어있지 않아요. 어쩌다 이 페이지에 오신건지 devhaeun@gmail.com으로 알려주실래요!?`,
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
