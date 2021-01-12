import fs from "fs";
import path from "path";
import React from "react";
import mergeDeep from "merge-deep";
import { render } from "mjml-react";
import { createI18NProvider } from "./i18n";
import requireWithFallback from "./requireWithFallback";

const srcDir = path.join(__dirname, "..", "src");
const templatesDir = path.join(srcDir, "templates");

export default function compile(templateName) {
  const templateDir = path.join(templatesDir, templateName);

  let locales = [];

  fs.readdirSync(templateDir).forEach((item) => {
    const parts = /locale-(.*?).json/.exec(item);

    if (parts && parts[1]) {
      locales.push(parts[1]);
    }
  });

  const compiled = locales.reduce((acc, locale) => {
    const Template = require(path.join(templateDir, "index.js")).default;

    const localTranslations = require(path.join(
      templateDir,
      `locale-${locale}.json`
    ));

    const globalTranslations = requireWithFallback(
      path.join(srcDir, "locale", `${locale}.json`)
    );

    const translations = mergeDeep(globalTranslations, localTranslations);

    const I18NProvider = createI18NProvider(translations);

    return {
      ...acc,
      [locale]: render(
        <I18NProvider>
          <Template />
        </I18NProvider>,
        { validationLevel: "soft" }
      ).html,
    };
  }, {});

  return compiled;
}
