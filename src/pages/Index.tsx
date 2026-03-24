import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const SPECIALIST_IMG = "https://cdn.poehali.dev/projects/b45c8ccb-8372-4eb8-bfe9-ae55c3d11b73/bucket/cbdc6e76-46b1-4360-9de2-aefdec9033a5.jpeg";

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function MatrixSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full animate-rotate-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.8" className="matrix-line" />
      <rect x="110" y="110" width="180" height="180" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.5" opacity="0.5" className="matrix-line" />
      <rect x="140" y="140" width="120" height="120" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.5" opacity="0.3" className="matrix-line" />
      <line x1="200" y1="30" x2="200" y2="370" stroke="hsl(42,55%,52%)" strokeWidth="0.4" opacity="0.3" className="matrix-line" />
      <line x1="30" y1="200" x2="370" y2="200" stroke="hsl(42,55%,52%)" strokeWidth="0.4" opacity="0.3" className="matrix-line" />
      <line x1="50" y1="50" x2="350" y2="350" stroke="hsl(42,55%,52%)" strokeWidth="0.3" opacity="0.2" className="matrix-line" />
      <line x1="350" y1="50" x2="50" y2="350" stroke="hsl(42,55%,52%)" strokeWidth="0.3" opacity="0.2" className="matrix-line" />
      <circle cx="200" cy="200" r="8" fill="hsl(42,55%,52%)" opacity="0.9" />
      <circle cx="200" cy="30" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="200" cy="370" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="30" cy="200" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="370" cy="200" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="80" cy="80" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="320" cy="80" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="80" cy="320" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="320" cy="320" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
    </svg>
  );
}

function MatrixSmall() {
  return (
    <svg viewBox="0 0 120 120" className="w-8 h-8 opacity-60" fill="none">
      <rect x="20" y="20" width="80" height="80" transform="rotate(45 60 60)" stroke="hsl(42,55%,52%)" strokeWidth="1.5" />
      <rect x="35" y="35" width="50" height="50" transform="rotate(45 60 60)" stroke="hsl(42,55%,52%)" strokeWidth="1" opacity="0.6" />
      <circle cx="60" cy="60" r="5" fill="hsl(42,55%,52%)" />
    </svg>
  );
}

const advantages = [
  { icon: "Compass", title: "Индивидуальный расчёт", text: "Матрица строится по дате вашего рождения — уникальная карта личности, которой нет ни у кого другого." },
  { icon: "Eye", title: "Глубокий анализ", text: "Раскрываем ключевые энергии, таланты, кармические задачи и потенциал развития на всех уровнях жизни." },
  { icon: "Heart", title: "Практические решения", text: "Получаете конкретные рекомендации — как действовать в отношениях, карьере, здоровье и финансах." },
  { icon: "Star", title: "Осознанный путь", text: "Понимание своей матрицы позволяет принимать решения в согласии с собственной природой." },
];

const reviews = [
  { name: "Анна М.", age: "34 года", text: "После консультации наконец поняла, почему постоянно выбираю не тех партнёров. Расчёт матрицы открыл паттерны, которые я раньше не замечала. Очень точно и глубоко.", rating: 5 },
  { name: "Дмитрий К.", age: "41 год", text: "Скептически относился к этой теме, но пришёл по совету жены. Был удивлён точностью описания моего характера и профессиональных блоков. Есть над чем работать.", rating: 5 },
  { name: "Елена В.", age: "28 лет", text: "Консультация помогла разобраться с выбором профессии. Теперь знаю, в каком направлении двигаться. Очень благодарна за это ясное понимание!", rating: 5 },
];

const services = [
  { num: "01", title: "Расчёт матрицы", desc: "Построение полной персональной матрицы по дате рождения с визуализацией всех ключевых энергий." },
  { num: "02", title: "Анализ личности", desc: "Детальный разбор талантов, сильных сторон, кармических задач и основных жизненных сценариев." },
  { num: "03", title: "Расклад по сферам", desc: "Отношения, карьера, финансы, здоровье — анализ каждой сферы с конкретными рекомендациями." },
  { num: "04", title: "Прогноз на год", desc: "Анализ текущего периода и персональный прогноз развития событий на ближайший год." },
];

export default function Index() {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#141414] overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f6f3]/90 backdrop-blur-sm border-b border-[#e8e5de]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MatrixSmall />
            <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-light tracking-widest uppercase text-[#141414]">
              Матрица Судьбы
            </span>
          </div>
          <a
            href="#contact"
            className="hidden md:block border border-[#141414] text-[#141414] text-xs tracking-wider uppercase px-6 py-2.5 hover:bg-[#141414] hover:text-[#f7f6f3] transition-all duration-300"
          >
            Записаться
          </a>
        </div>
      </nav>

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
            <p className="text-xs tracking-[0.3em] uppercase mb-6 animate-fade-up" style={{ color: "hsl(42,55%,52%)", animationDelay: "0.1s", opacity: 0, animation: "fade-up 0.8s ease-out 0.1s forwards" }}>
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

      {/* REVIEWS */}
      <section className="py-28 bg-[#141414] text-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>Реальные истории</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl font-light">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="reveal border border-[#2a2a2a] p-8 hover:border-[hsl(42,55%,52%)] transition-colors duration-300"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-sm" style={{ color: "hsl(42,55%,52%)" }}>★</span>
                  ))}
                </div>
                <p className="text-[#bbb] font-light leading-relaxed mb-8 italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}>
                  «{r.text}»
                </p>
                <div>
                  <div className="font-light text-[#f7f6f3]">{r.name}</div>
                  <div className="text-[#555] text-xs mt-1">{r.age}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="reveal">
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(42,55%,52%)" }}>Запись</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl font-light mb-6 leading-tight">
                Запишитесь на<br />консультацию
              </h2>
              <div className="w-12 h-px mb-8" style={{ backgroundColor: "hsl(42,55%,52%)" }} />
              <p className="text-[#555] font-light leading-relaxed mb-10">
                Заполните форму, и мы свяжемся с вами в течение нескольких часов 
                для подтверждения времени и формата консультации.
              </p>
              <div className="space-y-6">
                {[
                  { icon: "Clock", text: "Длительность: 60–90 минут" },
                  { icon: "Video", text: "Онлайн (Zoom / Telegram) или очно" },
                  { icon: "FileText", text: "Запись консультации в подарок" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Icon name={item.icon} fallback="Circle" size={16} className="flex-shrink-0" style={{ color: "hsl(42,55%,52%)" }} />
                    <span className="text-[#555] font-light text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              {sent ? (
                <div className="border p-12 text-center" style={{ borderColor: "hsl(42,55%,52%)" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(42,55%,52%)" }} className="text-5xl mb-4">✦</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-light mb-3">Заявка отправлена</h3>
                  <p className="text-[#777] font-light text-sm">Мы свяжемся с вами в ближайшее время</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs tracking-widest text-[#888] uppercase block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border border-[#ddd] px-5 py-3.5 text-sm font-light focus:outline-none focus:border-[#141414] transition-colors placeholder-[#bbb]"
                      placeholder="Как вас зовут"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest text-[#888] uppercase block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-[#ddd] px-5 py-3.5 text-sm font-light focus:outline-none focus:border-[#141414] transition-colors placeholder-[#bbb]"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest text-[#888] uppercase block mb-2">Дата рождения</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-transparent border border-[#ddd] px-5 py-3.5 text-sm font-light focus:outline-none focus:border-[#141414] transition-colors text-[#555]"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest text-[#888] uppercase block mb-2">Вопрос или пожелание</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border border-[#ddd] px-5 py-3.5 text-sm font-light focus:outline-none focus:border-[#141414] transition-colors resize-none placeholder-[#bbb]"
                      placeholder="Что вас волнует больше всего?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#141414] text-[#f7f6f3] py-4 text-xs tracking-widest uppercase transition-all duration-300"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "hsl(42,55%,42%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#141414")}
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-[#e8e5de] bg-[#f7f6f3]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg font-light tracking-widest text-[#888]">
            Матрица Судьбы
          </span>
          <p className="text-[#bbb] text-xs font-light">© 2024 · Все права защищены</p>
          <div className="flex gap-6">
            <a href="#service" className="text-xs text-[#888] tracking-wider uppercase hover:text-[#141414] transition-colors">Услуги</a>
            <a href="#contact" className="text-xs text-[#888] tracking-wider uppercase hover:text-[#141414] transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}