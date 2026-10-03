import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import heroImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";

const steps = [
  ["01", "Оценка автомобиля", "Осмотрим ваш автомобиль и предложим цену выкупа."],
  ["02", "Подбор нового авто", "Подберём автомобиль и рассчитаем сумму доплаты."],
  [
    "03",
    "Проверка программы",
    "Уточним, подходит ли покупка под действующие условия господдержки.",
  ],
];

const requirements = [
  "Действующие условия государственной программы",
  "Характеристики автомобиля, который вы планируете купить",
  "Документы покупателя и автомобиля для оформления сделки",
];

export default function TradeIn() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-3 pb-12 sm:px-5">
        <section className="relative isolate mt-4 min-h-[390px] overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[430px]">
          <img
            src={heroImage}
            alt="Автомобиль для программы Trade-in"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
          <div className="relative z-10 max-w-2xl px-5 py-10 text-white sm:px-10 sm:py-14">
            <p className="mb-2 text-xs text-white/75">Главная　›　Госпрограмма Trade-in</p>
            <h1 className="m-0 text-3xl font-extrabold leading-tight sm:text-5xl">
              Госпрограмма Trade-in
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Сдайте свой автомобиль в зачёт покупки и узнайте, какие условия государственной
              поддержки доступны для выбранной машины.
            </p>
            <a
              href="#trade-in-steps"
              className="mt-6 inline-flex rounded bg-red-600 px-5 py-3 text-xs font-bold text-white no-underline hover:bg-red-700">
              УЗНАТЬ, КАК ЭТО РАБОТАЕТ
            </a>
          </div>
        </section>

        <section id="trade-in-steps" className="mx-auto max-w-5xl py-10 sm:py-14">
          <h2 className="mb-2 text-xl font-extrabold sm:text-2xl">Как работает Trade-in</h2>
          <p className="mb-7 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Оценка автомобиля и проверка права на участие в программе проходят отдельно. Специалист
            объяснит расчёт до оформления сделки.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, description]) => (
              <article key={number} className="border-t-2 border-red-600 bg-neutral-50 p-5">
                <p className="m-0 text-sm font-bold text-red-600">{number}</p>
                <h3 className="mb-2 mt-4 text-base font-extrabold">{title}</h3>
                <p className="m-0 text-sm leading-relaxed text-neutral-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 border-y border-neutral-200 py-9 md:grid-cols-2">
          <div>
            <h2 className="mb-4 mt-0 text-xl font-extrabold">Что проверим</h2>
            <ul className="m-0 grid list-none gap-3 p-0 text-sm text-neutral-700">
              {requirements.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-red-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-100 p-5 sm:p-6">
            <h2 className="mb-2 mt-0 text-lg font-extrabold">Нужна консультация?</h2>
            <p className="mb-4 mt-0 text-sm leading-relaxed text-neutral-600">
              Условия участия и размер поддержки зависят от действующих правил программы и
              выбранного автомобиля. Уточните актуальную информацию у специалиста.
            </p>
            <a
              href="tel:+78005519431"
              className="inline-flex rounded bg-red-600 px-4 py-3 text-xs font-bold text-white no-underline hover:bg-red-700">
              ПОЗВОНИТЬ: +7 (800) 551-94-31
            </a>
            <Link
              to="/express-credit"
              className="ml-4 inline-flex py-3 text-xs font-bold text-neutral-800 underline underline-offset-4">
              Экспресс-кредит
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
