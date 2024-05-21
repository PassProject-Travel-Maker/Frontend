import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import routes from "./routes";
import App from "./App.vue";
import { useKakao } from "vue3-kakao-maps/@utils";
import 'bootstrap-icons/font/bootstrap-icons.css';
const { VITE_KAKAO_MAP_API_KEY } = import.meta.env;
useKakao(VITE_KAKAO_MAP_API_KEY);
const app = createApp(App);
app.use(routes);
app.use(createPinia());
app.mount("#app");
