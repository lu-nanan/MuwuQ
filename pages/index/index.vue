<template>
	<view class="content">
		<myNavagationBar></myNavagationBar>

		<uni-search-bar class="searchbar" @confirm="search" :focus="false" @blur="blur" @focus="focus"
			:placeholder="path"></uni-search-bar>

		<!-- <spaceUsageDisplay></spaceUsageDisplay> -->
		<cloudFileList :files="files" style="margin-bottom: 12rpx; "></cloudFileList>
		<view>
			<QRcodeModel :isShow="isModalShow" :qrcodeUrl="qrcodeUrl" :tipText="qrTip" @close="handleModalClose" />
		</view>
	</view>

</template>

<script>
	import myNavagationBar from '@/components/myNavigationBar.vue'
	import mySearchInput from '@/components/mySearchInput.vue'
	import cloudFileList from '@/components/cloudFileList.vue'
	import QRcodeModel from '@/components/QRcodeModel.vue';


	export default {
		data() {
			return {
				id: getApp().globalData.userInfo.id,
				path: getApp().globalData.userInfo.id,
				files: [],
				isModalShow: false,
				qrcodeUrl: '', // 后端返回的二维码 URL
				qrTip: '扫描二维码登录',
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
		created() {
			uni.$on('jump', function(e) {
				console.log('1' + '/' + e.name + e.type)
				if (e.name === '..') {
					if (this.path != this.id) {
						this.path = this.path.slice(0, this.path.lastIndexOf('/'));
					} else {
						uni.showToast({
							title: '根目录不能再往上了'
						})
					}
				} else {
					this.path = this.path + '/' + e.name;
				}
				console.log(this.path)
				if (e.type === '文件夹') {
					
						uni.showToast({
						  title: '加载中...',
						  icon: 'loading',
						  duration: 30000, // 防止长时间请求导致提示自动消失
						  mask: true // 显示遮罩层，防止用户操作
						});
					uni.request({
						url: 'https://45a0c5de.r21.cpolar.top/file/list',
						method: 'GET',
						header: {
							'Accept': 'application/json',
							// 注意：GET 请求通常不需要 Content-Type，可删除此行
							// 'Content-Type': 'application/json'
						},
						// 添加查询参数
						data: {
							path: this.path, // 当前浏览路径
							userId: getApp().globalData.userInfo.id // 用户ID
						},
						success: (res) => {
							uni.hideToast();
							console.log(this.path)
							if (res.statusCode === 200) {
								this.files = this.formatFileData(res.data);

								const file = {
									name: '..',
									type: '文件夹'
								};
								this.files.push(file);
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
				} else {
					uni.showActionSheet({
						itemList: ['删除', '分享'],
						success: (res) => {
							if (res.tapIndex === 0) {
								// 用户点击了删除按钮
								console.log('用户点击了删除按钮');
								// 在此处添加删除文件的逻辑
							} else if (res.tapIndex === 1) {
								// 用户点击了分享按钮
								console.log('aaaa', e);
								// 在此处添加分享文件的逻辑
								this.showQRCodeModal();
							}

							if (this.path != this.id) {
								this.path = this.path.slice(0, this.path.lastIndexOf('/'));
							}
						},
						fail: (err) => {
							console.error('显示操作菜单失败:', err);
						}
					});
				}
			}.bind(this));
			
				uni.showToast({
				  title: '加载中...',
				  icon: 'loading',
				  duration: 30000, // 防止长时间请求导致提示自动消失
				  mask: true // 显示遮罩层，防止用户操作
				});
			uni.request({
				url: 'https://45a0c5de.r21.cpolar.top/file/list',
				method: 'GET',
				header: {
					'Accept': 'application/json',
					// 注意：GET 请求通常不需要 Content-Type，可删除此行
					// 'Content-Type': 'application/json'
				},
				// 添加查询参数
				data: {
					path: this.path, // 当前浏览路径
					userId: getApp().globalData.userInfo.id // 用户ID
				},
				success: (res) => {
					uni.hideToast();
					if (res.statusCode === 200) {
						this.files = this.formatFileData(res.data);

						const file = {
							name: '..',
							type: '文件夹'
						};
						this.files.push(file);
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
			async showQRCodeModal() {
				
					uni.showToast({
					  title: '加载中...',
					  icon: 'loading',
					  duration: 30000, // 防止长时间请求导致提示自动消失
					  mask: true // 显示遮罩层，防止用户操作
					});
				uni.request({
					url: 'https://45a0c5de.r21.cpolar.top/file/share',
					method: 'GET', // 显式声明GET请求，匹配后端接口
					header: {
						'Accept': 'application/json' // 声明期望JSON响应
					},
					data: {
						path: this.path, // 实际文件路径（需替换为真实变量）
						userId: getApp().globalData.userInfo.id // 用户ID（从全局数据获取）
					},
					success: (res) => {
						uni.hideToast();
						console.log(res)
						if (res.statusCode === 200) {


							this.qrTip = res.data.url;
							this.qrcodeUrl = `data:image/png;base64,${res.data.qrcode}`;
							this.isModalShow = true;
						} else {
							uni.showToast({
								title: '获取二维码失败',
								icon: 'none'
							});
						}
					},
					fail: (err) => {

						console.error('请求失败:', error);
						uni.showToast({
							title: '网络错误',
							icon: 'none'
						});
					}
				});
			},
			handleModalClose() {
				this.isModalShow = false;
			},
			search(res) {
					uni.showToast({
					  title: '加载中...',
					  icon: 'loading',
					  duration: 30000, // 防止长时间请求导致提示自动消失
					  mask: true // 显示遮罩层，防止用户操作
					});
				uni.request({
					url: 'https://45a0c5de.r21.cpolar.top/file/search',
					method: 'GET',
					header: {
						'Accept': 'application/json',
						// 注意：GET 请求通常不需要 Content-Type，可删除此行
						// 'Content-Type': 'application/json'
					},
					// 添加查询参数
					data: {
						keyword: res.value, // 当前浏览路径
						userId: getApp().globalData.userInfo.id // 用户ID
					},
					success: (res) => {
						uni.hideToast();
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
					date: item.uploadTime ?
						new Date(item.uploadTime).toLocaleDateString() :
						new Date().toLocaleDateString(),
					size: item.type === 'directory' ?
						'-' :
						(item.size ? `${(item.size / 1024).toFixed(2)}KB` : '0B'),
					type: item.type === 'directory' ? '文件夹' : '文件',
					selected: false,
					tag: item.tag || ''
				}));
			}
		},
		components: {
			myNavagationBar,
			mySearchInput,
			QRcodeModel,
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