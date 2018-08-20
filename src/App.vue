<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  // created() {
  //   const vm = this;
  //   vm.$http.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97').then((response) => {
  //     // console.log(response.data.result.records);
  //   });
  // },
};
</script>

<style lang="scss">
@import "assets/all.scss";
</style>
