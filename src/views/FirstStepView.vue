<template>
  <div class="first-step">
    <cat-info class="first-step__card-info" :img="catPhoto" :clicks="clicks" @updateClicks="clicks++" />
  </div>
</template>
<script>
import CatInfo from '../components/CatInfo'

export default {
  name: 'FirstStep',
  components: { CatInfo },
  data: function () {
    return {
      catPhoto: 'https://www.wipo.int/export/sites/www/wipo_magazine/images/en/2018/2018_01_art_8_1_400.jpg',
      clicks: 0
    }
  }
}
</script>

<style lang="scss">
.first-step {
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
