<template>
  <div class="third-step">
    <ul class="third-step__cat-list">
      <li class="third-step__cat" v-for="cat in cats" :key="cat.name" @click="selectedCat = cat">
        {{ cat.name }}
      </li>
    </ul>
    <cat-info
      v-if="selectedCat"
      class="third-step__cat-info"
      :img="selectedCat.catPhoto"
      :name="selectedCat.name"
      :clicks="selectedCat.clicks"
      @updateClicks="onUpdateClicks" />
  </div>
</template>
<script>
import CatInfo from '../components/CatInfo'

export default {
  name: 'ThirdStep',
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
        },
        {
          catPhoto:
            'https://us.123rf.com/450wm/stay2gether/stay2gether1207/stay2gether120700005/14268196-baby-cat-sobre-fondo-blanco.jpg',
          name: 'misifu',
          clicks: 0
        },
        {
          catPhoto: 'https://grupopiensoselgranadal.com/fotos/gato.png',
          name: 'kitty',
          clicks: 0
        },
        {
          catPhoto: 'https://i.pinimg.com/originals/01/d3/1a/01d31a99e71f03ec30ce57d245ac30cf.png',
          name: 'pusheen',
          clicks: 0
        }
      ],
      selectedCat: undefined
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
.third-step {
  display: flex;
  align-items: center;
  height: 100%;

  &__cat-list {
    padding: 0;
    margin: 0;
    list-style-type: none;

    & > :not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &__cat-list,
  &__cat-info {
    flex-basis: 50%;
  }

  &__cat {
    width: 100%;
    padding: 10px;
    border: 2px solid royalblue;
    box-sizing: border-box;
    transition: background-color 0.2s;

    &:hover {
      background-color: lightskyblue;
    }
  }
}
</style>
