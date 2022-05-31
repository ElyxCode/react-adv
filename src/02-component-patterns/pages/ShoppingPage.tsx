import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components/index';

const product = {
  id: '1',
  title: 'Coffe mug - card',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'cafe'} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'hola'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
