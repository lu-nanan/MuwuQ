<template>
	<view class="content">
		<tagList></tagList>
	</view>

</template>

<script>
	import tagList from '@/components/tagList.vue'
	
	
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
			tagList,
		}
	}
</script>


<style>
.content {
	display: flex;
	flex-direction: column;
  background-color: #8D8DC1;
  width: 100%;
  height: 100%;
}

</style>