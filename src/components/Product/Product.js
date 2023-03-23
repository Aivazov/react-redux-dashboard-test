import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteProduct, toggleCompleted } from '../../redux/productSlice';
import css from './Product.module.css';

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(product.id));

  const handleToggle = () => dispatch(toggleCompleted(product.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={product.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{product.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
