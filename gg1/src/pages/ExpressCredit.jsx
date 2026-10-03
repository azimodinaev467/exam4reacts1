import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import heroImage from "../assets/ae80fa51843c25104fe4e1e6c4078aac5d27af92.jpg";
import cityImage from "../assets/a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg";
import whiteCar from "../assets/b7a328e0f3fcc4e9491e4148ee4d03deaa69a268.png";
import redCar from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";
import creditCover from "../assets/e799b25bc8fb345bbe5b25f65fd8a19636fcc97e.png";

const benefits = [
  ["◉", "До 0%", "Первоначальный взнос"],
  ["◷", "30 минут", "Ответ банков"],
  ["%", "от 1,9%", "Ставка по кредиту"],
  ["◇", "98%", "Одобрение заявок"],
];
const perks = [
  ["0%", "Первоначальный взнос от 0%"],
  ["1,9%", "Ставка по кредиту от 1,9%"],
  ["✓", "Подбор программы под ваши задачи"],
  ["↗", "Досрочное погашение без штрафов"],
  ["♧", "Помощь специалистов на каждом этапе"],
  ["◉", "Решение по заявке за 30 минут"],
];
const banks = ["СБЕРБАНК", "ВТБ", "Альфа-Банк", "СОВКОМБАНК", "Открытие", "РОСБАНК"];
const purchaseConditions = [
  "Возраст от 18 лет",
  "Срок кредита от 6 месяцев",
  "Гражданство РФ",
  "Семейный автомобиль",
  "Автокредит для медицинских работников",
  "Скидка до 100 000 ₽ на покупку нового авто",
];

function SelectField({ label, option }) {
  return (
    <label className="block min-w-0 text-[10px] text-neutral-500">
      {label}
      <select
        defaultValue=""
        className="mt-1 h-10 w-full rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-700">
        <option value="">{label}</option>
        {option && <option>{option}</option>}
      </select>
    </label>
  );
}

function Step({ number, title, children }) {
  return (
    <div className="rounded-xl bg-neutral-100 p-4 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <p className="m-0 grid h-7 w-7 place-items-center rounded-full bg-red-600 text-xs font-bold text-white">
          {number}
        </p>
        <h2 className="m-0 text-sm font-extrabold text-neutral-800">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function ExpressCredit() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-3 pb-12 sm:px-5">
        <div className="relative isolate mt-4 min-h-[430px] overflow-hidden rounded-xl bg-neutral-800 sm:min-h-[390px]">
          <img
            src={heroImage}
            alt="Семья выбирает автомобиль"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/55 to-transparent" />
          <div className="relative z-10 max-w-xl px-5 pb-28 pt-8 text-white sm:px-9 sm:px-12">
            <p className="mb-2 text-[10px] text-white/70">
              Главная　›　Кредит и рассрочка　›　Экспресс-кредит
            </p>
            <h1 className="m-0 max-w-lg text-3xl font-extrabold leading-tight sm:text-4xl">
              Экспресс-кредит
            </h1>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-white/85 sm:text-sm">
              Воплотите мечту о новом автомобиле уже сегодня. Заполните заявку и получите решение
              онлайн.
            </p>
            <p className="mt-4 mb-0 inline-flex items-baseline gap-2 rounded-full bg-red-600 px-4 py-2">
              <span className="text-2xl font-extrabold sm:text-3xl">от 1,9%</span>
              <span className="text-[9px] leading-tight">
                по льготной
                <br />
                ставке
              </span>
            </p>
            <div className="mt-5 grid max-w-lg grid-cols-2 gap-x-4 gap-y-3 text-[9px] font-semibold sm:grid-cols-3">
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-400">●</span>Одно авто — одна заявка
              </p>
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-400">●</span>Быстрое решение
              </p>
              <p className="m-0 flex items-center gap-2">
                <span className="text-red-400">●</span>Одобрение онлайн
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto -mt-10 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:p-5 md:grid-cols-[1fr_1fr_1fr_1.15fr] md:items-center">
          <div>
            <p className="m-0 text-sm font-bold leading-tight">
              Получите
              <br />
              специальные условия
            </p>
            <p className="mt-2 mb-0 inline-block rounded-full bg-red-600 px-2 py-1 text-[9px] font-bold text-white">
              Только до 10.10.21
            </p>
          </div>
          <input
            aria-label="Ваше имя"
            placeholder="Ваше имя"
            className="h-10 min-w-0 rounded border border-neutral-200 bg-neutral-50 px-3 text-xs"
          />
          <input
            aria-label="Ваш телефон"
            type="tel"
            placeholder="Ваш телефон"
            className="h-10 min-w-0 rounded border border-neutral-200 bg-neutral-50 px-3 text-xs"
          />
          <div>
            <div className="flex h-10 items-center justify-center rounded bg-red-600 px-3 text-[9px] font-bold text-white">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </div>
            <p className="mt-2 mb-0 text-[8px] text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-5xl py-10 sm:py-12">
          <h2 className="mb-7 text-center text-xl font-extrabold sm:text-2xl">
            Преимущества программы
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-7">
            {benefits.map(([icon, value, label]) => (
              <div key={label} className="text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-red-200 text-lg font-bold text-red-600">
                  {icon}
                </div>
                <p className="mt-3 mb-0 text-sm font-extrabold">{value}</p>
                <p className="mt-1 mb-0 text-[9px] text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl space-y-4">
          <Step number="1" title="Ваш будущий автомобиль">
            <div className="grid gap-5 md:grid-cols-[1fr_1fr] md:items-center">
              <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-1">
                <SelectField label="Марка" option="Kia" />
                <SelectField label="Модель" option="Rio" />
                <SelectField label="Комплектация" option="Comfort" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <img
                  src={creditCover}
                  alt="Автомобиль для кредита"
                  className="h-28 w-2/3 object-contain"
                />
                <div className="text-right">
                  <p className="m-0 text-[9px] text-neutral-500">Цена автомобиля</p>
                  <p className="m-0 text-lg font-extrabold">2 200 000 ₽</p>
                  <p className="mt-2 mb-0 text-[9px] text-neutral-500">Первоначальный взнос</p>
                  <p className="m-0 text-sm font-bold">от 220 000 ₽</p>
                </div>
              </div>
            </div>
          </Step>
          <Step number="2" title="Купить в кредит">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-[10px] text-neutral-600">
                Срок кредита, месяцев{" "}
                <span className="float-right font-bold text-neutral-800">36 мес.</span>
                <input
                  type="range"
                  min="6"
                  max="84"
                  defaultValue="36"
                  step="6"
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
                <SelectField label="Первоначальный взнос" option="20%" />
                <SelectField label="Платёж в месяц" option="от 12 000 ₽" />
                <div className="flex h-10 items-center justify-center rounded bg-red-600 text-[9px] font-bold text-white sm:col-span-2">
                  ПОДАТЬ ЗАЯВКУ НА КРЕДИТ
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-[8px] text-neutral-500">
              {banks.slice(0, 5).map((bank) => (
                <p key={bank} className="m-0 rounded bg-white px-2 py-1">
                  {bank}
                </p>
              ))}
            </div>
          </Step>
          <Step number="3" title="Программа Trade-in">
            <div className="grid gap-2 sm:grid-cols-2">
              <SelectField label="Марка автомобиля" option="Toyota" />
              <SelectField label="Год выпуска" option="2018" />
              <SelectField label="Модель" option="Camry" />
              <SelectField label="Коробка передач" option="Автомат" />
            </div>
            <Link
              to="/trade-in"
              className="mt-4 inline-flex rounded bg-red-600 px-4 py-2 text-[9px] font-bold text-white no-underline">
              ПОДРОБНЕЕ О TRADE-IN
            </Link>
          </Step>
          <Step number="4" title="Персональные данные">
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                aria-label="Ваше имя"
                placeholder="Ваше имя"
                className="h-10 rounded border border-neutral-200 bg-white px-3 text-xs"
              />
              <SelectField label="Выберите подарок" option="Комплект зимних шин" />
              <input
                aria-label="Номер телефона"
                type="tel"
                placeholder="Номер телефона"
                className="h-10 rounded border border-neutral-200 bg-white px-3 text-xs"
              />
              <div className="flex h-10 items-center justify-center rounded bg-red-600 px-3 text-[9px] font-bold text-white">
                ПОЛУЧИТЬ ЛУЧШИЕ УСЛОВИЯ
              </div>
            </div>
          </Step>
        </section>

        <section className="mx-auto max-w-5xl py-12">
          <h2 className="mb-5 text-lg font-extrabold sm:text-xl">Преимущества автокредита</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {perks.map(([value, label]) => (
              <div
                key={label}
                className="flex min-h-20 items-center gap-3 rounded-lg bg-neutral-100 p-3">
                <p className="m-0 min-w-12 text-xl font-extrabold text-red-600">{value}</p>
                <p className="m-0 text-[9px] text-neutral-600">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-7 border-t border-neutral-100 pt-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 mt-0 text-sm font-extrabold">Условия покупки</h3>
              <div className="grid gap-2 text-[10px] text-neutral-600 sm:grid-cols-2">
                {purchaseConditions.map((item) => (
                  <p key={item} className="m-0">
                    <span className="mr-2 text-red-600">●</span>
                    {item}
                  </p>
                ))}
              </div>
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

        <section className="relative isolate grid min-h-64 overflow-hidden rounded-xl bg-neutral-100 md:grid-cols-2 md:items-center">
          <img
            src={cityImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-white/10" />
          <div className="relative z-10 p-5 sm:p-8 md:max-w-xl md:pl-10">
            <h2 className="m-0 text-2xl font-extrabold sm:text-3xl">Условия получения кредита</h2>
            <div className="mt-5 space-y-3 text-xs">
              {[
                ["Без подтверждения дохода", "Подберём программу с удобным оформлением."],
                ["Без первоначального взноса", "Уточните доступные условия у менеджера."],
                ["Без сложностей с регистрацией", "Поможем на каждом этапе оформления."],
              ].map(([title, text]) => (
                <div key={title}>
                  <p className="m-0 font-bold">
                    <span className="mr-2 text-red-600">●</span>
                    {title}
                  </p>
                  <p className="ml-5 mt-1 mb-0 text-[9px] text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 flex h-48 items-end justify-center md:h-full">
            <img
              src={whiteCar}
              alt="Белый автомобиль"
              className="absolute bottom-0 left-[5%] h-3/4 w-3/4 object-contain"
            />
            <img
              src={redCar}
              alt="Красный автомобиль"
              className="relative ml-20 h-full w-4/5 object-contain object-bottom"
            />
          </div>
        </section>

        <section className="mx-auto max-w-5xl py-12">
          <h2 className="mb-5 text-lg font-extrabold sm:text-xl">Банки-партнёры</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {banks.map((bank, index) => (
              <div
                key={bank}
                className="flex h-16 items-center justify-center rounded-md bg-neutral-100 px-3 text-center text-[10px] font-extrabold"
                style={{
                  color: ["#20a344", "#0864a8", "#c9262d", "#279d47", "#5c6570", "#2563a6"][index],
                }}>
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
