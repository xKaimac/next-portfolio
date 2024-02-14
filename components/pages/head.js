import Head from "next/head";

export function CustomHead({ text }) {
  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
    </>
  );
}