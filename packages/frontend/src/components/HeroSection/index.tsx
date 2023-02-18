import HeroHeader from "./components/HeroHeader";
import Product from "./components/Product";


export default function HeroSection(props: any) {
  const { products } = props;

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <HeroHeader />
        {products.map((product: {}) => {
          return (
            <Product key={product.id} product={product} />
          )
        })}
      </div>
    </section>
  )
}