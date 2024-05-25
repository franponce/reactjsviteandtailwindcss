import { useContext } from 'react';
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from '../../Context';
import OrderCart from "../../components/OrderCart"

import "./style.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter((product) => product.id !== id);

    context.setcartProducts(filteredProducts);
    context.setCount(context.count - 1);

    if (filteredProducts.length < 1) {
        context.closeCheckoutSideMenu();
    }
};



  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 rounded-lg border border-black bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi orden</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-red-900 cursor-pointer"
                        onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
        </div>
        </div>
        <div className='px-6 overflow-y-scroll'>
      {
        context.cartProducts.map(product => (
          <OrderCart
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          handleDelete={handleDelete}
          />
        ))
      }
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;