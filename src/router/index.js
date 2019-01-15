import Vue from 'vue';
import Router from 'vue-router';
import Travel from '@/components/Travel';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Travel',
      component: Travel,
    },
  ],
});
