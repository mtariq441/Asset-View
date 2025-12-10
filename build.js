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
    
    await build({
      configFile: path.resolve(__dirname, 'vite.config.ts'),
    });
    
    console.log('Build complete! Frontend ready for deployment');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

buildAll();
