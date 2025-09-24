import getsingleproduct from '@/apis/singleproduct/singleproduct';
import AddBtnCart from '@/app/-components/AddBtnCart/AddBtnCart';
import { Button } from '@/components/ui/button';

type Props = {
  params: { id: string };
};

const ProductDetailes = async ({ params }: Props) => {
 
  const awaitedParams  = await params;
  const id = awaitedParams.id;

  const data = await getsingleproduct(id);

  if (!data) return <p className="text-center my-10">product is not present</p>;

  return (
    <div className="w-full px-5 md:w-[80%] md:px-0 mx-auto my-10 flex items-center flex-col md:flex-row">
      <div className="w-full md:w-1/3">
        <img src={data.imageCover} className="w-full" alt="product" />
      </div>
      <div className="w-full md:w-2/3 ps-10">
        <h2 className="text-2xl text-green-400 font-bold">{data.title}</h2>
        <p className="my-5">{data.description}</p>
        <p>{data.category.name}</p>
        <div className="w-full flex justify-between items-center mt-5">
          <p>{data.price}EGP</p>
          <i className="fa-solid fa-star text-yellow-500 ml-auto"></i>
          <p>{data.ratingsAverage}</p>
        </div>
        <div className="flex my-3">
          <i className="fa-solid fa-heart ml-auto"></i>
        </div>
        <AddBtnCart id={data.id}/>
      </div>
    </div>
  );
};

export default ProductDetailes;
