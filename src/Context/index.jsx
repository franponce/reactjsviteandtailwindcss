import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Product Detail - Increment quantity
  const [count, setCount] = useState(0);


      // Product Detail - Open/Close

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

   // Product Detail - Show product 
   const [productToShow, setProductToShow] = useState({});

    // Shopping Cart - Add products to cart 
  const [cartProducts, setcartProducts] = useState([]);

  // Checkout Side Menu - Open/Close

  const [isCheckoutSideMenuOpen, setCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false);


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setcartProducts,
        isCheckoutSideMenuOpen,
        setCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider;
