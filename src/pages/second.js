import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Meta from "../components/meta";

const second = () => (
  <Layout>
    <Meta title="2 つ目のページ" desc="2 ページ目です" />
    <div>
      <p>2 つ目のページのメインコンテンツ</p>
      <Link to={"/"}>トップページへのリンク</Link>
    </div>
  </Layout>
);

export default second;
