<template>
	<view class="content">
		<myNavagationBar></myNavagationBar>
		<mySearchInput style="margin-top:15% ;"></mySearchInput>
		<spaceUsageDisplay></spaceUsageDisplay>
		<cloudFileList></cloudFileList>
	</view>

</template>

<script>
	import myNavagationBar from '@/components/myNavigationBar.vue'
	import mySearchInput from '@/components/mySearchInput.vue'
	import spaceUsageDisplay from '@/components/spaceUsageDisplay.vue'
	import cloudFileList from '@/components/cloudFileList.vue'
	
	
	export default {
		data() {
			return {
				
			}
		},
		// computed: {
		// 	// 根据搜索文本和当前文件类型筛选文件
		// 	filteredFiles() {
		// 		return this.files.filter(file => {
		// 			// 搜索文本过滤
		// 			const matchSearch = this.searchText === '' ||
		// 				file.name.toLowerCase().includes(this.searchText.toLowerCase());

		// 			// 文件类型过滤
		// 			const matchType = this.currentFile === '文件类型' ||
		// 				this.currentFile === '所有文件' ||
		// 				file.type === this.currentFile;

		// 			return matchSearch && matchType;
		// 		});
		// 	}
		// },
		methods: {

		},
		components: {
			myNavagationBar,
			mySearchInput,
			spaceUsageDisplay,
			cloudFileList,
		}
	}
</script>


<style>
.content {
  background-color: #8D8DC1;
  width: 100%;
  height: 100%;
}

</style>