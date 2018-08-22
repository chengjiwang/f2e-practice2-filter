<template>
  <div>
    <Navbar />
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="filter-item py-3 col-12 col-sm-4 sticky-top">
            <div class="sticky-to">
              <p class="h5 text-center">選擇景點區域</p>
              <select name="" id="js-select-area" class="select-area" v-model="currentArea">
                <option value=""> -- 全部景點 -- </option>
                <option :value="area" v-for="(area, key) in areas" :key="key">{{ area }}</option>
              </select>
            </div>
          </div>
          <div class="list col-12 col-sm-8">
            <p class="h4 mt-4">Showing {{ result }} results by…</p>
            <!-- <button type="button" class="btn btn-outline-primary">三民區</button>
            <button type="button" class="btn btn-outline-primary">前鎮區</button> -->

            <div class="travel-list card mb-3 d-flex flex-column flex-md-row"
                v-for="item in filterData[currentPage]" :key="item.Id">
              <div class="col-md-4 cart-img"
                :style="{ backgroundImage: `url(${item.Picture1})` }">
              </div>
              <div class="card-body col-md-8">
                <h5 class="card-title text-primary font-weight-bold">{{ item.Name }}</h5>
                <p class="card-text card-text-truncate">{{ item.Toldescribe }}</p>
                <p class="card-text"><i class="fas fa-map-marker-alt mr-2"></i>{{ item.Add }}</p>
                <div class="card-text d-flex justify-content-between">
                  <span><i class="fas fa-mobile-alt mr-2"></i>{{ item.Tel }}</span>
                  <span v-if="item.Ticketinfo"><i class="fas fa-ticket-alt mr-2"></i>{{ item.Ticketinfo }}</span>
                </div>
                <!-- <p class="card-text" v-if="item.Ticketinfo "><i class="fas fa-ticket-alt mr-2"></i></i>{{ item.Ticketinfo }}</p> -->
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <!-- <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li> -->
                <li class="page-item"
                  v-for="(page, key) in pages" :key="key"
                  :class="{active: currentPage === (page - 1) }">
                  <a class="page-link" href="#"
                    @click.prevent="currentPage = (page - 1)">{{ page }}</a>
                </li>
                <!-- <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li> -->
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './Navbar';

export default {
  data() {
    return {
      data: [],
      areas: [], // 區域
      currentPage: 0,
      currentArea: '',
      pages: 0,
      result: 0,
    };
  },
  components: {
    Navbar,
    // Sidebar,
    // Alert
  },
  methods: {
    getAreas() {
      const areas = new Set();
      this.data.forEach((item) => {
        areas.add(item.Zone);
      });
      this.areas = Array.from(areas);
    },
  },
  computed: {
    filterData() {
      const newData = [];
      const vm = this;
      let touristAttraction = [];
      if (vm.currentArea !== '') {
        touristAttraction = vm.data.filter(item => item.Zone === vm.currentArea);
      } else {
        touristAttraction = vm.data;
      }
      console.log(touristAttraction);
      vm.result = touristAttraction.length;
      // 分頁製作
      touristAttraction.forEach((item, i) => {
        if (i % 10 === 0) {
          newData.push([]);
        }
        // const page = parseInt(i / 10, 0);
        const page = Math.trunc(i / 10);
        newData[page].push(item);
      });
      console.log(newData);
      vm.pages = newData.length; // 分頁數量
      vm.currentPage = 0;
      return newData;
    },
  },
  created() {
    const vm = this;
    vm.$http.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97').then((response) => {
      // console.log(response.data.result.records);
      vm.data = response.data.result.records;
      vm.getAreas();
    });
  },
};
</script>
