<template>
  <div>
    <Navbar />
    <main class="content">
      <div class="container">
        <div class="row">
          <div class="filter-item py-3 col-12 col-sm-4">
            <Sidebar :areaData="areas" />
          </div>
          <div class="list col-12 col-sm-8">
            <p class="h4 mt-4">符合的結果：共 {{ result }} 筆 </p>
            <ul class="pl-0">
              <List class="travel-list card mb-3 d-flex flex-column flex-md-row"
                :item="item" v-for="item in filterData[currentPage]" :key="item.Id"> </List>
            </ul>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item" v-if="currentPage !== 0">
                  <a class="page-link" href="#" aria-label="Previous"
                    @click.prevent="getPreviousPage">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"
                  v-for="(page, key) in pages" :key="key"
                  :class="{active: currentPage === (page - 1) }">
                  <a class="page-link" href="#"
                    @click.prevent="getCurrentPage(page)">{{ page }}</a>
                </li>
                <li class="page-item" v-if="currentPage < pages-1 ">
                  <a class="page-link" href="#" aria-label="Next"
                    @click.prevent="getNextPage">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import List from './List';
import json from '../data.json';

export default {
  data() {
    return {
      data: [],
      areas: [], // 區域
      currentPage: 0,
      currentArea: '',
      pages: 10,
      result: 0,
      checkedTicket: false,
      searchText: '',
    };
  },
  components: {
    Navbar,
    List,
    Sidebar,
    // Alert
  },
  methods: {
    getTravelData() {
      const vm = this;
      const url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97';
      vm.$http.get(url).then((response) => {
        vm.data = response.data.result.records;
        vm.getAreas();
      }).catch((error) => {
        if (error) {
          vm.data = json.result.records;
          vm.getAreas();
        }
      });
    },
    getAreas() {
      const areas = new Set();
      this.data.forEach((item) => {
        areas.add(item.Zone);
      });
      this.areas = Array.from(areas);
    },
    getCurrentPage(page) {
      this.currentPage = (page - 1);
    },
    getPreviousPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
    getNextPage() {
      if (this.currentPage < this.pages - 1) {
        this.currentPage += 1;
      }
    },
    isMatchSerch(SearchData, SearchString) {
      const regex = new RegExp(SearchString, 'gi');
      return SearchData.Name.match(regex) || SearchData.Description.match(regex);
    },
    setBusEvent() {
      const vm = this;
      vm.$bus.$on('filter:update', (content, kind) => {
        switch (kind) {
          case 'search':
            vm.searchText = content;
            break;
          case 'currentArea':
            vm.currentArea = content;
            break;
          case 'checkedTicket':
            vm.checkedTicket = content;
            break;
          default:
            vm.searchText = '';
            vm.currentArea = '';
            vm.checkedTicket = false;
        }
      });
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
      if (vm.searchText !== '') {
        touristAttraction = touristAttraction.filter(item => vm.isMatchSerch(item, vm.searchText));
      }
      if (vm.checkedTicket) {
        touristAttraction = touristAttraction.filter(item => item.Ticketinfo === '免費參觀');
      }
      vm.result = touristAttraction.length;
      // 分頁製作
      touristAttraction.forEach((item, i) => {
        if (i % 10 === 0) {
          newData.push([]);
        }
        const page = Math.trunc(i / 10);
        newData[page].push(item);
      });
      vm.pages = newData.length; // 分頁數量
      vm.currentPage = 0;
      return newData;
    },
  },
  created() {
    const vm = this;
    vm.getTravelData();
    vm.setBusEvent();
  },
};
</script>
