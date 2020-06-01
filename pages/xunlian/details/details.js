let detailId = undefined;
const app = getApp()
const utilTools = require('../../../utils/util')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        richContent: '',
        title: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        detailId = options.id;
        this.loadDetails()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    loadDetails() {
        wx.showLoading({
            title: '加载中',
            mask: true,
        })
        const that = this;
        wx.request({
            url: app.globalData.api + '/api/get_article_detail',
            method: 'GET',
            data: {
                id: detailId
            },
            dataType: 'json',
            responseType: 'text',
            success: res => {
                if (res.statusCode == '200') {
                    that.setData({
                        richContent: utilTools.escape2Html(res.data.content),
                        title: res.data.title
                    });

                }
            },
            complete: res => {
                wx.hideLoading()
            }
        })
    }

})