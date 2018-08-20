<template>
  <div>
    <Navbar />
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="filter-item py-3 col-12 col-sm-4 ">
            <p class="h5 text-center">Location</p>
            <select name="" id="js-select-area" class="select-area">
              <option disabled selected value> -- 請選擇行政區 -- </option>
              <option value="三民區">三民區</option>
              <option value="前鎮區">前鎮區</option>
            </select>
          </div>
          <div class="list col-12 col-sm-8">
            <p class="h4 mt-4">Showing 15 results by…</p>
            <button type="button" class="btn btn-outline-primary">三民區</button>
            <button type="button" class="btn btn-outline-primary">前鎮區</button>

            <div class="travel-list card mb-3 d-flex flex-column flex-md-row">
              <div class="col-md-4 cart-img" style="background-image: url(http://khh.travel/FileArtPic.ashx?id=1954&w=1280&h=960);">
              </div>
              <div class="card-body col-md-8">
                <h5 class="card-title">高雄市立圖書總館</h5>
                <p class="card-text">Donec euismod scelerisque ligula. Maecenas eu varius risus</p>
                <p class="card-text"><i class="fas fa-map-marker-alt mr-2"></i>高雄市前鎮區新光路61號</p>
                <p class="card-text"><i class="fas fa-mobile-alt mr-2"></i>886-7-5360238</p>
              </div>
            </div>
            <div class="travel-list card mb-3 d-flex flex-column flex-md-row">
              <div class="col-md-4 cart-img" style="background-image: url(http://khh.travel/FileArtPic.ashx?id=1946&w=1280&h=960);">
              </div>
              <div class="card-body col-md-8">
                <h5 class="card-title">高雄市漁業文化館</h5>
                <p class="card-text">Donec euismod scelerisque ligula. Maecenas eu varius risus</p>
                <p class="card-text"><i class="fas fa-map-marker-alt mr-2"></i>高雄市前鎮區漁港中一路2號</p>
                <p class="card-text"><i class="fas fa-mobile-alt mr-2"></i>886-7-5360238</p>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
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
// import Sidebar from './Sidebar';

export default {
  components: {
    Navbar,
    // Sidebar,
    // Alert
  },
};
</script>
