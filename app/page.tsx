import Image from 'next/image'

const REF_URL = 'https://ash-plume.com/?serial=61377994&creative_id=10266'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0e14] text-[#f0f2f5] antialiased">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 w-full bg-[#0d1017] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Mobile hamburger & Logo */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#v7k-mobile-drawer"
              aria-label="Открыть меню"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#141822] text-[#9aa0b0] hover:text-white border border-white/5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* VOLK CASINO Logo */}
            <a href={REF_URL} className="flex items-center gap-2 group">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#ea1935] text-white font-black text-base shadow-[0_0_12px_rgba(234,25,53,0.5)]">
                V
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-red-400 transition-colors">
                  VOLK
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#ea1935] uppercase">
                  CASINO
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-xs lg:text-sm font-medium text-[#9aa0b0]">
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-[#ea1935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span>Бонусы</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={2} />
                  <path strokeLinecap="round" strokeWidth={2} d="M12 7v5l3 3" />
                </svg>
                <span>Казино</span>
              </a>
              <a
                href={REF_URL}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Live Казино</span>
              </a>
              <a
                href="#zerkalo"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Рабочее зеркало</span>
              </a>
            </nav>
          </div>

          {/* Right: Search, Login & Registration Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={REF_URL}
              aria-label="Поиск игр"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-[#141822] text-[#9aa0b0] hover:text-white border border-white/5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>

            <a
              href={REF_URL}
              className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              Вход
            </a>

            <a
              href={REF_URL}
              className="v7k-btn-red px-3 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 shadow-[0_4px_16px_rgba(234,25,53,0.4)]"
            >
              <span>Регистрация</span>
              <span className="hidden sm:inline-block w-4 h-4 rounded-full bg-white/20 text-[10px] text-center leading-4 font-black">
                🎁
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER (CSS :target navigation, no external JS) */}
      <div
        id="v7k-mobile-drawer"
        className="fixed inset-0 z-50 pointer-events-none opacity-0 target:pointer-events-auto target:opacity-100 transition-opacity duration-200"
      >
        <a
          href="#!"
          aria-label="Закрыть меню"
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />
        <div className="absolute top-0 left-0 bottom-0 w-[280px] bg-[#0f121a] border-r border-white/10 p-5 flex flex-col justify-between shadow-2xl">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <a href={REF_URL} className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-md bg-[#ea1935] text-white font-black flex items-center justify-center">
                  V
                </span>
                <span className="font-black text-lg tracking-wider text-white">VOLK CASINO</span>
              </a>
              <a
                href="#!"
                aria-label="Закрыть"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#9aa0b0] hover:text-white"
              >
                ✕
              </a>
            </div>

            <nav className="flex flex-col space-y-1 text-sm font-medium">
              <a href={REF_URL} className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center justify-between">
                <span>🎁 Бонусы 225% + 1000 FS</span>
                <span className="text-xs text-[#ea1935]">ТОП</span>
              </a>
              <a href={REF_URL} className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center gap-2">
                <span>🎰 Слоты онлайн</span>
              </a>
              <a href={REF_URL} className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center gap-2">
                <span>🎥 Live Казино с дилерами</span>
              </a>
              <a href={REF_URL} className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center gap-2">
                <span>🚀 Быстрые краш-игры</span>
              </a>
              <a href={REF_URL} className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center gap-2">
                <span>🏆 Турниры Волк казино</span>
              </a>
              <a href="#zerkalo" className="px-3 py-2.5 rounded-lg bg-white/5 text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Рабочее зеркало</span>
              </a>
              <a href="#faq" className="px-3 py-2.5 rounded-lg hover:bg-white/5 flex items-center gap-2">
                <span>💬 Частые вопросы</span>
              </a>
            </nav>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <a
              href={REF_URL}
              className="v7k-btn-red block w-full py-3 rounded-lg text-center font-bold text-white text-sm"
            >
              Зарегистрироваться
            </a>
            <a
              href={REF_URL}
              className="block w-full py-2.5 rounded-lg text-center font-medium text-[#9aa0b0] hover:text-white bg-white/5 text-sm"
            >
              Войти в личный кабинет
            </a>
          </div>
        </div>
      </div>

      {/* HERO BANNER SECTION (Matches Screen 2 layout with Volk Casino branding) */}
      <section className="relative max-w-7xl mx-auto w-full px-3 sm:px-6 pt-4 pb-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1017] min-h-[360px] sm:min-h-[420px] md:min-h-[460px] flex items-center shadow-2xl">
          {/* Background Hero Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/volk-hero-banner.png"
              alt="Volk Casino официальный сайт — бонус 225% и 1000 фриспинов на первые четыре депозита"
              fill
              priority
              className="object-cover object-right md:object-center opacity-85"
            />
            {/* Vignette Gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e14] via-[#0c0e14]/80 to-transparent md:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-black/30" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-5 sm:p-8 md:p-12 max-w-xl flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-300 text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea1935] animate-ping" />
              <span>Официальный сайт Volk Casino</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-none sm:leading-tight drop-shadow-md">
              МОЩНЫЙ СТАРТ:
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-bold text-[#f0f2f5] mt-2 mb-4 leading-snug drop-shadow">
              до <span className="text-[#ea1935]">225% + 1000 FS</span> на четыре депозита
            </p>

            <p className="text-xs sm:text-sm text-[#9aa0b0] max-w-md mb-6 leading-relaxed hidden sm:block">
              Забирайте эксклюзивный приветственный пакет во флагманском клубе Волк казино. Моментальный вывод выигрышей на карты и крипту без задержек.
            </p>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={REF_URL}
                className="v7k-btn-red w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-white text-sm sm:text-base uppercase tracking-wider text-center shadow-[0_6px_24px_rgba(234,25,53,0.5)]"
              >
                Зарегаться!
              </a>
              <a
                href={REF_URL}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-white text-xs sm:text-sm bg-white/10 hover:bg-white/15 border border-white/10 text-center transition-colors"
              >
                Демо игра
              </a>
            </div>
          </div>

          {/* Banner Navigation arrow (screen 2 replica) */}
          <a
            href={REF_URL}
            aria-label="Следующий баннер"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* WINNERS TICKER / TOP PAYOUTS (Matches Screen 2 replica) */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-3">
        <div className="v7k-card-glass rounded-xl p-3 sm:p-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#9aa0b0] uppercase tracking-wider">
                Топ-выплаты
              </span>
              <span className="text-red-500 text-xs">★</span>
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">
              817 528 RUB
            </div>
          </div>

          {/* Horizontal scroll of live payouts */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
            {[
              { mult: 'x7,3', id: 'ID 40••••12', win: '8 000 RUB', dep: '1 092 RUB депозит' },
              { mult: 'x5,5', id: 'ID 83••••65', win: '5 500 RUB', dep: '1 005 RUB депозит' },
              { mult: 'x2,3', id: 'ID 81••••40', win: '2 000 RUB', dep: '870 RUB депозит' },
              { mult: 'x9,9', id: 'ID 23••••41', win: '5 000 RUB', dep: '503 RUB депозит' },
              { mult: 'x4,8', id: 'ID 36••••30', win: '5 000 RUB', dep: '1 046 RUB депозит' },
              { mult: 'x1,6', id: 'ID 24••••93', win: '5 000 RUB', dep: '3 125 RUB депозит' },
              { mult: 'x6,5', id: 'ID 67••••82', win: '6 500 RUB', dep: '1 000 RUB депозит' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={REF_URL}
                className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0f131c] border border-white/5 hover:border-white/15 transition-all text-left"
              >
                <span className="px-1.5 py-0.5 rounded text-[11px] font-black text-emerald-300 bg-emerald-950/80 border border-emerald-600/30">
                  {item.mult}
                </span>
                <div className="leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="text-[12px] font-bold text-white">{item.win}</span>
                    <span className="text-[10px] text-[#ea1935]">↗</span>
                  </div>
                  <div className="text-[10px] text-[#71788a]">
                    {item.id} · {item.dep}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY CHIPS (Matches Screen 2 replica) */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-2">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { label: 'Слоты', icon: '777' },
            { label: 'Live Казино', icon: '🎥' },
            { label: 'Быстрые игры', icon: '🚀' },
            { label: 'Бонусы', icon: '🎁' },
            { label: 'VIP Клуб', icon: '👑' },
            { label: 'Турниры', icon: '🏆' },
            { label: 'Провайдеры', icon: '🎮' },
            { label: 'Наш телеграм', icon: '✈️' },
          ].map((cat, idx) => (
            <a
              key={idx}
              href={REF_URL}
              className="v7k-chip-nav shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* TOP SLOTS GRID (Matches Screen 2 replica) */}
      <section className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
            <span>ТОП ИГРЫ VOLK CASINO</span>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </h2>
          <a
            href={REF_URL}
            className="text-xs sm:text-sm font-semibold text-[#9aa0b0] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Больше</span>
            <span>›</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
          {[
            {
              title: 'Sweet Bonanza 2500',
              provider: 'Pragmatic Play',
              tag: 'HOT',
              color: 'from-pink-600 to-purple-800',
              icon: '🍭',
            },
            {
              title: 'Hell Hot 1000',
              provider: 'Endorphina',
              tag: 'TOP',
              color: 'from-red-600 to-amber-700',
              icon: '🔥',
            },
            {
              title: 'Crazy Gorilla Boom',
              provider: 'SpinJoy',
              tag: 'NEW',
              color: 'from-emerald-600 to-teal-900',
              icon: '🦍',
            },
            {
              title: 'Le Bandit',
              provider: 'Hacksaw Gaming',
              tag: 'HIT',
              color: 'from-amber-600 to-yellow-800',
              icon: '🦝',
            },
            {
              title: 'Crown Coins',
              provider: 'Endorphina',
              tag: 'BONUS',
              color: 'from-yellow-500 to-amber-800',
              icon: '👑',
            },
            {
              title: 'Big Bass Bonanza',
              provider: 'Pragmatic Play',
              tag: 'JACKPOT',
              color: 'from-blue-600 to-cyan-800',
              icon: '🎣',
            },
            {
              title: 'Coin Volcano',
              provider: '3 Oaks Gaming',
              tag: '3x3',
              color: 'from-orange-600 to-red-900',
              icon: '🌋',
            },
          ].map((slot, idx) => (
            <a
              key={idx}
              href={REF_URL}
              className="v7k-slot-card group rounded-xl overflow-hidden p-2 flex flex-col justify-between"
            >
              <div
                className={`relative w-full aspect-square rounded-lg bg-gradient-to-br ${slot.color} flex flex-col items-center justify-center p-3 text-center overflow-hidden shadow-inner`}
              >
                <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {slot.icon}
                </span>
                <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-black/60 text-white border border-white/20">
                  {slot.tag}
                </span>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="v7k-btn-red px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-lg">
                    Играть
                  </span>
                </div>
              </div>

              <div className="pt-2 px-0.5">
                <div className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-red-400 transition-colors">
                  {slot.title}
                </div>
                <div className="text-[11px] text-[#71788a] truncate">{slot.provider}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* QUICK INFO BANNER / MIRROR STATUS */}
      <section id="zerkalo" className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-2">
        <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 via-[#101920] to-[#0c0e14] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 text-lg border border-emerald-500/30">
              ⚡
            </span>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Актуальное рабочее зеркало Волк казино онлайн на сегодня</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase">
                  ONLINE 24/7
                </span>
              </div>
              <div className="text-xs text-[#9aa0b0] mt-0.5">
                Если основной домен заблокирован провайдером, используйте официальный переход с автообновлением адреса.
              </div>
            </div>
          </div>
          <a
            href={REF_URL}
            className="v7k-btn-red whitespace-nowrap px-5 py-2.5 rounded-lg text-xs font-bold text-white uppercase tracking-wider"
          >
            Войти через зеркало
          </a>
        </div>
      </section>

      {/* SEO ARTICLE: 500-800 WORDS SHEET OF TEXT WITH KEYWORDS */}
      <main className="max-w-7xl mx-auto w-full px-3 sm:px-6 py-8">
        <article className="v7k-seo-card rounded-2xl p-5 sm:p-8 md:p-10 space-y-8 leading-relaxed text-sm sm:text-base text-[#b6bcc8] border border-white/5">
          {/* Header block with Volk Casino / Волк казино */}
          <div className="border-b border-white/10 pb-6">
            <span className="text-xs uppercase font-mono text-[#ea1935] tracking-widest">
              Информационный портал игроков
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-2">
              Volk Casino официальный сайт — честная игра и быстрые выплаты
            </h2>
            <p className="mt-3 text-[#cfd4dc]">
              Современный <strong className="text-white">Volk Casino официальный сайт</strong> представляет собой премиальную игровую платформу для всех ценителей качественного азартного отдыха. Популярный клуб <strong className="text-white">Volk casino</strong> заслужил доверие сотен тысяч пользователей благодаря безупречной репутации, лицензионному софту от мировых провайдеров и моментальной обработке денежных заявок. Если вы ищете надежный ресурс, где можно в <strong className="text-white">Volk casino играть</strong> на реальные деньги или бесплатно в тренировочном демо-режиме, то площадка <strong className="text-white">Volk казино</strong> станет идеальным выбором. Разнообразие слотов, настольных дисциплин и Live-рулеток удовлетворит запросы как новичка, так и опытного хайроллера.
            </p>
          </div>

          {/* Section 2: Volk Casino зеркало и рабочее зеркало Волк казино */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span>Volk Casino зеркало — как зайти на сайт при блокировке</span>
            </h2>
            <p>
              В связи с регулярными ограничениями доступа со стороны интернет-провайдеров многие гемблеры сталкиваются с трудностями при переходе на главную страницу. В таких ситуациях безотказно спасает официальное <strong className="text-white">Volk casino зеркало</strong>. Это точная копия оригинального сервера, сохраняющая весь функционал, баланс личного кабинета, активные бонусы и безопасность данных. Найти проверенное <strong className="text-white">волк казино зеркало</strong> можно через официальную рассылку, службу клиентской поддержки или по ссылкам на нашем портале.
            </p>
            <p>
              Используя актуальное <strong className="text-white">волк казино зеркало рабочее</strong>, пользователи получают бесперебойный доступ 24 часа в сутки 7 дней в неделю без необходимости устанавливать медленные сторонние VPN-сервисы. Достаточно кликнуть по кнопке перехода, и система автоматически подберет свободный резервный адрес с высоким пингом и защищенным SSL-шифрованием, чтобы вы могли продолжить любимую сессию без малейших задержек.
            </p>
          </section>

          {/* Section 3: Волк казино официальный сайт и регистрация */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Волк казино официальный сайт: регистрация и приветственный бонус
            </h2>
            <p>
              Каждый новый пользователь, зашедший на <strong className="text-white">волк казино официальный сайт</strong>, имеет право на щедрый приветственный пакет: до 225% к сумме первых депозитов плюс 1000 бесплатных вращений на популярных слот-машинах. Портал <strong className="text-white">волк казино официальный</strong> обеспечивает максимальное удобство: процедура создания аккаунта занимает менее одной минуты. Достаточно указать актуальный e-mail или номер мобильного телефона, придумать надежный пароль и выбрать удобную валюту счета.
            </p>
            <p>
              Авторизованный гость клуба <strong className="text-white">Волк казино</strong> может моментально пополнить баланс с помощью банковских карт Мир, Visa, Mastercard, электронных кошельков или популярных криптовалют (USDT, Bitcoin, Ethereum). Все платежные транзакции в <strong className="text-white">Volk casino официальный</strong> проводятся без скрытых комиссий, а заявки на вывод денежных средств на верифицированные реквизиты обрабатываются финансовым отделом в течение 10–15 минут.
            </p>
          </section>

          {/* Section 4: Волк казино играть и онлайн слоты */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Волк казино играть онлайн: выбор лицензионных слотов
            </h2>
            <p>
              Решив в <strong className="text-white">волк казино играть</strong>, вы открываете для себя внушительную коллекцию из более чем 4500 сертифицированных аппаратов. Каталог <strong className="text-white">волк казино онлайн</strong> пополняется еженедельно свежими новинками от топовых студий: Pragmatic Play, Hacksaw Gaming, Endorphina, Amusnet, Push Gaming и Evolution. Каждый аппарат работает на базе защищенного генератора случайных чисел, что гарантирует абсолютную честность розыгрышей и возврат игроку (RTP) на уровне до 96,8%.
            </p>
            <p>
              В клубе <strong className="text-white">Волк казино</strong> представлены как нестареющие классические фруктовые однорукие бандиты, так и трендовые механики: Megaways, кластерные выплаты, бонусные покупки раундов (Bonus Buy) и захватывающие краш-игры Aviator и JetX. Любой симулятор можно предварительно запустить в бесплатном демо-режиме без риска для реальных сбережений, чтобы изучить таблицу выплат и подобрать выигрышную тактику ставок.
            </p>
          </section>

          {/* Section 5: Мобильная версия и поддержка */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Преимущества мобильной версии Volk Casino онлайн
            </h2>
            <p>
              Платформа полностью оптимизирована для мобильных устройств под управлением iOS и Android. Адаптивный дизайн позволяет с комфортом запускать слоты прямо в браузере смартфона или планшета без скачивания тяжелых приложений. Кнопки управления удобно ложатся под пальцы, анимация вращения барабанов плавная даже при слабом интернет-соединении, а расход заряда аккумулятора сведен к минимуму.
            </p>
            <p>
              В случае возникновения любых вопросов касательно начисления фриспинов, проверки статуса выплаты или поиска альтернативного <strong className="text-white">Volk casino зеркало</strong>, круглосуточная служба поддержки готова ответить в онлайн-чате за 30 секунд. Специалисты службы поддержки общаются на русском языке и помогают оперативно решить любую проблему в пользу клиента.
            </p>
          </section>

          {/* Summary table with key info */}
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#161b26] text-white">
                  <th className="py-3 px-4 font-bold">Характеристика</th>
                  <th className="py-3 px-4 font-bold">Параметры Volk Casino</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Официальный бренд</td>
                  <td className="py-2.5 px-4 font-semibold text-white">Volk Casino (Волк казино)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Приветственный бонус</td>
                  <td className="py-2.5 px-4 text-emerald-400 font-bold">225% + 1000 FS на 4 депозита</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Количество игр</td>
                  <td className="py-2.5 px-4 text-white">Более 4500 слотов, Live, краш-игры</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Доступность зеркал</td>
                  <td className="py-2.5 px-4 text-white">Круглосуточно, автопереход через редирект</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Платежные системы</td>
                  <td className="py-2.5 px-4 text-white">МИР, СБП, Visa, Mastercard, USDT, BTC</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 text-[#9aa0b0]">Скорость вывода</td>
                  <td className="py-2.5 px-4 text-white">От 10 минут, 24/7 без выходных</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Big CTA banner inside SEO section */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-red-950/60 via-[#1c1216] to-[#121622] border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg font-black text-white">Готовы к крупным заносам в Волк казино?</div>
              <div className="text-xs sm:text-sm text-[#9aa0b0] mt-1">
                Активируйте бонус 225% + 1000 FS прямо сейчас и крутите лучшие слоты онлайн.
              </div>
            </div>
            <a
              href={REF_URL}
              className="v7k-btn-red whitespace-nowrap px-8 py-3.5 rounded-xl font-black text-white text-sm uppercase tracking-wider shadow-lg"
            >
              Зарегистрироваться
            </a>
          </div>
        </article>
      </main>

      {/* FOOTER WITH HASHTAGS (Internal anchors) */}
      <footer className="mt-auto border-t border-white/5 bg-[#090b10] py-8 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Top row: Brand & Disclaimers */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-[#ea1935] text-white font-black text-sm">
                V
              </span>
              <span className="font-extrabold text-base tracking-wider text-white">VOLK CASINO</span>
              <span className="text-xs text-[#71788a]">© 2025. Все права защищены.</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#9aa0b0]">
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10 font-mono font-bold text-red-400">
                18+
              </span>
              <span>Азартные игры предназначены исключительно для совершеннолетних. Играйте ответственно.</span>
            </div>
          </div>

          {/* Hashtags section based on requested keywords */}
          <div className="space-y-2">
            <div className="text-xs uppercase font-bold text-[#71788a] tracking-wider">
              Быстрая навигация по ключевым разделам:
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { tag: '#volk_casino', href: '#zerkalo' },
                { tag: '#volk_casino_зеркало', href: '#zerkalo' },
                { tag: '#volk_casino_играть', href: '#zerkalo' },
                { tag: '#volk_casino_официальный', href: '#zerkalo' },
                { tag: '#volk_casino_официальный_сайт', href: '#zerkalo' },
                { tag: '#volk_казино', href: '#zerkalo' },
                { tag: '#волк_казино', href: '#zerkalo' },
                { tag: '#волк_казино_зеркало', href: '#zerkalo' },
                { tag: '#волк_казино_зеркало_рабочее', href: '#zerkalo' },
                { tag: '#волк_казино_играть', href: '#zerkalo' },
                { tag: '#волк_казино_онлайн', href: '#zerkalo' },
                { tag: '#волк_казино_официальный', href: '#zerkalo' },
                { tag: '#волк_казино_официальный_сайт', href: '#zerkalo' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="px-2.5 py-1 rounded-md bg-[#131620] hover:bg-[#1c2233] text-[#9aa0b0] hover:text-white border border-white/5 transition-colors font-mono"
                >
                  {item.tag}
                </a>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-[#555b6d] text-center pt-2">
            Временная заглушка сайта Volk Casino (Волк казино) для поисковой оптимизации и перенаправления на официальное рабочее зеркало.
          </div>
        </div>
      </footer>
    </div>
  )
}
