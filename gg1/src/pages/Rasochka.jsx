import { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import beachImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";
import cityImage from "../assets/6a51abd5fafc8fa24e27bc650a24e5ba880251f1.jpg";
import carImage from "../assets/e799b25bc8fb345bbe5b25f65fd8a19636fcc97e.png";
import familyImage from "../assets/a3eb7df59d82f07d50683e878628acf237b9acca.jpg";

const benefits = [
  ["0%", "Первоначальный взнос от 0%"],
  ["до 7 лет", "Срок рассрочки"],
  ["0 ₽", "Без переплаты по программе"],
  ["онлайн", "Решение по заявке"],
  ["до 300 000 ₽", "Выгода на выбранные авто"],
  ["24/7", "Помощь специалиста"],
];

const banks = ["СБЕРБАНК", "ВТБ", "Альфа-Банк", "СОВКОМБАНК", "РОСБАНК"];

function FormField({ label, type = "text", options }) {
  return (
    <label className="block min-w-0 text-[10px] text-neutral-500">
      {label}
      {options ? (
        <select
          defaultValue=""
          className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-700">
          <option value="">{label}</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          required
          type={type}
          placeholder={label}
          className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-800 outline-none focus:border-red-500"
        />
      )}
    </label>
  );
}

function Step({ number, title, children }) {
  return (
    <section className="rounded-xl bg-neutral-100 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
          {number}
        </span>
        <h2 className="m-0 text-sm font-extrabold text-neutral-800">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Rasochka() {
  const [term, setTerm] = useState(36);
  const [downPayment, setDownPayment] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const monthlyPayment = Math.round((2_200_000 - downPayment) / term);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-3 pb-12 sm:px-5">
        <section className="relative isolate mt-4 min-h-[330px] overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[370px]">
          <img
            src={beachImage}
            alt="Автомобиль для семейного путешествия"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/75 via-slate-950/40 to-transparent" />
          <div className="relative z-10 max-w-xl px-5 pb-16 pt-8 text-white sm:px-10 sm:py-10">
            <p className="mb-2 text-[10px] text-white/75">
              Главная　›　Кредит и рассрочка　›　Рассрочка
            </p>
            <h1 className="m-0 text-3xl font-extrabold leading-tight sm:text-4xl">Рассрочка</h1>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
              Воплотите мечту о новом автомобиле уже сегодня. Подберите удобный срок и отправьте
              заявку на предварительный расчёт.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-red-600 px-4 py-2">
              <span className="text-2xl font-extrabold sm:text-3xl">0%</span>
              <span className="text-[9px] leading-tight">
                переплаты
                <br />
                по программе
              </span>
            </div>
            <p className="mt-3 mb-0 text-xs font-semibold">Первоначальный взнос от 0%</p>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="relative z-20 mx-auto -mt-8 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:grid-cols-[1fr_1fr_1fr_1.1fr] sm:items-center sm:p-5">
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
          <FormField label="Ваше имя" />
          <FormField label="Ваш телефон" type="tel" />
          <div>
            <button className="h-10 w-full rounded bg-red-600 px-3 text-[9px] font-bold text-white hover:bg-red-700">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
            <p className="mt-2 mb-0 text-[8px] text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
            {submitted && (
              <p className="mt-1 mb-0 text-[9px] font-semibold text-green-700">
                Заявка принята. Менеджер свяжется с вами.
              </p>
            )}
          </div>
        </form>

        <section className="mx-auto max-w-5xl py-9 sm:py-11">
          <h2 className="mb-7 text-center text-xl font-extrabold sm:text-2xl">
            Преимущества программы
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
            {[
              ["0%", "Первоначальный взнос"],
              ["7 лет", "Срок рассрочки"],
              ["0 ₽", "Без переплаты"],
              ["98%", "Заявок получают решение"],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-red-200 text-sm font-extrabold text-red-600">
                  {value}
                </div>
                <p className="mt-3 mb-0 text-xs font-extrabold">{value}</p>
                <p className="mt-1 mb-0 text-[9px] text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-4">
          <Step number="1" title="Ваш будущий автомобиль">
            <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div className="grid gap-2">
                <FormField label="Марка" options={["Kia", "Toyota", "Hyundai"]} />
                <FormField label="Модель" options={["Rio", "Camry", "Solaris"]} />
                <FormField label="Комплектация" options={["Comfort", "Premium"]} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <img
                  src={carImage}
                  alt="Автомобиль для покупки"
                  className="h-32 w-2/3 object-contain"
                />
                <div className="text-right">
                  <p className="m-0 text-[9px] text-neutral-500">Kia Comfort 1.4</p>
                  <p className="m-0 text-[9px] text-neutral-500">Цена автомобиля</p>
                  <p className="m-0 text-lg font-extrabold">2 200 000 ₽</p>
                  <p className="mt-2 mb-0 text-[9px] text-neutral-500">Платёж от</p>
                  <p className="m-0 text-sm font-bold text-red-600">
                    {monthlyPayment.toLocaleString("ru-RU")} ₽/мес.
                  </p>
                </div>
              </div>
            </div>
          </Step>

          <Step number="2" title="Купить в рассрочку">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-[10px] text-neutral-600">
                Срок рассрочки, месяцев
                <span className="float-right font-bold text-neutral-800">{term} мес.</span>
                <input
                  type="range"
                  min="12"
                  max="84"
                  step="12"
                  value={term}
                  onChange={(event) => setTerm(Number(event.target.value))}
                  className="mt-3 w-full accent-red-600"
                />
                <span className="flex justify-between text-[8px] text-neutral-400">
                  <span>12</span>
                  <span>24</span>
                  <span>36</span>
                  <span>60</span>
                  <span>84</span>
                </span>
              </label>
              <label className="text-[10px] text-neutral-600">
                Первоначальный взнос
                <select
                  value={downPayment}
                  onChange={(event) => setDownPayment(Number(event.target.value))}
                  className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-700">
                  <option value="0">0 ₽</option>
                  <option value="220000">220 000 ₽</option>
                  <option value="440000">440 000 ₽</option>
                  <option value="1000000">1 000 000 ₽</option>
                </select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[8px] text-neutral-600">
              <span className="mr-1 font-semibold">Банки-партнёры:</span>
              {banks.map((bank) => (
                <span key={bank} className="rounded bg-white px-3 py-2 font-bold">
                  {bank}
                </span>
              ))}
            </div>
          </Step>

          <Step number="3" title="Персональные данные">
            <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
              <FormField label="Ваше имя" />
              <FormField
                label="Выберите подарок"
                options={["Комплект зимних шин", "Сервисная карта"]}
              />
              <FormField label="Номер телефона" type="tel" />
              <button className="h-10 rounded bg-red-600 px-3 text-[9px] font-bold text-white hover:bg-red-700">
                ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ
              </button>
              {submitted && (
                <p className="m-0 text-[10px] font-semibold text-green-700 sm:col-span-2">
                  Заявка принята. Менеджер свяжется с вами.
                </p>
              )}
            </form>
          </Step>
        </section>

        <section className="mx-auto max-w-5xl py-10">
          <h2 className="mb-5 text-lg font-extrabold sm:text-xl">Преимущества рассрочки</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {benefits.map(([value, label]) => (
              <article
                key={label}
                className="flex min-h-20 items-center gap-3 rounded-lg bg-neutral-100 p-3">
                <p className="m-0 min-w-16 text-lg font-extrabold text-red-600">{value}</p>
                <p className="m-0 text-[9px] text-neutral-600">{label}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-7 border-t border-neutral-100 pt-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 mt-0 text-sm font-extrabold">Условия покупки</h3>
              <ul className="m-0 grid list-none gap-2 p-0 text-[10px] text-neutral-600">
                <li>●　Возраст от 18 лет</li>
                <li>●　Гражданство РФ</li>
                <li>●　Первоначальный взнос от 0%</li>
                <li>●　Срок от 12 до 84 месяцев</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 mt-0 text-sm font-extrabold">Необходимые документы</h3>
              <p className="m-0 text-[10px] text-neutral-600">●　Паспорт</p>
              <p className="mt-2 mb-0 text-[10px] text-neutral-600">
                ●　Водительское удостоверение
              </p>
            </div>
          </div>
        </section>

        <section className="relative isolate min-h-64 overflow-hidden rounded-xl bg-neutral-100">
          <img
            src={cityImage}
            alt="Городская площадь"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/10" />
          <div className="relative z-10 grid min-h-64 items-center gap-5 p-5 sm:p-8 md:grid-cols-2 md:px-10">
            <div>
              <h2 className="m-0 max-w-sm text-2xl font-extrabold sm:text-3xl">
                Получите скидку на покупку нового авто!
              </h2>
              <p className="mt-3 mb-0 max-w-md text-xs leading-relaxed text-neutral-600">
                Подберём автомобиль и рассчитаем условия рассрочки. Итоговые параметры зависят от
                выбранной модели и решения банка.
              </p>
              <Link
                to="/medical-workers"
                className="mt-5 inline-flex rounded bg-red-600 px-4 py-3 text-[10px] font-bold text-white no-underline hover:bg-red-700">
                УСЛОВИЯ ДЛЯ МЕДРАБОТНИКОВ
              </Link>
            </div>
            <img
              src={familyImage}
              alt="Семья выбирает новый автомобиль"
              className="hidden h-48 w-full rounded-lg object-cover md:block"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl py-10">
          <h2 className="mb-5 text-lg font-extrabold sm:text-xl">Банки-партнёры</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {banks.map((bank, index) => (
              <div
                key={bank}
                className="flex h-16 items-center justify-center rounded-md bg-neutral-100 px-3 text-center text-[10px] font-extrabold"
                style={{ color: ["#20a344", "#0864a8", "#c9262d", "#279d47", "#2563a6"][index] }}>
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
