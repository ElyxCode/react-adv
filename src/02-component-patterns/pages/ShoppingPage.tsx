import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/index';
import '../styles/custom-styles.css';
import { products } from '../data/product';
// import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  // const { shoppingCart, onProductCountChange } = useShoppingCart();
  const product = products[0];

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark'
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, isMaxCountReached, increaseBy, count }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <span>{`count: ${count}`}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
