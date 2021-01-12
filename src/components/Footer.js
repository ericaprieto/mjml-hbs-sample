import React from "react";
import { MjmlSection, MjmlColumn, MjmlText } from "mjml-react";
import { useI18N } from "../../lib/i18n";

export default function Footer() {
  const t = useI18N();

  return (
    <MjmlSection>
      <MjmlColumn>
        <MjmlText>{t("some_global_key")}</MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
}
