<template>
    <button-common class="home" @click="$router.push('/')"
        >На главную</button-common
    >
    <div class="card container">
        <h1>Интерактивный план стажировки</h1>
        <div class="steps">
            <div class="steps-content">
                {{ activeStep.text }}
            </div>
            <ul class="steps-list">
                <li
                    class="steps-item"
                    v-for="(step, ind) in steps"
                    :key="step"
                    :class="{
                        active: ind === activeIndex,
                        done: ind < activeIndex,
                    }"
                >
                    <span @click="setActive(ind)">{{ ind + 1 }}</span>
                    {{ step.title }}
                </li>
            </ul>
            <div v-if="isActive && isLastStep">
                <button class="btn" @click="prev()" :disabled="isPrevDisabled">
                    Назад
                </button>
                <button class="btn primary" @click="nextOfFinish()">
                    Вперед
                </button>
            </div>
            <div v-if="!isLastStep">
                <button class="btn" @click="reset">Начать заного</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['open1'],
    props: {
          openedMess: {
          required: false,
        },
    },
    data() {
        return {
            activeIndex: 0,
            isActive: true,
            steps: [
                {
                    title: 'Основы',
                    text: 'Прохождение корпоративных тренингов, основы охраны труда и техники безопасности, установка и настройка environment: Node.js, VSCode/WebStorm.',
                },
                {
                    title: 'HTML/CSS/JS',
                    text: 'Закрепление знаний по HTML,CSS, JS, решение задач, Git Command Line, SQL, основные команды. Работа с DevTools',
                },
                {
                    title: 'Основы Vue',
                    text: 'Знакомство с Vue.js изучение возможностей и документации.',
                },
                {
                    title: 'Практика Vue',
                    text: 'Практика с Vue.js, упражнения. Работа с формами, моделями, директивами, стилями. Роутинг. Взаимодействие с сервером. VueX-хранилище.Сотрировка, фильтрация, пагинация, адаптивная верстка.',
                },
                {
                    title: 'Адаптация в компании',
                    text: 'Знакомство со спецификой проекта. Знакомство с модулями и оборудованием',
                },
            ],
        };
    },
    methods: {
        prev() {
            this.activeIndex--;
        },
        reset() {
            this.activeIndex = 0;
            this.isActive = true;
        },
        nextOfFinish() {
            this.activeIndex++;
        },
        setActive(idx) {
            this.activeIndex = idx;
        },
    },
    computed: {
        activeStep() {
            return this.steps[this.activeIndex];
        },
        isPrevDisabled() {
            if (this.activeIndex == 0) return true;
            else {
                return false;
            }
        },
        isLastStep() {
            if (this.activeIndex === this.steps.length - 1) {
                return false;
            } else {
                return true;
            }
        },
    },
};
</script>
