import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import logo from "../assets/logo1 1.png";
import bgCity from "../assets/a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg";
import carRed from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import carWhite from "../assets/b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png";
import carGray from "../assets/904d48ac70e03943e81c9aa843837cb3f8e5e205.png";
import carBlack from "../assets/18ae42d60e69104056641504e2747ac9c774aedb.png";
import cardBg from "../assets/237f5cd45c40e6441d810cb4c69e843b62280793.jpg";
import iconEngine from "../assets/Vector (26).png";
import iconFuel from "../assets/Vector (28).png";
import iconSpeed from "../assets/Vector (27).png";
import iconStopwatch from "../assets/stopwatch 1.png";
import iconGift from "../assets/Group 3491.png";
import familyCollectionImage from "../assets/4dddedd9ffe4cf8da3d2137bef7f909f41b65091.jpg";
import travelCollectionImage from "../assets/a1d58796b0db1116c331b7734cad26f4b2227a35.jpg";
import cityCollectionImage from "../assets/a139c33ae8001b69468897acd423648976d9acba.jpg";
import boxingGloveImage from "../assets/b8eda73799dffe9873aa60c4064baa33a3e6f1d4.png";
import firstCarOfferImage from "../assets/8c44b80f1dab017af59664d4b25da31360367110.jpg";
import familyOfferImage from "../assets/a3eb7df59d82f07d50683e878628acf237b9acca.jpg";
import creditOfferImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";
import creditCoverImage from "../assets/e799b25bc8fb345bbe5b25f65fd8a19636fcc97e.png";
import alfaInsuranceLogo from "../assets/cdfdef82061421e98c6e8d7907b86733d68b5538.png";
import vskInsuranceLogo from "../assets/d06f7c941e571e199d26ddaf8d7c7fbfb5239ccb.png";
import sovcombankLogo from "../assets/8a5bf95dbe15f756615a70bab353fad242ba2545.png";
import yandexMapsLogo from "../assets/6a1a7be10f55e03dbd1b6b5d6325dc7cff4c3451.png";
import googleMapsLogo from "../assets/Google_Maps_Logo 2.png";
import companyVideo from "../assets/gemini_generated_video_a2f46340.mp4";

const IconPin = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClock = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const IconWhatsapp = () => (
  <svg width="16" height="16" viewBox="0 0 32 32" fill="#25d366">
    <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.66 4.76 1.8 6.76L2 30l7.44-1.76A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.1 19.38c-.3.84-1.76 1.6-2.42 1.68-.62.08-1.4.12-2.26-.14-.52-.16-1.18-.38-2.04-.74-3.58-1.54-5.92-5.14-6.1-5.38-.18-.24-1.44-1.92-1.44-3.66s.9-2.6 1.24-2.96c.3-.32.66-.4.88-.4l.64.01c.2 0 .48-.08.74.56.3.7 1.02 2.46 1.1 2.64.08.18.14.4.02.64-.12.24-.18.4-.36.6l-.54.64c-.18.18-.36.38-.16.74.2.36.9 1.48 1.92 2.4 1.32 1.18 2.44 1.54 2.78 1.72.34.18.54.14.74-.08.2-.24.86-.98 1.08-1.32.22-.34.44-.28.74-.16.3.12 1.9.9 2.22 1.06.32.16.54.24.62.38.08.14.08.82-.22 1.66z" />
  </svg>
);

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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l2.4 12.2a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 7H6"
    />
    <circle cx="10" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
  </svg>
);

const IconCompare = () => (
  <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" fill="none" stroke="#333" strokeWidth="1.8" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const IconChevronDown = () => (
  <svg
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    style={{ display: "inline", marginLeft: "4px" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconMenu = () => (
  <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e30613" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.78.62 2.63a2 2 0 01-.45 2.11L8 9.73a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0122 16.92z"
    />
  </svg>
);

const allPngs = import.meta.glob("../assets/*.png", { eager: true, import: "default" });
const brandLogos = Object.values(allPngs).filter(
  (src) =>
    !src.includes("87666e71e5b01e92022004a6997be45b2752a057") &&
    !src.includes("b7a328e0f3fcc4e9491e4148ee4d03deaa69a268") &&
    !src.includes("904d48ac70e03943e81c9aa843837cb3f8e5e205") &&
    !src.includes("18ae42d60e69104056641504e2747ac9c774aedb") &&
    !src.includes("logo1") &&
    !src.includes("Vector") &&
    !src.includes("stopwatch") &&
    !src.includes("Group")
);

const carImages = [carBlack, carWhite, carRed, carBlack, carWhite, carRed];

function CarCard({ carImg, compact = false, car, onAddToCart, onToggleFavorite, isFavorite }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "14px",
        padding: compact ? "18px 16px 16px" : "16px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "6px",
        }}>
        <div>
          <div
            style={{
              fontSize: compact ? "18px" : "15px",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#111",
            }}>
            Skoda Octavia
          </div>
          <div
            style={{
              fontSize: compact ? "17px" : "14px",
              fontWeight: 700,
              color: "#222",
              marginTop: "2px",
            }}>
            1.6 MPI MT Active
          </div>
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite(car)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            color: isFavorite ? "#e30613" : "#aaa",
            fontSize: "12px",
            flexShrink: 0,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 0,
          }}>
          <svg
            width={compact ? 20 : 18}
            height={compact ? 20 : 18}
            fill="none"
            stroke={isFavorite ? "#e30613" : "#aaa"}
            fill={isFavorite ? "#e30613" : "none"}
            strokeWidth="1.8"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{isFavorite ? "♥" : "0"}</span>
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <span
          style={{
            background: "#d30000",
            color: "#fff",
            fontSize: "10px",
            fontWeight: 700,
            padding: compact ? "5px 10px" : "3px 8px",
            borderRadius: "20px",
            whiteSpace: "nowrap",
          }}>
          Предложение дня
        </span>
        <div style={{ fontSize: "10px", fontWeight: 700, color: "#d30000", lineHeight: 1.2 }}>
          Выгода
          <br />
          до 300 000 ₽
        </div>
      </div>

      <div
        style={{
          position: "relative",
          minHeight: compact ? "150px" : "120px",
          marginBottom: "12px",
          overflow: "hidden",
        }}>
        <img
          src={cardBg}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.15,
            borderRadius: "8px",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            paddingTop: "4px",
            maxWidth: "52%",
          }}>
          {["Оборудование", "КАСКО", "Комплект резины"].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div
                style={{
                  width: compact ? "22px" : "18px",
                  height: compact ? "22px" : "18px",
                  background: "#2b2b2b",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                <img src={iconGift} alt="" style={{ width: compact ? "10px" : "8px" }} />
              </div>
              <div style={{ fontSize: compact ? "10px" : "9px", color: "#444", lineHeight: 1.2 }}>
                {item}
                <br />
                <span style={{ color: "#d30000", fontWeight: 600 }}>в подарок</span>
              </div>
            </div>
          ))}
        </div>
        <img
          src={carImg}
          alt="Car"
          style={{
            position: "absolute",
            right: compact ? "-8px" : "-4px",
            bottom: "0",
            width: compact ? "65%" : "60%",
            objectFit: "contain",
            zIndex: 3,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "12px",
        }}>
        <div style={{ fontSize: compact ? "20px" : "16px", fontWeight: 900, color: "#111" }}>
          от 1 615 000 ₽
        </div>
        <div style={{ fontSize: "10px", color: "#555", textAlign: "right", lineHeight: 1.3 }}>
          <span style={{ color: "#999" }}>Кредит</span>
          <br />
          от 115 000 ₽/мес.
        </div>
      </div>

      <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
        {[
          { icon: iconEngine, label: "115 л.с." },
          { icon: iconFuel, label: "5.3 л/км" },
          { icon: iconSpeed, label: "189 км/ч" },
          { icon: iconStopwatch, label: "10.3 с." },
        ].map((spec, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "20px",
              padding: "3px 6px",
              display: "flex",
              alignItems: "center",
              gap: "3px",
              fontSize: "9px",
              color: "#555",
              flex: "1 1 0",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}>
            <img
              src={spec.icon}
              alt=""
              style={{ width: "10px", height: "10px", objectFit: "contain" }}
            />
            {spec.label}
          </div>
        ))}
      </div>

      {compact ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button
            style={{
              width: "100%",
              background: "#d30000",
              color: "#fff",
              border: "none",
              padding: "14px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
            }}>
            Резерв онлайн
          </button>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => onAddToCart(car)}
              style={{
                flex: 1,
                background: "#2b2b2b",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
              }}>
              Купить
            </button>
            <button
              style={{
                flex: 1,
                background: "#555",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
              }}>
              Подробнее
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", borderRadius: "6px", overflow: "hidden" }}>
          <button
            style={{
              flex: 1.3,
              background: "#d30000",
              color: "#fff",
              border: "none",
              padding: "10px 4px",
              fontWeight: 700,
              fontSize: "10px",
              cursor: "pointer",
              clipPath: "polygon(0 0,100% 0,88% 100%,0 100%)",
              zIndex: 3,
              position: "relative",
            }}>
            Резерв онлайн
          </button>
          <button
            onClick={() => onAddToCart(car)}
            style={{
              flex: 1,
              background: "#2b2b2b",
              color: "#fff",
              border: "none",
              padding: "10px 4px",
              fontWeight: 700,
              fontSize: "10px",
              cursor: "pointer",
              clipPath: "polygon(12% 0,100% 0,88% 100%,0% 100%)",
              marginLeft: "-4%",
              zIndex: 2,
              position: "relative",
            }}>
            Купить
          </button>
          <button
            style={{
              flex: 1,
              background: "#555",
              color: "#fff",
              border: "none",
              padding: "10px 4px 10px 14%",
              fontWeight: 700,
              fontSize: "10px",
              cursor: "pointer",
              clipPath: "polygon(12% 0,100% 0,100% 100%,0% 100%)",
              marginLeft: "-4%",
              zIndex: 1,
              position: "relative",
            }}>
            Подробнее
          </button>
        </div>
      )}
    </div>
  );
}
function MobileCarSwiper({ onAddToCart, onToggleFavorite, favorites }) {
  return (
    <div style={{ padding: "0 16px 40px" }}>
      <h2
        style={{
          fontSize: "28px",
          fontWeight: 900,
          lineHeight: 1.15,
          margin: "0 0 20px",
          color: "#111",
        }}>
        Автомобили в<br />
        наличии с ПТС
      </h2>
      <Swiper
        className="mobile-car-swiper"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {carImages.map((img, i) => (
          <SwiperSlide key={i}>
            <CarCard
              carImg={img}
              compact={true}
              car={{
                id: `skoda-octavia-${i}`,
                name: "Skoda Octavia",
                model: "1.6 MPI MT Active",
                price: 1615000,
                image: img,
              }}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favorites.some((item) => item.id === `skoda-octavia-${i}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function HomePromoSections() {
  const collectionsSwiper = useRef(null);
  const offersSwiper = useRef(null);
  const collections = [
    { title: "Семейные автомобили", image: familyCollectionImage },
    { title: "Автомобили для путешествий", image: travelCollectionImage },
    { title: "Городские автомобили", image: cityCollectionImage },
  ];
  const offers = [
    { title: "Первый автомобиль", image: firstCarOfferImage },
    { title: "Семейный автомобиль", image: familyOfferImage },
    { title: "Экспресс-кредит", image: creditOfferImage },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-4 py-8 sm:px-6 md:gap-12 md:py-10 lg:px-0">
      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Наши подборки</h2>
            <button className="shrink-0 rounded bg-red-600 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-red-700">
              Все подборки
            </button>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              aria-label="Предыдущие подборки"
              onClick={() => collectionsSwiper.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 shadow-sm transition hover:border-red-500 hover:text-red-600">
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              aria-label="Следующие подборки"
              onClick={() => collectionsSwiper.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-sm transition hover:bg-red-700">
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (collectionsSwiper.current = swiper)}
          slidesPerView={1.12}
          spaceBetween={12}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-1">
          {collections.map((collection) => (
            <SwiperSlide key={collection.title} className="h-auto">
              <div className="group relative h-40 overflow-hidden rounded-xl bg-neutral-200 sm:h-44">
                <img
                  src={collection.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2 sm:inset-x-4 sm:bottom-4">
                  <p className="max-w-36 text-xs font-bold leading-tight text-white sm:text-sm">
                    {collection.title}
                  </p>
                  <button className="shrink-0 rounded bg-red-600 px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-red-700">
                    Посмотреть
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="relative isolate overflow-hidden rounded-xl bg-gradient-to-r from-[#541c1c] via-[#2b2525] to-[#242424] text-white md:min-h-[190px]">
        <img
          src={boxingGloveImage}
          alt=""
          className="absolute left-0 top-0 h-32 w-36 object-contain object-left md:h-full md:w-[270px]"
        />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-end gap-4 px-5 pb-5 pt-28 sm:px-7 md:min-h-[190px] md:justify-center md:pl-[270px] md:pr-10 md:py-7">
          <div>
            <h2 className="text-base font-extrabold leading-tight sm:text-lg">
              ПЕРЕБЬЕМ ПРЕДЛОЖЕНИЯ ОТ КОНКУРЕНТОВ!
            </h2>
            <p className="mt-1 text-xs text-white/80">
              Скидки <span className="font-bold text-red-400">от 10 до 25%</span> на стоимость
              автомобиля
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:max-w-[560px]">
            <input
              type="tel"
              aria-label="Ваш телефон"
              placeholder="Ваш телефон"
              className="h-11 min-w-0 rounded bg-white px-3 text-sm text-neutral-900 outline-none ring-red-500 placeholder:text-neutral-500 focus:ring-2"
            />
            <button
              type="button"
              className="h-11 rounded bg-red-600 px-4 text-xs font-bold text-white transition hover:bg-red-700">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
          </form>
          <p className="text-[9px] leading-relaxed text-white/40">
            Нажимая кнопку «Отправить», Вы даете согласие на обработку своих персональных данных
          </p>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Спецпредложения</h2>
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              aria-label="Предыдущие спецпредложения"
              onClick={() => offersSwiper.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 shadow-sm transition hover:border-red-500 hover:text-red-600">
              <span aria-hidden="true">&larr;</span>
            </button>
            <button
              aria-label="Следующие спецпредложения"
              onClick={() => offersSwiper.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-sm transition hover:bg-red-700">
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (offersSwiper.current = swiper)}
          slidesPerView={1.12}
          spaceBetween={12}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="!pb-1">
          {offers.map((offer) => (
            <SwiperSlide key={offer.title} className="h-auto">
              <div className="group relative h-28 overflow-hidden rounded-xl bg-neutral-100 sm:h-32">
                <img
                  src={offer.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/5" />
                <div className="relative z-10 flex h-full max-w-[65%] flex-col items-start justify-center p-3 sm:p-4">
                  <h3 className="text-xs font-bold text-neutral-800 sm:text-sm">{offer.title}</h3>
                  <p className="mt-1 text-[10px] text-neutral-500">1,9% по льготной ставке</p>
                  <button className="mt-3 rounded bg-neutral-200 px-3 py-1.5 text-[10px] font-semibold text-neutral-700 transition hover:bg-red-600 hover:text-white">
                    Узнать больше
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

function HomeTrustSection() {
  const banksSwiper = useRef(null);
  const reviewsSwiper = useRef(null);
  const [openReviewId, setOpenReviewId] = useState(null);
  const banks = [
    { name: "АльфаСтрахование", logo: alfaInsuranceLogo },
    { name: "ВСК", logo: vskInsuranceLogo },
    { name: "Совкомбанк Страхование", logo: sovcombankLogo },
    { name: "Росгосстрах", logo: null },
  ];
  const reviews = ["Сайт отзывов", "Название автосалона", "Рекомендация 90%", "Оценки клиентов"];
  const videoReviews = [
    {
      id: 1,
      name: "Сергей Васильев",
      text: "Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантии 100% точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA.",
    },
    {
      id: 2,
      name: "Сергей Васильев",
      text: "Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантии 100% точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA.",
    },
    {
      id: 3,
      name: "Сергей Васильев",
      text: "Я нахожусь в салоне ALTERA, всем советую, хороший коллектив, добрые люди, приветствуют, это не обман, вам гарантии 100% точно, чисто от меня, приезжайте! Мы приехали приобрести автомобиль в салон ALTERA.",
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-280 flex-col gap-8 px-4 pb-10 sm:px-6 md:gap-10 md:pb-14 lg:px-0">
      <section className="rounded-xl bg-[#f6f6f6] p-4 sm:p-6 md:p-8">
        <h2 className="mb-5 text-lg font-extrabold text-neutral-800 sm:text-xl">
          Заявка на автокредит
        </h2>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-6">
          <div className="min-w-0">
            <div className="mb-5 grid gap-2 sm:grid-cols-3">
              {["Марка", "Модель", "Комплектация"].map((label) => (
                <select
                  key={label}
                  aria-label={label}
                  className="h-10 min-w-0 rounded-md border border-neutral-200 bg-white px-3 text-xs text-neutral-600 outline-none focus:border-red-500">
                  <option value="">{label}</option>
                </select>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-[200px_minmax(0,1fr)] md:items-center">
              <img
                src={creditCoverImage}
                alt="Автомобиль под защитным чехлом"
                className="mx-auto h-24 w-40 object-contain md:h-auto md:w-full"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-xs text-neutral-500">
                  <span className="flex items-center justify-between gap-2">
                    Сумма кредита, руб.
                    <span className="text-lg font-semibold text-neutral-700">0</span>
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="3000000"
                    defaultValue="0"
                    className="mt-3 w-full accent-red-600"
                  />
                  <span className="mt-1 flex justify-between text-[9px] text-neutral-400">
                    <span>0</span>
                    <span>500 тыс.</span>
                    <span>1 млн.</span>
                    <span>2 млн.</span>
                    <span>3 млн.</span>
                  </span>
                </label>
                <label className="block text-xs text-neutral-500">
                  <span className="flex items-center justify-between gap-2">
                    Срок кредита, мес.
                    <span className="text-lg font-semibold text-neutral-700">6 мес.</span>
                  </span>
                  <input
                    type="range"
                    min="6"
                    max="84"
                    defaultValue="6"
                    step="6"
                    className="mt-3 w-full accent-red-600"
                  />
                  <span className="mt-1 flex justify-between text-[9px] text-neutral-400">
                    <span>6</span>
                    <span>12</span>
                    <span>24</span>
                    <span>48</span>
                    <span>84</span>
                  </span>
                </label>
                <label className="text-xs text-neutral-500 sm:col-span-2">
                  Первоначальный взнос, руб.
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="mt-2 h-10 w-full rounded-md border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none focus:border-red-500"
                  />
                </label>
              </div>
            </div>
          </div>
          <form className="rounded-xl bg-white p-4 sm:p-5">
            <h3 className="text-sm font-extrabold text-neutral-800">Получить выгоду</h3>
            <p className="mb-4 text-sm font-extrabold text-red-600">300 000 ₽</p>
            <input
              type="text"
              aria-label="Ваше имя"
              placeholder="Ваше имя"
              className="mb-2 h-10 w-full rounded-md border border-neutral-200 px-3 text-xs outline-none focus:border-red-500"
            />
            <input
              type="tel"
              aria-label="Ваш телефон"
              placeholder="Ваш телефон"
              className="mb-3 h-10 w-full rounded-md border border-neutral-200 px-3 text-xs outline-none focus:border-red-500"
            />
            <button
              type="button"
              className="h-10 w-full rounded-md bg-red-600 px-3 text-[10px] font-bold text-white transition hover:bg-red-700">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
            <p className="mt-3 text-center text-[9px] leading-relaxed text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Банки-партнёры</h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Предыдущие банки"
              onClick={() => banksSwiper.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 shadow-sm hover:text-red-600">
              &larr;
            </button>
            <button
              aria-label="Следующие банки"
              onClick={() => banksSwiper.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-sm hover:bg-red-700">
              &rarr;
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (banksSwiper.current = swiper)}
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}>
          {banks.map((bank) => (
            <SwiperSlide key={bank.name}>
              <div className="flex h-16 items-center justify-center rounded-md bg-neutral-100 px-4 sm:h-20">
                {bank.logo ? (
                  <img src={bank.logo} alt={bank.name} className="max-h-10 w-full object-contain" />
                ) : (
                  <span className="text-center text-xs font-extrabold tracking-wide text-red-700 sm:text-sm">
                    РОСГОССТРАХ
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Нам доверяют</h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              aria-label="Предыдущие отзывы"
              onClick={() => reviewsSwiper.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 shadow-sm hover:text-red-600">
              &larr;
            </button>
            <button
              aria-label="Следующие отзывы"
              onClick={() => reviewsSwiper.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-sm hover:bg-red-700">
              &rarr;
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (reviewsSwiper.current = swiper)}
          slidesPerView={1.15}
          spaceBetween={10}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
          {reviews.map((review, index) => (
            <SwiperSlide key={review}>
              <div className="h-[88px] rounded-md bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
                <p className="text-[11px] font-bold text-neutral-800">{review}</p>
                <p className="mt-1 truncate text-[10px] text-neutral-400">Название автосалона</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[9px] text-neutral-500">Рекомендуют 90%</span>
                  <span className="text-xs tracking-wide text-amber-500" aria-label="5 звезд">
                    ★★★★★
                  </span>
                  <span className="rounded bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {index === 3 ? "4.8" : "4.5"}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="flex min-h-16 items-center justify-between gap-3 rounded-md bg-neutral-100 px-4 py-3">
            <img
              src={yandexMapsLogo}
              alt="Яндекс Карты"
              className="max-h-8 w-32 object-contain object-left"
            />
            <span className="hidden text-[9px] text-neutral-500 sm:inline">Рекомендуют 90%</span>
            <span className="text-xs tracking-wide text-amber-500" aria-label="5 звезд">
              ★★★★★
            </span>
            <span className="rounded bg-green-500 px-2 py-1 text-lg font-bold text-white">4.5</span>
          </div>
          <div className="flex min-h-16 items-center justify-between gap-3 rounded-md bg-neutral-100 px-4 py-3">
            <img
              src={googleMapsLogo}
              alt="Google Maps"
              className="max-h-8 w-32 object-contain object-left"
            />
            <span className="hidden text-[9px] text-neutral-500 sm:inline">Рекомендуют 90%</span>
            <span className="text-xs tracking-wide text-amber-500" aria-label="5 звезд">
              ★★★★★
            </span>
            <span className="rounded bg-green-500 px-2 py-1 text-lg font-bold text-white">4.1</span>
          </div>
        </div>
        <h2 className="mb-4 mt-6 text-lg font-extrabold text-neutral-800 sm:text-xl">Отзывы</h2>
        <Swiper
          slidesPerView={1.08}
          spaceBetween={12}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          {videoReviews.map((review) => {
            const isExpanded = openReviewId === review.id;

            return (
              <SwiperSlide key={review.id} className="h-auto">
                <article className="h-full overflow-hidden rounded-xl bg-neutral-100">
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#252525]">
                    <div className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#303030] text-[76px] font-black leading-none text-[#252525]">
                      A
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-red-900/50 bg-red-600 pl-0.5 text-[11px] text-white shadow-lg">
                      ▶
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-bold text-neutral-800">{review.name}</h3>
                    <p
                      className={`mt-2 text-[10px] leading-relaxed text-neutral-500 ${isExpanded ? "" : "line-clamp-4"}`}>
                      {review.text}
                    </p>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setOpenReviewId(isExpanded ? null : review.id)}
                      className="mt-3 inline-flex items-center gap-3 rounded-full bg-neutral-200 px-3 py-1.5 text-[10px] font-semibold text-neutral-700 transition hover:bg-neutral-300">
                      {isExpanded ? "Скрыть" : "Подробнее"}
                      <span className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

function AboutAndBlogSection() {
  const blogSwiper = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Автомобили");
  const categories = ["Автомобили", "Трейд-ин", "Покупка"];
  const articles = [
    {
      category: "Автомобили",
      date: "23 сентября",
      title: "Тест Skoda Karoq Scout: городской характер и комфорт",
    },
    {
      category: "Автомобили",
      date: "21 сентября",
      title: "Как выбрать автомобиль для поездок всей семьёй",
    },
    {
      category: "Автомобили",
      date: "18 сентября",
      title: "Новый автомобиль: на что обратить внимание перед покупкой",
    },
    {
      category: "Автомобили",
      date: "15 сентября",
      title: "Популярные кроссоверы: сравниваем модели",
    },
    {
      category: "Трейд-ин",
      date: "12 сентября",
      title: "Как подготовить автомобиль к оценке по трейд-ин",
    },
    {
      category: "Трейд-ин",
      date: "8 сентября",
      title: "Обмен старого автомобиля на новый: этапы сделки",
    },
    {
      category: "Покупка",
      date: "5 сентября",
      title: "Документы для покупки автомобиля в автосалоне",
    },
    {
      category: "Покупка",
      date: "1 сентября",
      title: "Покупка автомобиля в кредит: полезные советы",
    },
  ];
  const visibleArticles = articles.filter((article) => article.category === activeCategory);

  return (
    <div className="mx-auto flex w-full max-w-280 flex-col gap-8 px-4 pb-12 sm:px-6 md:gap-10 lg:px-0">
      <section className="mx-auto w-full max-w-3xl text-center">
        <h2 className="text-xl font-extrabold text-neutral-800 sm:text-2xl">О компании</h2>
        <p className="mt-3 text-xs leading-relaxed text-neutral-500 sm:text-sm">
          Мы — официальный дилерский центр, предлагающий широкий выбор автомобилей, выгодные условия
          покупки и профессиональную поддержку на каждом этапе. Наша команда помогает подобрать
          автомобиль, который подходит именно вам.
        </p>
        <div className="mx-auto mt-6 w-full max-w-xl overflow-hidden rounded-xl bg-neutral-900">
          <video
            src={companyVideo}
            controls
            playsInline
            preload="metadata"
            aria-label="Видео о компании"
            className="aspect-video w-full object-cover"
          />
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Блог</h2>
            <button className="rounded bg-red-600 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-red-700">
              Все статьи
            </button>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Предыдущие статьи"
              onClick={() => blogSwiper.current?.slidePrev()}
              className="grid h-9 w-9 place-items-center rounded-md border border-neutral-200 bg-white text-neutral-600 shadow-sm hover:text-red-600">
              &larr;
            </button>
            <button
              type="button"
              aria-label="Следующие статьи"
              onClick={() => blogSwiper.current?.slideNext()}
              className="grid h-9 w-9 place-items-center rounded-md bg-red-600 text-white shadow-sm hover:bg-red-700">
              &rarr;
            </button>
          </div>
        </div>
        <div className="mb-4 flex gap-5 border-b border-neutral-100">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`border-b-2 px-1 py-2 text-[11px] font-semibold transition ${
                activeCategory === category
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}>
              {category}
            </button>
          ))}
        </div>
        <Swiper
          key={activeCategory}
          onSwiper={(swiper) => (blogSwiper.current = swiper)}
          slidesPerView={1.15}
          spaceBetween={12}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
          {visibleArticles.map((article) => (
            <SwiperSlide key={article.title}>
              <article>
                <img
                  src={familyCollectionImage}
                  alt="Семья выбирает автомобиль"
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
                <p className="mt-2 text-[9px] text-neutral-400">{article.date}</p>
                <h3 className="mt-1 text-[11px] font-bold leading-snug text-neutral-800">
                  {article.title}
                </h3>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="border-t border-neutral-100 pt-6">
        <h2 className="text-lg font-extrabold text-neutral-800 sm:text-xl">Об автосалоне ABC</h2>
        <p className="mt-3 text-xs leading-relaxed text-neutral-500 sm:text-sm">
          Автосалон ABC предлагает большой выбор новых автомобилей и автомобилей с пробегом. Мы
          помогаем подобрать комплектацию, оформить кредит или обменять автомобиль по программе
          трейд-ин. Специалисты салона сопровождают покупку от первого знакомства с автомобилем до
          выдачи ключей и остаются на связи после сделки.
        </p>
      </section>
    </div>
  );
}

function SiteFooter({ showMap = true }) {
  const footerGroups = [
    {
      title: "Каталог авто",
      links: ["Подбор авто", "Автомобили с пробегом", "Новые автомобили", "Тест-драйв"],
    },
    {
      title: "Кредит и рассрочка",
      links: ["Кредит на авто", "Семейный автомобиль", "Государственные программы", "Трейд-ин"],
    },
    {
      title: "Спецпредложения",
      links: ["Экспресс-кредит", "Семейный автомобиль", "Первый автомобиль", "Акции"],
    },
    {
      title: "Покупателям",
      links: ["О компании", "Отзывы", "Блог", "Контакты"],
    },
  ];
  const popularModels = [
    ["Kia", "Sportage", "Rio", "Sorento", "K5"],
    ["Hyundai", "Solaris", "Creta", "Tucson", "Elantra"],
    ["Skoda", "Octavia", "Rapid", "Kodiaq", "Superb"],
    ["Volkswagen", "Polo", "Tiguan", "Passat", "Taos"],
  ];

  return (
    <>
      {showMap && (
        <section className="relative h-56 overflow-hidden bg-neutral-200 sm:h-64 md:h-72">
          <iframe
            title="Автосалон ABC на карте Москвы"
            src="https://maps.google.com/maps?q=ЗВКМ%20МКАД%2065км%2C%20Москва&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
          <div className="absolute right-4 top-4 hidden w-64 rounded-lg bg-white p-4 text-xs text-neutral-700 shadow-lg sm:block md:right-[max(24px,calc((100vw-1120px)/2))]">
            <p className="font-bold text-neutral-900">Автосалон ABC</p>
            <a href="tel:+78005519431" className="mt-2 block hover:text-red-600">
              +7 (800) 551-94-31
            </a>
            <a href="tel:+74952921867" className="mt-1 block hover:text-red-600">
              +7 (495) 292-18-67
            </a>
            <p className="mt-2">Ежедневно с 08:00 до 21:00</p>
            <p className="mt-1">Москва, ЗВКМ МКАД, 65-й км</p>
            <a
              href="https://maps.google.com/maps?q=ЗВКМ%20МКАД%2065км%2C%20Москва"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded bg-red-600 px-3 py-2 font-bold text-white hover:bg-red-700">
              Как до нас добраться
            </a>
          </div>
        </section>
      )}

      <footer id="site-footer" className="bg-[#1d1d1d] text-white">
        <div className="mx-auto w-full max-w-280 px-4 sm:px-6 lg:px-0">
          <nav
            aria-label="Навигация в подвале"
            className="grid grid-cols-2 gap-x-5 gap-y-3 border-b border-white/10 py-5 text-[9px] font-bold sm:grid-cols-3 md:grid-cols-5">
            {[
              "КАТАЛОГ АВТО",
              "АВТО С ПРОБЕГОМ",
              "КРЕДИТ И РАССРОЧКА",
              "СПЕЦПРЕДЛОЖЕНИЯ",
              "ТАКСИ В КРЕДИТ",
            ].map((label) => (
              <p key={label} className="text-white/90">
                {label}
              </p>
            ))}
          </nav>

          <div className="grid gap-7 border-b border-white/10 py-6 sm:grid-cols-2 md:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="mb-3 text-[9px] font-bold text-white">{group.title}</h2>
                <ul className="space-y-2 text-[9px] text-white/45">
                  {group.links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-[9px] text-white/55">
              <h2 className="mb-3 font-bold text-white">Контакты</h2>
              <a href="tel:+78005519431" className="mb-2 block hover:text-white">
                +7 (800) 551-94-31
              </a>
              <a href="tel:+74952921867" className="mb-2 block hover:text-white">
                +7 (495) 292-18-67
              </a>
              <p className="mb-2">Ежедневно с 08:00 до 21:00</p>
              <p>Москва, ЗВКМ МКАД, 65-й км</p>
            </div>
          </div>

          <div className="grid gap-4 border-b border-white/10 py-5 text-[9px] text-white/45 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-semibold text-white/80">
                © {new Date().getFullYear()} Автосалон «ABC AUTO». Официальный дилер
              </p>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <span>Политика конфиденциальности</span>
                <span>Пользовательское соглашение</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 rounded bg-white px-3 py-2 text-neutral-700">
                <img src={yandexMapsLogo} alt="Яндекс Карты" className="h-5 w-16 object-contain" />
                <span className="text-sm font-bold">5,0</span>
              </div>
              <div className="flex items-center gap-2 rounded bg-white px-3 py-2 text-neutral-700">
                <img src={googleMapsLogo} alt="Google Maps" className="h-5 w-16 object-contain" />
                <span className="text-sm font-bold">4,5</span>
              </div>
            </div>
          </div>

          <div className="grid gap-5 py-6 sm:grid-cols-2 md:grid-cols-4">
            {popularModels.map((models) => (
              <div key={models[0]}>
                {models.map((model, index) => (
                  <p
                    key={model}
                    className={`mb-2 text-[9px] leading-relaxed ${index === 0 ? "font-bold text-white/85" : "text-white/40"}`}>
                    {model}
                    {index > 0 && " — купить у официального дилера в Москве"}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black/20 px-4 py-3 text-center text-[9px] text-white/35 sm:hidden">
          <p>Москва, ЗВКМ МКАД, 65-й км · Ежедневно 08:00–21:00</p>
          <a href="tel:+78005519431" className="mt-1 inline-block text-white/70">
            +7 (800) 551-94-31
          </a>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
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

  const toggleFavorite = (car) => {
    setFavorites((current) => {
      const exists = current.some((item) => item.id === car.id);
      const updated = exists ? current.filter((item) => item.id !== car.id) : [...current, car];
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

  const changeCartQuantity = (id, quantity) => {
    setCart((current) => {
      const updated = current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0);
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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#222" }}>
      <style>
        {`
                    .mobile-version {
                        display: none;
                    }

                    @media (max-width: 767px) {
                        .desktop-version {
                            display: none !important;
                        }

                        .mobile-version {
                            display: block;
                        }

                        .mobile-page {
                            width: 100%;
                            min-height: 100vh;
                            background: #fff;
                            overflow-x: hidden;
                        }

                        .mobile-header {
                            height: 58px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 0 12px;
                            background: #fff;
                            border-bottom: 1px solid #eeeeee;
                        }

                        .mobile-menu {
                            width: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .mobile-logo {
                            height: 35px;
                            width: auto;
                            object-fit: contain;
                        }

                        .mobile-right {
                            display: flex;
                            align-items: center;
                            gap: 9px;
                        }

                        .mobile-phone {
                            display: flex;
                            align-items: center;
                            gap: 4px;
                        }

                        .mobile-phone-number {
                            font-size: 8px;
                            font-weight: 700;
                            color: #222;
                            white-space: nowrap;
                        }

                        .mobile-callback {
                            font-size: 7px;
                            font-weight: 700;
                            color: #e30613;
                            white-space: nowrap;
                        }

                        .mobile-actions {
                            height: 43px;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            gap: 18px;
                            padding: 0 15px;
                            background: #fff;
                            border-bottom: 1px solid #eeeeee;
                        }

                        .mobile-action {
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .mobile-action-count {
                            position: absolute;
                            top: -7px;
                            right: -9px;
                            width: 14px;
                            height: 14px;
                            border-radius: 50%;
                            background: #e30613;
                            color: #fff;
                            font-size: 8px;
                            font-weight: 700;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .mobile-banner-wrapper {
                            padding: 10px 12px 0;
                        }

                        .mobile-banner {
                            position: relative;
                            width: 100%;
                            height: 305px;
                            overflow: hidden;
                            border-radius: 17px;
                            background: #eeeeee;
                        }

                        .mobile-city {
                            position: absolute;
                            inset: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            object-position: center;
                        }

                        .mobile-banner-content {
                            position: relative;
                            z-index: 5;
                            padding: 16px 13px 0;
                        }

                        .mobile-badge {
                            display: inline-block;
                            background: #e30613;
                            color: #fff;
                            font-size: 8px;
                            font-weight: 700;
                            line-height: 1;
                            padding: 6px 9px;
                            border-radius: 12px;
                            margin-bottom: 8px;
                        }

                        .mobile-title {
                            margin: 0;
                            font-size: 21px;
                            line-height: 1.08;
                            font-weight: 900;
                            color: #333;
                            max-width: 270px;
                        }

                        .mobile-subtitle {
                            margin: 7px 0 0;
                            font-size: 12px;
                            color: #777;
                        }

                        .mobile-car-gray {
                            position: absolute;
                            z-index: 2;
                            width: 63%;
                            height: auto;
                            right: -7%;
                            bottom: 20px;
                            opacity: .65;
                        }

                        .mobile-car-white {
                            position: absolute;
                            z-index: 3;
                            width: 67%;
                            height: auto;
                            right: -9%;
                            bottom: 8px;
                        }

                        .mobile-car-red {
                            position: absolute;
                            z-index: 4;
                            width: 67%;
                            height: auto;
                            left: 2%;
                            bottom: 5px;
                        }

                        .mobile-dots {
                            position: absolute;
                            z-index: 10;
                            left: 0;
                            right: 0;
                            bottom: 9px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 7px;
                        }

                        .mobile-dot {
                            width: 7px;
                            height: 7px;
                            border-radius: 50%;
                            background: #bdbdbd;
                        }

                        .mobile-dot.active {
                            width: 9px;
                            height: 9px;
                            background: #e30613;
                        }

                        .mobile-car-swiper {
                            padding-bottom: 28px;
                        }

                        .mobile-car-swiper .swiper-pagination {
                            bottom: 0;
                        }

                        .mobile-car-swiper .swiper-pagination-bullet {
                            width: 8px;
                            height: 8px;
                            background: #ddd;
                            opacity: 1;
                        }

                        .mobile-car-swiper .swiper-pagination-bullet-active {
                            width: 24px;
                            border-radius: 4px;
                            background: #d30000;
                        }
                    }
                `}
      </style>

      <div className="desktop-version">
       
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
              <IconPin /> Россия, Москва, ЗВКМ МКАД, 65км
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

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}>
            <Link
              to="/favorites"
              style={{
                position: "relative",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}>
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
                {favorites.length}
              </span>
            </Link>

            <Link
              to="/cart"
              style={{
                position: "relative",
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconCart />
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
                {cartCount}
              </span>
            </Link>

            <div
              style={{
                position: "relative",
                cursor: "pointer",
              }}>
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

        <div style={{ padding: "20px" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "#f0f0f0",
              minHeight: "420px",
              display: "flex",
              alignItems: "center",
            }}>
            <img
              src={bgCity}
              alt="city bg"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                opacity: 1,
              }}
            />

            <img
              src={carGray}
              alt="gray car"
              style={{
                position: "absolute",
                right: "2%",
                bottom: "0",
                height: "55%",
                objectFit: "contain",
                opacity: 0.6,
                zIndex: 1,
              }}
              className="hidden md:block"
            />

            <img
              src={carWhite}
              alt="white car"
              style={{
                position: "absolute",
                right: "0%",
                bottom: "0",
                height: "65%",
                objectFit: "contain",
                zIndex: 2,
              }}
              className="hidden md:block"
            />

            <img
              src={carRed}
              alt="red car"
              style={{
                position: "absolute",
                right: "5%",
                bottom: "0",
                height: "80%",
                objectFit: "contain",
                zIndex: 3,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 10,
                padding: "40px 40px",
                maxWidth: "50%",
              }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#e30613",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "13px",
                  padding: "5px 14px",
                  borderRadius: "20px",
                  marginBottom: "16px",
                }}>
                Осталось всего 12 авто!
              </div>

              <h1
                style={{
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: "#111",
                  margin: "0 0 16px 0",
                }}>
                Грандиозная распродажа
                <br />
                тестового парка!
              </h1>

              <p
                style={{
                  fontSize: "clamp(16px, 2vw, 22px)",
                  color: "#555",
                  margin: 0,
                }}>
                Узнай свою цену!
              </p>
            </div>

            <div
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                cursor: "pointer",
                color: "#444",
                background: "rgba(255,255,255,0.7)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>

            <div
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 20,
                cursor: "pointer",
                color: "#444",
                background: "rgba(255,255,255,0.7)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "40px",
                display: "flex",
                gap: "8px",
                zIndex: 10,
              }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#e30613",
                }}></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ccc",
                }}></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ccc",
                }}></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ccc",
                }}></div>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#ccc",
                }}></div>
            </div>
          </div>
        </div>
        <div style={{ padding: "0 20px 40px" }}>
          <div
            style={{
              background: "#f9f9f9",
              borderRadius: "20px",
              padding: "30px 40px",
              display: "flex",
              gap: "40px",
              alignItems: "flex-start",
            }}>
            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "16px 10px",
                fontSize: "12px",
                color: "#444",
              }}>
              {[
                "Kia",
                "Hyundai",
                "Skoda",
                "Volkswagen",
                "Toyota",
                "Brilliance",
                "Changan",
                "Chery",
                "CheryExeed",
                "Chevrolet",
                "Citroen",
                "Datsun",
                "Dongfeng",
                "DW Hower",
                "FAW",
                "Ford",
                "Foton",
                "GAC",
                "Geely",
                "Great Wall",
                "Haima",
                "Haval",
                "Honda",
                "JAC",
                "Lada",
                "Lifan",
                "Mazda",
                "Mitsubishi",
                "Nissan",
                "Opel",
                "Peugeot",
                "Ravon",
                "Renault",
                "SsangYong",
                "Suzuki",
                "UAZ",
                "Zotye",
              ].map((brand, i) => {
                const isToyota = brand.toLowerCase() === "toyota";
                const itemContent = (
                  <>
                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {brandLogos[i % brandLogos.length] ? (
                        <img
                          src={brandLogos[i % brandLogos.length]}
                          alt={brand}
                          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            background: "#eee",
                            borderRadius: "50%",
                          }}></div>
                      )}
                    </div>
                    <span>{brand}</span>
                  </>
                );

                return isToyota ? (
                  <Link
                    key={i}
                    to="/tayota"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: 600,
                    }}>
                    {itemContent}
                  </Link>
                ) : (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                    }}>
                    {itemContent}
                  </div>
                );
              })}
            </div>

            <div
              style={{
                width: "320px",
                background: "#fff",
                borderRadius: "18px",
                padding: "24px 20px 18px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              }}>
              <h2 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 20px", color: "#111" }}>
                Быстрый подбор авто
              </h2>

              <div style={{ marginBottom: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "12px",
                    marginBottom: "8px",
                    color: "#111",
                    fontWeight: 600,
                  }}>
                  <span>Цена</span>
                  <span style={{ fontSize: "12px", color: "#444" }}>
                    {minPrice} - {maxPrice}т
                  </span>
                </div>

                <div
                  style={{
                    position: "relative",
                    height: "20px",
                    marginBottom: "10px",
                  }}>
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "50%",
                      height: "4px",
                      transform: "translateY(-50%)",
                      background: "#eee",
                      borderRadius: "999px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: `${(minPrice / 3000) * 100}%`,
                      right: `${100 - (maxPrice / 3000) * 100}%`,
                      top: "50%",
                      height: "4px",
                      transform: "translateY(-50%)",
                      background: "#e30613",
                      borderRadius: "999px",
                    }}
                  />

                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="50"
                    value={minPrice}
                    onChange={(event) => {
                      const nextMin = Number(event.target.value);
                      setMinPrice(nextMin > maxPrice ? maxPrice : nextMin);
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "100%",
                      transform: "translateY(-50%)",
                      pointerEvents: "auto",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="50"
                    value={maxPrice}
                    onChange={(event) => {
                      const nextMax = Number(event.target.value);
                      setMaxPrice(nextMax < minPrice ? minPrice : nextMax);
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: "100%",
                      transform: "translateY(-50%)",
                      pointerEvents: "auto",
                      opacity: 0,
                      cursor: "pointer",
                      zIndex: 3,
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: `${(minPrice / 3000) * 100}%`,
                      top: "50%",
                      width: "12px",
                      height: "12px",
                      background: "#e30613",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 0 2px #fff",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: `${(maxPrice / 3000) * 100}%`,
                      top: "50%",
                      width: "12px",
                      height: "12px",
                      background: "#e30613",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      boxShadow: "0 0 0 2px #fff",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "9px",
                    color: "#b3b3b3",
                    lineHeight: 1,
                  }}>
                  <span>0</span>
                  <span>500т</span>
                  <span>800т</span>
                  <span>1.1м</span>
                  <span>1.4м</span>
                  <span>1.7м</span>
                  <span>2м</span>
                  <span>2.3м</span>
                  <span>2.7м</span>
                  <span>3м</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
                <select
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "13px",
                    color: "#333",
                    outline: "none",
                    background: "#fff",
                  }}>
                  <option>Тип кузова</option>
                </select>
                <select
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "13px",
                    color: "#333",
                    outline: "none",
                    background: "#fff",
                  }}>
                  <option>Коробка</option>
                </select>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "#d30000",
                  color: "#fff",
                  border: "none",
                  padding: "14px",
                  borderRadius: "10px",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: "pointer",
                }}>
                ПОКАЗАТЬ 73
              </button>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 20px 60px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 900,
              margin: "0 0 30px",
              color: "#111",
            }}>
            Автомобили в наличии с ПТС
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}>
            {carImages.map((img, i) => {
              const car = {
                id: `skoda-octavia-${i}`,
                name: "Skoda Octavia",
                model: "1.6 MPI MT Active",
                price: 1615000,
                image: img,
              };
              return (
                <CarCard
                  key={i}
                  carImg={img}
                  compact={false}
                  car={car}
                  onAddToCart={addToCart}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.some((item) => item.id === car.id)}
                />
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              style={{
                background: "#d30000",
                color: "#fff",
                border: "none",
                padding: "16px 48px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "14px",
                cursor: "pointer",
                letterSpacing: "1px",
              }}>
              ПОКАЗАТЬ ЕЩЕ
            </button>
          </div>
        </div>
      </div>

      <div className="mobile-version">
        <div className="mobile-page">
          {/* Mobile header: menu, logo, and phone */}
          <div className="mobile-header">
            <div className="mobile-menu">
              <IconMenu />
            </div>

            <Link to="/" aria-label="На главную">
              <img src={logo} alt="ABC Auto" className="mobile-logo" />
            </Link>

            <div className="mobile-right">
              <div className="mobile-phone">
                <IconPhone />

                <span className="mobile-phone-number">+7 (800) 551-94-31</span>
              </div>

              <span className="mobile-callback">
                ОБРАТНЫЙ
                <br />
                ЗВОНОК
              </span>
            </div>
          </div>

          {/* Mobile header: favorite, compare, and search actions */}
          <div className="mobile-actions">
            <Link
              to="/favorites"
              className="mobile-action"
              style={{ textDecoration: "none", color: "inherit" }}>
              <IconHeart />

              <span className="mobile-action-count">{favorites.length}</span>
            </Link>

            <Link
              to="/cart"
              className="mobile-action"
              style={{ textDecoration: "none", color: "inherit" }}>
              <IconCart />
              {cartCount > 0 && <span className="mobile-action-count">{cartCount}</span>}
            </Link>

            <div className="mobile-action">
              <IconCompare />

              <span className="mobile-action-count">12</span>
            </div>

            <div className="mobile-action">
              <IconSearch />
            </div>
          </div>

          <div className="mobile-banner-wrapper">
            <div className="mobile-banner">
              <img src={bgCity} alt="city" className="mobile-city" />

              <div className="mobile-banner-content">
                <div className="mobile-badge">Осталось всего 10 авто!</div>

                <h1 className="mobile-title">
                  Грандиозная
                  <br />
                  распродажа
                  <br />
                  тестового парка!
                </h1>

                <p className="mobile-subtitle">Узнай свою цену!</p>
              </div>

              <img src={carGray} alt="gray car" className="mobile-car-gray" />

              <img src={carWhite} alt="white car" className="mobile-car-white" />

              <img src={carRed} alt="red car" className="mobile-car-red" />

              <div className="mobile-dots">
                <div className="mobile-dot active"></div>
                <div className="mobile-dot"></div>
                <div className="mobile-dot"></div>
                <div className="mobile-dot"></div>
                <div className="mobile-dot"></div>
                <div className="mobile-dot"></div>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px 12px" }}>
            <div
              style={{
                background: "#f9f9f9",
                borderRadius: "16px",
                padding: "20px 16px",
              }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "14px 10px",
                  fontSize: "11px",
                  color: "#333",
                  marginBottom: "24px",
                }}>
                {[
                  "Kia",
                  "Brilliance",
                  "Citroen",
                  "Ford",
                  "Haima",
                  "Lifan",
                  "Peugeot",
                  "UAZ",
                  "Skoda",
                  "Chery",
                  "Dongfeng",
                  "GAC",
                  "Honda",
                  "Mitsubishi",
                  "Renault",
                  "Toyota",
                  "Chevrolet",
                  "FAW",
                  "Great Wall",
                  "Hyundai",
                  "Changan",
                  "Datsun",
                  "Foton",
                  "Haval",
                  "Mazda",
                  "Ravon",
                  "Zotye",
                  "Volkswagen",
                  "CheryExeed",
                  "DW Hower",
                  "Geely",
                  "JAC",
                  "Nissan",
                  "SsangYong",
                  "Lada",
                  "Opel",
                  "Suzuki",
                ].map((brand, i) => (
                  <div
                    key={i}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      textDecorationColor: "#ccc",
                    }}>
                    {brand}
                  </div>
                ))}
              </div>

              <div>
                <h2
                  style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 16px", color: "#111" }}>
                  Быстрый подбор авто
                </h2>

                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      marginBottom: "8px",
                      color: "#555",
                      fontWeight: 600,
                    }}>
                    <span>Цена</span>
                    <span>0 - 500т</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "4px",
                      background: "#eee",
                      borderRadius: "2px",
                      marginBottom: "10px",
                    }}>
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        width: "30%",
                        background: "#e30613",
                        borderRadius: "2px",
                      }}></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "0%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "14px",
                        height: "14px",
                        background: "#e30613",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}></div>
                    <div
                      style={{
                        position: "absolute",
                        left: "30%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "14px",
                        height: "14px",
                        background: "#e30613",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "8px",
                      color: "#aaa",
                    }}>
                    <span>0</span>
                    <span>500т</span>
                    <span>800т</span>
                    <span>1.1м</span>
                    <span>1.4м</span>
                    <span>1.7м</span>
                    <span>2м</span>
                    <span>2.3м</span>
                    <span>2.7м</span>
                    <span>3м</span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}>
                  <select
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#333",
                      outline: "none",
                      background: "#fff",
                    }}>
                    <option>Тип кузова</option>
                  </select>
                  <select
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#333",
                      outline: "none",
                      background: "#fff",
                    }}>
                    <option>Коробка</option>
                  </select>
                </div>

                <button
                  style={{
                    width: "100%",
                    background: "#d30000",
                    color: "#fff",
                    border: "none",
                    padding: "16px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "14px",
                    cursor: "pointer",
                  }}>
                  ПОКАЗАТЬ 73
                </button>
              </div>
            </div>
          </div>

          <MobileCarSwiper
            onAddToCart={addToCart}
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        </div>
      </div>

      <HomePromoSections />
      <HomeTrustSection />
      <AboutAndBlogSection />
      <SiteFooter />
    </div>
  );
}

export {
  IconPin,
  IconClock,
  IconWhatsapp,
  IconHeart,
  IconCompare,
  IconSearch,
  IconChevronDown,
  brandLogos,
  carImages,
  CarCard,
  SiteFooter,
};
  