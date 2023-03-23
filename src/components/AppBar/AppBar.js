import { StatusFilter } from '../StatusFilter/StatusFilter';
import { ProductCounter } from '../ProductCounter/ProductCounter';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Products</h2>
        <ProductCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
