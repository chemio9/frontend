<script setup lang="ts">
import Logo from "@/assets/logo.svg"
import GithubIcon from "@/assets/Github_Logo.svg"
import BiliIcon from "@/assets/BiliBili_TV_Icon.svg"
import { Mail } from "lucide-vue-next"
</script>

<template>
  <main>
    <div class="overview">
      <div class="logo">
        <Logo></Logo>
      </div>
      <div class="divider"></div>
      <div class="introduction">
        <h1 class="name">原子信息社</h1>
        <i>ATOM IT CLUB</i>
        <div class="links">
          <a href="https://bilibili.com">
            <BiliIcon class="bili"></BiliIcon>
          </a>
          <a href="mailto:chengruichen3@gmail.com">
            <Mail></Mail>
          </a>
          <a href="https://github.com/atomclub">
            <GithubIcon viewBox="0 0 25 25" stroke="currentColor" fill="currentColor"></GithubIcon>
          </a>
        </div>

      </div>
    </div>
  </main>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima placeat, quam quo, nobis maiores officiis
      quis dicta explicabo totam incidunt accusamus nam sunt similique suscipit, minus laborum alias. Expedita,
      voluptatem?
      <a href="">link to</a>
    </p>
</template>

<style scoped>

main {
  margin: 2rem;
}

.divider {
  width: 1px;
  height: 100%;
  margin: 0 3rem;
  background-color: var(--color-border);
}

.overview {
  display: flex;
  align-items: center;
  width: 70%;
  height: 40vh;
  margin: 10vh auto;
}

.logo {
  flex: 1;
  margin: 2rem 0;
}

.introduction {
  flex: 1;
  text-align: center;
}

.logo svg {
  margin: auto;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  display: block;
}

.links {
  margin-top: 3rem;
}

.links a svg {
  width: 3rem;
  height: 3rem;
  color: var(--color-heading);
}

.links a svg.bili {
  color: rgb(0 179 250);
}

@media screen and (max-width: 700px) {
  .overview {
    display: block;
  }

  .divider {
    display: none;
  }

  main {
    margin: 1rem 0;
  }

  .logo svg {
    margin: auto;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    display: block;

  }

}
</style>
