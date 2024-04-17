<template>
    <div class="help-tooltip px-0 py-0">
        aaa {{ positionClass() }}
        <slot name="icon">
            <QuestionMarkCircleIcon />
        </slot>
        <div :class="positionClass">
            <slot>slots to do</slot>
            <i></i>
        </div>
    </div>
</template>

<script setup>
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    position: {
        type: String,
        default: 'top'
    }
})

function positionClass() {
    switch (props.position) {
        case "top":
        case "bottom":
        case "right":
        case "left":
            return props.position;
        default:
            return "right";
    }
}
</script>

<style scoped>
/* @see http://www.menucool.com/tooltip/css-tooltip/ */
.help-tooltip {
    display: inline-block;
    position: relative;
    text-align: left;
}

/* Top */
.help-tooltip .top {
    min-width: 200px;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -100%);
    padding: 10px 20px;
    color: #444444;
    background-color: #eeeeee;
    font-weight: normal;
    font-size: 13px;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: none;
}

.help-tooltip:hover .top {
    display: block;
    z-index: 99999999;
}

.help-tooltip .top i {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 12px;
    overflow: hidden;
}

.help-tooltip .top i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #eeeeee;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

/* Left */
.help-tooltip .left {
    min-width: 200px;
    top: 50%;
    right: 100%;
    margin-right: 20px;
    transform: translate(0, -50%);
    padding: 10px 20px;
    color: #444444;
    background-color: #eeeeee;
    font-weight: normal;
    font-size: 13px;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: none;
}

.help-tooltip:hover .left {
    display: block;
}

.help-tooltip .left i {
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
}

.help-tooltip .left i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background-color: #eeeeee;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

/* Right */
.help-tooltip .right {
    min-width: 200px;
    top: 50%;
    left: 100%;
    margin-left: 20px;
    transform: translate(0, -50%);
    padding: 10px 20px;
    color: #444444;
    background-color: #eeeeee;
    font-weight: normal;
    font-size: 13px;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: none;
}

.help-tooltip:hover .right {
    display: block;
}

.help-tooltip .right i {
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -12px;
    width: 12px;
    height: 24px;
    overflow: hidden;
}

.help-tooltip .right i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0;
    top: 50%;
    transform: translate(50%, -50%) rotate(-45deg);
    background-color: #eeeeee;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

/* Bottom */
.help-tooltip .bottom {
    min-width: 200px;
    top: 40px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px 20px;
    color: #444444;
    background-color: #eeeeee;
    font-weight: normal;
    font-size: 13px;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: none;
}

.help-tooltip:hover .bottom {
    display: block;
}

.help-tooltip .bottom i {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 12px;
    overflow: hidden;
}

.help-tooltip .bottom i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background-color: #eeeeee;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
</style>
