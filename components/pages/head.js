import Head from "next/head";

export function CustomHead({ text, meta }) {
  return (
    <>
      <Head>
        <title>{text}</title>
        {meta && <meta property={meta.property} content={meta.content} />}
      </Head>
    </>
  );
}
