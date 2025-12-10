import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building frontend...");
  await viteBuild();

  console.log("build complete! frontend ready for deployment");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
