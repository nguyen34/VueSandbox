import { createStore } from 'vuex';
import sandbox from '@/store/modules/sandbox';



const store = createStore({
    modules: {
        sandbox
    }
});

export default store