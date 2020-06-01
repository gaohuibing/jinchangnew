// pages/jianlian/jianlian.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        space: app.globalData.space,
        sort: 4,
        page: 1,
        limits: 10,
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.loadList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    loadList() {
        wx.showLoading({
            title: '加载中',
            mask: true,
        })
        const that = this;
        wx.request({
            url: app.globalData.api + '/api/get_article_list',
            method: 'GET',
            data: {
                sort: that.data.sort,
                page: that.data.page,
                limits: that.data.limits
            },
            dataType: 'json',
            responseType: 'text',
            success: res => {
                if (res.statusCode == '200') {
                    if (res.data.data.length) {
                        res.data.data.map(item => {
                            item.created_at = app.$moment(item.created_at).format('YYYY-MM-DD')
                        })
                        console.log(res.data.data)
                        that.setData({
                            list: that.data.list.concat(res.data.data),
                            page: that.data.page + 1
                        })
                    } else {
                        wx.showToast({
                            title: '没有更多了',
                        })
                    }

                }
            },
            complete: res => {
                wx.hideLoading()
            }
        })
    },
    toDetails(e) {
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: './details/details?id=' + id,
        })
    }
})