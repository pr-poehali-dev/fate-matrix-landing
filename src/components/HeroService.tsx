import { MatrixSVG } from "@/components/MatrixSVG";

const services = [
  { num: "01", title: "Расчёт матрицы", desc: "Построение полной персональной матрицы по дате рождения с визуализацией всех ключевых энергий." },
  { num: "02", title: "Анализ личности", desc: "Детальный разбор талантов, сильных сторон, кармических задач и основных жизненных сценариев." },
  { num: "03", title: "Расклад по сферам", desc: "Отношения, карьера, финансы, здоровье — анализ каждой сферы с конкретными рекомендациями." },
  { num: "04", title: "Прогноз на год", desc: "Анализ текущего периода и персональный прогноз развития событий на ближайший год." },
];

export default function HeroService() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
            <MatrixSVG />
          </div>
          <div className="absolute left-1/4 top-20 w-px h-40 bg-gradient-to-b from-transparent via-[hsl(42,55%,52%)] to-transparent opacity-30" />
          <div className="absolute right-1/3 bottom-32 w-px h-28 bg-gradient-to-b from-transparent via-[hsl(42,55%,52%)] to-transparent opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(42,55%,52%)", opacity: 0, animation: "fade-up 0.8s ease-out 0.1s forwards" }}>
              Индивидуальные консультации
            </p>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif", animation: "fade-up 0.8s ease-out 0.2s forwards", opacity: 0 }}
              className="text-6xl md:text-8xl font-light leading-none mb-8"
            >
              Познай<br />
              <em style={{ color: "hsl(42,55%,52%)" }} className="not-italic">себя</em><br />
              через число
            </h1>
            <p
              className="text-[#555] text-lg font-light leading-relaxed mb-12 max-w-lg"
              style={{ animation: "fade-up 0.8s ease-out 0.35s forwards", opacity: 0 }}
            >
              Матрица судьбы — точный инструмент самопознания.
              Узнайте свои таланты, кармические задачи и скрытый потенциал
              через индивидуальный расчёт.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" style={{ animation: "fade-up 0.8s ease-out 0.5s forwards", opacity: 0 }}>
              <a
                href="#contact"
                className="bg-[#141414] text-[#f7f6f3] px-10 py-4 text-xs tracking-widest uppercase hover:bg-[hsl(42,55%,42%)] transition-all duration-300 text-center"
              >
                Записаться на консультацию
              </a>
              <a
                href="#service"
                className="border border-[#ccc] text-[#141414] px-10 py-4 text-xs tracking-widest uppercase hover:border-[#141414] transition-all duration-300 text-center"
              >
                Узнать подробнее
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: "fade-up 0.8s ease-out 1s forwards", opacity: 0 }}>
          <span className="text-xs tracking-widest text-[#aaa] uppercase">Прокрутите</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#aaa] to-transparent" />
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="py-28 bg-[#141414] text-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>Что такое</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light">
                Матрица<br />Судьбы
              </h2>
            </div>
            <p className="text-[#888] text-base font-light max-w-xs mt-6 md:mt-0 leading-relaxed">
              Система, объединяющая нумерологию и архетипическую психологию в единый инструмент самопознания
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#2a2a2a]">
            {services.map((s, i) => (
              <div
                key={i}
                className="reveal bg-[#141414] p-10 hover:bg-[#1e1e1e] transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-4xl font-light opacity-60 group-hover:opacity-100 transition-opacity">
                    {s.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light mb-3 text-[#f7f6f3]">{s.title}</h3>
                    <p className="text-[#888] text-sm leading-relaxed font-light">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border border-[#2a2a2a] p-10 reveal">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0 w-32 h-32 relative">
                <div className="w-32 h-32 absolute inset-0 opacity-20" style={{ animation: "rotate-slow 30s linear infinite" }}>
                  <MatrixSVG />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-5xl font-light">∞</span>
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl font-light text-[#f7f6f3] mb-4">
                  Как работает расчёт
                </h3>
                <p className="text-[#888] font-light leading-relaxed max-w-xl">
                  В основе матрицы — дата вашего рождения. Каждое число несёт определённую энергию,
                  которая формирует характер, таланты и жизненные задачи. Специалист строит
                  геометрическую матрицу, расшифровывает каждый её элемент и составляет полный
                  анализ вашей личности с практическими рекомендациями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
