<template>
  <div>
    <div class="col-md-4 cart-img"
      :style="{ backgroundImage: `url(${item.Picture1})` }">
    </div>
    <div class="card-body col-md-8">
      <h5 class="card-title text-primary font-weight-bold">{{ item.Name }}</h5>
      <p class="card-text card-text-truncate">{{ item.Toldescribe }}</p>
      <p class="card-text"><i class="fas fa-map-marker-alt mr-2"></i>{{ item.Add }}</p>
      <div class="card-text d-flex justify-content-between">
        <span><i class="fas fa-mobile-alt mr-2"></i>{{ item.Tel }}</span>
        <span v-if="item.Ticketinfo">
          <i class="fas fa-ticket-alt mr-2"></i>{{ item.Ticketinfo }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['item'],
};
</script>
