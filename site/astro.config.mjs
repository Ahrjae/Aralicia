
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ahrjae.github.io',
  base: '/Aralicia',

  integrations: [
    starlight({
      title: 'ARALICIA',

      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { autogenerate: { directory: 'reference' } },
          ],
        },
      ],
    }),
  ],
});
