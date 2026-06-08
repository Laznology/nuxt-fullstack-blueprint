import presetWind4 from "@unocss/preset-wind4";
import {
	defineConfig,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import { presetNuxtUI, presetNuxtUIExtra } from "unocss-preset-nuxt-ui";

export default defineConfig({
	content: {
		pipeline: {
			include: [/\.ts$/, /\.vue$/, /\.vue\?vue/],
		},
	},
	presets: [
		presetNuxtUI(), // must be before presetWind4
		presetWind4({
			preflights: { reset: true, theme: "on-demand" },
			dark: { dark: ".dark", light: ".light" },
		}),
		presetNuxtUIExtra(), // must be after presetWind4
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	outputToCssLayers: true,
});
