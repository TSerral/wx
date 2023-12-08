Page({
	data: {
		//用户全局信息
		userInfo: {},
		timelineDatas: [
			{ content: `第一步：`, style: 'color:#23c86b', backgroundClazz: '', backgroundStyle: '', clazz: 'diygw-time  ' },
			{ content: `心怀感恩，把钱取出来`, style: 'color:#13b5a9', backgroundClazz: 'gradual-green', backgroundStyle: '', clazz: 'diygw-item  diy-icon-home' },
			{ content: `第二步：`, style: 'color:#39b5a9', backgroundClazz: '', backgroundStyle: '', clazz: 'diygw-time  ' },
			{ content: `请联系我：我在辽宁工业大学等你`, style: '', backgroundClazz: 'gradual-red', backgroundStyle: 'background-color:#e54d42;', clazz: 'diygw-item  diy-icon-apps' },
			{ content: `第三步：`, style: '', backgroundClazz: '', backgroundStyle: '', clazz: 'diygw-time  ' },
			{ content: `把钱给我！`, style: '', backgroundClazz: 'gradual-purple', backgroundStyle: '', clazz: 'diygw-item  diy-icon-sort' },
			{ content: `第四步：`, style: 'color:#e03997', backgroundClazz: '', backgroundStyle: '', clazz: 'diygw-time  ' },
			{ content: `继续接受我的指导`, style: '', backgroundClazz: 'gradual-orange', backgroundStyle: '', clazz: 'diygw-item  diy-icon-hongbao' },
			{ content: `第五步：`, style: 'color:#1f85fa', backgroundClazz: '', backgroundStyle: '', clazz: 'diygw-time  ' },
			{ content: `赚了之后循环上述步骤`, style: '', backgroundClazz: 'cyan', backgroundStyle: '', clazz: 'diygw-item  diy-icon-anquan' }
		]
	},
	onLoad(option) {
		this.init();
	},
	onShow() {},
	async init() {}
});
