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
  carImages,
  CarCard,
} from "./Home";
import logo from "../assets/logo1 1.png";
import bgCity from "../assets/a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg";
import corollaWhite from "../assets/994ce914876e08f24e3c569c401dca735d40b9f8.png";
import carRed from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import familyCollectionImage from "../assets/4dddedd9ffe4cf8da3d2137bef7f909f41b65091.jpg";
import travelCollectionImage from "../assets/a1d58796b0db1116c331b7734cad26f4b2227a35.jpg";
import cityCollectionImage from "../assets/a139c33ae8001b69468897acd423648976d9acba.jpg";
import yandexMapsLogo from "../assets/6a1a7be10f55e03dbd1b6b5d6325dc7cff4c3451.png";
import googleMapsLogo from "../assets/Google_Maps_Logo 2.png";

const colors = [
  { name: "Blue", value: "#078ac4" },
  { name: "Red", value: "#f01824" },
  { name: "Silver", value: "#e7e7e7" },
  { name: "Pearl White", value: "#ffffff" },
  { name: "Light Gray", value: "#c8c8c8" },
  { name: "Gray", value: "#858585" },
  { name: "Night Black", value: "#191919" },
  { name: "Burgundy", value: "#a32028" },
  { name: "Graphite", value: "#5f5651" },
];

export default function ModelTayota() {
  const [selectedColor, setSelectedColor] = useState("Night Black");

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <div className="hidden items-center justify-center gap-8 border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs text-neutral-600 md:flex">
        <p className="m-0 flex items-center gap-2">
          <IconPin /> Россия, Москва, 38КМ МКАД, 65км
        </p>
        <p className="m-0 flex items-center gap-2">
          <IconClock /> Время работы: с 08:00 до 21:00
        </p>
        <p className="m-0 flex items-center gap-2 font-semibold text-green-600">
          <IconWhatsapp /> Whatsapp
        </p>
      </div>

      <div className="site-header-main flex flex-wrap items-center justify-between gap-4 px-4 py-3 shadow-sm md:px-8 lg:px-10">
        <div className="site-header-brand flex min-w-0 items-center gap-3 sm:gap-4">
          <div aria-label="На главную" className="shrink-0">
            <img src={logo} alt="ABC Auto" className="h-auto w-36 sm:w-44" />
          </div>
          <div className="hidden border-l border-neutral-300 pl-3 text-xs leading-5 sm:block sm:pl-4">
            <p className="m-0">
              <span className="rounded bg-red-100 px-1.5 py-0.5 font-bold text-red-600">
                10 лет
              </span>
              <span className="font-bold"> превосходим</span>
            </p>
            <p className="m-0 font-bold">ваши ожидания</p>
          </div>
        </div>

        <div className="site-header-nav hidden items-center gap-6 text-sm font-semibold lg:flex">
          <div className="text-red-600 no-underline">Подбор авто</div>
          <Link to="/about-company" className="text-neutral-900 no-underline">
            О компании
          </Link>
          <Link to="/tech-center" className="text-neutral-900 no-underline">
            Техцентр
          </Link>
          <Link to="/insurance" className="text-neutral-900 no-underline">
            Страхование
          </Link>
          <Link to="/trade-in" className="text-neutral-900 no-underline">
            Госпрограмма Trade-in
          </Link>
          <Link to="/medical-workers" className="text-neutral-900 no-underline">
            Работникам медицины
          </Link>
          <Link to="/reviews" className="text-neutral-900 no-underline">
            Отзывы
          </Link>
          <p className="m-0">Контакты</p>
        </div>
      </div>

      <div className="hidden items-center justify-between gap-4 border-y border-neutral-100 px-5 py-3 text-xs font-bold md:flex lg:px-10">
        <div className="text-neutral-900 no-underline">
          КАТАЛОГ АВТО <IconChevronDown />
        </div>
        <Link to="/used-cars" className="text-neutral-900 no-underline">
          АВТО С ПРОБЕГОМ <IconChevronDown />
        </Link>
        <Link to="/rasochka" className="text-neutral-900 no-underline">
          КРЕДИТ И РАССРОЧКА <IconChevronDown />
        </Link>
        <p className="m-0">
          СПЕЦПРЕДЛОЖЕНИЯ <IconChevronDown />
        </p>
        <Link to="/taxi-credit" className="m-0 text-neutral-900 no-underline">
          ТАКСИ В КРЕДИТ
        </Link>
        <div className="flex items-center gap-5">
          <div className="relative">
            <IconHeart />
            <p className="absolute -right-2 -top-1 m-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
              10
            </p>
          </div>
          <div className="relative">
            <IconCompare />
            <p className="absolute -right-2 -top-1 m-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] text-white">
              12
            </p>
          </div>
          <IconSearch />
        </div>
      </div>
      <div className="site-header-contact hidden items-center gap-4 px-4 py-2 md:flex md:px-8 lg:px-10">
        <div>
          <p className="m-0 text-lg font-extrabold lg:text-xl">+7 (800) 551-94-31</p>
          <p className="m-0 text-sm text-neutral-500">+7 (495) 292-18-67</p>
        </div>
        <div className="rounded-md bg-red-600 px-4 py-3 text-xs font-bold text-white lg:px-5">
          ОБРАТНЫЙ ЗВОНОК
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 text-xs font-bold md:hidden">
        <div className="text-neutral-900 no-underline">КАТАЛОГ АВТО</div>
        <div className="text-neutral-900 no-underline">TOYOTA</div>
        <div className="text-red-600 no-underline">ПОЗВОНИТЬ</div>
      </div>

      <div className="mx-auto w-full max-w-[1500px] px-3 pb-12 sm:px-5">
        <div className="relative isolate mt-4 min-h-[690px] overflow-hidden rounded-xl bg-neutral-100 md:min-h-[420px]">
          <img src={bgCity} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/20" />

          <div className="relative z-10 mx-auto grid min-h-[690px] max-w-6xl grid-rows-[auto_1fr] gap-3 px-4 pb-24 pt-5 sm:px-8 md:min-h-[420px] md:grid-cols-[0.8fr_1.4fr] md:grid-rows-1 md:items-center md:gap-8 md:px-8 md:pb-20 md:pt-8">
            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
                <div className="text-neutral-400 no-underline">Главная</div>
                <p className="m-0 text-red-500">›</p>
                <div className="text-neutral-400 no-underline">Каталог авто</div>
                <p className="m-0 text-red-500">›</p>
                <div className="text-neutral-400 no-underline">Toyota</div>
                <p className="m-0 text-red-500">›</p>
                <p className="m-0">Toyota Camry</p>
              </div>

              <h1 className="m-0 text-3xl font-extrabold leading-tight text-neutral-800 sm:text-4xl">
                Toyota Camry
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
                <div>
                  <p className="m-0 text-sm text-neutral-500 line-through">8 000 000 ₽</p>
                  <p className="m-0 text-xl font-extrabold sm:text-2xl">от 7 700 000 ₽</p>
                </div>
                <div className="rounded bg-red-600 px-4 py-3 text-xs font-bold text-white">
                  Выгода до 100 000 ₽
                </div>
              </div>

              <div className="mt-6 grid max-w-[250px] gap-2">
                <div className="flex items-center gap-3 rounded bg-white/90 px-3 py-2 text-xs font-semibold shadow-sm">
                  <p className="m-0 text-base font-extrabold text-red-600">+</p>
                  <p className="m-0">Улучшенное предложение</p>
                </div>
                <div className="flex items-center gap-3 rounded bg-white/90 px-3 py-2 text-xs font-semibold shadow-sm">
                  <p className="m-0 text-base font-extrabold text-red-600">0%</p>
                  <p className="m-0">Без первоначального взноса</p>
                </div>
                <div className="flex items-center gap-3 rounded bg-white/90 px-3 py-2 text-xs font-semibold shadow-sm">
                  <p className="m-0 text-base font-extrabold text-red-600">₽</p>
                  <p className="m-0">Кредит от 1,9%</p>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col items-center justify-center md:pt-8">
              <div className="mb-3 flex w-full flex-col items-center md:items-end">
                <p className="mb-2 text-xs text-neutral-700">Цвет: {selectedColor}</p>
                <div className="flex flex-wrap justify-center gap-2 md:justify-end">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      aria-label={color.name}
                      title={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`h-5 w-5 rounded-full border border-black/10 ${selectedColor === color.name ? "ring-2 ring-red-600 ring-offset-2" : ""}`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>
              <img
                src={corollaWhite}
                alt="Toyota Camry"
                className="w-full max-w-[720px] object-contain drop-shadow-xl"
                style={{
                  filter:
                    selectedColor === "Night Black" ? "brightness(0.52) contrast(1.12)" : "none",
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-12 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5 md:grid-cols-[1.05fr_1fr_1fr_1.15fr] md:items-center md:gap-3 md:px-6">
          <div>
            <p className="m-0 text-base font-bold leading-tight text-neutral-800">
              Получите специальную цену
            </p>
            <p className="mt-2 inline-block rounded-full bg-red-600 px-2 py-1 text-[10px] font-bold text-white">
              Только до 10.10.21
            </p>
          </div>
          <div className="flex h-11 w-full min-w-0 items-center rounded border border-neutral-200 bg-neutral-100 px-3 text-sm text-neutral-500">
            Ваше имя
          </div>
          <div className="flex h-11 w-full min-w-0 items-center rounded border border-neutral-200 bg-neutral-100 px-3 text-sm text-neutral-500">
            Ваш телефон
          </div>
          <div>
            <div className="flex h-11 w-full items-center justify-center rounded bg-red-600 px-3 text-xs font-bold text-white">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </div>
            <p className="mt-2 text-[9px] leading-relaxed text-neutral-500">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14 pt-2 sm:px-6 sm:pb-20">
        <h1 className="mb-7 text-center text-xl font-extrabold text-neutral-800 sm:mb-9 sm:text-2xl">
          Что входит в комплектацию Active
        </h1>

        <div className="grid gap-7 md:grid-cols-3 md:gap-6 lg:gap-10">
          <div className="border-b border-neutral-200 pb-5">
            <p className="mb-3 text-sm font-bold text-neutral-800">Безопасность</p>
            <div className="space-y-1 text-xs text-neutral-600">
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Запасное колесо неполноразмерное
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Передние тормоза: дисковые
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Задние тормоза: барабанные
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Задние колёса: 175/65R14
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Передние колёса: 175/65R14
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Передний стабилизатор
              </p>
            </div>
          </div>

          <div className="border-b border-neutral-200 pb-5">
            <p className="mb-3 text-sm font-bold text-neutral-800">Экстерьер</p>
            <div className="space-y-1 text-xs text-neutral-600">
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Задняя подвеска: полузависимая,
                торсионная балка
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Иммобилайзер
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Вспомогательная система торможения (BAS)
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Антиблокировочная система (ABS)
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Помощь при старте на подъёме (HAC)
              </p>
            </div>
          </div>

          <div className="border-b border-neutral-200 pb-5 md:col-span-1">
            <p className="mb-3 text-sm font-bold text-neutral-800">Интерьер</p>
            <div className="space-y-1 text-xs text-neutral-600">
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Подушка безопасности пассажира с
                функцией деактивации
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Подушка безопасности переднего пассажира
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Дополнительный стоп-сигнал
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>ЭРА-ГЛОНАСС
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">•</span>Крепление ISOFIX
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto my-6 flex h-11 w-44 items-center justify-center rounded bg-red-600 text-xs font-bold text-white sm:my-7">
          ПОКАЗАТЬ ЕЩЁ
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Специальное предложение</p>
            <p className="m-0 text-[10px] text-neutral-400">от представительства</p>
            <p className="mt-5 mb-0 text-sm font-extrabold">−35% ₽</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">%</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-red-600 px-1 text-xs text-white">
              ●
            </div>
          </div>
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Скидка за наличный</p>
            <p className="m-0 text-[10px] text-neutral-400">от ABC Auto</p>
            <p className="mt-5 mb-0 text-sm font-extrabold">−40 000 ₽</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">₽</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-red-600 px-1 text-xs text-white">
              ●
            </div>
          </div>
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Выгода за Trade-in</p>
            <p className="m-0 text-[10px] text-neutral-400">от ABC Auto</p>
            <p className="mt-5 mb-0 text-sm font-extrabold">−120 000 ₽</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">↗</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-red-600 px-1 text-xs text-white">
              ●
            </div>
          </div>
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Выгода за утилизацию</p>
            <p className="m-0 text-[10px] text-neutral-400">от ABC Auto</p>
            <p className="mt-5 mb-0 text-sm font-extrabold text-neutral-400">−60 000 ₽</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">♻</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-neutral-200 px-1 text-xs text-white">
              ●
            </div>
          </div>
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Скидка при оформлении</p>
            <p className="m-0 text-[10px] text-neutral-400">Авто в кредит 1,9%</p>
            <p className="mt-5 mb-0 text-sm font-extrabold text-neutral-400">−40 000 ₽</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">%</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-neutral-200 px-1 text-xs text-white">
              ●
            </div>
          </div>
          <div className="relative min-h-24 overflow-hidden rounded-lg bg-white p-4 shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
            <p className="m-0 text-xs font-bold">Госпрограмма</p>
            <p className="m-0 text-[10px] text-neutral-400">
              Семейный автомобиль, Первый автомобиль
            </p>
            <p className="mt-5 mb-0 text-sm font-extrabold">10% от цены авто</p>
            <p className="absolute -right-1 bottom-0 m-0 text-6xl font-black text-neutral-100">✦</p>
            <div className="absolute right-3 top-3 flex h-6 w-10 items-center justify-end rounded-full bg-red-600 px-1 text-xs text-white">
              ●
            </div>
          </div>
        </div>

        <div className="mt-4 grid overflow-hidden rounded-lg bg-neutral-100 text-sm sm:grid-cols-[1fr_1.2fr_1.4fr] sm:items-center">
          <div className="px-5 py-4 text-neutral-400">
            <p className="m-0 text-xs">Максимальная скидка</p>
            <p className="m-0 font-bold">до 500 000 ₽</p>
          </div>
          <div className="bg-red-600 px-5 py-4 text-white">
            <p className="m-0 text-xs">Ваша скидка</p>
            <p className="m-0 text-2xl font-extrabold">до 500 000 ₽</p>
          </div>
          <div className="m-3 flex min-h-11 items-center justify-center rounded bg-white px-4 text-center text-xs font-bold text-red-600">
            ЗАФИКСИРОВАТЬ УСЛОВИЯ
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden rounded-xl bg-gradient-to-r from-red-950 via-neutral-900 to-neutral-800 text-white md:mt-10 md:min-h-56 md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-40 sm:min-h-48 md:min-h-full">
            <img
              src={carRed}
              alt="Красный автомобиль Toyota"
              className="absolute inset-0 h-full w-full object-contain object-bottom opacity-90"
            />
          </div>
          <div className="relative z-10 px-5 pb-6 sm:px-8 md:py-7 md:pl-3 md:pr-8">
            <p className="m-0 text-xs font-bold tracking-widest text-red-200">ВЫГОДНЫЙ TRADE-IN</p>
            <p className="mt-1 mb-0 text-2xl font-extrabold sm:text-4xl">
              ОТ 1,9%
              <span className="ml-2 text-sm font-semibold sm:text-base">по льготной ставке</span>
            </p>
            <p className="mt-2 mb-4 max-w-md text-xs text-white/80">
              Обменяйте свой автомобиль на новый с максимальной скидкой
            </p>
            <div className="grid gap-2 sm:grid-cols-[1fr_1fr]">
              <div className="flex h-10 items-center rounded bg-white px-3 text-xs text-neutral-500">
                Ваш телефон
              </div>
              <div className="flex h-10 items-center justify-center rounded bg-red-600 px-3 text-xs font-bold text-white">
                ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
              </div>
            </div>
            <p className="mt-2 mb-0 text-[9px] text-white/50">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-12 sm:px-6 md:gap-14 md:pb-16">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="m-0 text-lg font-extrabold text-neutral-800 sm:text-xl">
              Похожие предложения
            </h2>
            <div className="flex gap-2 text-xs">
              <div className="grid h-8 w-8 place-items-center rounded border border-neutral-200 text-neutral-500">
                ‹
              </div>
              <div className="grid h-8 w-8 place-items-center rounded bg-red-600 text-white">›</div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {carImages.slice(0, 3).map((carImg, index) => (
              <CarCard key={index} carImg={carImg} />
            ))}
          </div>
          <div className="mx-auto mt-6 flex h-10 w-36 items-center justify-center rounded bg-red-600 text-[10px] font-bold text-white">
            ПОКАЗАТЬ ЕЩЁ
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-extrabold text-neutral-800 sm:text-xl">Нам доверяют</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Сайт отзывов", "4.5"],
              ["Сайт отзывов", "4.8"],
              ["Оценки клиентов", "4.7"],
              ["Рекомендации", "4.9"],
            ].map(([label, rating], index) => (
              <div
                key={index}
                className="rounded-md border border-neutral-100 bg-white p-3 shadow-sm">
                <p className="m-0 text-xs font-bold text-neutral-800">{label}</p>
                <p className="mt-2 mb-0 text-[10px] text-neutral-500">Рекомендуют 90%</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="m-0 text-xs tracking-wide text-amber-500">★★★★★</p>
                  <p className="m-0 rounded bg-green-500 px-2 py-1 text-xs font-bold text-white">
                    {rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="flex min-h-16 items-center justify-between gap-3 rounded-md bg-neutral-100 px-4 py-3">
              <img
                src={yandexMapsLogo}
                alt="Яндекс Карты"
                className="max-h-8 w-32 object-contain object-left"
              />
              <p className="m-0 text-xs tracking-wide text-amber-500">★★★★★</p>
              <p className="m-0 rounded bg-green-500 px-2 py-1 text-lg font-bold text-white">4.5</p>
            </div>
            <div className="flex min-h-16 items-center justify-between gap-3 rounded-md bg-neutral-100 px-4 py-3">
              <img
                src={googleMapsLogo}
                alt="Google Maps"
                className="max-h-8 w-32 object-contain object-left"
              />
              <p className="m-0 text-xs tracking-wide text-amber-500">★★★★★</p>
              <p className="m-0 rounded bg-green-500 px-2 py-1 text-lg font-bold text-white">4.1</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-extrabold text-neutral-800 sm:text-xl">Отзывы</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Сергей Васильев", "Сергей Васильев", "Сергей Васильев"].map((name, index) => (
              <div key={index} className="overflow-hidden rounded-lg bg-neutral-100">
                <div className="relative grid aspect-video place-items-center bg-[#252525]">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#303030] text-5xl font-black text-[#252525]">
                    A
                  </div>
                  <div className="absolute grid h-10 w-10 place-items-center rounded-full border-4 border-red-900/50 bg-red-600 pl-0.5 text-xs text-white">
                    ▶
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="m-0 text-xs font-bold text-neutral-800">{name}</h3>
                  <p className="mt-2 mb-0 text-[10px] leading-relaxed text-neutral-500">
                    Хороший автосалон, внимательные сотрудники и большой выбор автомобилей. Помогли
                    подобрать подходящую комплектацию.
                  </p>
                  <p className="mt-3 mb-0 inline-block rounded-full bg-neutral-200 px-3 py-1.5 text-[10px] font-semibold text-neutral-700">
                    Подробнее　⌄
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="m-0 text-lg font-extrabold text-neutral-800 sm:text-xl">Блог</h2>
            <p className="m-0 rounded bg-red-600 px-3 py-1 text-[10px] font-semibold text-white">
              Все статьи
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [familyCollectionImage, "Тест Skoda Karoq Scout: городской характер и комфорт"],
              [travelCollectionImage, "Как выбрать автомобиль для поездок всей семьёй"],
              [cityCollectionImage, "Новый автомобиль: на что обратить внимание"],
              [familyCollectionImage, "Популярные автомобили для города и путешествий"],
            ].map(([image, title], index) => (
              <div key={index}>
                <img
                  src={image}
                  alt="Автомобиль"
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
                <p className="mt-2 mb-0 text-[9px] text-neutral-400">{23 - index * 3} сентября</p>
                <h3 className="mt-1 mb-0 text-[11px] font-bold leading-snug text-neutral-800">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 border-t border-neutral-100 pt-6">
          <div>
            <h2 className="m-0 text-lg font-extrabold text-neutral-800 sm:text-xl">
              Автомобили Toyota в ABC Auto
            </h2>
            <p className="mt-3 mb-0 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              В автосалоне ABC можно ознакомиться с автомобилями Toyota, сравнить комплектации и
              уточнить наличие. Специалисты помогут подобрать автомобиль с учётом ваших задач и
              бюджета.
            </p>
          </div>
          <div>
            <h3 className="m-0 text-sm font-bold text-neutral-800">Покупка и оформление</h3>
            <p className="mt-2 mb-0 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Доступны консультации по покупке, кредитным программам и обмену автомобиля по
              Trade-in. Условия и наличие уточняйте у менеджеров автосалона.
            </p>
          </div>
          <div>
            <h3 className="m-0 text-sm font-bold text-neutral-800">Помощь после покупки</h3>
            <p className="mt-2 mb-0 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Команда ABC Auto поможет разобраться с комплектацией и ответит на вопросы по
              автомобилю до и после оформления покупки.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1d1d1d] text-white">
        <div className="mx-auto grid max-w-6xl gap-7 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-5">
          <div>
            <p className="m-0 text-xs font-bold">КАТАЛОГ АВТО</p>
            <p className="mt-3 mb-0 text-[10px] leading-5 text-white/60">
              Новые автомобили
              <br />
              Автомобили с пробегом
              <br />
              Подбор автомобиля
              <br />
              Тест-драйв
            </p>
          </div>
          <div>
            <p className="m-0 text-xs font-bold">КРЕДИТ И РАССРОЧКА</p>
            <p className="mt-3 mb-0 text-[10px] leading-5 text-white/60">
              Кредит на авто
              <br />
              Семейный автомобиль
              <br />
              Государственные программы
              <br />
              Trade-in
            </p>
          </div>
          <div>
            <p className="m-0 text-xs font-bold">СПЕЦПРЕДЛОЖЕНИЯ</p>
            <p className="mt-3 mb-0 text-[10px] leading-5 text-white/60">
              Акции
              <br />
              Первый автомобиль
              <br />
              Экспресс-кредит
              <br />
              Выгодные предложения
            </p>
          </div>
          <div>
            <p className="m-0 text-xs font-bold">ПОКУПАТЕЛЯМ</p>
            <p className="mt-3 mb-0 text-[10px] leading-5 text-white/60">
              О компании
              <br />
              Отзывы
              <br />
              Блог
              <br />
              Контакты
            </p>
          </div>
          <div>
            <p className="m-0 text-xs font-bold">КОНТАКТЫ</p>
            <p className="mt-3 mb-0 text-[10px] leading-5 text-white/60">
              +7 (800) 551-94-31
              <br />
              Москва, МКАД, 65-й км
              <br />
              Ежедневно с 08:00 до 21:00
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-4 text-center text-[10px] text-white/50">
          © 2026 Автосалон ABC Auto. Информация на сайте не является публичной офертой.
        </div>
      </div>
    </div>
  );
}
