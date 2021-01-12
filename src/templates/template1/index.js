import React from "react";
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlStyle,
  MjmlText,
} from "mjml-react";
import { useI18N } from "../../../lib/i18n";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Template1() {
  const t = useI18N();

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Template1</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlStyle>{`
          .blue-column {
            background-color: blue;
          }
        `}</MjmlStyle>
        <MjmlStyle inline>{`
          .red-column {
            background-color: red;
          }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <Button href="https://www.wix.com/">{t("greeting")}</Button>
            <Button href="https://www.wix.com/">{t("call_to_action")}</Button>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn cssClass="blue-column">
            <MjmlText>I am blue</MjmlText>
          </MjmlColumn>
          <MjmlColumn cssClass="red-column">
            <MjmlText>I am red</MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <Footer />
      </MjmlBody>
    </Mjml>
  );
}
