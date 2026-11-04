import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Public asset folders kept in the repo but left out of the published build.
// Pair each entry with `hidden: true` on the matching content entries.
// To reactivate, remove the folder here and the `hidden` flag from the content.
const unpublishedAssetDirs = ['assets/case-studies/dealyzer', 'assets/case-studies/thinkwell'];

const omitUnpublishedAssets = {
  name: 'omit-unpublished-assets',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const outDir = fileURLToPath(dir);
      await Promise.all(
        unpublishedAssetDirs.map((assetDir) => rm(`${outDir}${assetDir}`, { recursive: true, force: true }))
      );
    }
  }
};

export default defineConfig({
  site: 'https://www.bradleyarsenault.me',
  integrations: [omitUnpublishedAssets]
});
