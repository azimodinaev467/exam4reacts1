import { Link, useParams } from "react-router-dom";
import { IconChevronDown, SiteFooter } from "./Home";
import { cars, UsedCarCard, UsedCarsHeader } from "./UsedCars";
import showroomCamry from "../assets/88ab8f647eafe2c8b35c1b45bf081e6cbe161c0b.jpg";
import redCar from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import installmentImage from "../assets/a3eb7df59d82f07d50683e878628acf237b9acca.jpg";
import tradeInImage from "../assets/8c44b80f1dab017af59664d4b25da31360367110.jpg";
import insuranceImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";

const advantages = [
  { icon: "◉", title: "Зачёт вашего авто в Trade-in", text: "Быстрая оценка и обмен" },
  { icon: "%", title: "Беспроцентная рассрочка", text: "Подберём удобные условия" },
  { icon: "✦", title: "Дополнительная выгода", text: "До 20 000 ₽" },
];

const equipment = [
  ["Максимальная мощность двигателя", "110 л.с."],
  ["Тип трансмиссии", "МКПП"],
  ["Тип привода", "Передний"],
  ["Объём двигателя", "2 494 см³"],
  ["Пробег", "123 456 км"],
  ["Год выпуска", "2013"],
  ["Тип кузова", "Седан"],
  ["Количество владельцев", "2"],
];

function OfferCard({ image, title, subtitle, label }) {
  return (
    <div className="flex min-h-24 items-center gap-3 overflow-hidden rounded-xl bg-neutral-100 p-3">
      <img src={image} alt="" className="h-16 w-20 shrink-0 rounded-md object-cover" />
      <div className="min-w-0">
        <p className="m-0 text-xs font-bold">{title}</p>
        <p className="mt-1 mb-2 text-[9px] text-neutral-500">{subtitle}</p>
        <p className="m-0 inline-block rounded-full bg-white px-2 py-1 text-[9px] font-semibold text-neutral-700">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function UsedCarDetail() {
  const { carId } = useParams();
  const car = cars.find((item) => item.id === carId) || cars[0];
  const similarCars = cars.filter((item) => item.id !== car.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <div className="mb-3 mt-5 flex flex-wrap items-center gap-2 text-[10px] text-neutral-400">
          <Link to="/" className="text-neutral-400 no-underline">
            Главная
          </Link>
          <span>›</span>
          <Link to="/used-cars" className="text-neutral-400 no-underline">
            Авто с пробегом
          </Link>
          <span>›</span>
          <p className="m-0">{car.name}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.9fr] lg:gap-8">
          <div>
            <div className="relative overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={showroomCamry}
                alt={car.name}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded bg-black/60 text-xl text-white">
                ‹
              </div>
              <div className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded bg-black/60 text-xl text-white">
                ›
              </div>
              <div className="absolute right-3 top-3 flex gap-2 text-white">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/50">⇄</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/50">♡</span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-2 sm:grid-cols-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-md border ${index === 0 ? "border-red-600" : "border-neutral-200"}`}>
                  <img
                    src={index === 0 ? showroomCamry : car.image}
                    alt={`${car.name}, фото ${index + 1}`}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="py-1">
            <h1 className="m-0 text-2xl font-extrabold sm:text-3xl">{car.name}</h1>
            <p className="mt-2 mb-4 text-xs text-neutral-500">
              Автомобиль с пробегом　•　{car.trim}
            </p>
            <div className="mb-4 flex flex-wrap gap-2 text-[10px] text-neutral-600">
              <p className="m-0 rounded-full border border-neutral-200 px-2.5 py-1">◷ 1.2 л</p>
              <p className="m-0 rounded-full border border-neutral-200 px-2.5 py-1">⚙ 115 л.с.</p>
              <p className="m-0 rounded-full border border-neutral-200 px-2.5 py-1">▤ Механика</p>
              <p className="m-0 rounded-full border border-neutral-200 px-2.5 py-1">Передний</p>
            </div>
            <div className="flex flex-wrap items-end gap-x-5 gap-y-2">
              <p className="m-0 text-2xl font-extrabold sm:text-3xl">{car.price}</p>
              <p className="m-0 pb-1 text-[10px] leading-relaxed text-neutral-500">
                В кредит
                <br />
                <span className="font-bold text-neutral-800">от 12 000 ₽/мес.</span>
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex min-h-10 items-center justify-center rounded bg-red-600 px-3 text-center text-[9px] font-bold text-white">
                ЗАБРОНИРОВАТЬ ОНЛАЙН
              </div>
              <div className="flex min-h-10 items-center justify-center rounded bg-neutral-100 px-3 text-center text-[9px] font-bold text-neutral-700">
                Купить в кредит
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {advantages.map((item) => (
                <div key={item.title} className="flex items-center gap-2 text-[10px]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-50 font-bold text-red-600">
                    {item.icon}
                  </span>
                  <div>
                    <p className="m-0 font-semibold">{item.title}</p>
                    <p className="mt-1 mb-0 text-neutral-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-2 border-t border-neutral-100 pt-4 text-[10px]">
              <p className="m-0 text-neutral-500">
                Привод: <span className="font-semibold text-neutral-800">передний</span>
              </p>
              <p className="m-0 text-neutral-500">
                Кузов: <span className="font-semibold text-neutral-800">седан</span>
              </p>
              <p className="m-0 text-neutral-500">
                Год: <span className="font-semibold text-neutral-800">{car.year}</span>
              </p>
              <p className="m-0 text-neutral-500">
                Пробег: <span className="font-semibold text-neutral-800">{car.mileage}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <OfferCard
            image={installmentImage}
            title="Рассрочка от ВТБ"
            subtitle="Рассрочка 0%"
            label="Рассрочка"
          />
          <OfferCard
            image={tradeInImage}
            title="Выгода по Trade-in"
            subtitle="Дополнительная выгода при обмене"
            label="Trade-in"
          />
          <OfferCard
            image={insuranceImage}
            title="Первоначальный взнос 0%"
            subtitle="Кредит и страхование"
            label="Скидка"
          />
        </div>

        <div className="mt-5 grid gap-5 rounded-lg bg-neutral-900 px-4 py-5 text-white sm:grid-cols-[1fr_1fr_1.15fr_auto] sm:items-center sm:px-6">
          <div>
            <p className="m-0 text-[10px]">Первоначальный взнос</p>
            <p className="m-0 text-xs font-bold">20%</p>
            <div className="mt-2 h-1 rounded bg-neutral-600">
              <div className="h-1 w-1/5 rounded bg-red-600" />
            </div>
          </div>
          <div>
            <p className="m-0 text-[10px]">Срок кредита</p>
            <p className="m-0 text-xs font-bold">24 мес.</p>
            <div className="mt-2 h-1 rounded bg-neutral-600">
              <div className="h-1 w-1/3 rounded bg-red-600" />
            </div>
          </div>
          <div>
            <p className="m-0 text-[10px]">Ежемесячный платёж</p>
            <p className="m-0 text-base font-extrabold">от 12 000 ₽/мес.</p>
          </div>
          <div className="flex h-9 items-center justify-center rounded bg-red-600 px-4 text-center text-[9px] font-bold">
            ПОДАТЬ ЗАЯВКУ НА КРЕДИТ
          </div>
        </div>

        <section className="mt-10">
          <h2 className="m-0 text-lg font-extrabold sm:text-xl">
            Описание {car.name} {car.trim}
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-neutral-600">
            Toyota Camry 2013 года — практичный седан для повседневных поездок и путешествий.
            Автомобиль оснащён автоматической коробкой передач и передним приводом. Перед покупкой
            можно уточнить комплектацию, историю обслуживания и состояние автомобиля у специалиста.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-neutral-600">
            В карточке указаны основные характеристики и текущая стоимость выбранного автомобиля.
            Доступность, комплектацию и условия покупки уточняйте у менеджера автосалона.
          </p>
        </section>

        <section className="mt-9">
          <h2 className="m-0 text-lg font-extrabold sm:text-xl">
            Комплектация {car.name} {car.trim}
          </h2>
          <div className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {equipment.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-4 border-b border-neutral-100 py-3 text-[10px]">
                <p className="m-0 font-semibold">{label}</p>
                <p className="m-0 text-neutral-600">{value}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-5 flex h-9 w-36 items-center justify-center rounded bg-red-600 text-[9px] font-bold text-white">
            ПОКАЗАТЬ ЕЩЁ
          </div>
        </section>

        <div className="relative mt-10 grid min-h-44 overflow-hidden rounded-xl bg-gradient-to-r from-neutral-900 via-red-950 to-neutral-800 text-white md:grid-cols-[1fr_1fr] md:items-center">
          <div className="absolute inset-y-0 left-0 w-1/2 opacity-80">
            <img src={redCar} alt="" className="h-full w-full object-contain object-left-bottom" />
          </div>
          <div className="relative z-10 px-5 pb-5 pt-36 sm:px-8 md:col-start-2 md:py-7 md:pl-0">
            <p className="m-0 text-xs font-bold text-red-200">Выгодный Trade-in</p>
            <h2 className="mt-1 mb-0 text-2xl font-extrabold sm:text-3xl">Обменяйте авто</h2>
            <p className="mt-2 mb-4 text-xs text-white/75">
              Оценим ваш автомобиль и предложим выгоду при покупке
            </p>
            <div className="flex h-9 max-w-xs items-center justify-center rounded bg-red-600 px-4 text-[9px] font-bold">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-lg font-extrabold sm:text-xl">
            Автомобили с пробегом за эти же деньги
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {similarCars.map((item) => (
              <UsedCarCard key={item.id} car={item} />
            ))}
          </div>
          <Link
            to="/used-cars"
            className="mx-auto mt-6 flex h-9 w-36 items-center justify-center rounded bg-red-600 text-[9px] font-bold text-white no-underline">
            ВСЕ АВТОМОБИЛИ
          </Link>
        </section>
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
