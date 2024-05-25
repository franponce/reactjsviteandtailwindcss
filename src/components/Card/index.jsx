import { useContext } from "react";
import PropTypes from "prop-types";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetails) => {
    context.openProductDetail();
    context.setProductToShow(productDetails);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setcartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeproductDetails();
  };

  const renderIcon = () => {
    const isInCart = context.cartProducts.some(product => product.id === data.id);

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 font-bold">
          <CheckIcon className="h-6 w-6 text-black"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 font-bold"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/80 rounded-md text-black text-xs font-bold m-2 px-2 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title}
        />
        {renderIcon()}
      </figure>

      <p className="flex justify-between">
        <span className="text-base font-normal">{data.title}</span>
        <span className="text-base font-normal">${data.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
