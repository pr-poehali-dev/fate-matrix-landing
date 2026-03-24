import Icon from "@/components/ui/icon";

const SPECIALIST_IMG = "https://cdn.poehali.dev/projects/b45c8ccb-8372-4eb8-bfe9-ae55c3d11b73/bucket/cbdc6e76-46b1-4360-9de2-aefdec9033a5.jpeg";

const advantages = [
  { icon: "Compass", title: "Индивидуальный расчёт", text: "Матрица строится по дате вашего рождения — уникальная карта личности, которой нет ни у кого другого." },
  { icon: "Eye", title: "Глубокий анализ", text: "Раскрываем ключевые энергии, таланты, кармические задачи и потенциал развития на всех уровнях жизни." },
  { icon: "Heart", title: "Практические решения", text: "Получаете конкретные рекомендации — как действовать в отношениях, карьере, здоровье и финансах." },
  { icon: "Star", title: "Осознанный путь", text: "Понимание своей матрицы позволяет принимать решения в согласии с собственной природой." },
];

export default function AboutPricing() {
  return (
    <>
      {/* ADVANTAGES */}
      <section className="py-28 bg-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>Почему выбирают нас</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light">
              Преимущества<br />консультации
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="border border-[#e8e5de] p-8 h-full hover:border-[hsl(42,55%,52%)] transition-colors duration-300">
                  <div className="w-10 h-10 flex items-center justify-center mb-6">
                    <Icon name={a.icon} fallback="Circle" size={22} className="text-[hsl(42,55%,52%)]" />
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-light mb-3 text-[#141414]">{a.title}</h3>
                  <p className="text-[#777] text-sm leading-relaxed font-light">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST */}
      <section className="py-28 bg-[#edeae3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal order-2 md:order-1">
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>О специалисте</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl font-light mb-8 leading-tight">
                Ксения Прайд
              </h2>
              <div className="w-12 h-px mb-8" style={{ backgroundColor: "hsl(42,55%,52%)" }} />
              <p className="text-[#555] font-light leading-relaxed mb-6">
                Начала практику в 2025 году и уже помогла более 100 клиентам глубже понять себя
                через расчёт матрицы судьбы.
              </p>
              <p className="text-[#555] font-light leading-relaxed mb-10">
                Клиенты активно применяют рекомендации в жизни — в отношениях, карьере
                и личностном росте — и отмечают реальные изменения к лучшему.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "2025", label: "год начала практики" },
                  { num: "100+", label: "консультаций" },
                  { num: "100%", label: "довольных клиентов" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-3xl font-light">{stat.num}</div>
                    <div className="text-xs text-[#888] mt-1 font-light tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal order-1 md:order-2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border opacity-30" style={{ borderColor: "hsl(42,55%,52%)" }} />
                <img
                  src={SPECIALIST_IMG}
                  alt="Ксения Прайд — специалист по матрице судьбы"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#edeae3] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 bg-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>Стоимость</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light">
              Форматы и цены
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="reveal border border-[#e8e5de] p-10 hover:border-[hsl(42,55%,52%)] transition-colors duration-300 flex flex-col">
              <div className="mb-6">
                <p className="text-xs tracking-[0.25em] uppercase text-[#aaa] mb-3">Полный разбор</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light text-[#141414] mb-1">Матрица судьбы</h3>
              </div>
              <div className="w-8 h-px mb-8" style={{ backgroundColor: "hsl(42,55%,52%)" }} />
              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "Текстовый формат — более 50 страниц",
                  "Аудио формат — 60 минут",
                  "Все сферы жизни в одном разборе",
                  "Отношения, карьера, здоровье, таланты",
                  "Кармические задачи и рекомендации",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#555] font-light">
                    <span style={{ color: "hsl(42,55%,52%)" }} className="mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-end justify-between">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-5xl font-light">3 000 ₽</div>
                <a href="#contact" className="bg-[#141414] text-[#f7f6f3] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[hsl(42,55%,42%)] transition-all duration-300">
                  Записаться
                </a>
              </div>
            </div>

            <div className="reveal border border-[#e8e5de] p-10 hover:border-[hsl(42,55%,52%)] transition-colors duration-300 flex flex-col" style={{ transitionDelay: "0.12s" }}>
              <div className="mb-6">
                <p className="text-xs tracking-[0.25em] uppercase text-[#aaa] mb-3">Точечный разбор</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light text-[#141414] mb-1">Один блок на выбор</h3>
              </div>
              <div className="w-8 h-px mb-8" style={{ backgroundColor: "hsl(42,55%,52%)" }} />
              <ul className="space-y-3 mb-6 flex-1">
                {[
                  "Текстовый формат",
                  "Глубокий анализ одной сферы",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#555] font-light">
                    <span style={{ color: "hsl(42,55%,52%)" }} className="mt-0.5 flex-shrink-0">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Отношения", "Карьера", "Зона комфорта", "Визитная карточка", "Таланты", "Карма", "Карта здоровья"].map((tag) => (
                  <span key={tag} className="border border-[#e8e5de] text-[#888] text-xs px-3 py-1 tracking-wide">{tag}</span>
                ))}
              </div>
              <div className="flex items-end justify-between">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-5xl font-light">500 ₽</div>
                <a href="#contact" className="bg-[#141414] text-[#f7f6f3] px-8 py-3 text-xs tracking-widest uppercase hover:bg-[hsl(42,55%,42%)] transition-all duration-300">
                  Записаться
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
