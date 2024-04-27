import Head from "next/head";
import React from "react";

export default function BetaHead(props) {
  const { title } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="icon" href="/logo.png" type="image/icon type"></link>
    </Head>
  );
}
