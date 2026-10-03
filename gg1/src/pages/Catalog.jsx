import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
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
} from "./Home";
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
export default function Catalog() {
  return (
    <>
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
            <div
              style={{
                position: "relative",
                cursor: "pointer",
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
                10
              </span>
            </div>

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

        <div style={{ padding: "0 20px 40px" }}>
          <h1 className="text-5xl   text-center  *:">Каталог авто</h1>
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
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}>
              <h2 style={{ fontSize: "18px", fontWeight: 800, margin: "0 0 20px", color: "#111" }}>
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
                      width: "12px",
                      height: "12px",
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
                      width: "12px",
                      height: "12px",
                      background: "#e30613",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "9px",
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

              <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <select
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "#333",
                    outline: "none",
                  }}>
                  <option>Тип кузова</option>
                </select>
                <select
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "#333",
                    outline: "none",
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
                  borderRadius: "8px",
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
            {carImages.map((img, i) => (
              <CarCard key={i} carImg={img} compact={false} />
            ))}
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

        <section className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
          <h2 className="mb-3 text-2xl font-extrabold text-neutral-900 sm:text-3xl">
            Каталог автомобилей в наличии
          </h2>
          <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
            В каталоге автосалона ABC представлены новые автомобили разных марок и моделей. Сравните
            комплектации, изучите характеристики и выберите подходящий вариант для поездок по городу
            и путешествий. Автомобили доступны для покупки за наличный расчёт, в кредит или по
            программе трейд-ин.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-bold text-neutral-900 sm:text-xl">
            Как выбрать автомобиль
          </h3>
          <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
            При выборе учитывайте бюджет, тип кузова, расход топлива и оснащение. Фильтры каталога
            помогут сузить список по марке, модели и комплектации. Если нужна помощь, специалисты
            автосалона ответят на вопросы и помогут сравнить доступные автомобили.
          </p>

          <h3 className="mb-2 mt-6 text-lg font-bold text-neutral-900 sm:text-xl">
            Покупка и оформление
          </h3>
          <p className="text-xs leading-relaxed text-neutral-500 sm:text-sm">
            Перед покупкой можно уточнить наличие автомобиля, записаться на консультацию и подобрать
            удобный способ оплаты. Мы помогаем подготовить документы, рассмотреть условия
            кредитования и оценить автомобиль для обмена по программе трейд-ин.
          </p>
        </section>
      </div>
      <SiteFooter showMap={false} />
    </>
  );
}
