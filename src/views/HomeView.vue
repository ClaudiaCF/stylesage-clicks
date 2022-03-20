<template>
  <div class="home">
    <div class="home__step" @click="$router.push('/firstStep')">First step</div>
    <div class="home__step" @click="$router.push('/secondStep')">Second step</div>
    <div class="home__step" @click="$router.push('/thirdStep')">Third step</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  &__step {
    padding: 40px 20px;
    border: 2px solid slateblue;
    border-radius: 25px;
    color: white;
    background-color: mediumslateblue;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: rebeccapurple;
    }
  }
}
</style>
