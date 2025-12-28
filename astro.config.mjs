// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import icon from "astro-icon";
import remarkGithubAlerts from "remark-github-alerts";

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
	markdown: {
		remarkPlugins: [remarkGithubAlerts],
		shikiConfig: {
			theme: 'tokyo-night',



		}
	},
	devToolbar: {
		enabled: false,
	}
});
