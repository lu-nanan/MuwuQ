<template>
	<!-- #ifdef APP -->
	<scroll-view style="flex:1">
	<!-- #endif -->
	<view style="background-color: #8D8DC1;">
		<mySearchInput style=""></mySearchInput>
		<historyListUvue></historyListUvue>
	</view>
	<!-- #ifdef APP -->
	</scroll-view>
	<!-- #endif -->
</template>

<script>
	
	import mySearchInput from '@/components/mySearchInput.vue'
	import historyListUvue from '../../components/historyList.vue';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			mySearchInput,
			historyListUvue
		}
	}
</script>

<style>

</style>
