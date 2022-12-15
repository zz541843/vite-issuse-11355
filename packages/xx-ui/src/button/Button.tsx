import {defineComponent, ref} from "vue";
import {NButton} from "naive-ui"

export default defineComponent({
    name: "XButton",
    setup(props, {emit, slots, expose}) {
        return () => {
            return (
                <div>
                    <NButton>我是button</NButton>
                </div>
            );
        };
    }
});
