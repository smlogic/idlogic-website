import { defineConfig } from 'astro/config';

const [owner = '', repository = ''] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const isUserSite = repository && owner && repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const site = process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'https://example.com');
const explicitBase = process.env.BASE_PATH;
const base = explicitBase !== undefined ? (explicitBase || '/') : (repository && !isUserSite ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always'
});
