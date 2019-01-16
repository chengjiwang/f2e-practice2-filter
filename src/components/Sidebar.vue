<template>
  <section class="sticky-top pt-3">
    <p class="h5">選擇景點區域</p>
    <el-select v-model="currentArea" placeholder="全部景點" class="w-100">
      <el-option
        v-for="(area, key) in areaData"
        :key="key"
        :label="area"
        :value="area">
      </el-option>
    </el-select>
    <div class="mt-3">
      <input type="checkbox" id="freeTicket" value="免費參觀" v-model="checkedTicket">
      <label for="freeTicket">免費參觀</label>
      <!-- <el-checkbox v-model="checkedTicket"
        class="color: orange">免費參觀</el-checkbox> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['areaData'],
  data() {
    return {
      currentArea: '',
      checkedTicket: false,
    };
  },
  watch: {
    currentArea(area) {
      const vm = this;
      vm.currentArea = area;
      this.$bus.$emit('filter:update', area, 'currentArea');
    },
    checkedTicket(value) {
      const vm = this;
      vm.checkedTicket = value;
      this.$bus.$emit('filter:update', value, 'checkedTicket');
    },
  },
};
</script>
