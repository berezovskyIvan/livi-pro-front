<template>
  <div class="bg-white text-slate-900" v-html="rawHtml" />
</template>

<script setup lang="ts">
const rawHtml = ref<string>('  <!-- Promotional Banner -->\n' +
    '  <div class="bg-gradient-to-r from-teal-500 to-teal-600 py-8 md:py-10 relative overflow-hidden text-white">\n' +
    '    <!-- Background decoration -->\n' +
    '    <div class="absolute inset-0 opacity-10">\n' +
    '      <div class="absolute top-2 left-10 w-8 h-8 bg-white rounded-full"></div>\n' +
    '      <div class="absolute top-1 right-20 w-6 h-6 bg-white rounded-full"></div>\n' +
    '      <div class="absolute bottom-2 left-1/4 w-4 h-4 bg-white rounded-full"></div>\n' +
    '      <div class="absolute top-3 right-1/3 w-5 h-5 bg-white rounded-full"></div>\n' +
    '      <div class="absolute bottom-1 right-10 w-3 h-3 bg-white rounded-full"></div>\n' +
    '    </div>\n' +
    '    <!-- Mission text inside banner -->\n' +
    '    <div class="promo-banner relative max-w-6xl mx-auto px-4 text-center" style="display: flex; align-items: center; justify-content: center;">\n' +
    '      <div class="text-2xl md:text-3xl font-extrabold tracking-tight">\n' +
    '        Избавляем от рутины. Ради жизни.\n' +
    '      </div>\n' +
    '\n' +
    '      <a href="/login" class="admin-btn w-full sm:w-auto px-6 py-3 rounded-2xl font-semibold border border-slate-200 hover:bg-teal-600 text-center" style="position: absolute; right: 20px;">Личный кабинет</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '  <!-- Header -->\n' +
    '  <header class="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-slate-100">\n' +
    '    <div class="w-full mx-auto px-4 md:px-12 py-3">\n' +
    '      <!-- Logo and Navigation -->\n' +
    '      <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-sm px-4">\n' +
    '        <a href="#top" class="font-extrabold tracking-tight text-2xl text-teal-600">LIVI-PRO</a>\n' +
    '        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6">\n' +
    '          <a href="#why" class="hover:text-teal-600 transition-colors duration-200">Почему выбирают нас</a>\n' +
    '          <a href="#process" class="hover:text-teal-600 transition-colors duration-200">Как работаем</a>\n' +
    '          <a href="#metrics" class="hover:text-teal-600 transition-colors duration-200">Результат</a>\n' +
    '          <a href="#charts" class="hover:text-teal-600 transition-colors duration-200">Эффективность</a>\n' +
    '          <a href="#compliance" class="hover:text-teal-600 transition-colors duration-200">Закон и безопасность</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </header>\n' +
    '\n' +
    '  <!-- Hero -->\n' +
    '  <section id="top" class="py-12 md:py-20 lg:py-28">\n' +
    '    <div class="max-w-5xl mx-auto px-4 text-center">\n' +
    '      <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold hero-title">\n' +
    '        <div class="text-teal-600 leading-tight">\n' +
    '          ИИ который знает всё о вашей клинике<br class="hidden sm:block">\n' +
    '          и помогает улучшить клиентский сервис\n' +
    '        </div>\n' +
    '      </h1>\n' +
    '      <p class="mt-6 text-base text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">\n' +
    '        <div class="text-center">Ассистенты переписываются с пациентами, отвечают на звонки, контролируют качество разговоров напоминают о визите</div>\n' +
    '        <div class="text-center mt-2">Индивидуально обучены под вашу клинику: меньше рутины, больше записей и выше качество сервиса</div>\n' +
    '      </p>\n' +
    '      <div class="mt-16 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 px-4">\n' +
    '        <span class="px-3 py-1 rounded-full border border-slate-300 bg-white">24/7: звонки и чаты</span>\n' +
    '        <span class="px-3 py-1 rounded-full border border-slate-300 bg-white">Знает вашу клинику</span>\n' +
    '        <span class="px-3 py-1 rounded-full border border-slate-300 bg-white">Мягко ведёт к записи</span>\n' +
    '        <span class="px-3 py-1 rounded-full border border-slate-300 bg-white">Контроль качества разговоров</span>\n' +
    '        <span class="px-3 py-1 rounded-full border border-slate-300 bg-white">152-ФЗ / врачебная тайна</span>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Personal Brand Section -->\n' +
    '  <section class="py-16 bg-white">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <div class="grid lg:grid-cols-2 gap-12 items-center">\n' +
    '        <!-- Photo -->\n' +
    '        <div class="order-2 lg:order-1">\n' +
    '          <div class="relative">\n' +
    '            <img src="/images/participants/IMG_9785.webp" alt="Ольга Сайкевич - Основатель и CEO LIVI PRO" class="w-full max-w-lg mx-auto rounded-2xl shadow-lg object-cover aspect-[4/5]">\n' +
    '            <!-- Decorative elements -->\n' +
    '            <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '            <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '        <!-- Description -->\n' +
    '        <div class="order-1 lg:order-2 space-y-6">\n' +
    '          <div>\n' +
    '            <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Ольга Сайкевич</h2>\n' +
    '            <p class="text-lg text-teal-600 font-semibold mb-4">Основатель и CEO LIVI PRO</p>\n' +
    '            <p class="text-xl text-slate-700 font-medium italic">Избавляем от рутины. Ради жизни.</p>\n' +
    '          </div>\n' +
    '          \n' +
    '          <div class="space-y-4 text-slate-600 leading-relaxed">\n' +
    '            <p>Я более восьми лет работаю в IT-компаниях и вижу, как технологии могут менять бизнес, если они действительно помогают людям.</p>\n' +
    '            \n' +
    '            <p>Создавая LIVI PRO, мы с командой поставили цель — освободить медицинский персонал от рутинных задач, чтобы врачи могли больше времени уделять главному — пациенту.</p>\n' +
    '            \n' +
    '            <p>Мы создаём умных ассистентов для клиник, которые берут на себя операционные процессы, улучшая коммуникацию, повышая эффективность и снижая нагрузку на сотрудников.</p>\n' +
    '            \n' +
    '            <p>Наши решения помогают клиникам расти, командам — работать спокойнее, а пациентам — чувствовать заботу.</p>\n' +
    '            \n' +
    '            <p>Нам важно, чтобы клиенты доверяли технологии так же, как пациенты доверяют врачам. Поэтому каждый проект LIVI PRO строится на опыте, прозрачности и внимании к деталям.</p>\n' +
    '            \n' +
    '            <p class="font-medium text-slate-700">Мы не просто внедряем искусственный интеллект — мы делаем медицину человечнее через технологии.</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Team Slider Section -->\n' +
    '  <section id="team" class="py-16 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Наша команда</h2>\n' +
    '      \n' +
    '      <div class="relative">\n' +
    '        <!-- Slider Container -->\n' +
    '        <div class="team-slider-container overflow-hidden rounded-2xl">\n' +
    '          <div class="team-slider-wrapper flex transition-transform duration-500 ease-in-out" id="teamSlider">\n' +
    '            <!-- Slide 1 -->\n' +
    '            <div class="team-slide min-w-full flex-shrink-0">\n' +
    '              <div class="card rounded-2xl p-8 bg-white">\n' +
    '                <div class="flex flex-col md:flex-row gap-8 items-center">\n' +
    '                  <div class="w-full md:w-1/3 flex-shrink-0">\n' +
    '                    <div class="relative">\n' +
    '                      <img src="/images/participants/Foto_002.webp" alt="Станислав Сайкевич" class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">\n' +
    '                      <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '                      <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="w-full md:w-2/3 space-y-4">\n' +
    '                    <h3 class="text-2xl font-bold text-slate-900">Станислав Сайкевич</h3>\n' +
    '                    <p class="text-lg text-teal-600 font-semibold">Со-учредитель, инвестор и визионер, член Ассоциации независимых директоров</p>\n' +
    '                    <div class="space-y-3 text-slate-600 leading-relaxed">\n' +
    '                      <p>В компании открывает новые направления и видит возможности там, где другие не замечают.</p>\n' +
    '                      <p>Любит природу, свежий воздух и кататься по мягкому снегу на сноуборде первым.</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- Slide 2 -->\n' +
    '            <div class="team-slide min-w-full flex-shrink-0">\n' +
    '              <div class="card rounded-2xl p-8 bg-white">\n' +
    '                <div class="flex flex-col md:flex-row gap-8 items-center">\n' +
    '                  <div class="w-full md:w-1/3 flex-shrink-0">\n' +
    '                    <div class="relative">\n' +
    '                      <img src="/images/participants/Foto_004.webp" alt="Кетти Вандер" class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">\n' +
    '                      <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '                      <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="w-full md:w-2/3 space-y-4">\n' +
    '                    <h3 class="text-2xl font-bold text-slate-900">Кетти Вандер</h3>\n' +
    '                    <p class="text-lg text-teal-600 font-semibold">Бренд-директор</p>\n' +
    '                    <div class="space-y-3 text-slate-600 leading-relaxed">\n' +
    '                      <p>Создаёт узнаваемость и эмоциональную связь с брендом, чтобы LIVI-PRO любили и выбирали.</p>\n' +
    '                      <p>Заряжается от общения с интересными личностями и деятелями. Обожает стиль, музыку и саморазвитие.</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- Slide 3 -->\n' +
    '            <div class="team-slide min-w-full flex-shrink-0">\n' +
    '              <div class="card rounded-2xl p-8 bg-white">\n' +
    '                <div class="flex flex-col md:flex-row gap-8 items-center">\n' +
    '                  <div class="w-full md:w-1/3 flex-shrink-0">\n' +
    '                    <div class="relative">\n' +
    '                      <img src="/images/participants/Foto_005.webp" alt="Иван Березовский" class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">\n' +
    '                      <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '                      <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="w-full md:w-2/3 space-y-4">\n' +
    '                    <h3 class="text-2xl font-bold text-slate-900">Иван Березовский</h3>\n' +
    '                    <p class="text-lg text-teal-600 font-semibold">Инженер-программист</p>\n' +
    '                    <div class="space-y-3 text-slate-600 leading-relaxed">\n' +
    '                      <p>Создаёт надёжные и эффективные технологические решения — от систем управления транспортом до IT-платформ для бизнеса.</p>\n' +
    '                      <p>Любит продуманные продукты и получает удовольствие от их разработки.</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- Slide 4 -->\n' +
    '            <div class="team-slide min-w-full flex-shrink-0">\n' +
    '              <div class="card rounded-2xl p-8 bg-white">\n' +
    '                <div class="flex flex-col md:flex-row gap-8 items-center">\n' +
    '                  <div class="w-full md:w-1/3 flex-shrink-0">\n' +
    '                    <div class="relative">\n' +
    '                      <img src="/images/participants/Foto_006.webp" alt="Дмитрий Кирсанов" class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">\n' +
    '                      <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '                      <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="w-full md:w-2/3 space-y-4">\n' +
    '                    <h3 class="text-2xl font-bold text-slate-900">Дмитрий Кирсанов</h3>\n' +
    '                    <p class="text-lg text-teal-600 font-semibold">Аналитик и инженер данных с более чем 10-летним опытом в финансах, консалтинге и EdTech</p>\n' +
    '                    <div class="space-y-3 text-slate-600 leading-relaxed">\n' +
    '                      <p>Автоматизирует аналитику, выстраивает пайплайны данных и внедряет ML-решения, чтобы бизнес принимал решения быстрее и точнее.</p>\n' +
    '                      <p>Любит горы, дайвинг и глубину во всех смыслах.</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- Slide 5 -->\n' +
    '            <div class="team-slide min-w-full flex-shrink-0">\n' +
    '              <div class="card rounded-2xl p-8 bg-white">\n' +
    '                <div class="flex flex-col md:flex-row gap-8 items-center">\n' +
    '                  <div class="w-full md:w-1/3 flex-shrink-0">\n' +
    '                    <div class="relative">\n' +
    '                      <img src="/images/participants/Foto_003.webp" alt="Илья Гептнер" class="w-full rounded-2xl shadow-lg object-cover aspect-[3/4]">\n' +
    '                      <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-60"></div>\n' +
    '                      <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-60"></div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="w-full md:w-2/3 space-y-4">\n' +
    '                    <h3 class="text-2xl font-bold text-slate-900">Илья Гептнер</h3>\n' +
    '                    <p class="text-lg text-teal-600 font-semibold">Руководитель отдела интеграций</p>\n' +
    '                    <div class="space-y-3 text-slate-600 leading-relaxed">\n' +
    '                      <p>Делает так, чтобы технологии LIVI-PRO бесшовно работали внутри клиник.</p>\n' +
    '                      <p>Любит спорт, путешествия с палаткой и свободу дорог России.</p>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '        <!-- Navigation Buttons -->\n' +
    '        <button type="button" class="team-slider-btn team-slider-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-teal-50 text-teal-600 w-14 h-14 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center z-30" id="teamPrevBtn" aria-label="Предыдущий слайд">\n' +
    '          <svg class="w-7 h-7 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
    '            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>\n' +
    '          </svg>\n' +
    '        </button>\n' +
    '        <button type="button" class="team-slider-btn team-slider-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-teal-50 text-teal-600 w-14 h-14 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center z-30" id="teamNextBtn" aria-label="Следующий слайд">\n' +
    '          <svg class="w-7 h-7 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n' +
    '            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\n' +
    '          </svg>\n' +
    '        </button>\n' +
    '        \n' +
    '        <!-- Dots Navigation -->\n' +
    '        <div class="flex justify-center gap-2 mt-8" id="teamDots">\n' +
    '          <button class="team-dot w-3 h-3 rounded-full bg-teal-300 transition-all duration-300" data-slide="0" aria-label="Слайд 1"></button>\n' +
    '          <button class="team-dot w-3 h-3 rounded-full bg-teal-300/30 transition-all duration-300" data-slide="1" aria-label="Слайд 2"></button>\n' +
    '          <button class="team-dot w-3 h-3 rounded-full bg-teal-300/30 transition-all duration-300" data-slide="2" aria-label="Слайд 3"></button>\n' +
    '          <button class="team-dot w-3 h-3 rounded-full bg-teal-300/30 transition-all duration-300" data-slide="3" aria-label="Слайд 4"></button>\n' +
    '          <button class="team-dot w-3 h-3 rounded-full bg-teal-300/30 transition-all duration-300" data-slide="4" aria-label="Слайд 5"></button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Why custom AI assistant is better than template solutions -->\n' +
    '  <section id="why" class="py-12 md:py-16 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center px-4">Почему индивидуальный ИИ-ассистент лучше типовых решений</h2>\n' +
    '      <div class="grid md:grid-cols-2 gap-6">\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="font-semibold flex items-center gap-2">\n' +
    '            <span class="text-2xl">⚠️</span>\n' +
    '            Медицинская специфика\n' +
    '          </h3>\n' +
    '          <p class="mt-2 text-slate-600">Конструкторы и фриланс-проекты работают по принципу «один сценарий для всех». Однако каждая клиника уникальна. Индивидуальный ИИ-ассистент знает всё о вашей клинике - услугах, врачах, расписании, стандартах обслуживания и подстраивается именно под ваши процессы.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="font-semibold flex items-center gap-2">\n' +
    '            <span class="text-2xl">📜</span>\n' +
    '            Закон и данные\n' +
    '          </h3>\n' +
    '          <p class="mt-2 text-slate-600">Персональные данные — зона риска. Типовые решения часто не соответствуют 152-ФЗ и 323-ФЗ: данные могут храниться за рубежом, учёт согласий игнорироваться. Наши ассистенты создаются с учётом всех норм безопасности, ведут <b>журналы качества разговоров</b> и позволяют быстро находить точки роста сервиса.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="font-semibold flex items-center gap-2">\n' +
    '            <span class="text-2xl">💸</span>\n' +
    '            Цена/качество\n' +
    '          </h3>\n' +
    '          <p class="mt-2 text-slate-600">Дешёвые решения требуют доработок и интеграций, что повышает расходы и снижает стабильность. Наши ИИ-ассистенты кастомизируются под бизнес процессы клиники, создаются «под ключ» и получаются оптимальными по цене и качеству.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="font-semibold flex items-center gap-2">\n' +
    '            <span class="text-2xl">🧑‍⚕️</span>\n' +
    '            Имидж клиники\n' +
    '          </h3>\n' +
    '          <p class="mt-2 text-slate-600">Шаблонные сценарии снижают доверие, делают сервис «безликим», часто - раздражают. Индивидуальный ИИ-ассистент говорит на языке вашей клиники, <b>вежливо и мягко ведёт к записи</b>, усиливает репутацию как современной и клиентоориентированной.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '<!--      <div class="mt-8 text-center">-->\n' +
    '<!--        <a href="#contact" class="inline-block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-2xl font-semibold">Оставить заявку</a>-->\n' +
    '<!--      </div>-->\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Specialization -->\n' +
    '  <section id="spec" class="py-16">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Узкая специализация — медицина</h2>\n' +
    '      <div class="grid md:grid-cols-4 gap-6">\n' +
    '        <div class="card rounded-2xl p-6 text-center">\n' +
    '          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center">\n' +
    '            <span class="text-2xl">🔬</span>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Диагностика и анализы</h3>\n' +
    '          <p class="mt-2 text-slate-600">Подготовка, окна, быстрые слоты, информсогласия.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6 text-center">\n' +
    '          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center">\n' +
    '            <span class="text-2xl">🦷</span>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Стоматология/хирургия</h3>\n' +
    '          <p class="mt-2 text-slate-600">Предоперационные анкеты, согласования, повторные визиты.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6 text-center">\n' +
    '          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl flex items-center justify-center">\n' +
    '            <span class="text-2xl">✨</span>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Косметология</h3>\n' +
    '          <p class="mt-2 text-slate-600">Курсы процедур, противопоказания, напоминания о повторе.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6 text-center">\n' +
    '          <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">\n' +
    '            <span class="text-2xl">🏥</span>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Многопрофильные центры</h3>\n' +
    '          <p class="mt-2 text-slate-600">Мультиворонки, распределение по филиалам и каналам.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Checklist -->\n' +
    '  <section id="checklist" class="py-16 bg-slate-50">\n' +
    '    <div class="max-w-4xl mx-auto px-4">\n' +
    '      <div class="card rounded-2xl p-8">\n' +
    '        <h2 class="text-3xl font-bold mb-8">Чек-лист необходимости внедрения ИИ-ассистента</h2>\n' +
    '        \n' +
    '        <div class="space-y-4 mb-8">\n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">У нас нет свободного сотрудника, который готов тратить десятки часов на настройку и поддержку готовых шаблонов.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Нужна гарантия, что бот учтёт особенности нашей клиники: направления, филиалы, расписания врачей.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Важно, чтобы бот действительно разгружал администраторов, а не требовал их вмешательства в каждую переписку.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Мы не готовы разбираться в скрытых платежах, плагинах и сложных интеграциях — хочется понятной финансовой модели.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Для нас критично, чтобы данные пациентов хранились в РФ и соответствовали 152-ФЗ/323-ФЗ.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Мы не хотим, чтобы пациенты получали однотипные шаблонные ответы, портящие имидж клиники.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Мы за качество: нанимать фрилансера без опыта и портфолио только из-за низкой цены кажется опасным.</span>\n' +
    '          </label>\n' +
    '          \n' +
    '          <label class="flex items-start gap-3 cursor-pointer">\n' +
    '            <input type="checkbox" class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500">\n' +
    '            <span class="text-slate-700">Важны <b>контроль качества звонков/чатов</b> и неизменно вежливый тон общения 24/7.</span>\n' +
    '          </label>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="bg-teal-50 border border-teal-200 rounded-xl p-6">\n' +
    '          <p class="text-teal-800 font-medium">Если отметили хотя бы один пункт — вам нужно подключить ИИ-ассистента LIVI-PRO</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Process with Infographics -->\n' +
    '  <section id="process" class="py-16 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Как мы работаем</h2>\n' +
    '      <div class="grid md:grid-cols-3 gap-6">\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Бриф и аудит</h3>\n' +
    '          <p class="mt-2 text-slate-600">Интервью, карта процессов, источники обращений, риски.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Создание ИИ-ассистента</h3>\n' +
    '          <p class="mt-2 text-slate-600">Диалоги, маршруты, роли, эскалации, <b>обработка звонков</b>, контроль качества.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Подбор инструментов</h3>\n' +
    '          <p class="mt-2 text-slate-600">Каналы (Telegram/Max/сайт), интеграции (МИС/CRM/телефония), хостинг в РФ.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="grid md:grid-cols-3 gap-6 mt-6">\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Прототип и тест</h3>\n' +
    '          <p class="mt-2 text-slate-600">На реальных диалогах, с корректировками по метрикам.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Запуск и обучение</h3>\n' +
    '          <p class="mt-2 text-slate-600">Плейбуки для персонала (тон общения, эскалации), контрольные списки.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Поддержка и рост</h3>\n' +
    '          <p class="mt-2 text-slate-600">Регулярные релизы, отчёты, A/B‑улучшения, <b>QA-разбор звонков и переписок</b>.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '<!--      <div class="mt-8 text-center">-->\n' +
    '<!--        <a href="#contact" class="inline-block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-2xl font-semibold">Оставить заявку</a>-->\n' +
    '<!--      </div>-->\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Metrics with Enhanced Infographics -->\n' +
    '  <section id="metrics" class="py-16">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Каких результатов добиваемся</h2>\n' +
    '      <div class="grid md:grid-cols-3 gap-6">\n' +
    '        <div class="card rounded-2xl p-6 text-center relative overflow-hidden flex flex-col">\n' +
    '          <!-- Background decoration -->\n' +
    '          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full opacity-50 -mr-10 -mt-10"></div>\n' +
    '          <!-- Icon -->\n' +
    '          <div class="relative z-10 mb-4">\n' +
    '            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center infographic-icon">\n' +
    '              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>\n' +
    '              </svg>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="text-4xl font-extrabold text-teal-600 relative z-10">−15–25%</div>\n' +
    '          <div class="flex-grow flex flex-col justify-between">\n' +
    '            <p class="mt-2 text-slate-600 relative z-10 h-12 flex items-center justify-center">неявок за счёт напоминаний и удобной записи</p>\n' +
    '            <!-- Progress bar -->\n' +
    '            <div class="mt-4 relative z-10">\n' +
    '              <div class="w-full bg-gray-200 rounded-full h-2">\n' +
    '                <div class="bg-gradient-to-r from-teal-500 to-teal-400 h-2 rounded-full progress-bar" style="--progress-width: 75%; width: 75%"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="card rounded-2xl p-6 text-center relative overflow-hidden flex flex-col">\n' +
    '          <!-- Background decoration -->\n' +
    '          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-50 -mr-10 -mt-10"></div>\n' +
    '          <!-- Icon -->\n' +
    '          <div class="relative z-10 mb-4">\n' +
    '            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center infographic-icon">\n' +
    '              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>\n' +
    '              </svg>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="text-4xl font-extrabold text-emerald-600 relative z-10">−20–40%</div>\n' +
    '          <div class="flex-grow flex flex-col justify-between">\n' +
    '            <p class="mt-2 text-slate-600 relative z-10 h-12 flex items-center justify-center">рутинной нагрузки на администраторов</p>\n' +
    '            <!-- Progress bar -->\n' +
    '            <div class="mt-4 relative z-10">\n' +
    '              <div class="w-full bg-gray-200 rounded-full h-2">\n' +
    '                <div class="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2 rounded-full progress-bar" style="--progress-width: 65%; width: 65%"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="card rounded-2xl p-6 text-center relative overflow-hidden flex flex-col">\n' +
    '          <!-- Background decoration -->\n' +
    '          <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full opacity-50 -mr-10 -mt-10"></div>\n' +
    '          <!-- Icon -->\n' +
    '          <div class="relative z-10 mb-4">\n' +
    '            <div class="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center infographic-icon">\n' +
    '              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>\n' +
    '              </svg>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="text-4xl font-extrabold text-cyan-600 relative z-10">+10–30%</div>\n' +
    '          <div class="flex-grow flex flex-col justify-between">\n' +
    '            <p class="mt-2 text-slate-600 relative z-10 h-12 flex items-center justify-center">конверсии обращений в запись</p>\n' +
    '            <!-- Progress bar -->\n' +
    '            <div class="mt-4 relative z-10">\n' +
    '              <div class="w-full bg-gray-200 rounded-full h-2">\n' +
    '                <div class="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full progress-bar" style="--progress-width: 80%; width: 80%"></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      \n' +
    '      <!-- Additional infographic section -->\n' +
    '      <div class="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-8">\n' +
    '        <h3 class="text-xl font-bold text-center mb-8 text-slate-800">Эффективность ИИ-ассистента в цифрах</h3>\n' +
    '        <div class="grid md:grid-cols-4 gap-6">\n' +
    '          <div class="text-center">\n' +
    '            <div class="w-16 h-16 mx-auto mb-3 bg-white rounded-2xl flex items-center justify-center shadow-sm infographic-icon">\n' +
    '              <span class="text-2xl">🕐</span>\n' +
    '            </div>\n' +
    '            <div class="text-2xl font-bold text-teal-600">24/7</div>\n' +
    '            <p class="text-sm text-slate-600">работа без выходных</p>\n' +
    '          </div>\n' +
    '          <div class="text-center">\n' +
    '            <div class="w-16 h-16 mx-auto mb-3 bg-white rounded-2xl flex items-center justify-center shadow-sm infographic-icon">\n' +
    '              <span class="text-2xl">⚡</span>\n' +
    '            </div>\n' +
    '            <div class="text-2xl font-bold text-teal-600">&lt;30сек</div>\n' +
    '            <p class="text-sm text-slate-600">время ответа</p>\n' +
    '          </div>\n' +
    '          <div class="text-center">\n' +
    '            <div class="w-16 h-16 mx-auto mb-3 bg-white rounded-2xl flex items-center justify-center shadow-sm infographic-icon">\n' +
    '              <span class="text-2xl">💬</span>\n' +
    '            </div>\n' +
    '            <div class="text-2xl font-bold text-teal-600">1000+</div>\n' +
    '            <p class="text-sm text-slate-600">диалогов в месяц</p>\n' +
    '          </div>\n' +
    '          <div class="text-center">\n' +
    '            <div class="w-16 h-16 mx-auto mb-3 bg-white rounded-2xl flex items-center justify-center shadow-sm infographic-icon">\n' +
    '              <span class="text-2xl">📈</span>\n' +
    '            </div>\n' +
    '            <div class="text-2xl font-bold text-teal-600">95%</div>\n' +
    '            <p class="text-sm text-slate-600">точность ответов</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      \n' +
    '      <p class="mt-6 text-xs text-slate-400 text-center">Фактические показатели считаются после пилота, зависят от специализации и каналов.</p>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Interactive Charts Section -->\n' +
    '  <section id="charts" class="py-16 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Эффект внедрения</h2>\n' +
    '      \n' +
    '      <!-- Metrics Comparison Chart -->\n' +
    '      <div class="grid lg:grid-cols-2 gap-8 mb-12">\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="text-xl font-semibold mb-6 text-center">Сравнение: До и После внедрения ИИ</h3>\n' +
    '          <div class="relative h-64">\n' +
    '            <canvas id="comparisonChart"></canvas>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        \n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <h3 class="text-xl font-semibold mb-6 text-center">Распределение нагрузки</h3>\n' +
    '          <div class="relative h-64">\n' +
    '            <canvas id="workloadChart"></canvas>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      \n' +
    '      <!-- Timeline Chart -->\n' +
    '      <div class="card rounded-2xl p-6 mb-8">\n' +
    '        <h3 class="text-xl font-semibold mb-6 text-center">Динамика внедрения ИИ-ассистента</h3>\n' +
    '        <div class="relative h-80">\n' +
    '          <canvas id="timelineChart"></canvas>\n' +
    '        </div>\n' +
    '        <div class="mt-6 bg-slate-50 rounded-xl p-4">\n' +
    '          <div class="space-y-2 text-sm text-slate-600">\n' +
    '            <div class="flex items-start gap-2">\n' +
    '              <div class="w-3 h-3 bg-teal-500 rounded-full mt-1 flex-shrink-0"></div>\n' +
    '              <p><strong>Количество обработанных обращений</strong> — сколько звонков и сообщений ИИ-ассистент обрабатывает самостоятельно каждый месяц (без участия администраторов)</p>\n' +
    '            </div>\n' +
    '            <div class="flex items-start gap-2">\n' +
    '              <div class="w-3 h-3 bg-emerald-500 rounded-full mt-1 flex-shrink-0"></div>\n' +
    '              <p><strong>Процент автоматизации</strong> — какая доля от всех обращений полностью решается ИИ-ассистентом (от записи на приём до напоминаний)</p>\n' +
    '            </div>\n' +
    '            <div class="mt-3 p-3 bg-teal-50 rounded-lg border-l-4 border-teal-500">\n' +
    '              <p class="text-sm text-teal-800"><strong>Вывод:</strong> Первые 2-3 месяца ИИ учится и адаптируется под вашу клинику. К 6 месяцу он обрабатывает 1800+ обращений и автоматизирует 90% рутинных задач.</p>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      \n' +
    '      <!-- ROI Calculator -->\n' +
    '      <div class="card rounded-2xl p-6">\n' +
    '        <h3 class="text-xl font-semibold mb-6 text-center">Калькулятор выгоды</h3>\n' +
    '        <div class="grid md:grid-cols-2 gap-6">\n' +
    '          <div class="space-y-4">\n' +
    '            <div>\n' +
    '              <label class="block text-sm font-medium text-slate-700 mb-2">Количество администраторов</label>\n' +
    '              <input type="range" id="adminSlider" min="1" max="10" value="2" class="w-full">\n' +
    '              <span id="adminValue" class="text-sm text-slate-600">2</span>\n' +
    '            </div>\n' +
    '            <div>\n' +
    '              <label class="block text-sm font-medium text-slate-700 mb-2">Средняя зарплата администратора</label>\n' +
    '              <input type="range" id="salarySlider" min="30000" max="100000" value="50000" step="5000" class="w-full">\n' +
    '              <span id="salaryValue" class="text-sm text-slate-600">50 000 ₽</span>\n' +
    '            </div>\n' +
    '            \n' +
    '            <!-- IT Specialist Checkbox -->\n' +
    '            <div class="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">\n' +
    '              <label class="flex items-start gap-3 cursor-pointer">\n' +
    '                <input type="checkbox" id="itSpecialistCheckbox" checked class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500 cursor-pointer">\n' +
    '                <div class="flex-1">\n' +
    '                  <div class="text-sm font-medium text-slate-700 mb-1">У нас нет штатного IT-специалиста</div>\n' +
    '                </div>\n' +
    '              </label>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">\n' +
    '            <h4 class="font-semibold text-lg mb-4">Выгода в месяц:</h4>\n' +
    '            <div class="text-3xl font-bold text-teal-600" id="savingsAmount">125 000 ₽</div>\n' +
    '            <p class="text-sm text-slate-600 mt-2">За счёт автоматизации 30% рутинных задач</p>\n' +
    '            \n' +
    '            <!-- IT Specialist Savings -->\n' +
    '            <div id="itSpecialistSavingsBlock" class="mt-4 p-4 bg-white rounded-lg border border-teal-200 transition-all duration-300">\n' +
    '              <div class="flex items-center justify-between mb-2">\n' +
    '                <span class="text-sm font-medium text-slate-700">IT-специалист не нужен</span>\n' +
    '                <span class="text-lg font-bold text-emerald-600" id="itSpecialistAmount">100 000 ₽</span>\n' +
    '              </div>\n' +
    '              <p class="text-xs text-slate-500">LIVI-PRO берёт на себя интеграции, обновления и ведение проекта</p>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="mt-4 pt-4 border-t border-slate-200">\n' +
    '              <div class="text-sm text-slate-600">\n' +
    '                <div>Окупаемость: <span class="font-semibold">1-2 месяца</span></div>\n' +
    '                <div>Выгода в год: <span class="font-semibold text-teal-600" id="yearSavings">1 500 000 ₽</span></div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Compliance -->\n' +
    '  <section id="compliance" class="py-16 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4">\n' +
    '      <h2 class="text-3xl font-bold mb-10 text-center">Безопасность и соблюдение закона в РФ</h2>\n' +
    '      <div class="grid md:grid-cols-3 gap-6">\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Правовая база</h3>\n' +
    '          <p class="mt-2 text-slate-600">Работаем по 152‑ФЗ «О персональных данных», 323‑ФЗ «Об охране здоровья граждан», 149‑ФЗ «Об информации».</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Локализация и защита</h3>\n' +
    '          <p class="mt-2 text-slate-600">Хранение данных пациентов только на серверах в РФ, шифрование, HTTPS, разграничение доступов, аудит действий. <b>Записи звонков и транскрипты</b> доступны только уполномоченным лицам.</p>\n' +
    '        </div>\n' +
    '        <div class="card rounded-2xl p-6">\n' +
    '          <div class="w-12 h-12 mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">\n' +
    '            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">\n' +
    '              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>\n' +
    '            </svg>\n' +
    '          </div>\n' +
    '          <h3 class="font-semibold">Политика конфиденциальности</h3>\n' +
    '          <p class="mt-2 text-slate-600">Отдельные согласия, режим конфиденциальности, доступ только уполномоченным лицам. NDA и раздельные контуры тест/прод.</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <p class="mt-4 text-sm text-slate-500">Юридически оформляем роль оператора/порученного оператора ПДн. \n' +
    '        <a href="policy.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 font-medium">Политика обработки ПД</a>, \n' +
    '        <a href="privacy.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 font-medium">Согласие на обработку ПД</a> и \n' +
    '        <a href="oferta.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 font-medium">Лицензионный договор</a> доступны на отдельных страницах.\n' +
    '      </p>\n' +
    '<!--      <div class="mt-8 text-center">-->\n' +
    '<!--        <a href="#contact" class="inline-block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-2xl font-semibold">Оставить заявку</a>-->\n' +
    '<!--      </div>-->\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <!-- Pricing Section -->\n' +
    '<!--  <section id="pricing" class="py-16 bg-slate-50">-->\n' +
    '<!--    <div class="max-w-4xl mx-auto px-4 text-center">-->\n' +
    '<!--      <div class="card rounded-2xl p-8">-->\n' +
    '<!--        <h2 class="text-2xl font-bold mb-3">Стоимость тарифа от<br>10 000р. в месяц</h2>-->\n' +
    '<!--        <p class="text-base text-slate-600 mb-5">Оставьте заявку, чтобы рассчитать стоимость ИИ-ассистента под задачи вашей клиники</p>-->\n' +
    '<!--        <a href="#contact" class="inline-block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-2xl font-semibold text-sm">Рассчитать стоимость</a>-->\n' +
    '<!--      </div>-->\n' +
    '<!--    </div>-->\n' +
    '<!--  </section>-->\n' +
    '\n' +
    '  <!-- Contact / Audit Request -->\n' +
    '<!--  <section id="contact" class="py-16">-->\n' +
    '<!--    <div class="max-w-2xl mx-auto px-4">-->\n' +
    '<!--      <form id="lead-form" class="grid gap-4 bg-white p-6 rounded-2xl card">-->\n' +
    '<!--        <div class="grid md:grid-cols-2 gap-4">-->\n' +
    '<!--          <input name="name" required placeholder="Имя" class="border rounded-xl px-4 py-3" />-->\n' +
    '<!--          <input name="role" required placeholder="Должность" class="border rounded-xl px-4 py-3" />-->\n' +
    '<!--        </div>-->\n' +
    '<!--        <input name="clinic" required placeholder="Клиника" class="border rounded-xl px-4 py-3" />-->\n' +
    '<!--        <div class="grid md:grid-cols-2 gap-4">-->\n' +
    '<!--          <input name="phone" required type="tel" placeholder="Телефон" class="border rounded-xl px-4 py-3" />-->\n' +
    '<!--          <input name="email" required type="email" placeholder="Email" class="border rounded-xl px-4 py-3" />-->\n' +
    '<!--        </div>-->\n' +
    '<!--        <textarea name="pain" placeholder="Кратко опишите текущие боли/цели" class="border rounded-xl px-4 py-3 min-h-[120px]"></textarea>-->\n' +
    '\n' +
    '<!--        &lt;!&ndash; Consent &ndash;&gt;-->\n' +
    '<!--        <label class="flex items-start gap-3 text-sm text-slate-700 cursor-pointer">-->\n' +
    '<!--          <input id="consent" type="checkbox" required class="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500 cursor-pointer">-->\n' +
    '<!--          <span>-->\n' +
    '<!--            Я соглашаюсь с условиями <a href="privacy.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 font-medium">обработки персональных данных</a> и подтверждаю ознакомление с политикой в соответствии с требованиями 152‑ФЗ и 323‑ФЗ. Данные хранятся на серверах в РФ.-->\n' +
    '<!--          </span>-->\n' +
    '<!--        </label>-->\n' +
    '<!--        <div class="text-xs text-slate-500 pl-8">-->\n' +
    '<!--          По вопросам обработки персональных данных: <a href="mailto:info@livi-pro.ru" class="text-teal-600 underline hover:text-teal-700">info@livi-pro.ru</a>-->\n' +
    '<!--        </div>-->\n' +
    '<!--        <input type="hidden" name="consent_at" id="consent_at">-->\n' +
    '<!--        <input type="hidden" name="policy_version" value="2025-08-19">-->\n' +
    '\n' +
    '<!--        <button id="submitBtn" class="bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-600 text-white px-6 py-3 rounded-2xl font-semibold">-->\n' +
    '<!--          Отправить-->\n' +
    '<!--        </button>-->\n' +
    '<!--        <p class="text-xs text-slate-500">Мы используем предоставленные данные исключительно для оценки проекта. Никаких рассылок без вашего согласия.</p>-->\n' +
    '<!--      </form>-->\n' +
    '<!--    </div>-->\n' +
    '<!--  </section>-->\n' +
    '\n' +
    '  <!-- Footer -->\n' +
    '  <footer class="py-10 bg-slate-50">\n' +
    '    <div class="max-w-6xl mx-auto px-4 text-sm text-slate-500">\n' +
    '      <div class="text-center">\n' +
    '        <div class="mb-4">© <span id="y"></span> LIVI-PRO</div>\n' +
    '        <div class="flex flex-wrap justify-center gap-4 text-sm">\n' +
    '          <a href="#why" class="hover:text-teal-600 transition-colors duration-200">Почему выбирают нас</a>\n' +
    '          <a href="#process" class="hover:text-teal-600 transition-colors duration-200">Процесс</a>\n' +
    '          <a href="#charts" class="hover:text-teal-600 transition-colors duration-200">Графики</a>\n' +
    '          <a href="#compliance" class="hover:text-teal-600 transition-colors duration-200">Закон</a>\n' +
    '          <a href="policy.html" target="_blank" class="hover:text-teal-600 transition-colors duration-200">Политика</a>\n' +
    '          <a href="oferta.html" target="_blank" class="hover:text-teal-600 transition-colors duration-200">Договор</a>\n' +
    '<!--          <a href="#contact" class="hover:text-teal-600 transition-colors duration-200">Связаться</a>-->\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <p class="mt-6 text-xs text-center">🔒 Мы обрабатываем данные по 152‑ФЗ, храним их в РФ. \n' +
    '        <a href="policy.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 transition-colors duration-200">Политика обработки ПД</a> | \n' +
    '        <a href="privacy.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 transition-colors duration-200">Согласие на обработку ПД</a> | \n' +
    '        <a href="oferta.html" target="_blank" class="text-teal-600 underline hover:text-teal-700 transition-colors duration-200">Лицензионный договор</a>\n' +
    '      </p>\n' +
    '    </div>\n' +
    '  </footer>\n' +
    '\n' +
    '  <!-- Telegram кнопка -->\n' +
    '  <a href="https://t.me/Livi_pro_bot" target="_blank" class="telegram-btn" title="Написать в Telegram">\n' +
    '    <svg class="telegram-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
    '      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>\n' +
    '    </svg>\n' +
    '  </a>\n');

const tailwindcssScriptLoaded = ref<boolean>(false);
const jsdelivrScriptLoaded = ref<boolean>(false);

const addHomeScript = () => {
  const scriptUrl = '/scripts/home.js';
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);
};

useHead({
  meta: [
    {
      property: 'og:title',
      content: 'LIVI-PRO Platform - Управление ИИ-ассистентами',
    },
    {
      property: 'og:description',
      content: 'Платформа для управления ИИ-ассистентами в медицинских учреждениях',
    },
  ],
  script: [
    {
      src: 'https://cdn.tailwindcss.com',
      onload: () => {
        tailwindcssScriptLoaded.value = true;
      },
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/chart.js',
      onload: () => {
        jsdelivrScriptLoaded.value = true;
      },
    },
  ],
});

watch(tailwindcssScriptLoaded, (val: boolean) => {
  if (val && jsdelivrScriptLoaded.value) {
    addHomeScript();
  }
});
watch(jsdelivrScriptLoaded, (val: boolean) => {
  if (val && tailwindcssScriptLoaded.value) {
    addHomeScript();
  }
});
</script>

<style lang="scss">
@use "../assets/styles/home";
</style>
