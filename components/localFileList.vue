<template>
	<view>
		<view class="file-list-container" >
			<scroll-view scroll-y="true" class="file-scroll-view">
				<view v-for="(file, index) in sortedFiles" :key="index">
					<view :class="{'file-item-container' : file.selected && isBatchModes}" @click="selected(file.name)">
						<localFileListItem class="file-item" :file="file" :checked="isBatchModes" />
					</view>
				</view>
				<button @click="readPublicDirectory()"></button>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import localFileListItem from '@/components/localFileListItem.vue'

	export default {
		data() {
			return {
				isBatchModes: false,
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
						selected: true
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
				],
				
            sortedFiles: []
			}
		},
		components: {
			localFileListItem,
		},
		created() {
			this.getFilesList();
			this.sortedFiles = this.files;
			
			uni.$on('sortedEvent',function(e){
				console.log('aminoac:   ' + e.detail.value);
				if( e.detail.value === 3){
					this.sortedFiles = [...this.files].sort((b, a) => {
					    const sizeA = this.getSizeInMB(a.size);
					    const sizeB = this.getSizeInMB(b.size);
					    return sizeA - sizeB;
					});
				}
				if( e.detail.value === 4){
					this.sortedFiles = [...this.files].sort((a, b) => {
					    const sizeA = this.getSizeInMB(a.size);
					    const sizeB = this.getSizeInMB(b.size);
					    return sizeA - sizeB;
					});
				}
			}.bind(this));
			
			uni.$on('toggleBatchModes', function(e) {
				console.log('监听到事件，携带参数为1：' + e);

				// 如果从 true 变为 false，输出被选中的文件并重置背景色
				if (this.isBatchModes === true && e === false) {
					const selectedFiles = this.files.filter(function(file) {
						return file.selected;
					});
					
					for (let i = 0; i < selectedFiles.length; i++) {
						console.log(selectedFiles[i].name);
					}
					
					for (let i = 0; i < this.files.length; i++) {
						this.files[i].selected = false;
					}
				}

				this.isBatchModes = e;
			}.bind(this));
		},
		methods: {
			getFilesList() {
			    console.log('当前环境:', process.env.VUE_APP_PLATFORM);
			    
			    uni.getSystemInfo({
			        success: (sysInfo) => {
			            console.log('平台信息:', sysInfo);
			            
			            if (sysInfo.platform === 'android') {
			                console.log('检测到 Android 平台');
			                
			                // 检查 plus 对象是否存在
			                if (typeof plus === 'undefined') {
			                    console.error('plus 对象未定义，可能不是 App 环境');
			                    return;
			                }
			                
			                // 检查并请求 MANAGE_EXTERNAL_STORAGE 权限
			                this.checkAndRequestReadPermission();
			            } else if (sysInfo.platform === 'ios') {
			                // iOS 逻辑
			            }
			        },
			        fail: (err) => {
			            console.error('获取系统信息失败', err);
			        }
			    });
			},
			
			checkAndRequestReadPermission() {
			    try {
			        const ContextCompat = plus.android.importClass('androidx.core.content.ContextCompat');
			        const ActivityCompat = plus.android.importClass('androidx.core.app.ActivityCompat');
			        const Manifest = plus.android.importClass('android.Manifest');
			        const mainActivity = plus.android.runtimeMainActivity();
			        
			        // 检查 READ_EXTERNAL_STORAGE 权限
			        const hasReadPermission = ContextCompat.checkSelfPermission(
			            mainActivity,
			            Manifest.permission.READ_EXTERNAL_STORAGE
			        ) === plus.android.importClass('android.content.pm.PackageManager').PERMISSION_GRANTED;
			        
			        console.log('READ_EXTERNAL_STORAGE 权限:', hasReadPermission);
			        
			        if (hasReadPermission) {
			            console.log('权限已获取，继续文件操作');
			            this.readPublicDirectory();
			        } else {
			            console.log('请求 READ_EXTERNAL_STORAGE 权限');
			            ActivityCompat.requestPermissions(
			                mainActivity,
			                [Manifest.permission.READ_EXTERNAL_STORAGE],
			                1001
			            );
			        }
			    } catch (error) {
			        console.error('检查/请求权限时出错:', error);
			        uni.showToast({
			            title: '权限请求失败，请手动授权',
			            icon: 'none',
			            duration: 3000
			        });
			    }
			},
			
			readPublicDirectory() {
			    try {
			           const Build = plus.android.importClass('android.os.Build');
			           const Environment = plus.android.importClass('android.os.Environment');
			           const mainActivity = plus.android.runtimeMainActivity();
			           
			           // 检查权限
			           
			           let downloadDir = null;
			           
			           if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
			               // Android 11+
			               if (Environment.isExternalStorageManager()) {
			                   // 有所有文件访问权限，尝试公共目录
			                   downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
			               } else {
			                   // 没有所有文件访问权限，使用应用专属目录
			                   downloadDir = mainActivity.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
			               }
			           } else {
			               // Android 10 及以下
			               downloadDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS);
			           }
			           
			           if (downloadDir) {
			               const path = plus.android.invoke(downloadDir, 'getPath');
			               console.log('Download 目录路径:', path);
			               
			               // 检查目录是否存在且可读
			               const File = plus.android.importClass('java.io.File');
			               const file = new File(path);
			               
			               if (file.exists() && file.isDirectory() && file.canRead()) {
    const files = plus.android.invoke(file, 'listFiles');
							   console.log('目录中共有', files.length, '个文件/文件夹');
							           
							           // 遍历文件列表
							           const fileList = [];
							           for (let i = 0; i < files.length; i++) {
							               const fileItem = files[i];
							               const fileName = plus.android.invoke(fileItem, 'getName');
							               const isDirectory = plus.android.invoke(fileItem, 'isDirectory');
							               const fileSize = isDirectory ? '文件夹' : this.formatFileSize(plus.android.invoke(fileItem, 'length'));
							               const lastModified = new Date(plus.android.invoke(fileItem, 'lastModified')).toLocaleString();
							               
							               fileList.push({
							                   name: fileName,
							                   isDirectory,
							                   size: fileSize,
							                   lastModified
							               });
							           }
							           
							           console.log('文件列表:', fileList);
							           this.fileList = fileList; // 保存到组件数据中，用于UI展示
			                   return path;
			               } else {
			                   console.log('目录不存在、不可读或不是目录');
			                   return null;
			               }
			           } else {
			               console.log('无法获取 Download 目录');
			               return null;
			           }
			       } catch (error) {
			           console.error('获取 Download 目录时出错:', error);
			           return null;
			       }
			   },
			
			selected(name) {
				if (this.isBatchModes === true) {
					for (let i = 0; i < this.files.length; i++) {
						if (this.files[i].name === name) {
							this.files[i].selected = !this.files[i].selected;
							break;
						}
					}
				}
				
				for (let i = 0; i < this.files.length; i++) {
					if (this.files[i].name === name) {
						console.log(this.files[i].name, this.files[i].selected);
						break;
					}
				}
			},
		        getSizeInMB(sizeStr) {
		            const value = parseFloat(sizeStr.slice(0, -1));
		            const unit = sizeStr.slice(-1).toUpperCase();
		            if (unit === 'G') {
		                return value * 1024;
		            } else if (unit === 'M') {
		                return value;
		            } else {
		                return 0;
		            }
		        },
				 handleFileSelect(event) {
				      const file = event.target.files[0];
				      if (file) {
				        this.selectedFile = file;
				        this.fileName = `已选择文件：${file.name}`;
				      }
				    },
				    async uploadFile() {
				      if (!this.selectedFile) {
				        this.showStatus('请先选择文件', 'error');
				        return;
				      }
				
				      try {
				        this.isUploading = true;
				        this.uploadButtonText = '上传中...';
				        this.statusMessage = '';
				
				        const formData = new FormData();
				        formData.append('file', this.selectedFile);
				
				        const response = await fetch('http://localhost:8082/file/upload', {
				          method: 'POST',
				          body: formData
				        });
				
				        const result = await response.text();
				
				        if (response.ok) {
				          this.showStatus(`上传成功：${result}`, 'success');
				          // 清空文件选择
				          this.$refs.fileInput.value = '';
				          this.selectedFile = null;
				          this.fileName = '';
				        } else {
				          this.showStatus(`上传失败：${result}`, 'error');
				        }
				      } catch (error) {
				        this.showStatus(`请求失败：${error.message}`, 'error');
				      } finally {
				        this.isUploading = false;
				        this.uploadButtonText = '开始上传';
				      }
				    },
				    showStatus(message, type) {
				      this.statusMessage = message;
				      this.statusType = type;
				    }
				
		    }
		};
</script>

<style>
	.file-item {
		width: 90%;
		background-color: #fff;
	}
	
	.file-item-container {
		background-color: #FFD700;
	}
	
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