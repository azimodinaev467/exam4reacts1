import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";
import taxiSide from "../assets/e506fdcd96278963551ca354ff634238a0521dd3.png";
import taxiFront from "../assets/c37e0a7de2aafa0e72c8f431622d296903e11412.png";
import cityImage from "../assets/6a51abd5fafc8fa24e27bc650a24e5ba880251f1.jpg";
import noDownPaymentIcon from "../assets/Group (6).png";
import taxiIcon from "../assets/Group (7).png";
import documentsIcon from "../assets/Frame (17).png";
import mechanicIcon from "../assets/Frame (18).png";

const advantages = [
  { icon: noDownPaymentIcon, label: "0% первый взнос" },
  { icon: mechanicIcon, label: "Одобрение кредита за 15–30 минут" },
  { icon: documentsIcon, label: "Минимум документов для подачи заявки" },
  { icon: taxiIcon, label: "Trade-in в зачёт первоначального взноса" },
  { icon: taxiIcon, label: "Оклейка и брендирование в подарок" },
  { icon: mechanicIcon, label: "Помощь в оформлении документов" },
  { icon: documentsIcon, label: "Комплект резины в подарок" },
  { icon: noDownPaymentIcon, label: "Помощь с оформлением лицензии" },
];

const vehicles = [
  {
    name: "Lada Granta Liftback New",
    className: "Эконом",
    price: 1221100,
    payment: 820,
    image: taxiSide,
  },
  {
    name: "Lada Granta Sedan",
    className: "Эконом",
    price: 1190000,
    payment: 790,
    image: taxiFront,
  },
  {
    name: "Lada Vesta Comfort",
    className: "Комфорт",
    price: 1680000,
    payment: 1120,
    image: taxiSide,
  },
  {
    name: "Lada Granta Liftback New",
    className: "Эконом",
    price: 1221100,
    payment: 820,
    image: taxiFront,
  },
  {
    name: "Lada Vesta Comfort",
    className: "Комфорт",
    price: 1680000,
    payment: 1120,
    image: taxiSide,
  },
  {
    name: "Lada Granta Sedan",
    className: "Эконом",
    price: 1190000,
    payment: 790,
    image: taxiFront,
  },
];

const banks = ["СБЕРБАНК", "ВТБ", "Альфа-Банк", "СОВКОМБАНК"];
const vehicleClasses = ["Все", "Эконом", "Комфорт", "Комфорт+"];

function FormInput({ label, type = "text", required = true }) {
  return (
    <label className="block min-w-0 text-[10px] text-neutral-500">
      {label}
      <input
        required={required}
        type={type}
        placeholder={label}
        className="mt-1 h-10 w-full rounded border border-neutral-200 bg-neutral-100 px-3 text-xs text-neutral-800 outline-none focus:border-red-500"
      />
    </label>
  );
}

export default function Taksikridit() {
  const [vehicleClass, setVehicleClass] = useState("Все");
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [loanYears, setLoanYears] = useState(7);
  const [city, setCity] = useState("Москва");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [calcSubmitted, setCalcSubmitted] = useState(false);

  const visibleVehicles = useMemo(
    () =>
      vehicleClass === "Все"
        ? vehicles
        : vehicles.filter((vehicle) => vehicle.className === vehicleClass),
    [vehicleClass]
  );

  const monthlyPayment = Math.ceil(selectedVehicle.price / (loanYears * 12));

  function chooseVehicle(vehicle) {
    setSelectedVehicle(vehicle);
    document.getElementById("taxi-calculator")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main>
        <section className="relative isolate mx-auto mt-4 grid min-h-[390px] max-w-7xl overflow-hidden rounded-xl bg-[#ffc800] px-5 py-8 sm:px-10 md:min-h-[410px] md:grid-cols-2 md:items-center md:px-14">
          <img
            src={cityImage}
            alt="Город для поездок на такси"
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#ffd21a]/95 via-[#ffd21a]/75 to-[#ffd21a]/20" />
          <div className="relative z-10 max-w-xl">
            <p className="mb-3 text-[10px] font-semibold text-neutral-700">
              Главная　›　Такси в кредит
            </p>
            <h1 className="m-0 max-w-lg text-3xl font-extrabold leading-tight text-neutral-950 sm:text-4xl">
              Специальное предложение на покупку авто под такси
            </h1>
            <div className="mt-5 grid max-w-md grid-cols-2 gap-x-5 gap-y-3 text-[10px] font-semibold sm:text-xs">
              {[
                "Льготный автокредит от 1,9%",
                "Оклейка авто в подарок",
                "Акция действует до 13 ноября",
                "Первоначальный взнос от 0%",
              ].map((item) => (
                <p key={item} className="m-0 flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-600 text-[10px] text-white">
                    ✓
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <img
            src={taxiSide}
            alt="Жёлтый автомобиль для работы в такси"
            className="relative z-10 mx-auto mt-5 h-48 w-full object-contain md:absolute md:bottom-5 md:right-0 md:mt-0 md:h-[88%] md:w-[58%]"
          />
        </section>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            setHeroSubmitted(true);
          }}
          className="relative z-20 mx-auto -mt-7 grid max-w-5xl gap-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg sm:grid-cols-[1fr_1fr_1fr_1.1fr] sm:items-center sm:p-5">
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
          <FormInput label="Ваше имя" />
          <FormInput label="Ваш телефон" type="tel" />
          <div>
            <button className="h-10 w-full rounded bg-red-600 px-3 text-[9px] font-bold text-white hover:bg-red-700">
              ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ
            </button>
            <p className="mt-2 mb-0 text-[8px] text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
            {heroSubmitted && (
              <p className="mt-1 mb-0 text-[9px] font-semibold text-green-700">
                Заявка принята, мы скоро позвоним.
              </p>
            )}
          </div>
        </form>

        <section className="mx-auto max-w-5xl px-4 py-9 sm:px-5 sm:py-11">
          <p className="mx-auto mb-8 max-w-2xl text-center text-xs leading-relaxed text-neutral-600">
            Хочешь начать зарабатывать на себе? Приобретай собственное такси и получай специальные
            условия на покупку, оформление и выход на линию.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.label} className="flex flex-col items-center text-center">
                <div className="grid h-12 w-14 place-items-center">
                  <img src={advantage.icon} alt="" className="max-h-11 max-w-12 object-contain" />
                </div>
                <p className="mt-2 mb-0 max-w-36 text-[9px] leading-relaxed text-neutral-700">
                  {advantage.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="taxi-cars" className="mx-auto max-w-7xl px-4 py-5 sm:px-5">
          <div className="mb-6 flex items-center gap-4">
            <div className="hidden h-3 flex-1 bg-[repeating-linear-gradient(135deg,#171717_0_10px,#171717_10px_20px,#ffd21a_20px_30px,#ffd21a_30px_40px)] sm:block" />
            <h2 className="m-0 shrink-0 text-center text-lg font-extrabold sm:text-xl">
              Автомобили для такси в наличии
            </h2>
            <div className="hidden h-3 flex-1 bg-[repeating-linear-gradient(135deg,#171717_0_10px,#171717_10px_20px,#ffd21a_20px_30px,#ffd21a_30px_40px)] sm:block" />
          </div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap gap-1 rounded-full bg-neutral-100 p-1">
              {vehicleClasses.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setVehicleClass(item)}
                  className={`rounded-full px-3 py-2 text-[10px] font-semibold ${vehicleClass === item ? "bg-red-600 text-white" : "text-neutral-700 hover:bg-white"}`}>
                  {item}
                </button>
              ))}
            </div>
            <label className="ml-auto flex items-center gap-2 text-[10px] text-neutral-500">
              Город
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="h-9 rounded border border-neutral-200 bg-white px-3 text-xs text-neutral-700">
                {["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleVehicles.map((vehicle, index) => (
              <article
                key={`${vehicle.name}-${index}`}
                className="overflow-hidden rounded-lg border border-neutral-200 bg-white">
                <div className="relative flex h-40 items-center justify-center bg-neutral-50 p-3">
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-200 px-2 py-1 text-[8px] font-bold uppercase">
                    {vehicle.className}
                  </span>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="m-0 text-sm font-extrabold">{vehicle.name}</h3>
                  <p className="mt-1 mb-0 text-[10px] text-neutral-500">
                    от {vehicle.price.toLocaleString("ru-RU")} ₽　•　{city}
                  </p>
                  <p className="mt-2 mb-3 text-base font-extrabold">
                    от {vehicle.payment.toLocaleString("ru-RU")} ₽/день
                  </p>
                  <ul className="mb-4 mt-0 grid list-none gap-1 p-0 text-[9px] text-neutral-600">
                    <li>
                      <span className="mr-2 text-red-600">●</span>Участие в программе льготного
                      кредитования
                    </li>
                    <li>
                      <span className="mr-2 text-red-600">●</span>Оклейка и брендирование такси
                    </li>
                    <li>
                      <span className="mr-2 text-red-600">●</span>Помощь с оформлением документов
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => chooseVehicle(vehicle)}
                      className="h-9 rounded bg-neutral-100 text-[9px] font-bold hover:bg-neutral-200">
                      ПОДРОБНЕЕ
                    </button>
                    <button
                      type="button"
                      onClick={() => chooseVehicle(vehicle)}
                      className="h-9 rounded bg-red-600 text-[9px] font-bold text-white hover:bg-red-700">
                      ОСТАВИТЬ ЗАЯВКУ
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 text-center">
            <button
              type="button"
              onClick={() => setVehicleClass("Все")}
              className="rounded bg-red-600 px-6 py-3 text-[10px] font-bold text-white hover:bg-red-700">
              ПОКАЗАТЬ ВСЕ
            </button>
          </div>
        </section>

        <section className="relative mx-auto mt-10 grid max-w-6xl gap-4 overflow-hidden rounded-xl bg-neutral-900 px-5 py-7 text-white sm:px-8 md:grid-cols-[1fr_1fr_1fr] md:items-center">
          <div>
            <h2 className="m-0 max-w-xs text-xl font-extrabold sm:text-2xl">
              Сколько можно заработать на такси?
            </h2>
            <p className="mt-2 mb-0 text-[10px] leading-relaxed text-white/60">
              Подберите комфортный график и оцените примерный доход до оформления автомобиля.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[9px]">
            <div className="rounded bg-white/5 p-3">
              <p className="m-0 font-bold text-green-400">СВОЁ ТАКСИ</p>
              <p className="mt-2 mb-0 text-white/65">
                Свободный график
                <br />
                Контроль расходов
                <br />
                Автомобиль остаётся у вас
              </p>
            </div>
            <div className="rounded bg-white/5 p-3">
              <p className="m-0 font-bold text-red-400">АРЕНДА ТАКСИ</p>
              <p className="mt-2 mb-0 text-white/65">
                Регулярная аренда
                <br />
                Ограничения по пробегу
                <br />
                Автомобиль не ваш
              </p>
            </div>
          </div>
          <img
            src={taxiSide}
            alt="Жёлтый автомобиль такси"
            className="mx-auto h-32 w-full object-contain md:absolute md:bottom-0 md:right-0 md:w-1/3"
          />
        </section>

        <section id="taxi-calculator" className="mx-auto max-w-5xl px-4 py-12 sm:px-5">
          <h2 className="mb-7 text-center text-xl font-extrabold">Кредитный калькулятор</h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setCalcSubmitted(true);
            }}
            className="mx-auto max-w-xl rounded-xl border border-neutral-200 bg-white p-4 sm:p-6">
            <label className="mb-4 block text-xs font-semibold text-neutral-700">
              Выберите класс автомобиля
              <select
                value={selectedVehicle.className}
                onChange={(event) =>
                  setSelectedVehicle(
                    vehicles.find((vehicle) => vehicle.className === event.target.value) ||
                      vehicles[0]
                  )
                }
                className="mt-2 h-10 w-full rounded border border-neutral-200 px-3 text-xs font-normal">
                {[...new Set(vehicles.map((vehicle) => vehicle.className))].map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <div className="mb-4 rounded-lg bg-neutral-100 p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="m-0 text-[10px] font-bold">{selectedVehicle.name}</p>
                  <p className="mt-1 mb-0 text-[9px] text-neutral-500">
                    от {selectedVehicle.price.toLocaleString("ru-RU")} ₽
                  </p>
                  <p className="mt-2 mb-0 text-sm font-extrabold text-red-600">
                    от {monthlyPayment.toLocaleString("ru-RU")} ₽/мес.
                  </p>
                </div>
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="h-20 w-40 object-contain"
                />
              </div>
            </div>
            <label className="mb-4 block text-xs font-semibold text-neutral-700">
              Срок кредита, лет <span className="float-right">{loanYears} лет</span>
              <input
                type="range"
                min="1"
                max="7"
                value={loanYears}
                onChange={(event) => setLoanYears(Number(event.target.value))}
                className="mt-2 w-full accent-red-600"
              />
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <FormInput label="Ваше имя" />
              <FormInput label="Ваш телефон" type="tel" />
            </div>
            <button className="mt-4 h-11 w-full rounded bg-red-600 text-[10px] font-bold text-white hover:bg-red-700">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <p className="mt-2 mb-0 text-[8px] text-neutral-400">
              Расчёт предварительный. Итоговые условия уточняйте у специалиста.
            </p>
            {calcSubmitted && (
              <p className="mt-2 mb-0 text-xs font-semibold text-green-700">
                Заявка принята, менеджер свяжется с вами.
              </p>
            )}
          </form>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-5">
          <h2 className="mb-4 text-lg font-extrabold">Таблица дохода</h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full min-w-[560px] border-collapse text-left text-[10px]">
              <thead className="bg-neutral-100 text-neutral-700">
                <tr>
                  {["Класс автомобиля", "Москва", "Санкт-Петербург", "Город-миллионник"].map(
                    (item) => (
                      <th key={item} className="px-3 py-3 font-bold">
                        {item}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                <tr className="border-t border-neutral-200">
                  <td className="px-3 py-3 font-semibold">Эконом</td>
                  <td className="px-3 py-3">от 70 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 65 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 50 000 ₽/мес.</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="px-3 py-3 font-semibold">Комфорт</td>
                  <td className="px-3 py-3">от 90 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 80 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 65 000 ₽/мес.</td>
                </tr>
                <tr className="border-t border-neutral-200">
                  <td className="px-3 py-3 font-semibold">Комфорт+</td>
                  <td className="px-3 py-3">от 110 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 95 000 ₽/мес.</td>
                  <td className="px-3 py-3">от 75 000 ₽/мес.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-5">
          <h2 className="mb-5 text-lg font-extrabold">Банки-партнёры</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {banks.map((bank, index) => (
              <div
                key={bank}
                className="flex h-16 items-center justify-center rounded-md bg-neutral-100 px-3 text-center text-[10px] font-extrabold"
                style={{ color: ["#20a344", "#0864a8", "#c9262d", "#279d47"][index] }}>
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
