import { useState } from "react";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import heroImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";
import familyImage from "../assets/a139c33ae8001b69468897acd423648976d9acba.jpg";
import carImage from "../assets/e799b25bc8fb345bbe5b25f65fd8a19636fcc97e.png";

const advantages = [
  ["0%", "Первоначальный взнос"],
  ["30 мин", "Ответ по заявке"],
  ["от 1,9%", "Ставка по кредиту"],
  ["до 25%", "Выгода по программе"],
];

const loanBenefits = [
  ["0%", "Первоначальный взнос от 0%"],
  ["1,9%", "Ставка по кредиту от 1,9%"],
  ["36 мес.", "Срок кредитования от 3 лет"],
  ["до 300 000 ₽", "Размер выгоды по программе"],
  ["✓", "Подбор программы под ваши задачи"],
  ["30 мин", "Предварительное решение банка"],
];

const banks = ["СБЕРБАНК", "ВТБ", "Альфа-Банк", "СОВКОМБАНК", "РОСБАНК"];

function Field({ label, children }) {
  return (
    <label className="block min-w-0 text-[10px] text-neutral-500">
      {label}
      {children || (
        <input
          aria-label={label}
          placeholder={label}
          className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-800 outline-none focus:border-red-500"
        />
      )}
    </label>
  );
}

export default function MedicalWorkers() {
  const [term, setTerm] = useState(36);
  const [tradeInOpen, setTradeInOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-3 pb-12 sm:px-5">
        <section className="relative isolate mt-4 min-h-[310px] overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[350px]">
          <img
            src={heroImage}
            alt="Покупательница выбирает автомобиль"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950/75 via-neutral-950/35 to-transparent" />
          <div className="relative z-10 max-w-2xl px-5 pb-10 pt-7 text-white sm:px-10 sm:py-9">
            <p className="mb-2 text-[10px] text-white/75">
              Главная　›　Кредит и рассрочка　›　Работникам медицины
            </p>
            <h1 className="m-0 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl">
              Работникам медицины
            </h1>
            <p className="mt-1 mb-0 text-xs font-semibold text-white/85">
              Компенсация от 10% до 25%*
            </p>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-red-600 px-4 py-2">
              <span className="text-2xl font-extrabold sm:text-3xl">от 1,9%</span>
              <span className="text-[9px] leading-tight">
                без первоначального
                <br />
                взноса
              </span>
            </div>
            <p className="mt-2 mb-0 text-2xl font-extrabold">
              −10% <span className="text-[9px] font-normal">от стоимости автомобиля</span>
            </p>
          </div>
        </section>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
          className="relative z-20 mx-auto -mt-7 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:grid-cols-[1fr_1fr_1fr_1.1fr] sm:items-center sm:p-5">
          <div>
            <p className="m-0 text-sm font-bold leading-tight">
              Получите
              <br />
              специальную цену
            </p>
            <p className="mt-2 mb-0 inline-block rounded-full bg-red-600 px-2 py-1 text-[9px] font-bold text-white">
              Для работников медицины
            </p>
          </div>
          <input
            required
            aria-label="Ваше имя"
            placeholder="Ваше имя"
            className="h-10 min-w-0 rounded border border-neutral-200 bg-neutral-50 px-3 text-xs"
          />
          <input
            required
            aria-label="Ваш телефон"
            type="tel"
            placeholder="Ваш телефон"
            className="h-10 min-w-0 rounded border border-neutral-200 bg-neutral-50 px-3 text-xs"
          />
          <div>
            <button className="h-10 w-full rounded bg-red-600 px-3 text-[9px] font-bold text-white hover:bg-red-700">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
            <p className="mt-2 mb-0 text-[8px] text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
            {submitted && (
              <p className="mt-1 mb-0 text-[9px] font-semibold text-green-700">
                Заявка подготовлена. Менеджер свяжется с вами.
              </p>
            )}
          </div>
        </form>

        <section className="mx-auto max-w-5xl py-9 sm:py-11">
          <h2 className="mb-7 text-center text-xl font-extrabold sm:text-2xl">
            Преимущества программы
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
            {advantages.map(([value, label]) => (
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
          <div className="rounded-xl bg-neutral-100 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
                1
              </span>
              <h2 className="m-0 text-sm font-extrabold">Ваш будущий автомобиль</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div className="grid gap-2">
                {["Марка", "Модель", "Комплектация"].map((label, index) => (
                  <Field key={label} label={label}>
                    <select
                      aria-label={label}
                      defaultValue=""
                      className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-700">
                      <option value="">{label}</option>
                      <option>{["Kia", "Rio", "Comfort"][index]}</option>
                    </select>
                  </Field>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3">
                <img
                  src={carImage}
                  alt="Автомобиль для покупки"
                  className="h-28 w-2/3 object-contain"
                />
                <div className="text-right">
                  <p className="m-0 text-[9px] text-neutral-500">Kia Comfort 1.4</p>
                  <p className="m-0 text-[9px] text-neutral-500">Цена автомобиля</p>
                  <p className="m-0 text-lg font-extrabold">2 200 000 ₽</p>
                  <p className="mt-2 mb-0 text-[9px] text-neutral-500">Выгода по программе</p>
                  <p className="m-0 text-sm font-bold text-red-600">до 300 000 ₽</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-neutral-100 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
                2
              </span>
              <h2 className="m-0 text-sm font-extrabold">Купить в кредит</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-[10px] text-neutral-600">
                Срок кредита, месяцев{" "}
                <span className="float-right font-bold text-neutral-800">{term} мес.</span>
                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={term}
                  onChange={(event) => setTerm(Number(event.target.value))}
                  className="mt-3 w-full accent-red-600"
                />
                <span className="flex justify-between text-[8px] text-neutral-400">
                  <span>6</span>
                  <span>12</span>
                  <span>24</span>
                  <span>48</span>
                  <span>84</span>
                </span>
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Первоначальный взнос">
                  <select
                    aria-label="Первоначальный взнос"
                    defaultValue=""
                    className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs">
                    <option value="">от 0%</option>
                    <option>10%</option>
                    <option>20%</option>
                  </select>
                </Field>
                <Field label="Платёж в месяц">
                  <input
                    aria-label="Платёж в месяц"
                    readOnly
                    value="Рассчитаем после заявки"
                    className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-[10px]"
                  />
                </Field>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[8px] text-neutral-600">
              <span className="mr-1 font-semibold">Выберите банк:</span>
              {banks.map((bank) => (
                <span key={bank} className="rounded bg-white px-3 py-2 font-bold">
                  {bank}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl bg-neutral-100">
            <button
              type="button"
              onClick={() => setTradeInOpen(!tradeInOpen)}
              aria-expanded={tradeInOpen}
              className="flex w-full items-center gap-3 p-4 text-left sm:p-5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-neutral-400 text-sm font-bold text-white">
                {tradeInOpen ? "−" : "+"}
              </span>
              <span className="text-sm font-extrabold text-neutral-500">Программа Trade-in</span>
              <span className="rounded bg-red-600 px-3 py-1 text-[9px] font-bold text-white">
                {tradeInOpen ? "СКРЫТЬ" : "ДОБАВИТЬ"}
              </span>
            </button>
            {tradeInOpen && (
              <div className="grid gap-3 px-4 pb-5 sm:grid-cols-2 sm:px-14">
                <Field label="Марка автомобиля" />
                <Field label="Год выпуска" />
                <Field label="Модель" />
                <Field label="Коробка передач" />
              </div>
            )}
          </div>

          <div className="rounded-xl bg-neutral-100 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
                3
              </span>
              <h2 className="m-0 text-sm font-extrabold">Персональные данные</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Ваше имя" />
              <Field label="Выберите подарок">
                <select
                  aria-label="Выберите подарок"
                  defaultValue=""
                  className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs">
                  <option value="">Выберите подарок</option>
                  <option>Комплект зимних шин</option>
                  <option>Сервисная карта</option>
                </select>
              </Field>
              <Field label="Номер телефона">
                <input
                  required
                  type="tel"
                  aria-label="Номер телефона"
                  placeholder="Номер телефона"
                  className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs"
                />
              </Field>
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="h-10 rounded bg-red-600 px-3 text-[9px] font-bold text-white hover:bg-red-700">
                ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ
              </button>
            </div>
            {submitted && (
              <p className="mt-3 mb-0 text-[10px] font-semibold text-green-700">
                Заявка подготовлена. Менеджер свяжется с вами.
              </p>
            )}
            <p className="mt-3 mb-0 text-[8px] text-neutral-500">
              * Размер компенсации и доступность программы зависят от действующих условий и
              выбранного автомобиля.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl py-10 sm:py-12">
          <h2 className="mb-5 text-lg font-extrabold sm:text-xl">Преимущества автокредита</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {loanBenefits.map(([value, label]) => (
              <div
                key={label}
                className="flex min-h-20 items-center gap-3 rounded-lg bg-neutral-100 p-3">
                <span className="min-w-12 text-xl font-extrabold text-red-600">{value}</span>
                <span className="text-[9px] text-neutral-600">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-7 border-t border-neutral-100 pt-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 mt-0 text-sm font-extrabold">Условия покупки</h3>
              <ul className="m-0 grid list-none gap-2 p-0 text-[10px] text-neutral-600 sm:grid-cols-2">
                {[
                  "Гражданство РФ",
                  "Возраст от 18 лет",
                  "Трудоустройство в медицинской организации",
                  "Новый автомобиль по программе",
                  "Первоначальный взнос от 0%",
                  "Подтверждение права на участие",
                ].map((item) => (
                  <li key={item}>
                    <span className="mr-2 text-red-600">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 mt-0 text-sm font-extrabold">Необходимые документы</h3>
              <p className="m-0 text-[10px] text-neutral-600">●　Паспорт</p>
              <p className="mt-2 mb-0 text-[10px] text-neutral-600">
                ●　Документ, подтверждающий работу в медицинской организации
              </p>
            </div>
          </div>
        </section>

        <section className="relative isolate grid min-h-56 overflow-hidden rounded-xl bg-neutral-100 md:grid-cols-2 md:items-center">
          <img
            src={familyImage}
            alt="Семья у автомобиля"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/10" />
          <div className="relative z-10 p-5 sm:p-8 md:max-w-xl md:pl-10">
            <h2 className="m-0 text-xl font-extrabold sm:text-2xl">
              Выберите автомобиль для всей семьи
            </h2>
            <p className="mt-3 mb-0 max-w-md text-xs leading-relaxed text-neutral-600">
              Оставьте заявку, чтобы узнать персональные условия кредита для работников медицины.
            </p>
          </div>
          <a
            href="tel:+78005519431"
            className="relative z-10 mx-5 mb-5 inline-flex w-fit rounded bg-red-600 px-4 py-3 text-[10px] font-bold text-white no-underline hover:bg-red-700 md:mx-0 md:mb-0">
            ПОЗВОНИТЬ: +7 (800) 551-94-31
          </a>
        </section>

        <section className="mx-auto max-w-5xl py-10">
          <h2 className="mb-5 text-lg font-extrabold">Банки-партнёры</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {banks.map((bank, index) => (
              <div
                key={bank}
                className="flex h-14 items-center justify-center rounded-md bg-neutral-100 px-2 text-center text-[10px] font-extrabold"
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
