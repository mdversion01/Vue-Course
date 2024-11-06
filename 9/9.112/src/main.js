import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);

// Components are registered globally - not the best idea for larger apps
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
// Removed components and moved to App.vue to register locally
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
