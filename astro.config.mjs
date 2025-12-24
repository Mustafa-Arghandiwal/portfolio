// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
		server: {
			allowedHosts: [
				"cepdu-43-230-209-210.a.free.pinggy.link"
			]
		}
	},
	integrations: [react(), icon()],
	devToolbar: {
		enabled: false,
	}
});
