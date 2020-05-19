// pages/guanlian/guanlian.js
const app = getApp()
import qqVideo from "../../utils/qqVideo.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        space: app.globalData.space,
        video1: '',
        video2: '',
        video2Obj: {},
        video3: '',
        video3Obj: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadVideos()

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    loadVideos() {
        const that = this;
        wx.request({
            url: app.globalData.api + '/api/get_video',
            method: 'POST',
            dataType: 'json',
            responseType: 'text',
            success: res => {
                console.log(res)
                if (res.statusCode == '200') {
                    let video1Obj = res.data[0];
                    let video2Obj = res.data[1];
                    let video3Obj = res.data[2];

                    qqVideo.getVideoes(video1Obj.set[0].vid).then(function (response) {
                        console.log(response)
                        that.setData({
                            video1: response[0]
                        })
                    })
                    qqVideo.getVideoes(video2Obj.set[0].vid).then(function (response) {
                        console.log(response)
                        that.setData({
                            video2: response[0]
                        })
                    })
                    qqVideo.getVideoes(video3Obj.set[0].vid).then(function (response) {
                        that.setData({
                            video3: response[0]
                        })
                    })
                    that.setData({
                        video2Obj: video2Obj,
                        video3Obj: video3Obj,
                    })
                    
                }
            }
        })
    }

})