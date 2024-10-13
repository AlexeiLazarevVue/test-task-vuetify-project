/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import UUID from "vue3-uuid";

// Types
import type { App } from "vue";
import { createPinia } from "pinia";

export function registerPlugins(app: App) {
  app.use(vuetify).use(UUID).use(router).use(createPinia());
}
