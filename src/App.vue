<script setup lang="ts">
import { SideMenu } from "~/components";

function clickout(e) {
  console.log('clickout', e)
}
</script>

<template>
  <SideMenu
    @clickout="clickout"
    :menu="{0:{name:'Verifications',icon:'EyeIcon',current:true,expanded:true,children:{0:{name:'Status',href:'#',current:false},1:{name:'Users',href:'#',current:false},2:{name:'Repayments Due',href:'#',current:false},3:{name:'Quiz Questions',href:'#',current:false},4:{name:'Record Type',href:'#',current:false},5:{name:'Lazada Email',href:'#',current:false},6:{name:'Upload Credit Limit',href:'#',current:false},7:{name:'Upload BIR',href:'#',current:false},8:{name:'Upload Tags',href:'#',current:false}}},1:{name:'Collections',icon:'QueueListIcon',href:'#',current:false,expanded:false,children:{0:{name:'Status',href:'#',current:false},1:{name:'Users',href:'#',current:false},2:{name:'Repayments Due',href:'#',current:false},3:{name:'Quiz Questions',href:'#',current:false},4:{name:'Record Type',href:'#',current:false},5:{name:'Lazada Email',href:'#',current:false},6:{name:'Upload Credit Limit',href:'#',current:false},7:{name:'Upload BIR',href:'#',current:false},8:{name:'Upload Tags',href:'#',current:false}}},2:{name:'3rd Party',icon:'QueueListIcon',href:'#',current:false,expanded:false,children:{0:{name:'Status',href:'#',current:false},1:{name:'Users',href:'#',current:false},2:{name:'Repayments Due',href:'#',current:false},3:{name:'Quiz Questions',href:'#',current:false},4:{name:'Record Type',href:'#',current:false},5:{name:'Lazada Email',href:'#',current:false},6:{name:'Upload Credit Limit',href:'#',current:false},7:{name:'Upload BIR',href:'#',current:false},8:{name:'Upload Tags',href:'#',current:false}}},3:{name:'Event',icon:'QueueListIcon',href:'#',current:false,expanded:false,children:{0:{name:'Status',href:'#',current:false},1:{name:'Users',href:'#',current:false},2:{name:'Repayments Due',href:'#',current:false},3:{name:'Quiz Questions',href:'#',current:false},4:{name:'Record Type',href:'#',current:false},5:{name:'Lazada Email',href:'#',current:false},6:{name:'Upload Credit Limit',href:'#',current:false},7:{name:'Upload BIR',href:'#',current:false},8:{name:'Upload Tags',href:'#',current:false}}}}"
  />
</template>
