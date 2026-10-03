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
  SiteFooter,
} from "./Home";
import logo from "../assets/logo1 1.png";
import familyImage from "../assets/4dddedd9ffe4cf8da3d2137bef7f909f41b65091.jpg";
import travelImage from "../assets/a1d58796b0db1116c331b7734cad26f4b2227a35.jpg";
import cityImage from "../assets/a139c33ae8001b69468897acd423648976d9acba.jpg";

const brands = [
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
  "Suzuki",
  "UAZ",
  "Zotye",
];

export const cars = [
  {
    id: "camry-elegance-123456",
    name: "Toyota Camry 2013",
    trim: "2.5 AT, Elegance",
    year: "2013",
    mileage: "123 456 км",
    price: "1 615 000 ₽",
    image: carImages[1],
  },
  {
    id: "camry-prestige-98200",
    name: "Toyota Camry 2013",
    trim: "2.5 AT, Prestige",
    year: "2013",
    mileage: "98 200 км",
    price: "1 740 000 ₽",
    image: carImages[0],
  },
  {
    id: "camry-comfort-145000",
    name: "Toyota Camry 2013",
    trim: "2.0 AT, Comfort",
    year: "2013",
    mileage: "145 000 км",
    price: "1 490 000 ₽",
    image: carImages[2],
  },
  {
    id: "camry-elegance-117800",
    name: "Toyota Camry 2013",
    trim: "2.5 AT, Elegance",
    year: "2013",
    mileage: "117 800 км",
    price: "1 590 000 ₽",
    image: carImages[3],
  },
  {
    id: "camry-prestige-89600",
    name: "Toyota Camry 2013",
    trim: "2.5 AT, Prestige",
    year: "2013",
    mileage: "89 600 км",
    price: "1 790 000 ₽",
    image: carImages[4],
  },
  {
    id: "camry-comfort-136500",
    name: "Toyota Camry 2013",
    trim: "2.0 AT, Comfort",
    year: "2013",
    mileage: "136 500 км",
    price: "1 520 000 ₽",
    image: carImages[5],
  },
];

const articles = [
  { image: familyImage, title: "Как выбрать автомобиль с пробегом и не ошибиться" },
  { image: travelImage, title: "На что обратить внимание при осмотре автомобиля" },
  { image: cityImage, title: "Проверка истории автомобиля перед покупкой" },
  { image: familyImage, title: "Покупка автомобиля с пробегом: полезные советы" },
];

export function UsedCarsHeader() {
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
          <Link to="/catalog" className="text-neutral-900 no-underline">
            Подбор авто
          </Link>
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
        </div>
      </div>
      <div className="hidden items-center justify-between border-y border-neutral-100 px-4 py-3 text-xs font-bold md:flex lg:px-8">
        <Link to="/catalog" className="text-neutral-900 no-underline">
          КАТАЛОГ АВТО <IconChevronDown />
        </Link>
        <p className="m-0 text-red-600">
          АВТО С ПРОБЕГОМ <IconChevronDown />
        </p>
        <Link to="/rasochka" className="text-neutral-900 no-underline">
          КРЕДИТ И РАССРОЧКА <IconChevronDown />
        </Link>
        <p className="m-0">
          СПЕЦПРЕДЛОЖЕНИЯ <IconChevronDown />
        </p>
        <Link to="/taxi-credit" className="text-neutral-900 no-underline">
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
          КАТАЛОГ
        </Link>
        <p className="m-0 text-red-600">С ПРОБЕГОМ</p>
        <p className="m-0">+7 (800) 551-94-31</p>
      </div>
    </div>
  );
}

function FilterField({ title, value }) {
  return (
    <div className="flex h-10 items-center justify-between rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-500">
      <span>{value || title}</span>
      <span className="text-neutral-400">⌄</span>
    </div>
  );
}

export function UsedCarCard({ car }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-[0_3px_16px_rgba(0,0,0,0.12)]">
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-neutral-100 p-3 sm:h-48">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-neutral-300/60 to-transparent" />
        <img
          src={car.image}
          alt={car.name}
          className="relative z-10 max-h-full w-full object-contain"
        />
        <div className="absolute right-2 top-2 flex gap-1 text-base text-white">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black/50">⇄</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-black/50">♡</span>
        </div>
        <p className="absolute bottom-2 left-3 z-20 m-0 text-[9px] text-neutral-500">
          2013　•　{car.mileage}
        </p>
      </div>
      <div className="p-3 sm:p-4">
        <h2 className="m-0 text-sm font-bold text-neutral-800">{car.name}</h2>
        <p className="mt-1 mb-3 text-[10px] text-neutral-500">{car.trim}</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 border-y border-neutral-100 py-2 text-[9px] text-neutral-500">
          <p className="m-0">
            Мощность: <span className="font-semibold text-neutral-700">115 л.с.</span>
          </p>
          <p className="m-0">
            Объём: <span className="font-semibold text-neutral-700">2.5 л</span>
          </p>
          <p className="m-0">
            Привод: <span className="font-semibold text-neutral-700">передний</span>
          </p>
          <p className="m-0">
            КПП: <span className="font-semibold text-neutral-700">автомат</span>
          </p>
        </div>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
          <p className="m-0 text-base font-extrabold">от {car.price}</p>
          <p className="m-0 text-[9px] text-neutral-500">Кредит от 115 000 ₽/мес.</p>
        </div>
        <div className="mt-3 grid grid-cols-[1.2fr_1fr_1fr] overflow-hidden rounded text-[9px] font-bold text-white">
          <div className="flex min-h-8 items-center justify-center bg-red-600 px-1 text-center">
            Резерв онлайн
          </div>
          <div className="flex min-h-8 items-center justify-center bg-neutral-800 px-1">Купить</div>
          <Link
            to={`/used-cars/${car.id}`}
            className="flex min-h-8 items-center justify-center bg-neutral-500 px-1 text-white no-underline">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function UsedCars() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h1 className="mb-6 mt-7 text-3xl font-extrabold sm:mb-8 sm:mt-9 sm:text-4xl">
          Авто с пробегом
        </h1>
        <div className="mb-6 grid gap-5 rounded-xl bg-neutral-100 p-4 sm:p-6 lg:grid-cols-[1.25fr_0.9fr] lg:gap-8">
          <div className="grid grid-cols-3 gap-x-3 gap-y-4 text-[10px] sm:grid-cols-4 sm:gap-x-5 sm:text-xs lg:grid-cols-6">
            {brands.map((brand, index) => (
              <div key={brand} className="flex min-w-0 items-center gap-1.5 text-neutral-600">
                <div className="grid h-6 w-6 shrink-0 place-items-center">
                  <img
                    src={brandLogos[index % brandLogos.length]}
                    alt=""
                    className="max-h-5 max-w-5 object-contain"
                  />
                </div>
                <span className="truncate">{brand}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="mb-4 mt-0 text-base font-extrabold">Быстрый подбор авто</h2>
            <div className="mb-4">
              <div className="mb-2 flex justify-between text-xs">
                <span>Цена</span>
                <span>0 – 500 тыс.</span>
              </div>
              <div className="relative h-1 rounded bg-neutral-300">
                <div className="absolute left-0 top-0 h-1 w-1/3 rounded bg-red-600" />
                <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-red-600" />
                <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-red-600" />
              </div>
              <div className="mt-2 flex justify-between text-[8px] text-neutral-400">
                <span>0</span>
                <span>500т</span>
                <span>1м</span>
                <span>1.5м</span>
                <span>2м</span>
                <span>3м</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <FilterField title="Марка" value="Toyota" />
              <FilterField title="Модель" value="Camry" />
              <FilterField title="Тип кузова" />
              <FilterField title="Коробка" />
            </div>
            <div className="mt-3 flex h-10 items-center justify-center rounded bg-red-600 text-[10px] font-bold text-white">
              ПОКАЗАТЬ 73
            </div>
          </div>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="m-0 text-xs text-neutral-500">Найдено автомобилей: 73</p>
          <FilterField title="Сортировка" value="Сначала выгодные" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <UsedCarCard key={`${car.name}-${index}`} car={car} />
          ))}
        </div>
        <div className="mx-auto mt-7 flex h-10 w-36 items-center justify-center rounded bg-red-600 text-[10px] font-bold text-white">
          ПОКАЗАТЬ ЕЩЁ
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="m-0 text-lg font-extrabold sm:text-xl">Блог</h2>
            <p className="m-0 rounded bg-red-600 px-3 py-1 text-[10px] font-semibold text-white">
              Все статьи
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <div key={article.title}>
                <img
                  src={article.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
                <p className="mb-1 mt-2 text-[9px] text-neutral-400">Советы покупателям</p>
                <h3 className="m-0 text-[11px] font-bold leading-snug">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-5 border-t border-neutral-100 pt-6">
          <div>
            <h2 className="m-0 text-lg font-extrabold">Автомобили с пробегом в ABC Auto</h2>
            <p className="mb-0 mt-3 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              В каталоге представлены автомобили с пробегом с описанием комплектации, характеристик
              и стоимости. Сравните доступные варианты и выберите подходящий автомобиль для города и
              путешествий.
            </p>
          </div>
          <div>
            <h3 className="m-0 text-sm font-bold">Как выбрать автомобиль</h3>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              При выборе учитывайте пробег, техническое состояние, историю обслуживания и
              комплектацию. Перед покупкой можно уточнить наличие автомобиля и задать вопросы
              специалисту.
            </p>
          </div>
          <div>
            <h3 className="m-0 text-sm font-bold">Покупка и оформление</h3>
            <p className="mb-0 mt-2 text-xs leading-relaxed text-neutral-500 sm:text-sm">
              Уточните условия покупки, доступные способы оплаты и возможность обмена по программе
              Trade-in у менеджера автосалона ABC Auto.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
