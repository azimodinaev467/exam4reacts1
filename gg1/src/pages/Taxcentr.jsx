import { Link } from "react-router-dom";
import { SiteFooter } from "./Home";
import { UsedCarsHeader } from "./UsedCars";

const services = [
  {
    title: "Кузовной ремонт",
    description:
      "Восстановление кузова после повреждений, локальная покраска и ремонт деталей с подбором цвета.",
  },
  {
    title: "Слесарный ремонт",
    description:
      "Диагностика и ремонт основных узлов автомобиля с согласованием работ до начала обслуживания.",
  },
  {
    title: "Шиномонтаж",
    description: "Сезонная замена шин, балансировка колёс и проверка состояния резины.",
  },
  {
    title: "Диагностика",
    description:
      "Проверка электронных систем и основных компонентов автомобиля перед ремонтом или поездкой.",
  },
  {
    title: "Замена масла",
    description:
      "Подбор моторного масла и фильтров с учётом марки, модели и рекомендаций производителя.",
  },
  {
    title: "Техническое обслуживание",
    description:
      "Плановые работы по регламенту: проверка систем, расходников и технических жидкостей.",
  },
  {
    title: "Сход-развал",
    description:
      "Проверка и регулировка углов установки колёс для стабильного управления и равномерного износа шин.",
  },
  {
    title: "Подбор запчастей",
    description: "Помощь в подборе деталей и расходных материалов по VIN-коду автомобиля.",
  },
  {
    title: "Продление страховых полисов",
    description: "Консультация по продлению ОСАГО и другим страховым продуктам для автомобиля.",
  },
];

export default function Taxcentr() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <UsedCarsHeader />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <p className="mb-2 text-[10px] text-neutral-500">
          <Link to="/" className="text-neutral-500 no-underline">
            Главная
          </Link>
          <span className="mx-2">/</span>
          Техцентр
        </p>
        <h1 className="m-0 border-b border-neutral-100 pb-4 text-3xl font-extrabold sm:text-4xl">
          Техцентр
        </h1>
        <p className="mt-5 max-w-4xl text-xs leading-relaxed text-neutral-700 sm:text-sm">
          Специалисты техцентра выполняют плановое обслуживание и ремонт автомобилей. Перед началом
          работ мы проводим диагностику, объясняем, что необходимо сделать, и согласовываем
          стоимость. Вы можете записаться на удобное время и получить консультацию по телефону.
        </p>

        <section
          aria-label="Услуги техцентра"
          className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="min-w-0">
              <h2 className="mb-2 mt-0 flex items-center gap-3 text-sm font-extrabold sm:text-base">
                <span className="h-0.5 w-5 shrink-0 bg-red-600" />
                {service.title}
              </h2>
              <p className="m-0 pl-8 text-[10px] leading-relaxed text-neutral-600 sm:text-xs">
                {service.description}
              </p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter showMap={false} />
    </div>
  );
}
