import Vue from 'vue'
import {AIHorde} from "@/libs/ai_horde";

declare module 'vue/types/vue' {
    interface Vue {
        $aiHorde: AIHorde
    }
}
