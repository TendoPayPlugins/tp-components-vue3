/**
 * Register all components here
 */

// Input fields
export {default as InputEmail} from "./Form/Inputs/InputEmail.vue";
export {default as InputNumber} from "./Form/Inputs/InputNumber.vue";
export {default as InputPhoneNumber} from "./Form/Inputs/InputPhoneNumber.vue";
export {default as InputText} from "./Form/Inputs/InputText.vue";
export {default as InputSwitch} from "./Form/Inputs/InputSwitch.vue";
export {default as InputCheckbox} from "./Form/Inputs/InputCheckbox.vue";
export {default as InputCheckboxGroup} from "./Form/Inputs/InputCheckboxGroup.vue";
export {default as InputRadio} from "./Form/Inputs/InputRadio.vue";
export {default as InputCopy} from "./Form/Inputs/InputCopy.vue";
export {default as InputTextarea} from "./Form/Inputs/InputTextarea.vue";
export {default as InputUrl} from "./Form/Inputs/InputUrl.vue";
export {default as InputCurrency} from "./Form/Inputs/InputCurrency.vue";


// Date
export {default as DatePicker} from "./Form/Date/DatePicker.vue";
export {default as DatePrevNextPicker} from "./Form/Date/DatePrevNextPicker.vue";
export {default as DateRangePicker} from "./Form/Date/DateRangePicker.vue";

// Select
export {default as InputSelect} from "./Form/Select/InputSelect.vue";

// Buttons
export {default as FormButton} from "./Form/Buttons/FormButton.vue";
export {default as DropDownActions} from "./Table/DropDownActions.vue";
export {default as Download} from './Form/Buttons/Download.vue';

// Utils
export {default as StepBar} from "./Utils/StepBar.vue";
export {default as Alert} from "./Utils/Alert.vue";
export {default as Modal} from './Utils/Modal.vue';
export {default as Chart} from './Utils/Chart.vue';
export {default as ImageCropper} from "./Utils/ImageCropper.vue";
export {default as ConfirmDialog} from './Utils/ConfirmDialog.vue';
export {default as Copy} from "./Utils/Copy.vue";

// Tabs
export {default as Tabs} from "./Tabs/Tabs.vue";

// Table
export {default as Pagination} from "./Table/Pagination.vue";
export {default as Table} from "./Table/Table.vue";
export {default as Sort} from "./Table/Sort.vue";

// Composables
export { useConfirmDialog } from '../composables/useConfirmDialog';
export { provideConfirmDialog } from '../composables/useConfirmDialog';


// TODO
// export {default as Tooltip} from "./Utils/Tooltip.vue";
// export {default as SelectAutoComplete} from "./Form/Select/SelectAutoComplete.vue";
// export {default as SelectListBox} from "./Form/Select/SelectListBox.vue";
