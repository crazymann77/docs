import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Тестовая документация',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Русский',
					lang: 'ru',
				},
			},
			sidebar: [
				{
					label: 'Начало работы',
					items: [
						{ label: 'Введение', slug: 'intro' },
					],
				},
			],
		}),
	],
});
