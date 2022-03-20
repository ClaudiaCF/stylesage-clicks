<template>
  <div class="second-step">
    <cat-info
      class="second-step__cat-info"
      v-for="cat in cats"
      :key="cat.name"
      :img="cat.catPhoto"
      :name="cat.name"
      :clicks="cat.clicks"
      @updateClicks="onUpdateClicks" />
  </div>
</template>
<script>
import CatInfo from '../components/CatInfo'

export default {
  name: 'SecondStep',
  components: { CatInfo },
  data: function () {
    return {
      cats: [
        {
          catPhoto: 'https://www.wipo.int/export/sites/www/wipo_magazine/images/en/2018/2018_01_art_8_1_400.jpg',
          name: 'grumpy',
          clicks: 0
        },
        {
          catPhoto: 'http://assets.stickpng.com/thumbs/58a050065583a1291368eeb4.png',
          name: 'felino',
          clicks: 0
        }
      ]
    }
  },
  methods: {
    onUpdateClicks(catName) {
      const clickedCatIndex = this.cats.findIndex((cat) => cat.name === catName)
      this.cats[clickedCatIndex].clicks++
    }
  }
}
</script>

<style lang="scss">
.second-step {
  display: flex;
  justify-content: center;
  height: 100%;
}
</style>
