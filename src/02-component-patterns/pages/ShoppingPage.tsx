import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/index';
import '../styles/custom-styles.css';
import { products } from '../data/product';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark'
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark'
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white text-bold' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
