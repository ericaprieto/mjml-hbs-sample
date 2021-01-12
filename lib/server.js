import path from "path";
import express from "express";
import Handlebars from "handlebars";
import compile from "./compile";

const port = 3000;
const app = express();

const srcDir = path.join(__dirname, "..", "src");
const templatesDir = path.join(srcDir, "templates");

function requireWithFallback(path, fallback = {}) {
  try {
    return require(path);
  } catch (e) {
    return fallback;
  }
}

app.get("/preview/:name/:locale", (req, res) => {
  const { name, locale } = req.params;

  const compiled = compile(name);

  const sample = requireWithFallback(
    path.join(templatesDir, name, "sample.json")
  );

  const html = Handlebars.compile(compiled[locale])(sample);

  res.send(html);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
