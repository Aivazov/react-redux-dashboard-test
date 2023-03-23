import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/selectors';
import css from './ProductCounter.module.css';

export const ProductCounter = () => {
  const products = useSelector(getProducts);

  const count = products.reduce(
    (acc, product) => {
      if (product.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
