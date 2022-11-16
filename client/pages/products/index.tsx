import type { NextPage } from "next"
import ProductsPage from "../../components/Product/ProductsPage"
import Layout from "../../components/Layout/Layout"

const ProductsNextPage: NextPage = () => {
  return <Layout>
    <ProductsPage/>;
  </Layout>
}

export default ProductsNextPage
