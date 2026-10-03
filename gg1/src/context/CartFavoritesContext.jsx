import React, { createContext, useContext, useState } from "react";

const CartFavoritesContext = createContext(null);

function loadFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

export function CartFavoritesProvider({ children }) {
  const [cart, setCart] = useState(() => loadFromStorage("cart"));
  const [favorites, setFavorites] = useState(() => loadFromStorage("favorites"));

  // --- Корзина ---
  const addToCart = (car) => {
    setCart((current) => {
      const exists = current.find((item) => item.id === car.id);
      const updated = exists
        ? current.map((item) =>
            item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...current, { ...car, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const changeQuantity = (id, quantity) => {
    setCart((current) => {
      const updated = current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // --- Избранное ---
  const toggleFavorite = (car) => {
    setFavorites((current) => {
      const exists = current.find((item) => item.id === car.id);
      const updated = exists
        ? current.filter((item) => item.id !== car.id)
        : [...current, car];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (id) => favorites.some((item) => item.id === id);

  return (
    <CartFavoritesContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        changeQuantity,
        favorites,
        toggleFavorite,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </CartFavoritesContext.Provider>
  );
}

export function useCartFavorites() {
  return useContext(CartFavoritesContext);
}
