<template>
	<view class="content">
		<myNavagationBar></myNavagationBar>
	
		<uni-search-bar class="searchbar" @confirm="search" :focus="false" @blur="blur" @focus="focus" :placeholder= "path"></uni-search-bar>

		<!-- <spaceUsageDisplay></spaceUsageDisplay> -->
		<cloudFileList :files="files" style ="margin-bottom: 12rpx; "></cloudFileList>
		<view>;</view>
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
				path:getApp().globalData.userInfo.id,
				files:[]
			};
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
		created(){
			uni.$on('jump', function(e) {
				console.log('1'+'/'+e)
				this.path=this.path+'//'+e;
				console.log(this.path)
				uni.request({
				    url: 'https://1e2c207f.r21.cpolar.top/file/list',
				    method: 'GET',
				    header: {
				        'Accept': 'application/json',
				        // 注意：GET 请求通常不需要 Content-Type，可删除此行
				        // 'Content-Type': 'application/json'
				    },
				    // 添加查询参数
				    data: {
				        path: this.path,  // 当前浏览路径
				        userId: getApp().globalData.userInfo.id  // 用户ID
				    },
				     success: (res) => {
				            if (res.statusCode === 200) {
				                       this.files = this.formatFileData(res.data);
				                     } else {
				                       console.error('获取文件列表失败：', res.statusCode);
				                     }
									 console.log(this.files)
				        },
				        fail: (err) => {
				            if (err.errMsg.includes('request:fail')) {
				                // 打印失败类型和状态码
				                console.log('请求失败（网络错误）：', err.errMsg, '状态码：', err.statusCode);
				            } else {
				                // 打印其他失败信息
				                console.log('请求失败，错误信息：', err.errMsg);
				            }
							}
				});
			}.bind(this));
			uni.request({
			    url: 'https://1e2c207f.r21.cpolar.top/file/list',
			    method: 'GET',
			    header: {
			        'Accept': 'application/json',
			        // 注意：GET 请求通常不需要 Content-Type，可删除此行
			        // 'Content-Type': 'application/json'
			    },
			    // 添加查询参数
			    data: {
			        path: this.path,  // 当前浏览路径
			        userId: getApp().globalData.userInfo.id  // 用户ID
			    },
			     success: (res) => {
			            if (res.statusCode === 200) {
			                       this.files = this.formatFileData(res.data);
			                     } else {
			                       console.error('获取文件列表失败：', res.statusCode);
			                     }
								 console.log(this.files)
			        },
			        fail: (err) => {
			            if (err.errMsg.includes('request:fail')) {
			                // 打印失败类型和状态码
			                console.log('请求失败（网络错误）：', err.errMsg, '状态码：', err.statusCode);
			            } else {
			                // 打印其他失败信息
			                console.log('请求失败，错误信息：', err.errMsg);
			            }
						}
			});
		},
		methods: {
search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
				uni.request({
				    url: 'https://1e2c207f.r21.cpolar.top/file/search',
				    method: 'GET',
				    header: {
				        'Accept': 'application/json',
				        // 注意：GET 请求通常不需要 Content-Type，可删除此行
				        // 'Content-Type': 'application/json'
				    },
				    // 添加查询参数
				    data: {
				        keyword: res.value,  // 当前浏览路径
				        userId: getApp().globalData.userInfo.id  // 用户ID
				    },
				     success: (res) => {
				            if (res.statusCode === 200) {
				                       this.files = this.formatFileData(res.data);
				                     } else {
				                       console.error('获取文件列表失败：', res.statusCode);
				                     }
									 console.log(this.files)
				        },
				        fail: (err) => {
				            if (err.errMsg.includes('request:fail')) {
				                // 打印失败类型和状态码
				                console.log('请求失败（网络错误）：', err.errMsg, '状态码：', err.statusCode);
				            } else {
				                // 打印其他失败信息
				                console.log('请求失败，错误信息：', err.errMsg);
				            }
							}
				});
			},
			blur(res) {
				uni.showToast({
					title: 'blur事件，输入值为：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus事件，输出值为：' + e.value,
					icon: 'none'
				})
			},
			change(e) {
				console.log('e:', e);
			},
			formatFileData(backendData) {
			      return backendData.map(item => ({
			        name: item.name,
			        date: item.uploadTime 
			          ? new Date(item.uploadTime).toLocaleDateString() 
			          : new Date().toLocaleDateString(),
			        size: item.type === 'directory' 
			          ? '-' 
			          : (item.size ? `${(item.size / 1024).toFixed(2)}KB` : '0B'),
			        type: item.type === 'directory' ? '文件夹' : '文件',
			        selected: false,
			        tag: item.tag || ''
			      }));
			    }
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
	display: flex;
  flex-direction: column;
  background-color: #8D8DC1;
  width: 100%;
  min-height: 100vh;
}

</style>