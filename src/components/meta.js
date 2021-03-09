import React from "react";
import { Helmet } from "react-helmet";

const meta = (props) => {
  // html 部分の前に処理が入ると、( から { に変わることに注意
  const baseTitle = "サンプルサイト";
  const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="description" content={props.desc} />
    </Helmet>
  );
};

export default meta;
