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
import heroImage from "../assets/beb67da023660fc0eb491c0e6a465b5f40808c92 (1).jpg";
import redCar from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import whiteCar from "../assets/b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png";
import alfaLogo from "../assets/cdfdef82061421e98c6e8d7907b86733d68b5538.png";
import vskLogo from "../assets/d06f7c941e571e199d26ddaf8d7c7fbfb5239ccb.png";
import sovcombankLogo from "../assets/8a5bf95dbe15f756615a70bab353fad242ba2545.png";

const kaskoPlans = [
  {
    name: "Доступное КАСКО",
    points: [
      "Единый тариф независимо от стажа и возраста",
      "Защита от основных рисков: угон, полный ущерб, ДТП",
      "Необходимый уровень защиты по доступной цене",
      "Нет ограничений по дополнительным условиям",
    ],
  },
  {
    name: "Оптимальное КАСКО",
    points: [
      "Выгода до 20% от стоимости полного КАСКО",
      "Полная защита по рискам «Угон» и «Ущерб»",
      "Первый страховой случай покрывается без ограничений",
      "Удобный вариант с франшизой",
    ],
  },
  {
    name: "Полное КАСКО",
    points: [
      "Полная защита по рискам «Угон» и «Ущерб»",
      "Возможность выбрать франшизу",
      "Индивидуальный тариф для каждого клиента",
    ],
  },
];

const partners = [
  { name: "АльфаСтрахование", logo: alfaLogo },
  { name: "ВСК", logo: vskLogo },
  { name: "Совкомбанк Страхование", logo: sovcombankLogo },
  { name: "Росгосстрах" },
];

function StaticField({ children }) {
  return (
    <div className="flex h-10 items-center rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-500">
      {children}
    </div>
  );
}

function InsuranceHeader() {
  return (
    <div className="bg-white">
      <div className="hidden items-center justify-center gap-8 border-b border-neutral-200 bg-neutral-100 px-4 py-2 text-xs text-neutral-600 md:flex">
        <p className="m-0 flex items-center gap-2">
          <IconPin /> Россия, Москва, МКАД, 65-й км
        </p>
        <p className="m-0 flex items-center gap-2">
          <IconClock /> Время работы: с 08:00 до 21:00
        </p>
        <p className="m-0 flex items-center gap-2 font-semibold text-green-600">
          <IconWhatsapp /> Whatsapp
        </p>
      </div>
      <div className="site-header-main mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="site-header-brand flex items-center gap-3">
          <Link to="/" aria-label="ABC Auto, главная">
            <img src={logo} alt="ABC Auto" className="h-auto w-32 sm:w-40" />
          </Link>
          <div className="hidden border-l border-neutral-300 pl-3 text-xs leading-5 sm:block">
            <p className="m-0">
              <span className="rounded bg-red-100 px-1.5 py-0.5 font-bold text-red-600">
                10 лет
              </span>{" "}
              превосходим
            </p>
            <p className="m-0 font-bold">ваши ожидания</p>
          </div>
        </div>
        <div className="site-header-nav hidden items-center gap-5 text-xs font-semibold lg:flex">
          <Link to="/catalog" className="text-red-600 no-underline">
            Подбор авто
          </Link>
          <Link to="/about-company" className="text-neutral-900 no-underline">
            О компании
          </Link>
          <Link to="/tech-center" className="text-neutral-900 no-underline">
            Техцентр
          </Link>
          <p className="m-0 text-red-600">Страхование</p>
          <Link to="/trade-in" className="text-neutral-900 no-underline">
            Госпрограмма Trade-in
          </Link>
          <Link to="/medical-workers" className="text-neutral-900 no-underline">
            Работникам медицины
          </Link>
          <Link to="/reviews" className="text-neutral-900 no-underline">
            Отзывы
          </Link>
        </div>
      </div>
      <div className="hidden items-center justify-between border-y border-neutral-100 px-4 py-3 text-xs font-bold md:flex lg:px-8">
        <Link to="/catalog" className="text-neutral-900 no-underline">
          КАТАЛОГ АВТО <IconChevronDown />
        </Link>
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
        <div className="flex items-center gap-4">
          <IconHeart />
          <IconCompare />
          <IconSearch />
        </div>
      </div>
      <div className="site-header-contact mx-auto hidden max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 md:flex lg:px-8">
        <div>
          <p className="m-0 text-lg font-extrabold">+7 (800) 551-94-31</p>
          <p className="m-0 text-xs text-neutral-500">+7 (495) 292-18-67</p>
        </div>
        <div className="rounded bg-red-600 px-4 py-3 text-xs font-bold text-white">
          ОБРАТНЫЙ ЗВОНОК
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 text-xs font-bold md:hidden">
        <Link to="/catalog" className="text-neutral-900 no-underline">
          КАТАЛОГ АВТО
        </Link>
        <p className="m-0 text-red-600">СТРАХОВАНИЕ</p>
        <p className="m-0">+7 (800) 551-94-31</p>
      </div>
    </div>
  );
}

export default function St() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <InsuranceHeader />
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-5">
        <div className="relative isolate flex min-h-[470px] items-center overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[390px]">
          <img
            src={heroImage}
            alt="Специалисты помогают оформить страховку автомобиля"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062333]/90 via-[#062333]/65 to-transparent" />
          <div className="relative z-10 max-w-2xl px-5 pb-24 pt-10 text-white sm:px-10 sm:pb-24 md:px-12">
            <p className="mb-3 text-xs text-white/70">Главная　›　Страхование</p>
            <h1 className="m-0 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Страховые полисы
              <br className="hidden sm:block" /> без комиссий и надбавок
            </h1>
            <p className="mt-3 max-w-lg text-xs leading-relaxed text-white/80 sm:text-sm">
              Рассчитайте цену в несколько кликов и оформите страховой полис онлайн
            </p>
            <div className="mt-6 grid max-w-xl grid-cols-2 gap-x-5 gap-y-3 text-[10px] font-semibold sm:text-xs">
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-500">●</span>ОСАГО онлайн
              </p>
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-500">●</span>Тарифы без скрытых условий
              </p>
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-500">●</span>Оплата после проверки
              </p>
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-500">●</span>Поддержка специалистов
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-9 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:p-5 md:grid-cols-[1fr_1fr_1fr_1.1fr] md:items-center">
          <div>
            <p className="m-0 text-sm font-bold leading-tight">
              Получите
              <br />
              специальную цену
            </p>
            <p className="mt-2 mb-0 inline-block rounded-full bg-red-600 px-2 py-1 text-[9px] font-bold text-white">
              Только до 10.10.21
            </p>
          </div>
          <StaticField>Ваше имя</StaticField>
          <StaticField>Ваш телефон</StaticField>
          <div>
            <div className="flex h-10 items-center justify-center rounded bg-red-600 px-3 text-[10px] font-bold text-white">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </div>
            <p className="mt-2 mb-0 text-[8px] leading-relaxed text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 py-10 sm:grid-cols-2 sm:py-12">
          <div className="flex min-h-28 items-center gap-3 overflow-hidden rounded-xl bg-neutral-100 p-3 sm:gap-5 sm:p-4">
            <img
              src={whiteCar}
              alt="Автомобиль для полиса КАСКО"
              className="w-1/3 object-contain"
            />
            <div className="min-w-0 flex-1">
              <p className="m-0 text-sm font-extrabold">КАСКО</p>
              <p className="mt-1 mb-2 text-[10px] leading-snug text-neutral-500">
                Страхование транспортного средства от ущерба, хищения и угона
              </p>
              <div className="flex h-8 items-center justify-center rounded bg-red-600 px-3 text-[9px] font-bold text-white">
                РАССЧИТАТЬ
              </div>
            </div>
          </div>
          <div className="flex min-h-28 items-center gap-3 overflow-hidden rounded-xl bg-neutral-100 p-3 sm:gap-5 sm:p-4">
            <img src={redCar} alt="Автомобиль для полиса ОСАГО" className="w-1/3 object-contain" />
            <div className="min-w-0 flex-1">
              <p className="m-0 text-sm font-extrabold">ОСАГО</p>
              <p className="mt-1 mb-2 text-[10px] leading-snug text-neutral-500">
                Обязательное страхование автогражданской ответственности
              </p>
              <div className="flex h-8 items-center justify-center rounded bg-red-600 px-3 text-[9px] font-bold text-white">
                РАССЧИТАТЬ
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-8 pb-12 md:grid-cols-2 md:gap-12 md:pb-16">
          <div>
            <h2 className="m-0 text-xl font-extrabold sm:text-2xl">
              Оформить ОСАГО легко и удобно
            </h2>
            <p className="mt-3 mb-0 text-xs leading-relaxed text-neutral-500">
              Полис ОСАГО — это обязательное страхование автогражданской ответственности. Оформите
              полис онлайн и получите документы на электронную почту.
            </p>
            <p className="mt-5 mb-2 text-xs font-bold">Преимущества электронного полиса</p>
            <div className="space-y-2 text-xs leading-relaxed text-neutral-600">
              <p className="m-0">
                <span className="mr-2 text-red-600">→</span>Не нужно посещать офис для оформления
                полиса ОСАГО
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">→</span>Страховой полис доступен в электронном
                виде
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">→</span>Данные проверяются перед оформлением
              </p>
              <p className="m-0">
                <span className="mr-2 text-red-600">→</span>Поддержка специалистов на каждом этапе
              </p>
            </div>
            <div className="mt-5 flex h-10 w-40 items-center justify-center rounded bg-red-600 text-[10px] font-bold text-white">
              ОФОРМИТЬ ПОЛИС
            </div>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-md">
            <div className="absolute left-[12%] top-[8%] h-52 w-40 -rotate-6 border border-emerald-200 bg-emerald-50 p-3 shadow-lg sm:left-[18%]">
              <p className="m-0 border-b border-emerald-200 pb-2 text-[9px] font-extrabold text-emerald-800">
                ЭЛЕКТРОННЫЙ СТРАХОВОЙ ПОЛИС
              </p>
              <div className="mt-3 space-y-2">
                {[1, 2, 3, 4, 5].map((line) => (
                  <div key={line} className="h-1 rounded bg-emerald-200" />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((cell) => (
                  <div key={cell} className="h-6 border border-emerald-200" />
                ))}
              </div>
              <div className="mt-3 h-8 rounded-full border-2 border-emerald-300 opacity-70" />
            </div>
            <div className="absolute right-[10%] top-[22%] h-48 w-40 rotate-[9deg] border border-rose-200 bg-rose-50 p-3 shadow-lg sm:right-[16%]">
              <p className="m-0 border-b border-rose-200 pb-2 text-[9px] font-extrabold text-rose-800">
                СТРАХОВОЙ ПОЛИС
              </p>
              <div className="mt-3 space-y-2">
                {[1, 2, 3, 4, 5].map((line) => (
                  <div key={line} className="h-1 rounded bg-rose-200" />
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((line) => (
                  <div key={line} className="h-5 border border-rose-200" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-xl font-extrabold sm:text-2xl">
            Выбрать своё КАСКО просто и выгодно
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {kaskoPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-xl p-5 ${index === 1 ? "bg-white shadow-md" : "bg-neutral-100"}`}>
                <p className="m-0 text-sm font-extrabold">{plan.name}</p>
                <div className="mt-4 flex-1 space-y-3 text-[10px] leading-relaxed text-neutral-600">
                  {plan.points.map((point) => (
                    <p key={point} className="m-0 flex gap-2">
                      <span className="font-bold text-red-600">●</span>
                      {point}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex h-9 w-36 items-center justify-center rounded bg-red-600 text-[9px] font-bold text-white">
                  ОФОРМИТЬ ПОЛИС
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="mb-6 text-xl font-extrabold sm:text-2xl">Наши партнёры</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 items-center justify-center rounded-md bg-neutral-100 px-4 py-3">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-full object-contain"
                />
              ) : (
                <p className="m-0 text-center text-sm font-extrabold text-red-700">
                  {partner.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <SiteFooter showMap={false} />
    </div>
  );
}
