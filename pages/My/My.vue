<template>
    <view class="containerall">
        <view class="containerone">
            <text>aaa</text>
            <text>@</text>
        </view>
        <view class="containertwo">
            <text @click="goHistory()">历史</text>
            <text @click="goChangePass()">修改</text>
            <text> 3</text>
        </view>
        <button class="btn-1" @click="testConnection()"> 透出</button>
		<view v-if="message">{{ message }}</view>
    </view>
</template>

<script>
export default {
    data() {
        return {
			message:''
		};
    },
    methods: {
		goHistory(){
			uni.navigateTo({
				url:'/pages/ShareHistory/ShareHistory'
			})
		},
		goChangePass(){
			uni.navigateTo({
				url:'/pages/ChangePass/ChangePass'
			})
		},
		 testConnection() {
		            uni.request({
		                url: 'https://121.41.70.8:8082/getAllUserInfo/getAllUserInfo',
		                method: 'GET',
						    header: {
						        'Accept': 'application/json',
						        'Content-Type': 'application/json'
						    },
		                success: (res) => {
		                    this.message = `连接成功，后端返回状态码：${res.statusCode}`;
		                },
		                fail: (err) => {
		                    if (err.errMsg.includes('request:fail')) {
		                        this.message = err.errMsg + ' '+ err.statusCode;
		                    } else {
		                        this.message = `连接失败，错误信息：${err.errMsg}`;
		                    }
		                }
		            });
					}
					
	}
};
</script>

<style>
/* 设置 containerall 覆盖整个页面 */
.containerall {
    background-color: #8D8DC1;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.containerone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

/* containertwo 占据剩余空间 */
.containertwo {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    margin: 15rpx;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.btn-1 {
    margin: 15rpx;
    border-radius: 12rpx;
	align-self: center;
    width: 33%;
}
</style>    
