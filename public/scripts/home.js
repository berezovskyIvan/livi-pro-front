// Год в футере
document.getElementById('y').textContent = new Date().getFullYear();



// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log('Плавная прокрутка для якорных ссылок');
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Управление формой и согласием
// (function() {
//     console.log('Управление формой и согласием');
//     const form = document.getElementById('lead-form');
//     const consent = document.getElementById('consent');
//     const consentAt = document.getElementById('consent_at');
//     const submitBtn = document.getElementById('submitBtn');
//
//     function toggleButton() {
//         submitBtn.disabled = !consent.checked;
//     }
//     toggleButton();
//     consent.addEventListener('change', toggleButton);
//
//     form.addEventListener('submit', function(e) {
//         if (!consent.checked) {
//             e.preventDefault();
//             alert('Пожалуйста, отметьте согласие с политикой обработки персональных данных.');
//             return;
//         }
//         e.preventDefault();
//         consentAt.value = new Date().toISOString();
//
//         // Отправка данных в Telegram
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData.entries());
//
//         // Формируем сообщение для Telegram
//         const message = `🎯 Новая заявка с сайта LIVI-PRO
//
// 👤 Имя: ${data.name}
// 💼 Должность: ${data.role}
// 🏥 Клиника: ${data.clinic}
// 📞 Телефон: ${data.phone}
// 📧 Email: ${data.email}
// 📝 Описание: ${data.pain || 'Не указано'}
// ⏰ Время: ${new Date().toLocaleString('ru-RU')}
// ✅ Согласие: ${data.consent_at}`;
//
//         // Отправляем в Telegram группу
//         const botToken = '8328410397:AAH2elIvS3aIiKwfpBTd17ei7FIHity_d3c';
//         const chatId = '-4987460186'; // ID группы MaxAppLab_Leads
//
//         console.log('Отправляем сообщение:', message);
//         console.log('Chat ID:', chatId);
//         console.log('Bot Token (первые 10 символов):', botToken.substring(0, 10) + '...');
//
//         // Сначала проверяем токен через getMe
//         fetch(`https://api.telegram.org/bot${botToken}/getMe`)
//             .then(res => res.json())
//             .then(botInfo => {
//                 console.log('Bot info:', botInfo);
//                 if (!botInfo.ok) {
//                     throw new Error('Токен бота неверный: ' + (botInfo.description || 'Неизвестная ошибка'));
//                 }
//
//                 // Если токен валиден, отправляем сообщение
//                 return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({
//                         chat_id: chatId,
//                         text: message
//                     })
//                 });
//             })
//             .then(response => {
//                 console.log('Response status:', response.status);
//                 console.log('Response headers:', response.headers);
//                 if (!response.ok) {
//                     return response.json().then(err => {
//                         console.error('Full error response:', err);
//                         throw new Error(JSON.stringify(err));
//                     });
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Telegram API response:', data);
//                 if (data.ok) {
//                     alert('Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
//                     form.reset();
//                     toggleButton();
//                 } else {
//                     console.error('Ошибка отправки:', data);
//                     let errorMsg = 'Неизвестная ошибка';
//                     if (data.error_code === 401) {
//                         errorMsg = 'Ошибка авторизации бота. Проверьте токен и убедитесь, что бот добавлен в группу.';
//                     } else if (data.error_code === 400) {
//                         errorMsg = 'Неверный запрос. Проверьте chat_id и формат сообщения.';
//                     } else if (data.description) {
//                         errorMsg = data.description;
//                     }
//                     alert(`Ошибка отправки: ${errorMsg}. Проверьте консоль для подробностей.`);
//                 }
//             })
//             .catch(error => {
//                 console.error('Ошибка сети или API:', error);
//                 console.error('Error message:', error.message);
//
//                 try {
//                     const errorData = JSON.parse(error.message);
//                     console.error('Parsed error data:', errorData);
//
//                     if (errorData.error_code === 401) {
//                         if (error.message.includes('Токен бота неверный')) {
//                             alert('Ошибка: Токен бота неверный или был отозван. Проверьте токен в @BotFather.');
//                         } else {
//                             alert('Ошибка авторизации: проверьте токен бота и убедитесь, что бот добавлен в группу с правами на отправку сообщений.');
//                         }
//                     } else if (errorData.error_code === 400) {
//                         if (errorData.description && errorData.description.includes('chat not found')) {
//                             alert('Ошибка: Группа не найдена. Проверьте chat_id и убедитесь, что бот добавлен в группу.');
//                         } else {
//                             alert(`Ошибка: ${errorData.description || 'Неверный запрос. Проверьте chat_id и формат сообщения.'}`);
//                         }
//                     } else if (errorData.description) {
//                         alert(`Ошибка: ${errorData.description}. Проверьте консоль для подробностей.`);
//                     } else {
//                         alert(`Ошибка: ${error.message}. Проверьте консоль для подробностей.`);
//                     }
//                 } catch (e) {
//                     // Если ошибка не в формате JSON, показываем сообщение напрямую
//                     if (error.message && error.message.includes('Токен бота неверный')) {
//                         alert(error.message);
//                     } else {
//                         alert('Ошибка сети. Проверьте подключение к интернету. Подробности в консоли.');
//                     }
//                 }
//             });
//     });
// })();

(function () {
    // Color scheme matching the site design
    const colors = {
        teal: 'rgb(20, 184, 166)',
        emerald: 'rgb(16, 185, 129)',
        cyan: 'rgb(6, 182, 212)',
        slate: 'rgb(100, 116, 139)',
        red: 'rgb(239, 68, 68)'
    };

    // Comparison Chart (Before/After)
    const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
    new Chart(comparisonCtx, {
        type: 'bar',
        data: {
            labels: ['Неявки', 'Рутинная нагрузка', 'Конверсия'],
            datasets: [{
                label: 'До внедрения ИИ',
                data: [25, 100, 15],
                backgroundColor: colors.slate + '80',
                borderColor: colors.slate,
                borderWidth: 1
            }, {
                label: 'После внедрения ИИ',
                data: [10, 30, 25],
                backgroundColor: colors.teal + '80',
                borderColor: colors.teal,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Workload Distribution Chart
    const workloadCtx = document.getElementById('workloadChart').getContext('2d');
    new Chart(workloadCtx, {
        type: 'doughnut',
        data: {
            labels: ['ИИ-ассистент', 'Администратор', 'Автоматизация'],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: [
                    '#0d9488', // Более темный teal для ИИ-ассистента
                    '#f59e0b', // Яркий оранжевый для администратора
                    '#ef4444' // Яркий красный для автоматизации
                ],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverBorderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            elements: {
                arc: {
                    borderWidth: 3
                }
            }
        }
    });

    // Timeline Chart
    const timelineCtx = document.getElementById('timelineChart').getContext('2d');
    new Chart(timelineCtx, {
        type: 'line',
        data: {
            labels: ['Месяц 1', 'Месяц 2', 'Месяц 3', 'Месяц 4', 'Месяц 5', 'Месяц 6'],
            datasets: [{
                label: 'Количество обработанных обращений',
                data: [200, 450, 800, 1200, 1500, 1800],
                borderColor: colors.teal,
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointBackgroundColor: colors.teal,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }, {
                label: 'Процент автоматизации',
                data: [10, 25, 45, 65, 80, 90],
                borderColor: colors.emerald,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4,
                yAxisID: 'y1',
                borderWidth: 3,
                pointBackgroundColor: colors.emerald,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgb(100, 116, 139)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(148, 163, 184, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: 'rgb(100, 116, 139)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {
                        color: 'rgb(100, 116, 139)',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // ROI Calculator
    const adminSlider = document.getElementById('adminSlider');
    const salarySlider = document.getElementById('salarySlider');
    const adminValue = document.getElementById('adminValue');
    const salaryValue = document.getElementById('salaryValue');
    const savingsAmount = document.getElementById('savingsAmount');
    const yearSavings = document.getElementById('yearSavings');
    const itSpecialistCheckbox = document.getElementById('itSpecialistCheckbox');
    const itSpecialistSavingsBlock = document.getElementById('itSpecialistSavingsBlock');
    const itSpecialistAmount = document.getElementById('itSpecialistAmount');

    function updateSliderTrack(slider) {
        const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--value', value + '%');
        slider.style.background = `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${value}%, #e2e8f0 ${value}%, #e2e8f0 100%)`;
    }

    function updateCalculator() {
        const admins = parseInt(adminSlider.value);
        const salary = parseInt(salarySlider.value);
        const includeITSpecialist = itSpecialistCheckbox.checked;

        adminValue.textContent = admins;
        salaryValue.textContent = salary.toLocaleString() + ' ₽';

        // Update slider tracks
        updateSliderTrack(adminSlider);
        updateSliderTrack(salarySlider);

        // Fixed automation efficiency of 30%
        const automationEfficiency = 0.3;

        // Calculate savings per admin
        const savingsPerAdmin = Math.round(salary * automationEfficiency);
        const adminSavings = savingsPerAdmin * admins;

        // IT specialist savings (only if checkbox is checked)
        const itSpecialistSavings = includeITSpecialist ? 100000 : 0; // 100,000 RUB per month

        // Total monthly savings (admin savings + IT specialist savings)
        const totalMonthlySavings = adminSavings + itSpecialistSavings;

        // Yearly savings (total monthly savings * 12, including IT specialist if checked)
        const yearlySavings = totalMonthlySavings * 12;

        savingsAmount.textContent = totalMonthlySavings.toLocaleString() + ' ₽';
        yearSavings.textContent = yearlySavings.toLocaleString() + ' ₽';

        // Show/hide IT specialist savings block with smooth animation
        if (includeITSpecialist) {
            itSpecialistSavingsBlock.style.display = 'block';
            itSpecialistSavingsBlock.style.opacity = '1';
            itSpecialistAmount.textContent = '100 000 ₽';
        } else {
            itSpecialistSavingsBlock.style.opacity = '0';
            setTimeout(() => {
                if (!itSpecialistCheckbox.checked) {
                    itSpecialistSavingsBlock.style.display = 'none';
                }
            }, 300);
        }

        // Update efficiency text
        const efficiencyText = document.querySelector('#savingsAmount').nextElementSibling;
        efficiencyText.textContent = `За счёт автоматизации 30% рутинных задач для ${admins} администратор${admins > 1 ? 'ов' : 'а'}`;

        // Update payback period
        const paybackPeriod = includeITSpecialist ? '1-2 месяца' : '2-3 месяца';
        const paybackElement = document.querySelector('#yearSavings').parentElement.previousElementSibling;
        paybackElement.innerHTML = `Окупаемость: <span class="font-semibold">${paybackPeriod}</span>`;
    }

    adminSlider.addEventListener('input', updateCalculator);
    salarySlider.addEventListener('input', updateCalculator);
    itSpecialistCheckbox.addEventListener('change', updateCalculator);

    // Initialize calculator
    updateCalculator();

    // Team Slider functionality
    const slider = document.getElementById('teamSlider');
    const prevBtn = document.getElementById('teamPrevBtn');
    const nextBtn = document.getElementById('teamNextBtn');
    const dotsContainer = document.getElementById('teamDots');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.team-dot') : [];

    if (!slider || !prevBtn || !nextBtn) {
        return;
    }

    let currentSlide = 0;
    const totalSlides = 5;

    function updateSlider() {
        if (!slider) return;

        const translateX = -(currentSlide * 100);
        slider.style.transform = `translateX(${translateX}%)`;
        slider.style.transition = 'transform 0.5s ease-in-out';

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.remove('bg-teal-300/30');
                dot.classList.add('bg-teal-300');
            } else {
                dot.classList.remove('bg-teal-300');
                dot.classList.add('bg-teal-300/30');
            }
        });

        // Keep buttons always enabled for infinite loop
        if (prevBtn) {
            prevBtn.style.opacity = '1';
            prevBtn.disabled = false;
            prevBtn.style.cursor = 'pointer';
        }
        if (nextBtn) {
            nextBtn.style.opacity = '1';
            nextBtn.disabled = false;
            nextBtn.style.cursor = 'pointer';
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Event listeners - improved for better responsiveness
    let isProcessing = false;

    if (nextBtn) {
        nextBtn.addEventListener('click', handleNextClick, {
            passive: false,
            capture: true
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', handlePrevClick, {
            passive: false,
            capture: true
        });
    }

    function handleNextClick(e) {
        if (isProcessing) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isProcessing = true;
        nextSlide();
        setTimeout(() => {
            isProcessing = false;
        }, 300);
        return false;
    }

    function handlePrevClick(e) {
        if (isProcessing) return;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        isProcessing = true;
        prevSlide();
        setTimeout(() => {
            isProcessing = false;
        }, 300);
        return false;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            goToSlide(index);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const sliderContainer = slider ? slider.parentElement : null;

    if (sliderContainer) {
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {
            passive: true
        });

        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {
            passive: true
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }

    // Initialize slider
    updateSlider();
})()
