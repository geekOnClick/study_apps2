<template>
    <button-common class="home" @click="$router.push('/')"
        >На главную</button-common
    >
    <div>
        <div class="calc container">
            <img src="../assets/calc/img/calculator.jpg" class="calcImg" />
            <img
                src="../assets/calc/img/reset.png"
                class="resetBtn"
                @click="reset"
            />
            <p class="operationsInput" v-if="operationInput.length !== 0">
                {{ operationInput }}
            </p>
            <input type="text" class="calcInput" v-model="inputValue" />
            <div class="buttons">
                <button
                    class="buttonCalc"
                    v-for="btn of btns"
                    :key="btn"
                    @click="checkAction"
                >
                    {{ btn }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonCommon from '../components/Posts_components/UI/ButtonCommon.vue';
import { ERROR_TEXT, ACTIONS } from '@/data/constants.js';
export default {
    components: { ButtonCommon },

    data() {
        return {
            num: '',
            secNum: '',
            operation: null,
            result: null,
            action: null,
            inputValue: '',
            operationInput: '',
            btns: [7, 8, 9, '*', 4, 5, 6, '/', 1, 2, 3, '-', 0, '.', '=', '+'],
        };
    },
    methods: {
        calc() {
            if (this.operation == ACTIONS.deduction && this.secNum == 0) {
                this.result = ERROR_TEXT;
            } else {
                this.result = eval(+this.num + this.operation + this.secNum);
            }
            this.showResult();
            this.updateInfoAfterCalc();
        },

        checkAction(event) {
            this.action = event.target.textContent;
            if (
                this.action == ACTIONS.plus ||
                this.action == ACTIONS.minus ||
                this.action == ACTIONS.multiplication ||
                this.action == ACTIONS.deduction
            ) {
                if (this.num.length != 0 && this.secNum.length !== 0) {
                    this.calc();
                }
                this.operation = this.action;
                this.operationInput = `${this.num} ${this.operation}`;
            } else if (this.action === ACTIONS.equals) {
                this.calc();
            } else {
                this.updateNumbers();
            }
        },
        showResult() {
            this.inputValue = this.result;
            this.operationInput = `${this.num}${this.operation}${this.secNum} = `;
        },
        updateInfoAfterCalc() {
            this.num = this.result;
            this.secNum = '';
        },
        reset() {
            this.num = '';
            this.secNum = '';
            this.operation = null;
            this.action = null;
            this.result = null;
            this.inputValue = '';
            this.operationInput = '';
        },
        updateNumbers() {
            switch (this.operation) {
                case null:
                    this.num += this.action;
                    this.inputValue = this.num;
                    break;
                default:
                    this.secNum += this.action;
                    this.inputValue = this.secNum;
            }
        },
    },
};
</script>
<style scoped>
div {
    margin-top: 20px;
}
</style>
