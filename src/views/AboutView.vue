<template>
  <main class="about">
    <div class="overview">
      <div class="introduction">
        <h1 class="name">原子信息社</h1>
        <p>原子信息社由一群爱好者创立于2024年，<br>
          我们是爱好者，更是探索者。 <br>
          我们探索计算的无限可能， <br>
          为着无法计算的价值。</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 2rem;
}

.logo svg {
  margin: auto;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: block;
}

.introduction h1,
.introduction i {
  text-align: center;
}

.overview {
  margin: 10vh auto;
  width: 70%;
}

@media screen and (max-width: 700px) {
  main {
    margin: 1rem 0;
  }

  .overview {
    width: 90%;
  }

  .about h1 {
    display: block;
  }
}
</style>
