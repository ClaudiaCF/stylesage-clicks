<template>
  <div class="cat-info">
    <img class="cat-info__image" :src="img" alt="gato" @click="onImageClick()" />
    <div class="cat-info__text-wrapper">
      <p class="cat-info__text cat-info__text--name" v-if="name">{{ name }}</p>
      <p class="cat-info__text cat-info__text--clicks">Clicks: {{ clicks }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatInfo',
  props: {
    name: String,
    img: {
      type: String,
      required: true
    },
    clicks: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onImageClick: function () {
      this.$emit('updateClicks', !!this.name && this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.cat-info {
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
    cursor: pointer;
  }
}
</style>
