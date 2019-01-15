<template>
  <div>
    <nav class="navbar-dark bg-primary header">
      <div class="container">
        <div class="row">
          <h1 class="logo text-center navbar-text mb-0 col-12 col-sm-4">
            <a href="#">HaveFun</a>
          </h1>
          <div class="search d-flex justify-content-center justify-content-lg-start
            align-items-center navbar-text col-12 col-sm-8">
            <i class="fas fa-search icon-search"></i>
            <input type="text" class="mb-0" placeholder="Search" aria-label="Search"
              v-model="searchText">
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
    };
  },
  watch: {
    searchText(text) {
      const vm = this;
      vm.searchText = text;
      this.$bus.$emit('search:update', text);
    },
  },
};
</script>

