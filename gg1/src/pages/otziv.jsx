import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import showroomImage from "../assets/a4e6d05a3353af282c9bfc65e2a488d755f20def.jpg";

const reviews = [
  {
    name: "Сергей Васильев",
    city: "Москва",
    text: "Помогли подобрать автомобиль и подробно объяснили условия покупки. Оформление прошло спокойно, документы подготовили заранее.",
  },
  {
    name: "Александр Петров",
    city: "Тула",
    text: "Приехал посмотреть несколько моделей. Менеджер ответил на вопросы, организовал тест-драйв и помог сравнить комплектации. Покупкой доволен.",
    image: true,
  },
  {
    name: "Ирина Смирнова",
    city: "Казань",
    text: "Понравилось, что все условия кредита объяснили до оформления. Не торопили с решением и помогли выбрать подходящий вариант.",
  },
  {
    name: "Дмитрий Кузнецов",
    city: "Вологда",
    text: "Сдавал старый автомобиль по Trade-in. Оценку и дальнейшие шаги объяснили заранее, оформление прошло в один день.",
  },
  {
    name: "Елена Морозова",
    city: "Санкт-Петербург",
    text: "Покупали семейный автомобиль. Помогли подобрать комплектацию, проверили документы и ответили на все вопросы по гарантии.",
  },
  {
    name: "Андрей Соколов",
    city: "Нижний Новгород",
    text: "Автомобиль был подготовлен к выдаче, документы оформили без спешки. Спасибо специалистам за внимательное отношение.",
  },
  {
    name: "Мария Волкова",
    city: "Москва",
    text: "Подобрали несколько вариантов под мой бюджет и помогли сравнить условия. Осталась довольна консультацией и покупкой.",
  },
  {
    name: "Павел Орлов",
    city: "Тула",
    text: "Сделка прошла прозрачно: стоимость и комплектация совпали с тем, что обсуждали заранее. Рекомендую за спокойный подход.",
  },
  {
    name: "Ольга Николаева",
    city: "Казань",
    text: "Получила ответы по страховке и кредиту в одном месте. Специалисты были на связи на всех этапах оформления.",
  },
];

export default function Otziv() {
  const [expandedReviews, setExpandedReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  function toggleReview(index) {
    setExpandedReviews((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <p className="mb-2 text-[10px] text-neutral-500">
          <Link to="/" className="text-neutral-500 no-underline">
            Главная
          </Link>
          <span className="mx-2">/</span>
          Отзывы
        </p>
        <h1 className="m-0 border-b border-neutral-100 pb-4 text-3xl font-extrabold sm:text-4xl">
          Отзывы
        </h1>

        <section
          aria-label="Отзывы покупателей"
          className="mt-6 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, visibleCount).map((review, index) => {
            const isExpanded = expandedReviews.includes(index);
            return (
              <article key={review.name} className="overflow-hidden rounded-lg bg-neutral-100">
                <div className="relative aspect-[3/2] overflow-hidden bg-[#252525]">
                  {review.image ? (
                    <img
                      src={showroomImage}
                      alt="Покупатель в автосалоне"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#303030] text-7xl font-black text-[#252525]">
                      A
                    </div>
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-red-900/50 bg-red-600 pl-0.5 text-xs text-white shadow-lg">
                    ▶
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h2 className="m-0 text-xs font-bold text-neutral-800">{review.name}</h2>
                      <p className="mt-1 mb-0 text-[9px] text-neutral-400">{review.city}</p>
                    </div>
                    <span
                      className="shrink-0 text-xs tracking-wide text-amber-500"
                      aria-label="5 звезд">
                      ★★★★★
                    </span>
                  </div>
                  <p
                    className={`mt-3 mb-0 text-[10px] leading-relaxed text-neutral-600 ${isExpanded ? "" : "line-clamp-4"}`}>
                    {review.text}
                  </p>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleReview(index)}
                    className="mt-3 rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold text-neutral-700 hover:text-red-600">
                    {isExpanded ? "Свернуть" : "Подробнее"}
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {visibleCount < reviews.length && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + 3, reviews.length))}
              className="rounded bg-red-600 px-6 py-3 text-xs font-bold text-white hover:bg-red-700">
              ПОКАЗАТЬ ЕЩЁ
            </button>
          </div>
        )}
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
