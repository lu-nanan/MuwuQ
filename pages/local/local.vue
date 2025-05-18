<template>
	<view class="content">
		<ss-upload ref="ssUpload" width="260rpx" height="100rpx" @getFile="getFile" @uploadSuccess="uploadSuccess"
			:uploadOptions="uploadOptions" :isUploadServer="isUploadServer" :webviewStyle="webviewStyle"
			:fileInput="fileInput">
			<image class="background-image" src="/static/7_E}6DMMKB]MN90($703355_tmb.png" mode="heightFix" @click="uploadFile"></image>
		</ss-upload>
	</view>

</template>

	<script>
		export default {
			data() {
				return {
					message: '',
					fileLists: null,
					files: [],
					filesApp: '',
					isUploadServer: true,
					uploadOptions: {
						// 上传服务器地址，此地址需要替换为你的接口地址
						url: 'https://45a0c5de.r21.cpolar.top/file/upload', //仅为示例，非真实的接口地址,
						//请求方式，get,post
						type: 'post',
						// 上传附件的key
						name: 'file',
						// 根据你接口需求自定义请求头
						header: {
							'Accept': 'application/json'
						},
						// 根据你接口需求自定义body参数
						formData: {
							userId: getApp().globalData.userInfo.id
						}
					},
					webviewStyle: {
						height: '50px',
						width: '130px',
						position: 'static',
						background: 'transparent',
						top: '50px',
						left: '24px',
					},
					fileInput: { //设置app端html里面input样式与内容
						fileStyle: {
							borderRadius: '10px',
							backgroundColor: '#1975F7',
							color: '#fff',
							fontSize: '20px',
						},
						fileTitle: '上传附件'
					},
					result: ''
				};
			},
			methods: {
				scrolltolower() {
					console.log(145623)
					this.$refs.ssUpload.hide();
					setTimeout(() => {
						this.$refs.ssUpload.show();
					})
				},
				uploadFile() {
					console.log(getApp().globalData.userInfo.id)
					//#ifdef H5 || MP-WEIXIN
					setTimeout(() => {
						this.$refs.ssUpload.uploadFile()
					})
					// #endif
					
						uni.showToast({
						  title: '加载中...',
						  icon: 'loading',
						  duration: 30000, // 防止长时间请求导致提示自动消失
						  mask: true // 显示遮罩层，防止用户操作
						});
				},
				//获取文件
				getFile(result) {
					console.log('结果结果结果', result)
					//#ifdef H5 || MP-WEIXIN
					this.files = result.tempFiles
					// #endif
					// #ifdef APP-PLUS
					this.filesApp = result
					// #endif
				},
				uploadSuccess(result) {
					uni.hideToast();
					console.log('上传服务器后端返回结果', result) //后期取值可以在这里做操作
					this.result = JSON.stringify(result)
					const fileInfo = result[0]; // 获取数组中的对象
					const currentInput=fileInfo.filePath;
					const tag= fileInfo.tag || '工作';
					uni.showModal({
						title: '确认保存路径,输入不存在路径会新建文件夹',
						content: currentInput,
						editable: true, // 启用输入框
						confirmText: '确认',
						cancelText: '修改标签',
						success: (res) => {
							if (res.confirm) {
								const newString = res.content.trim();
								if (!newString) {
									// 输入为空，提示并重新显示输入框
									uni.showToast({
										title: '输入不能为空',
										icon: 'none'
									});
									this.showInputModal(currentInput); // 保留当前输入
									return;
								
								}
								// 输入有效，执行修改逻辑
								console.log(tag);
								
								console.log(currentInput);
								this.targetString = newString;
								
									uni.showToast({
									  title: '加载中...',
									  icon: 'loading',
									  duration: 30000, // 防止长时间请求导致提示自动消失
									  mask: true // 显示遮罩层，防止用户操作
									});
								uni.request({
									url: 'https://45a0c5de.r21.cpolar.top/file/check',
									method: 'POST', // 修改请求方法为POST
										header: {
											'Accept': 'application/json',
											'Content-Type': 'application/x-www-form-urlencoded' // POST请求传递表单参数时建议使用此格式
										},
										data: {
											userId: getApp().globalData.userInfo.id, // 示例用户ID，需替换为实际值
											tag: tag, // 示例标签，需替换为实际值
											path: currentInput // 示例路径，需替换为实际值
										},
									success: (res) => {
										uni.hideToast();
										console.log('1',res)
										console.log('2',res.data)
										console.log('3',res.data.suggest)
										const suggest = res.data.suggest;
										uni.showToast({
											icon:'success'
										});
										console.log(suggest)
										if(suggest){
											
											console.log('4',suggest);
											uni.showModal({
												title:'AI给出建议',
												content:suggest,
												success:(res) =>{
													let sure=false;
													if(res.confirm){
														sure=true;
													}
													console.log(sure);
													
														uni.showToast({
														  title: '加载中...',
														  icon: 'loading',
														  duration: 30000, // 防止长时间请求导致提示自动消失
														  mask: true // 显示遮罩层，防止用户操作
														});
													uni.request({
														url: 'https://45a0c5de.r21.cpolar.top/file/suggest',
														method: 'GET', // 修改请求方法为POST
															header: {
																'Accept': 'application/json',
															},
															data: {
																accept: sure,
																userId: getApp().globalData.userInfo.id, // 示例用户ID，需替换为实际值
																 // 示例标签，需替换为实际值
																filePath: currentInput // 示例路径，需替换为实际值
															},
															success: (res) => {
																uni.hideToast();
																uni.showToast({
																	icon:'success'
																});
																console.log(res);
																console.log(res.data)
																console.log(res.data.text);
																const text=res.data.text;
																uni.showModal({
																  title: '结果',
																  content: res.data.text, // 假设 res.data.text 是需要显示的内容
																  confirmText: '复制',
																  cancelText: '分享',
																  success: (modalRes) => { // 重命名参数避免冲突
																    if (modalRes.confirm) {
																      // 用户点击了"复制"按钮
																      const textToCopy = res.data.text; // 从外层 res 中获取需要复制的文本
																      console.log('复制的文本:', textToCopy);
																      
																      uni.setClipboardData({
																        data: textToCopy,
																        success: () => {
																          uni.showToast({
																            title: '复制成功',
																            icon: 'success'
																          });
																        },
																        fail: (err) => {
																          console.error('复制失败:', err);
																          uni.showToast({
																            title: '复制失败',
																            icon: 'none'
																          });
																        }
																      });
																    } else if (modalRes.cancel) {
																      // 用户点击了"分享"按钮
																      console.log('用户选择分享');
																      // 这里添加分享逻辑
																    }
																  }
																});
																},
																fail: (err) => {
																	if (err.errMsg.includes('request:fail')) {
																		this.message = err.errMsg + ' ' + err.statusCode;
																	} else {
																		this.message = `连接失败，错误信息：${err.errMsg}`;
																	}
																}
													});
												}
											});
										}
									},
									fail: (err) => {
										if (err.errMsg.includes('request:fail')) {
											this.message = err.errMsg + ' ' + err.statusCode;
										} else {
											this.message = `连接失败，错误信息：${err.errMsg}`;
										}
									}
								})
							}
						}
					});
				}
			}
		};
	</script>


<style>
.content {
	display: flex;
	flex-direction: column;
  background-color: #8D8DC1;
  width: 100%;
  height: 100%;
}
.background-image {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 1;
	}
</style>