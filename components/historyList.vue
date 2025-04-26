<template>
	<view>
		<view class="file-list-container">
			<scroll-view scroll-y="true" class="file-scroll-view">
				<view v-for="(file, index) in files" :key="index">
					<historyListItem :file="file" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import historyListItem from '@/components/historyListItem.vue'

	export default {
		data() {
			return {
				// 示例文件数据
				files: [
					{
						name: '文件夹1',
						date: '2024-12-01',
						size: '1.22G',
						type: '文件夹',
						selected: false
					},
					{
						name: '文件夹2',
						date: '2024-12-01',
						size: '1.22G',
						type: '文件夹',
						selected: false
					},
					{
						name: '旅行照片',
						date: '2024-11-28',
						size: '5.6M',
						type: '图片',
						selected: false
					},
					{
						name: '工作报告',
						date: '2024-11-25',
						size: '2.3M',
						type: '文档',
						selected: false
					},
					{
						name: '会议视频',
						date: '2024-11-20',
						size: '156M',
						type: '视频',
						selected: false
					},
					{
						name: '语音备忘录',
						date: '2024-11-18',
						size: '3.2M',
						type: '音频',
						selected: false
					},
					{
						name: '项目计划书',
						date: '2024-11-15',
						size: '1.8M',
						type: '文档',
						selected: false
					},
					{
						name: '家庭视频',
						date: '2024-11-10',
						size: '230M',
						type: '视频',
						selected: false
					},
					{
						name: '工作文件夹',
						date: '2024-11-05',
						size: '1.22G',
						type: '文件夹',
						selected: false
					},
					{
						name: '系统备份',
						date: '2024-11-01',
						size: '4.5G',
						type: '文件夹',
						selected: false
					}
				]
			}
		},
		components: {
			historyListItem,
		}
	}
</script>

<style>
.file-list-container {
  flex: 1;
  margin: 0 15px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.file-scroll-view {
  height: 100%;
}
</style>