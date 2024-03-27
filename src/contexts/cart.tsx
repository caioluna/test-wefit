import { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

type Cart = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextProps = {
  cart: Cart[];
  addItemToCart: (
    id: number,
    img: string,
    price: number,
    title: string,
    qnty: number
  ) => void;
  resetCart: () => void;
  decreaseCartItem: (id: number) => void;
  increaseCartItem: (id: number) => void;
  deleteItemFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export function CartContextProvider({ children }: Props) {
  const [cart, setCart] = useState<Cart[]>([]);

  const addItemToCart = (
    id: number,
    img: string,
    price: number,
    title: string,
    qnty: number
  ) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cart) => cart.id === id);

      if (itemIndex !== -1) {
        return prevCart.map((cart, index) =>
          itemIndex === index ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
      } else {
        return [
          ...prevCart,
          { id: id, quantity: qnty, image: img, price: price, title: title },
        ];
      }
    });
  };

  const resetCart = () => {
    setCart([]);
  };

  const deleteItemFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseCartItem = (id: number) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cart) => cart.id === id);

      if (itemIndex !== -1) {
        return prevCart.map((cart, index) =>
          itemIndex === index ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
      } else {
        return prevCart;
      }
    });
  };

  const decreaseCartItem = (id: number) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null) as Cart[];

    setCart(updatedCart);
  };

  const value = {
    cart,
    addItemToCart,
    resetCart,
    increaseCartItem,
    decreaseCartItem,
    deleteItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
