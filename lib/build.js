import fs from "fs";
import path from "path";
import rimraf from "rimraf";
import compile from "./compile";

const distDir = path.join(__dirname, "..", "dist");
const srcDir = path.join(__dirname, "..", "src");
const templatesDir = path.join(srcDir, "templates");

rimraf.sync(distDir);
fs.mkdirSync(distDir);

fs.readdirSync(templatesDir).forEach((item) => {
  const templateDir = path.join(templatesDir, item);
  const isDir = fs.lstatSync(templateDir).isDirectory();

  if (!isDir) {
    return;
  }

  const compiled = compile(item);

  for (let locale in compiled) {
    fs.writeFileSync(
      path.join(distDir, `${item}--${locale}.html`),
      compiled[locale]
    );
  }
});
