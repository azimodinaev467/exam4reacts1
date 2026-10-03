import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconPin,
  IconClock,
  IconWhatsapp,
  IconHeart,
  IconCompare,
  IconSearch,
  IconChevronDown,
  SiteFooter,
} from "./Home";
import logo from "../assets/logo1 1.png";
import corollaWhite from "../assets/994ce914876e08f24e3c569c401dca735d40b9f8.png";
import bgCity from "../assets/a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg";
import rav4White from "../assets/b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png";
import carRed from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import carWhite from "../assets/b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png";
import carGray from "../assets/904d48ac70e03943e81c9aa843837cb3f8e5e205.png";
import carBlack from "../assets/18ae42d60e69104056641504e2747ac9c774aedb.png";
import firstCarOfferImage from "../assets/8c44b80f1dab017af59664d4b25da31360367110.jpg";
import familyOfferImage from "../assets/a3eb7df59d82f07d50683e878628acf237b9acca.jpg";
import creditOfferImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";

const toyotaModels = [
  {
    name: "Новая Corolla",
    inStock: "20 авто",
    oldPrice: "1 280 000 ₽",
    price: "от 980 000 ₽",
    benefit: "300 000 ₽",
    img: carGray,
    discounts: [
      { percent: "-20%", label: "Покупка в трейд ин" },
      { percent: "-10%", label: "Кредит" },
      { percent: "-10%", label: "Распродажа" },
    ],
  },
  {
    name: "Новая Corolla",
    inStock: "20 авто",
    oldPrice: "1 280 000 ₽",
    price: "от 980 000 ₽",
    benefit: "300 000 ₽",
    img: carGray,
    discounts: [
      { percent: "-20%", label: "Покупка в трейд ин" },
      { percent: "-10%", label: "Кредит" },
      { percent: "-10%", label: "Распродажа" },
    ],
  },
  {
    name: "Новая Corolla",
    inStock: "20 авто",
    oldPrice: "1 280 000 ₽",
    price: "от 980 000 ₽",
    benefit: "300 000 ₽",
    img: carGray,
    discounts: [
      { percent: "-20%", label: "Покупка в трейд ин" },
      { percent: "-10%", label: "Кредит" },
      { percent: "-10%", label: "Распродажа" },
    ],
  },
];

const archiveModels = [
  { name: "Toyota Prius", oldPrice: "1 250 000 ₽", price: "от 980 000 ₽", img: carWhite },
  { name: "Toyota Prius", oldPrice: "1 250 000 ₽", price: "от 980 000 ₽", img: carGray },
  { name: "Toyota Prius", oldPrice: "1 250 000 ₽", price: "от 980 000 ₽", img: carRed },
  { name: "Toyota Prius", oldPrice: "1 250 000 ₽", price: "от 980 000 ₽", img: carBlack },
];

function RedCheckbox() {
  return (
    <span
      aria-hidden="true"
      style={{
        width: "13px",
        height: "13px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        borderRadius: "2px",
        background: "#d30000",
        color: "#fff",
        fontSize: "10px",
        lineHeight: 1,
      }}>
      ✓
    </span>
  );
}

function IconGift({ size = 15, color = "#fff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2zM12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 2.4-3.2C10.5 5.8 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0-2.4-3.2C13.5 5.8 12 7 12 7Z" />
    </svg>
  );
}

export default function Tayota() {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "6px 40px",
          background: "#f5f5f5",
          borderBottom: "1px solid #e0e0e0",
          fontSize: "12px",
          color: "#666",
        }}
        className="hidden md:flex">
        <div style={{ display: "flex", gap: "24px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "5px", margin: 0 }}>
            <IconPin /> Россия, Москва, 38КМ МКАД, 65км
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "5px", margin: 0 }}>
            <IconClock /> Время работы: с 08:00 до 21:00
          </p>
        </div>

        <p
          style={{
            color: "#25d366",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "5px",
            margin: 0,
          }}>
          <IconWhatsapp /> Whatsapp
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 40px",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          flexWrap: "wrap",
          gap: "12px",
        }}
        className="site-header-main">
        <div
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
          className="site-header-brand">
          <Link to="/" aria-label="На главную">
            <img src={logo} alt="ABC Auto" style={{ height: "48px" }} />
          </Link>

          <div
            style={{
              borderLeft: "1px solid #ddd",
              paddingLeft: "16px",
              fontSize: "12px",
              lineHeight: 1.4,
            }}>
            <span
              style={{
                background: "#ffe5e5",
                color: "#e30613",
                fontWeight: 700,
                padding: "1px 5px",
                borderRadius: "4px",
                fontSize: "11px",
              }}>
              10 лет
            </span>
            <span style={{ fontWeight: 700 }}>
              {" "}
              превосходим
              <br />
              ваши ожидания
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "13px",
            fontWeight: 600,
          }}
          className="hidden lg:flex site-header-nav">
          <p style={{ color: "#e30613", cursor: "pointer", margin: 0 }}>Подбор авто</p>
          <Link
            to="/about-company"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            О компании
          </Link>
          <Link
            to="/tech-center"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            Техцентр
          </Link>
          <Link
            to="/insurance"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            Страхование
          </Link>
          <Link
            to="/trade-in"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            Госпрограмма Trade-in
          </Link>
          <Link
            to="/medical-workers"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            Работникам медицины
          </Link>
          <Link
            to="/reviews"
            style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
            Отзывы
          </Link>
          <p style={{ cursor: "pointer", margin: 0 }}>Контакты</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 40px",
          background: "#fff",
          borderBottom: "1px solid #eee",
          fontSize: "13px",
          fontWeight: 700,
        }}
        className="hidden md:flex">
        <Link
          to="/catalog"
          style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
          КАТАЛОГ АВТО <IconChevronDown />
        </Link>
        <Link
          to="/used-cars"
          style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
          АВТО С ПРОБЕГОМ <IconChevronDown />
        </Link>
        <Link
          to="/rasochka"
          style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
          КРЕДИТ И РАССРОЧКА <IconChevronDown />
        </Link>
        <p style={{ cursor: "pointer", margin: 0 }}>
          СПЕЦПРЕДЛОЖЕНИЯ <IconChevronDown />
        </p>
        <Link
          to="/taxi-credit"
          style={{ cursor: "pointer", margin: 0, color: "inherit", textDecoration: "none" }}>
          ТАКСИ В КРЕДИТ
        </Link>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <div style={{ position: "relative", cursor: "pointer" }}>
            <IconHeart />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                background: "#e30613",
                color: "#fff",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}>
              10
            </span>
          </div>

          <div style={{ position: "relative", cursor: "pointer" }}>
            <IconCompare />
            <span
              style={{
                position: "absolute",
                top: "-6px",
                right: "-8px",
                background: "#e30613",
                color: "#fff",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
              }}>
              12
            </span>
          </div>

          <div style={{ cursor: "pointer" }}>
            <IconSearch />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          maxWidth: "1536px",
          boxSizing: "border-box",
          margin: "0 auto",
          padding: "8px 40px 12px",
        }}
        className="hidden md:flex site-header-contact">
        <div>
          <p style={{ fontWeight: 800, fontSize: "20px", margin: 0 }}>+7 (800) 551-94-31</p>
          <p style={{ color: "#999", fontSize: "13px", margin: 0 }}>+7 (495) 292-18-67</p>
        </div>
        <button
          style={{
            background: "#e30613",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            fontWeight: 700,
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
            letterSpacing: "0.5px",
          }}>
          ОБРАТНЫЙ ЗВОНОК
        </button>
      </div>

      <div style={{ maxWidth: "1500px", margin: "16px auto 40px", padding: "0 20px" }}>
        <div
          style={{
            position: "relative",
            background: "#f3f4f7",
            borderRadius: "28px",
            overflow: "hidden",
            padding: "28px 40px 24px",
            minHeight: "440px",
            boxShadow: "0 6px 24px rgba(0,0,0,0.04)",
          }}>
          <img
            src={bgCity}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "65%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.16,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Large Watermark "Toyota" behind cars */}
          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "10px",
              fontSize: "160px",
              fontWeight: 900,
              color: "rgba(255, 255, 255, 0.9)",
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "1px",
              zIndex: 1,
              lineHeight: 1,
            }}>
            Toyota
          </div>

          {/* Breadcrumbs inside the banner card */}
          <div style={{ position: "relative", zIndex: 2, marginBottom: "20px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "#888",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                margin: 0,
              }}>
              <Link to="/" style={{ color: "#888", textDecoration: "none" }}>
                Главная
              </Link>
              <span>&gt;</span>
              <Link to="/catalog" style={{ color: "#888", textDecoration: "none" }}>
                Каталог авто
              </Link>
              <span>&gt;</span>
              <span style={{ color: "#555", fontWeight: 600 }}>Toyota</span>
            </p>
          </div>

          {/* Left Hero Content */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginBottom: "14px",
                flexWrap: "wrap",
              }}>
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: 900,
                  color: "#111",
                  margin: 0,
                  lineHeight: 1.15,
                }}>
                Грандиозная <br />
                распродажа Toyota
              </h1>

              <div
                style={{
                  background: "#c40000",
                  color: "#fff",
                  borderRadius: "28px",
                  padding: "8px 22px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(196,0,0,0.3)",
                  flexShrink: 0,
                }}>
                <span style={{ fontSize: "11px", fontWeight: 600 }}>Скидки до</span>
                <span style={{ fontSize: "22px", fontWeight: 900, lineHeight: 1.1 }}>
                  350 000 ₽
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: "13px",
                color: "#333",
                maxWidth: "320px",
                margin: "0 0 32px 0",
                lineHeight: 1.4,
                fontWeight: 500,
              }}>
              Получите специальную цену + подарок на выбор при покупке авто
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "40px",
              }}>
              {/* 1. Thumbs-up */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#d30000">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#222", lineHeight: 1.25 }}>
                  Гарантия <br /> лучшей цены
                </div>
              </div>

              {/* 2. Percent */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                  <span style={{ color: "#d30000", fontSize: "16px", fontWeight: 900 }}>%</span>
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#222", lineHeight: 1.25 }}>
                  Выгодный <br /> кредит
                </div>
              </div>

              {/* 3. Trade-in */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d30000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="23 4 23 10 17 10" />
                    <polyline points="1 20 1 14 7 14" />
                    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                  </svg>
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#222", lineHeight: 1.25 }}>
                  Зачёт вашего авто <br /> в trade-in
                </div>
              </div>

              {/* 4. Gift */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d30000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#222", lineHeight: 1.25 }}>
                  Подарок на выбор <br /> при покупке авто
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              right: "0px",
              bottom: "105px",
              width: "580px",
              height: "260px",
              pointerEvents: "none",
              zIndex: 3,
            }}>
            {/* Corolla White behind */}
            <img
              src={corollaWhite}
              alt="Toyota Corolla"
              style={{
                position: "absolute",
                left: "15px",
                bottom: "20px",
                width: "360px",
                height: "auto",
                objectFit: "contain",
                zIndex: 3,
                filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.18))",
              }}
            />
            {/* RAV4 White in front */}
            <img
              src={rav4White}
              alt="Toyota RAV4"
              style={{
                position: "absolute",
                right: "15px",
                bottom: "0px",
                width: "370px",
                height: "auto",
                objectFit: "contain",
                zIndex: 4,
                filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.22))",
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 5,
              background: "#fff",
              borderRadius: "20px",
              padding: "20px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              gap: "24px",
              flexWrap: "wrap",
            }}>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "16px",
                  color: "#111",
                  lineHeight: 1.25,
                }}>
                Получите <br /> специальную цену
              </div>
              <div style={{ marginTop: "6px" }}>
                <span
                  style={{
                    background: "#c40000",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "12px",
                  }}>
                  Только до 10.10.21
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                flex: 1,
                maxWidth: "680px",
              }}>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  style={{
                    flex: 1,
                    minWidth: "150px",
                    background: "#f0f2f5",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px 18px",
                    fontSize: "13px",
                    outline: "none",
                    color: "#333",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  style={{
                    flex: 1,
                    minWidth: "150px",
                    background: "#f0f2f5",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px 18px",
                    fontSize: "13px",
                    outline: "none",
                    color: "#333",
                  }}
                />
                <button
                  style={{
                    background: "#c40000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "13px 28px",
                    fontWeight: 800,
                    fontSize: "12px",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                    whiteSpace: "nowrap",
                  }}>
                  ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
                </button>
              </div>
              <div style={{ fontSize: "10px", color: "#888" }}>
                Нажимая кнопку "Получить скидку" Вы даете согласие на обработку своих{" "}
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                  персональных данных
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 900,
            textAlign: "center",
            color: "#111",
            marginBottom: "30px",
          }}>
          Модельный ряд и цены автомобилей Toyota
        </h2>

        {/* Model rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {toyotaModels.map((car, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "20px",
                border: "1px solid #ebebeb",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                flexWrap: "wrap",
              }}>
              {/* Top-left icons: Heart and Compare */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#aaa",
                  fontSize: "12px",
                  cursor: "pointer",
                }}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span style={{ fontWeight: 600 }}>0o</span>
              </div>

              {/* Col 1: Car Image & Color switcher dots */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "210px",
                  paddingTop: "12px",
                }}>
                <img
                  src={car.img}
                  alt={car.name}
                  style={{ width: "205px", height: "105px", objectFit: "contain" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px",
                  }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#fff",
                      border: "1px solid #ccc",
                      boxShadow: "0 0 0 2px #d30000",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#b0b0b0",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#d30000",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18458b",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#222",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#2e7d32",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* Col 2: Title, stock & checklist with red checkboxes */}
              <div style={{ minWidth: "175px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    margin: "0 0 4px 0",
                    color: "#111",
                  }}>
                  {car.name}
                </h3>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    marginBottom: "12px",
                  }}>
                  В наличии:{" "}
                  <span style={{ color: "#d30000", fontWeight: 700 }}>{car.inStock}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {car.discounts.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "11px",
                      }}>
                      <span style={{ color: "#d30000", fontWeight: 700, width: "30px" }}>
                        {item.percent}
                      </span>
                      <RedCheckbox />
                      <span style={{ color: "#333", fontWeight: 500 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 3: Gifts with real icons in round badges */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "165px",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#282c35",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>Страхование</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#d30000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>КАСКО</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#5c6270",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>Комплект резины</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>
              </div>

              {/* Col 4: Price & Slanted Segmented Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "12px",
                  minWidth: "260px",
                }}>
                <div style={{ textAlign: "right", width: "100%" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#d30000",
                      fontWeight: 700,
                      marginBottom: "2px",
                    }}>
                    Выгода до {car.benefit}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}>
                    <span style={{ fontSize: "22px", fontWeight: 900, color: "#111" }}>
                      {car.price}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        textDecoration: "line-through",
                      }}>
                      {car.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Styled segmented buttons matching screenshot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    height: "44px",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}>
                  <button
                    style={{
                      background: "#d30000",
                      color: "#fff",
                      border: "none",
                      padding: "0 18px 0 16px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)",
                      fontSize: "11px",
                      fontWeight: 700,
                      lineHeight: "1.2",
                    }}>
                    <span>Купить</span>
                    <span style={{ fontSize: "10px", fontWeight: 500 }}>со скидкой</span>
                  </button>

                  <button
                    style={{
                      background: "#22242a",
                      color: "#fff",
                      border: "none",
                      padding: "0 18px 0 18px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "-8px",
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                      fontSize: "11px",
                      fontWeight: 700,
                      lineHeight: "1.2",
                    }}>
                    <span>Рассчитать</span>
                    <span style={{ fontSize: "10px", fontWeight: 500 }}>кредит</span>
                  </button>

                  <Link to="/modeltayota" style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        background: "#666c77",
                        color: "#fff",
                        border: "none",
                        padding: "0 22px 0 18px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "-8px",
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%)",
                        fontSize: "11px",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        height: "44px",
                      }}>
                      <span>Подробнее</span>
                      <span style={{ fontSize: "10px", fontWeight: 500 }}>о модели</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trade-In Banner */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <div
          style={{
            background: "linear-gradient(90deg, #1f232b 0%, #2f3542 100%)",
            borderRadius: "20px",
            padding: "36px 40px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}>
          <div>
            <h3 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 8px 0" }}>
              ВЫГОДНЫЙ TRADE-IN <span style={{ color: "#d30000" }}>ОТ 1,9%</span>
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#bbb" }}>
              Обменяйте свой автомобиль на новый с максимальной выгодой
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <input
              type="tel"
              placeholder="Ваш телефон"
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                fontSize: "13px",
                width: "220px",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "#d30000",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "12px",
                cursor: "pointer",
              }}>
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
          </div>
        </div>
      </div>

      {/* Additional Models Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {toyotaModels.map((car, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "20px",
                border: "1px solid #ebebeb",
                padding: "24px 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
                flexWrap: "wrap",
              }}>
              {/* Top-left icons: Heart and Compare */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "#aaa",
                  fontSize: "12px",
                  cursor: "pointer",
                }}>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span style={{ fontWeight: 600 }}>0o</span>
              </div>

              {/* Col 1: Car Image & Color switcher dots */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "210px",
                  paddingTop: "12px",
                }}>
                <img
                  src={car.img}
                  alt={car.name}
                  style={{ width: "205px", height: "105px", objectFit: "contain" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "8px",
                  }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#fff",
                      border: "1px solid #ccc",
                      boxShadow: "0 0 0 2px #d30000",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#b0b0b0",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#d30000",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18458b",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#222",
                      cursor: "pointer",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#2e7d32",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* Col 2: Title, stock & checklist with red checkboxes */}
              <div style={{ minWidth: "175px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    margin: "0 0 4px 0",
                    color: "#111",
                  }}>
                  {car.name}
                </h3>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    marginBottom: "12px",
                  }}>
                  В наличии:{" "}
                  <span style={{ color: "#d30000", fontWeight: 700 }}>{car.inStock}</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {car.discounts.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "11px",
                      }}>
                      <span style={{ color: "#d30000", fontWeight: 700, width: "30px" }}>
                        {item.percent}
                      </span>
                      <RedCheckbox />
                      <span style={{ color: "#333", fontWeight: 500 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Col 3: Gifts with real icons in round badges */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "165px",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#282c35",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>Страхование</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#d30000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>КАСКО</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#5c6270",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <IconGift size={15} color="#fff" />
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: "1.25" }}>
                    <div style={{ color: "#222", fontWeight: 600 }}>Комплект резины</div>
                    <div style={{ color: "#d30000", fontWeight: 700 }}>в подарок</div>
                  </div>
                </div>
              </div>

              {/* Col 4: Price & Slanted Segmented Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "12px",
                  minWidth: "260px",
                }}>
                <div style={{ textAlign: "right", width: "100%" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#d30000",
                      fontWeight: 700,
                      marginBottom: "2px",
                    }}>
                    Выгода до {car.benefit}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "flex-end",
                      gap: "10px",
                    }}>
                    <span style={{ fontSize: "22px", fontWeight: 900, color: "#111" }}>
                      {car.price}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        textDecoration: "line-through",
                      }}>
                      {car.oldPrice}
                    </span>
                  </div>
                </div>

                {/* Styled segmented buttons matching screenshot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "stretch",
                    height: "44px",
                    borderRadius: "6px",
                    overflow: "hidden",
                  }}>
                  <button
                    style={{
                      background: "#d30000",
                      color: "#fff",
                      border: "none",
                      padding: "0 18px 0 16px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)",
                      fontSize: "11px",
                      fontWeight: 700,
                      lineHeight: "1.2",
                    }}>
                    <span>Купить</span>
                    <span style={{ fontSize: "10px", fontWeight: 500 }}>со скидкой</span>
                  </button>

                  <button
                    style={{
                      background: "#22242a",
                      color: "#fff",
                      border: "none",
                      padding: "0 18px 0 18px",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "-8px",
                      clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                      fontSize: "11px",
                      fontWeight: 700,
                      lineHeight: "1.2",
                    }}>
                    <span>Рассчитать</span>
                    <span style={{ fontSize: "10px", fontWeight: 500 }}>кредит</span>
                  </button>

                  <Link to="/modeltayota" style={{ textDecoration: "none" }}>
                    <button
                      style={{
                        background: "#666c77",
                        color: "#fff",
                        border: "none",
                        padding: "0 22px 0 18px",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "-8px",
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%)",
                        fontSize: "11px",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        height: "44px",
                      }}>
                      <span>Подробнее</span>
                      <span style={{ fontSize: "10px", fontWeight: 500 }}>о модели</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Archive Models Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 24px", color: "#111" }}>
          Архивные модели
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}>
          {archiveModels.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "14px",
                }}
              />
              <div style={{ fontWeight: 800, fontSize: "16px", marginBottom: "6px" }}>
                {item.name}
              </div>
              <div style={{ color: "#d30000", fontWeight: 800, fontSize: "16px" }}>
                {item.price}
              </div>
              <div
                style={{
                  color: "#aaa",
                  fontSize: "12px",
                  textDecoration: "line-through",
                  marginBottom: "16px",
                }}>
                {item.oldPrice}
              </div>
              <button
                style={{
                  width: "100%",
                  background: "#d30000",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "12px",
                  cursor: "pointer",
                  marginTop: "auto",
                }}>
                Забронировать
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Special Offers Section */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 24px", color: "#111" }}>
          Спецпредложения
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}>
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "180px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}>
            <img
              src={firstCarOfferImage}
              alt="Первый автомобиль"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "180px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}>
            <img
              src={familyOfferImage}
              alt="Семейный автомобиль"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "180px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}>
            <img
              src={creditOfferImage}
              alt="Экспресс кредит"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Госпрограмма льготного автокредитования */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <div
          style={{
            background: "#f7f8fa",
            borderRadius: "20px",
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            overflow: "hidden",
            position: "relative",
          }}>
          <div style={{ flex: "1 1 420px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 900,
                margin: "0 0 6px",
                color: "#111",
                lineHeight: "1.2",
              }}>
              Госпрограмма льготного <span style={{ color: "#d30000" }}>1,9%</span>
              <span style={{ fontSize: "13px", color: "#888", fontWeight: 500, marginLeft: "8px" }}>
                ставка по программе
              </span>
            </h2>
            <h2 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 16px", color: "#111" }}>
              автокредитования
            </h2>

            <div
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <div
                style={{
                  background: "#d30000",
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "24px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                }}>
                -10%
              </div>
              <div
                style={{ fontSize: "11px", color: "#555", maxWidth: "280px", lineHeight: "1.4" }}>
                от стоимости авто
                <br />
                <span style={{ color: "#888" }}>
                  скидка по программам «Семейный автомобиль», «Первый автомобиль», «Автомобиль в
                  трейд-ин» государственного медицинского полисного «Автомобиль в трейд-ин»
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
              <input
                type="text"
                placeholder="Ваше имя"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "13px",
                  outline: "none",
                  flex: "1 1 140px",
                  minWidth: "120px",
                }}
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "13px",
                  outline: "none",
                  flex: "1 1 140px",
                  minWidth: "120px",
                }}
              />
              <button
                style={{
                  background: "#d30000",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  fontWeight: 800,
                  fontSize: "11px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.5px",
                }}>
                ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
              </button>
            </div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>
              Нажимая кнопку «Получить предложение» вы соглашаетесь на обработку{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                персональных данных
              </span>
            </div>
          </div>
          <div style={{ flex: "0 0 auto", position: "relative" }}>
            <img
              src={familyOfferImage}
              alt="Семья"
              style={{ width: "280px", height: "220px", objectFit: "cover", borderRadius: "16px" }}
            />
          </div>
        </div>
      </div>

      {/* Преимущества Toyota */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 28px", color: "#111" }}>
          Преимущества Toyota
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}>
          {[
            {
              num: "01",
              title: "Автомобиль для любых задач",
              img: corollaWhite,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
            {
              num: "02",
              title: "Единый корпоративный стиль",
              img: bgCity,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
            {
              num: "03",
              title: "Современные технологические решения",
              img: rav4White,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
            {
              num: "04",
              title: "Надёжные запасти для длительных поездок",
              img: carRed,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
            {
              num: "05",
              title: "Заслуживает доверия",
              img: carGray,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
            {
              num: "06",
              title: "Качество, проверенное временем",
              img: carBlack,
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ornate mauris oleo at nulla lacus aliquam se amet.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                border: "1px solid #f0f0f0",
              }}>
              <div
                style={{
                  position: "relative",
                  height: "160px",
                  background: "#eee",
                  overflow: "hidden",
                }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}>
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "#d30000",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    {item.num}
                  </div>
                  <div
                    style={{ fontSize: "13px", fontWeight: 700, color: "#111", lineHeight: "1.2" }}>
                    {item.title}
                  </div>
                </div>
                <p style={{ fontSize: "11px", color: "#777", margin: 0, lineHeight: "1.5" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Нам доверяют */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}>
          <h2 style={{ fontSize: "26px", fontWeight: 900, margin: 0, color: "#111" }}>
            Нам доверяют
          </h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "#d30000",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "20px",
          }}>
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
              <div
                style={{ fontWeight: 700, fontSize: "13px", marginBottom: "4px", color: "#111" }}>
                Сайт отзовик
              </div>
              <div style={{ fontSize: "11px", color: "#888", marginBottom: "12px" }}>
                Site ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mauris.
              </div>
              <div
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: "11px", color: "#555" }}>
                  Рекомендуют 90%
                  <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ color: "#f5a623", fontSize: "12px" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    background: "#4caf50",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "16px",
                    padding: "6px 10px",
                    borderRadius: "8px",
                  }}>
                  4.5
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { name: "Яндекс Карты", logo: "Я", bg: "#fc0", score: "4.5", color: "#fc0" },
            { name: "Google Maps", logo: "G", bg: "#4285f4", score: "4.1", color: "#4285f4" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "16px 20px",
                border: "1px solid #f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "18px",
                  }}>
                  {item.logo}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#111" }}>
                    {item.name}
                  </div>
                  <div style={{ display: "flex", gap: "2px", marginTop: "4px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ color: "#f5a623", fontSize: "13px" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: "11px", color: "#888" }}>Рекомендуют 90%</div>
                </div>
              </div>
              <div
                style={{
                  background: "#4caf50",
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "22px",
                  padding: "8px 14px",
                  borderRadius: "10px",
                }}>
                {item.score}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Отзывы */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 24px", color: "#111" }}>
          Отзывы
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {[
            { name: "Сергей Васильев", img: firstCarOfferImage },
            { name: "Сергей Васильев", img: familyOfferImage },
            { name: "Сергей Васильев", img: creditOfferImage },
          ].map((review, i) => (
            <div
              key={i}
              style={{
                background: "#1c1f26",
                borderRadius: "16px",
                overflow: "hidden",
                color: "#fff",
              }}>
              <div style={{ position: "relative", height: "160px" }}>
                <img
                  src={review.img}
                  alt={review.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(211,0,0,0.85)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>
                  {review.name}
                </div>
                <div style={{ display: "flex", gap: "2px", marginBottom: "10px" }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#f5a623", fontSize: "12px" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#bbb",
                    margin: "0 0 14px",
                    lineHeight: "1.5",
                  }}>
                  Я покупал автомобиль АЛТЕРА. Менеджер помог оформить, рассказал всё про гарантию
                  130 % только, место из них было большого чём из них, и то из них было совмещено
                  автомобиль в чести АЛТЕРА.
                </p>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "transparent",
                    border: "1px solid #555",
                    color: "#ccc",
                    borderRadius: "6px",
                    padding: "7px 14px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}>
                  Подробнее
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Блог */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 50px", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 900, margin: 0, color: "#111" }}>Блог</h2>
          <span
            style={{
              background: "#d30000",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}>
            Все статьи
          </span>
          <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
            <button
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1px solid #ddd",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "#d30000",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {[
            { img: corollaWhite, date: "26.09.2024" },
            { img: rav4White, date: "26.09.2024" },
            { img: carRed, date: "26.09.2024" },
            { img: carGray, date: "26.09.2024" },
          ].map((post, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                border: "1px solid #f0f0f0",
                cursor: "pointer",
              }}>
              <div style={{ height: "130px", overflow: "hidden", background: "#eee" }}>
                <img
                  src={post.img}
                  alt="blog"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "6px" }}>
                  {post.date}
                </div>
                <div
                  style={{ fontSize: "12px", fontWeight: 700, color: "#111", lineHeight: "1.4" }}>
                  Test Skoda Karoq Scout — городской кроссовер или настоящий внедорожник?
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Текстовый блок */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 60px", padding: "0 20px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 900, margin: "0 0 16px", color: "#111" }}>
          Заголовок
        </h2>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7", marginBottom: "24px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar auctor
          felis, ut aliquet dui. Sed ut varius nisi. Curabitur ac ornate mauris. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas malesuada
          tincidunt ante. Sed suscipit lorem et suscipit ornare. Phasellus ut mollis felis.
        </p>
        <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 12px", color: "#111" }}>
          Подзаголовок
        </h3>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7", marginBottom: "24px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Vestibulum. Maecenas
          malesuada tincidunt augue Curae; Sed eu vulputate erat, 13 faucibus fermentum arcu.
          Integer cursus, nibh at posuere ornare, felis erat ultricies diam, et gravida ante turpis.
        </p>
        <h3 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 12px", color: "#111" }}>
          Подзаголовок
        </h3>
        <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc Vestibulum. Maecenas
          malesuada tincidunt augue Curae; Sed eu vulputate erat, 13 faucibus fermentum arcu.
          Integer cursus, nibh at posuere ornare, felis erat ultricies diam, et gravida ante turpis
          liters.
        </p>
      </div>

      <SiteFooter showMap={false} />
    </div>
  );
}
