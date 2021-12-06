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
import {ERROR_TEXT} from '@/data/constants.js'
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
            switch (this.operation) {
                case '*':
                    this.result = +this.num * +this.secNum;
                    break;
                case '/':
                    if (this.secNum == 0) {
                        this.result = ERROR_TEXT;
                    } else {
                        this.result = +this.num / +this.secNum;
                    }
                    break;
                case '-':
                    this.result = +this.num - +this.secNum;
                    break;
                case '+':
                    this.result = +this.num + +this.secNum;
            }
            this.makeResult();
        },

        checkAction(event) {
            this.action = event.target.textContent;
            if (
                this.action == '+' ||
                this.action == '-' ||
                this.action == '*' ||
                this.action == '/'
            ) {
                if (this.num.length != 0 && this.secNum.length !== 0) {
                    this.calc();
                }
                this.operation = this.action;
                this.operationInput = `${this.num} ${this.operation}`;
            } else if (this.action === '=') {
                this.calc();
            } else {
                switch (this.operation) {
                    case null:
                        this.num += this.action;
                        this.inputValue = this.num;
                        break;
                    default:
                        this.secNum += this.action;
                        this.inputValue = this.secNum;
                }
            }
        },
        makeResult() {
            this.inputValue = this.result;
            this.operationInput = `${this.num}${this.operation}${this.secNum} = `;
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
    },
};
</script>
<style scoped>
div {
    margin-top: 20px;
}
</style>
