import { useSelector } from 'react-redux';
import { Product } from '../../components/Product/Product';
import { getProducts, getStatusFilter } from '../../redux/selectors';
import { statusFilters } from '../../redux/constants';
import css from './ProductList.module.css';

const getVisibleProducts = (products, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return products.filter((product) => !product.completed);
    case statusFilters.completed:
      return products.filter((product) => product.completed);
    default:
      return products;
  }
};

export const ProductList = () => {
  const products = useSelector(getProducts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleProducts = getVisibleProducts(products, statusFilter);

  return (
    <ul className={css.list}>
      {visibleProducts.map((product) => (
        <li className={css.listItem} key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  );
};
