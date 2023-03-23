import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { addProduct } from '../../redux/productSlice';
import css from './addProduct.module.css';

export const ProductForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addProduct(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add product</Button>
    </form>
  );
};
