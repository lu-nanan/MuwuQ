<template>
	<view class="file-item">
		<view class="file-icon">
			<text>馃搫</text>
		</view>

		<!-- 鏂囦欢淇℃伅 -->
		<view class="file-info">
			<text class="file-name">{{ file.name }}</text>
			<view class="file-datesize">
				<text class="file-date">{{ file.date }}</text>
				<text class="file-size">{{ file.size }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["file"]
	}
</script>

<style>
.file-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #f5f5f5;
}
	
.file-icon {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
}

.file-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.file-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.file-datesize{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.file-date {
  font-size: 12px;
  color: #999;
}

.file-size {
  font-size: 14px;
  color: #666;
}
</style>