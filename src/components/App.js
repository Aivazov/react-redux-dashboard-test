import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { ProductForm } from './AddProductForm/AddProductForm';
import { ProductList } from './ProductList/ProductList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <ProductForm />
      <ProductList />
    </Layout>
  );
};
