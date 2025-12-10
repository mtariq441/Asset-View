import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildAll() {
  try {
    await rm(path.join(__dirname, 'dist'), { recursive: true, force: true });
    
    console.log('Building frontend...');
    
    // Inline config instead of loading from TS file
    await build({
      root: path.resolve(__dirname, 'client'),
      build: {
        outDir: path.resolve(__dirname, 'dist/public'),
        emptyOutDir: true,
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'client', 'src'),
          '@shared': path.resolve(__dirname, 'shared'),
          '@assets': path.resolve(__dirname, 'attached_assets'),
        },
      },
    });
    
    console.log('Build complete! Frontend ready for deployment');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

buildAll();
