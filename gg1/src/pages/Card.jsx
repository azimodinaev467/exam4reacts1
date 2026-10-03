import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import logo from "../assets/logo1 1.png";

const IconHeart = () => (
  <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const IconCart = () => (
  <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 12.2a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 7H6" />
    <circle cx="10" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>
);

export default function Cart() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  const [favorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  const changeQuantity = (id, quantity) => {
    setCart((current) => {
      const updated = current
        .map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id) => {
    setCart((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222", background: "#fff" }}>
      <style>{`
        .cart-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
        }

        .cart-header {
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .cart-header-inner {
          max-width: 1180px;
          margin: 0 auto;
          min-height: 76px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          box-sizing: border-box;
        }

        .cart-logo {
          width: 115px;
          display: block;
        }

        .cart-nav {
          display: flex;
          align-items: center;
          gap: 25px;
          font-size: 12px;
          font-weight: 600;
        }

        .cart-nav a {
          color: #222;
          text-decoration: none;
        }

        .cart-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .cart-action {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          min-width: 15px;
          height: 15px;
          padding: 0 3px;
          border-radius: 20px;
          background: #d30000;
          color: #fff;
          font-size: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .cart-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 20px 70px;
          box-sizing: border-box;
        }

        .cart-breadcrumbs {
          color: #999;
          font-size: 11px;
          margin-bottom: 20px;
        }

        .cart-title-row {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 35px;
        }

        .cart-title {
          margin: 0;
          font-size: 36px;
          font-weight: 900;
          color: #111;
        }

        .cart-title-count {
          background: #d30000;
          color: #fff;
          border-radius: 6px;
          padding: 7px 11px;
          font-size: 11px;
          font-weight: 700;
        }

        .cart-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 30px;
          align-items: start;
        }

        .cart-items {
          border-top: 1px solid #eee;
        }

        .cart-item {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          padding: 22px 0;
          border-bottom: 1px solid #eee;
        }

        .cart-item-image-box {
          width: 180px;
          height: 125px;
          border-radius: 10px;
          background: #f7f7f7;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-item-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .cart-item-name {
          font-size: 19px;
          font-weight: 800;
          color: #111;
          margin-bottom: 5px;
        }

        .cart-item-model {
          color: #777;
          font-size: 12px;
          margin-bottom: 13px;
        }

        .cart-item-price {
          font-size: 17px;
          font-weight: 900;
          color: #111;
        }

        .cart-quantity {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
        }

        .cart-quantity button {
          width: 30px;
          height: 30px;
          border: 1px solid #ddd;
          border-radius: 6px;
          background: #fff;
          cursor: pointer;
          font-size: 17px;
        }

        .cart-quantity span {
          min-width: 20px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
        }

        .cart-item-total {
          min-width: 120px;
          text-align: right;
          font-size: 17px;
          font-weight: 900;
        }

        .cart-remove {
          display: block;
          margin-top: 10px;
          margin-left: auto;
          border: none;
          background: transparent;
          color: #d30000;
          font-size: 11px;
          cursor: pointer;
        }

        .cart-summary {
          background: #f7f7f7;
          border-radius: 12px;
          padding: 24px;
          position: sticky;
          top: 20px;
        }

        .cart-summary h2 {
          margin: 0 0 22px;
          font-size: 20px;
          font-weight: 900;
        }

        .cart-summary-row {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 13px;
          font-size: 13px;
          color: #555;
        }

        .cart-summary-total {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding-top: 18px;
          margin-top: 18px;
          border-top: 1px solid #ddd;
          font-size: 20px;
          font-weight: 900;
          color: #111;
        }

        .cart-order-button {
          width: 100%;
          margin-top: 22px;
          border: none;
          border-radius: 7px;
          background: #d30000;
          color: #fff;
          padding: 15px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        .cart-continue {
          display: block;
          margin-top: 12px;
          text-align: center;
          color: #333;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        .cart-empty {
          max-width: 700px;
          padding: 75px 20px;
          border: 1px dashed #ddd;
          border-radius: 14px;
          text-align: center;
        }

        .cart-empty h2 {
          margin: 0 0 10px;
          font-size: 23px;
        }

        .cart-empty p {
          color: #777;
          font-size: 13px;
          margin: 0 0 22px;
        }

        .cart-empty a {
          display: inline-block;
          background: #d30000;
          color: #fff;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .cart-nav {
            display: none;
          }

          .cart-layout {
            grid-template-columns: 1fr;
          }

          .cart-summary {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .cart-header-inner {
            min-height: 64px;
            padding: 0 15px;
          }

          .cart-logo {
            width: 100px;
          }

          .cart-container {
            padding: 24px 15px 40px;
          }

          .cart-title {
            font-size: 30px;
          }

          .cart-item {
            grid-template-columns: 100px minmax(0, 1fr);
            gap: 12px;
          }

          .cart-item-image-box {
            width: 100px;
            height: 85px;
          }

          .cart-item-total {
            grid-column: 2;
            text-align: left;
            min-width: 0;
          }
        }
      `}</style>

      <header className="cart-header">
        <div className="cart-header-inner">
          <Link to="/">
            <img src={logo} alt="ABC Auto" className="cart-logo" />
          </Link>

          <nav className="cart-nav">
            <Link to="/">КАТАЛОГ АВТО</Link>
            <Link to="/">АВТО С ПРОБЕГОМ</Link>
            <Link to="/">КРЕДИТ И РАССРОЧКА</Link>
            <Link to="/">СПЕЦПРЕДЛОЖЕНИЯ</Link>
          </nav>

          <div className="cart-actions">
            <Link to="/favorites" className="cart-action" title="Избранное">
              <IconHeart />
              {favorites.length > 0 && <span className="cart-count">{favorites.length}</span>}
            </Link>

            <Link to="/cart" className="cart-action" title="Корзина">
              <IconCart />
              {count > 0 && <span className="cart-count">{count}</span>}
            </Link>
          </div>
        </div>
      </header>

      <main className="cart-container">
        <div className="cart-breadcrumbs">Главная / Корзина</div>

        <div className="cart-title-row">
          <h1 className="cart-title">Корзина</h1>
          <span className="cart-title-count">{count} авто</span>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <h2>Корзина пуста</h2>
            <p>Добавь автомобиль кнопкой «Купить» или из избранного.</p>
            <Link to="/">Перейти в каталог</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image-box">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  <div>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-model">{item.model}</div>
                    <div className="cart-item-price">
                      {item.price.toLocaleString("ru-RU")} ₽
                    </div>

                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, item.quantity - 1)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => changeQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-total">
                    {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeItem(item.id)}>
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Ваш заказ</h2>

              <div className="cart-summary-row">
                <span>Автомобилей</span>
                <span>{count}</span>
              </div>

              <div className="cart-summary-row">
                <span>Стоимость</span>
                <span>{total.toLocaleString("ru-RU")} ₽</span>
              </div>

              <div className="cart-summary-total">
                <span>Итого</span>
                <span>{total.toLocaleString("ru-RU")} ₽</span>
              </div>

              <button type="button" className="cart-order-button">
                ОФОРМИТЬ ЗАКАЗ
              </button>

              <Link to="/" className="cart-continue">
                Продолжить покупки
              </Link>
            </aside>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
    