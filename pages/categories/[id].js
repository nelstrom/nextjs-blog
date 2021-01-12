export async function getStaticProps({ params }) {
  return {
    props: { }
  }
}
export async function getStaticPaths() {
  return {
    paths: {},
    fallback: false
  }
}

export default function Post({ categoryData }) {
  return (
    <Layout>
      <Head>
        <title>Category: {categoryData.title}</title>
      </Head>
     
    </Layout>
  )
}
