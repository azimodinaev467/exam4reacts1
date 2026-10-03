import { useState } from "react";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import showroomImage from "../assets/a4e6d05a3353af282c9bfc65e2a488d755f20def.jpg";
import showroomCarImage from "../assets/88ab8f647eafe2c8b35c1b45bf081e6cbe161c0b.jpg";
import russiaMap from "../assets/Group 3394.png";

const showroomPhotos = [showroomImage, showroomCarImage, showroomImage];

const companyFacts = [
  "Подбор новых автомобилей и автомобилей с пробегом",
  "Кредитные программы и рассрочка",
  "Trade-in и оценка автомобиля",
  "Страхование и помощь с документами",
  "Консультации по условиям покупки",
];

const cities = [
  { name: "Москва", left: "16%", top: "58%" },
  { name: "Санкт-Петербург", left: "14%", top: "48%" },
  { name: "Нижний Новгород", left: "23%", top: "61%" },
  { name: "Вологда", left: "20%", top: "52%" },
  { name: "Тула", left: "26%", top: "67%" },
  { name: "Краснодар", left: "12%", top: "75%" },
  { name: "Архангельск", left: "66%", top: "54%" },
];

export default function Okomponi() {
  const [activePhoto, setActivePhoto] = useState(0);

  function changePhoto(direction) {
    setActivePhoto(
      (current) => (current + direction + showroomPhotos.length) % showroomPhotos.length
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <section className="max-w-5xl">
          <p className="mb-2 text-[10px] text-neutral-500">Главная　›　О компании</p>
          <h1 className="m-0 border-b border-neutral-100 pb-4 text-3xl font-extrabold sm:text-4xl">
            О компании
          </h1>
          <div className="mt-5 space-y-3 text-xs leading-relaxed text-neutral-700">
            <p className="m-0">
              ABC AUTO помогает подобрать автомобиль и разобраться в условиях покупки. На одной
              площадке можно сравнить доступные модели, получить консультацию по кредиту или
              рассрочке, оценить автомобиль для Trade-in и оформить страховку.
            </p>
            <p className="m-0">Обратившись к нам, вы можете получить:</p>
            <ul className="m-0 grid list-none gap-2 p-0 sm:grid-cols-2">
              {companyFacts.map((fact) => (
                <li key={fact} className="flex gap-2">
                  <span className="font-bold text-red-600">●</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
            <p className="m-0">
              Специалисты помогут сориентироваться в предложениях и подготовить документы для
              выбранной программы. Актуальные цены, комплектации и условия уточняйте у менеджера.
            </p>
            <p className="m-0 font-semibold">Будем рады видеть вас в ABC AUTO!</p>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="m-0 text-lg font-extrabold sm:text-xl">Фото автосалона</h2>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Предыдущее фото"
                onClick={() => changePhoto(-1)}
                className="grid h-9 w-9 place-items-center rounded border border-neutral-200 text-neutral-700 hover:bg-neutral-100">
                ‹
              </button>
              <button
                type="button"
                aria-label="Следующее фото"
                onClick={() => changePhoto(1)}
                className="grid h-9 w-9 place-items-center rounded bg-red-600 text-white hover:bg-red-700">
                ›
              </button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[-1, 0, 1].map((offset) => {
              const photoIndex =
                (activePhoto + offset + showroomPhotos.length) % showroomPhotos.length;
              return (
                <img
                  key={`${activePhoto}-${offset}`}
                  src={showroomPhotos[photoIndex]}
                  alt="Автосалон ABC AUTO"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              );
            })}
          </div>
        </section>

        <section className="mt-7 grid gap-5 rounded-xl bg-neutral-100 p-5 sm:p-7 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div className="text-center md:text-left">
            <p className="m-0 text-7xl font-extrabold leading-none text-red-600 sm:text-8xl">12</p>
            <p className="mt-2 mb-6 text-sm font-semibold text-red-600">городов присутствия</p>
            <div className="flex justify-center gap-8 md:justify-start">
              <div>
                <p className="m-0 text-xl font-extrabold">1000+</p>
                <p className="m-0 text-[10px] text-neutral-500">автомобилей</p>
              </div>
              <div>
                <p className="m-0 text-xl font-extrabold">7 дней</p>
                <p className="m-0 text-[10px] text-neutral-500">на связи</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-56 overflow-hidden rounded-lg bg-neutral-200 sm:min-h-72">
            <img
              src={russiaMap}
              alt="Города присутствия ABC AUTO на карте России"
              className="absolute inset-0 h-full w-full object-contain"
            />
            <div className="absolute inset-0">
              {cities.map((city) => (
                <span
                  key={city.name}
                  title={city.name}
                  className="absolute h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600 shadow"
                  style={{ left: city.left, top: city.top }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-lg font-extrabold sm:text-xl">Банки-партнёры</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["СБЕРБАНК", "#20a344"],
              ["ВТБ", "#0864a8"],
              ["Альфа-Банк", "#c9262d"],
              ["СОВКОМБАНК", "#279d47"],
            ].map(([bank, color]) => (
              <div
                key={bank}
                className="flex h-16 items-center justify-center rounded-md bg-neutral-100 px-3 text-center text-xs font-extrabold"
                style={{ color }}>
                {bank}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
