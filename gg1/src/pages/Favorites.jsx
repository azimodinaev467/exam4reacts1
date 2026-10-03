import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CarCard, SiteFooter } from "./Home";
import logo from "../assets/logo1 1.png";

const IconHeart = () => (
  <svg width="22" height="22" fill="#d30000" stroke="#d30000" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const IconCart = () => (
  <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l2.4 12.2a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 7H6"
    />
    <circle cx="10" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>
);

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      return [];
    }
  });

  const removeFavorite = (id) => {
    setFavorites((current) => {
      const updated = current.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222", background: "#fff" }}>
      <style>{`
        .favorites-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
        }

        .favorites-header {
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .favorites-header-inner {
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

        .favorites-logo {
          width: 115px;
          display: block;
        }

        .favorites-nav {
          display: flex;
          align-items: center;
          gap: 25px;
          font-size: 12px;
          font-weight: 600;
        }

        .favorites-nav a {
          color: #222;
          text-decoration: none;
        }

        .favorites-actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .favorites-action {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
        }

        .favorites-count {
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

        .favorites-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 30px 20px 60px;
          box-sizing: border-box;
        }

        .favorites-breadcrumbs {
          color: #999;
          font-size: 11px;
          margin-bottom: 20px;
        }

        .favorites-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 45px;
        }

        .favorites-title {
          margin: 0;
          font-size: 36px;
          line-height: 1;
          font-weight: 900;
          color: #111;
        }

        .favorites-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .favorites-tab {
          padding: 7px 12px;
          border-radius: 6px;
          background: #f0f0f0;
          color: #777;
          font-size: 10px;
          font-weight: 700;
        }

        .favorites-tab.active {
          background: #d30000;
          color: #fff;
        }

        .favorites-section-title {
          margin: 0 0 18px;
          font-size: 20px;
          font-weight: 800;
          color: #111;
        }

        .favorites-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 900px;
        }

        .favorite-card-wrap {
          min-width: 0;
        }

        .favorite-remove {
          margin-top: 8px;
          width: 100%;
          border: 1px solid #e3e3e3;
          background: #fff;
          color: #d30000;
          border-radius: 7px;
          padding: 9px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .favorites-empty {
          max-width: 650px;
          padding: 70px 20px;
          border: 1px dashed #ddd;
          border-radius: 14px;
          text-align: center;
          color: #777;
        }

        .favorites-empty h2 {
          margin: 0 0 10px;
          color: #222;
          font-size: 22px;
        }

        .favorites-empty p {
          margin: 0 0 20px;
          font-size: 13px;
        }

        .favorites-back {
          display: inline-block;
          padding: 12px 20px;
          border-radius: 7px;
          background: #d30000;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .favorites-nav {
            display: none;
          }

          .favorites-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .favorites-header-inner {
            min-height: 64px;
            padding: 0 15px;
          }

          .favorites-logo {
            width: 100px;
          }

          .favorites-container {
            padding: 24px 15px 40px;
          }

          .favorites-title-row {
            flex-wrap: wrap;
            margin-bottom: 30px;
          }

          .favorites-title {
            font-size: 30px;
          }

          .favorites-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="favorites-header">
        <div className="favorites-header-inner">
          <Link to="/">
            <img src={logo} alt="ABC Auto" className="favorites-logo" />
          </Link>

          <nav className="favorites-nav">
            <Link to="/">КАТАЛОГ АВТО</Link>
            <Link to="/">АВТО С ПРОБЕГОМ</Link>
            <Link to="/">КРЕДИТ И РАССРОЧКА</Link>
            <Link to="/">СПЕЦПРЕДЛОЖЕНИЯ</Link>
          </nav>

          <div className="favorites-actions">
            <Link to="/favorites" className="favorites-action" title="Избранное">
              <IconHeart />
              <span className="favorites-count">{favorites.length}</span>
            </Link>

            <Link to="/cart" className="favorites-action" title="Корзина">
              <IconCart />
              {cartCount > 0 && <span className="favorites-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      <main className="favorites-container">
        <div className="favorites-breadcrumbs">Главная / Избранное</div>

        <div className="favorites-title-row">
          <h1 className="favorites-title">Избранное</h1>
          <div className="favorites-tabs">
            <span className="favorites-tab active">Новые авто {favorites.length}</span>
            <span className="favorites-tab">С пробегом 0</span>
            <span className="favorites-tab">Товары 0</span>
          </div>
        </div>

        <h2 className="favorites-section-title">Новые авто</h2>

        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <h2>В избранном пока ничего нет</h2>
            <p>Добавь автомобиль в избранное, нажав на сердечко в карточке.</p>
            <Link to="/" className="favorites-back">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="favorites-grid">
            {favorites.map((car) => (
              <div className="favorite-card-wrap" key={car.id}>
                <CarCard
                  carImg={car.image}
                  compact={false}
                  car={car}
                  onAddToCart={addToCart}
                  onToggleFavorite={() => removeFavorite(car.id)}
                  isFavorite={true}
                />
                <button
                  type="button"
                  className="favorite-remove"
                  onClick={() => removeFavorite(car.id)}>
                  Удалить из избранного
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
