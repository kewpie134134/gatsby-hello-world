import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import Meta from "../components/meta";

const index = () => (
  <Layout>
    <Meta
      title="トップページ"
      desc="Gatsby.js の使い方を説明するためのサンプルページです。"
    />
    <div>
      <p>トップページのメインコンテンツ！</p>
      <Link to={"/second/"}>Second ページへのリンク</Link>
      <Image filename="sample.jpg" alt="サンプル画像" />
    </div>
  </Layout>
);

export default index;
