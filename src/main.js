import "./global.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";
import "sweetalert2/dist/sweetalert2.min.css";

const app = HMR(App, {
    target: document.body
}, "routify-app");

export default app;