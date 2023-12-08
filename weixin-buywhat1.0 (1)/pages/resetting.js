Page({
	data: {
		//用户全局信息
		userInfo: {},
		tmap: {
			width: 30,
			height: 30,
			latitude: 41.148,
			longitude: 121.1225,
			markers: [
				{
					id: 0,
					width: 30,
					height: 30,
					latitude: 41.148,
					longitude: 121.1225,
					callout: {
						content: '辽宁工业大学9号楼',
						padding: 10,
						borderRadius: 2,
						display: 'ALWAYS'
					},
					iconPath: '/static/markers.png'
				}
			]
		}
	},
	onLoad(option) {
		this.init();
	},
	onShow() {},
	async init() {},
	clickTmapMarker(evt) {
		let marker = this.data.tmap.markers[evt.detail.markerId];
		if (marker && marker.action) {
			this.navigateTo(marker.action);
		}
	}
});
