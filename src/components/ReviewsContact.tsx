import { useState } from "react";
import Icon from "@/components/ui/icon";

const reviews = [
  { name: "Юлия", age: "38 лет", text: "Так интересно и полезно, спасибо большое! Вот реально про меня. Чувствую, что именно в движении и путешествиях что-то начнётся. Про 18 энергию понравилось — быстро реализуются мысли. Как раз учусь мыслить позитивно!", rating: 5 },
  { name: "Ирина", age: "34 года", text: "Огромное спасибо за разбор! Было очень интересно узнать, откуда корни неосознанных поступков, реакций и мыслей. Увидела себя со стороны — это определённо полезно. Информация помогла лучше понять не только себя, но и отношения с близкими.", rating: 5 },
  { name: "Анна", age: "25 лет", text: "Вы помогли мне переосмыслить свои поступки и страхи. Помогли закрыть вопросы, которые терзали и не давали двигаться дальше. Буду прислушиваться к себе. Вы раскрыли умение гармонично строить своё будущее и быть в ресурсе. Спасибо!", rating: 5 },
  { name: "Ирина", age: "39 лет", text: "Большое спасибо, что рассказала тонкие моменты, которые спят где-то глубоко в сознании. После полученной информации пришло понимание, почему я такая восприимчивая — и всё не случайно. Теперь буду бережнее относиться к себе.", rating: 5 },
  { name: "Анастасия", age: "26 лет", text: "Рассматривала разбор про мужа — попала везде, всё точно рассказала! Подсказала, где нужно его направить и помочь. Не просто описание, а разжевала по каждому пункту. Слушала и понимала — всё совпадает!", rating: 5 },
  { name: "Марина", age: "34 года", text: "Это очень круто — пазл сложился! Теперь чётко понимаю, почему есть затык в этой сфере. Всё стало понятно. Спасибо за такую инструкцию к себе — ты подсветила, куда нужно повернуть фокус внимания. Хочу порекомендовать тебя как специалиста!", rating: 5 },
];

export default function ReviewsContact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
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
          <p className="text-[#bbb] text-xs font-light">© 2025 · Все права защищены</p>
          <div className="flex items-center gap-6">
            <a href="https://t.me/Ksenia_pride" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-[#888] tracking-wider uppercase hover:text-[#141414] transition-colors">
              <Icon name="Send" fallback="Circle" size={14} />
              Telegram
            </a>
            <a href="https://www.instagram.com/kseniapride_?igsh=YmdqZWplajZ6OTl3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-[#888] tracking-wider uppercase hover:text-[#141414] transition-colors">
              <Icon name="Instagram" fallback="Circle" size={14} />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
