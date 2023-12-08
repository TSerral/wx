Page({
	data: {
		//用户全局信息
		userInfo: {},
        modal: '',
        aaa:'',
        answer:'',
		form: {
			input: '',
			radio: '',
			radioLabel: '',
			input1: '',
			sctIndex: -1,
			sct: '',
			sctLabel: '',
			input3: '',
			sct1Index: 0,
			sct1: '1',
			sct1Label: '股票',
			sct2Index: 0,
			sct2: '1',
			sct2Label: '股票',
            textarea1: '',
            answer:'',
		},
		formData: {
			inputFocus: false,
			radioDatas: [
				{ value: '1', label: '男', checked: false },
				{ value: '2', label: '女', checked: false }
			],
			input1Focus: false,
			sctDatas: [
				{ value: '1', label: '乌龟型投资者（Tortoise Investor）' },
				{ value: '2', label: '保守型投资者（Conservative）' },
				{ value: '3', label: '稳健型投资者（Moderate）' },
				{ value: '4', label: '平衡型投资者（Balanced）' },
				{ value: '5', label: '积极型投资者（Aggressive）' },
				{ value: '6', label: '激进型投资者（Speculative）' },
				{ value: '7', label: '搏命型投资者（High-Stakes Investor）' },
				
			],
			input3Focus: false,
			sct1Datas: [
				{ value: '1', label: '股票' },
				{ value: '2', label: '基金' },
				{ value: '3', label: '期货' },
				{ value: '4', label: '定期存款' }
			],
			sct2Datas: [
				{ value: '1', label: '股票' },
				{ value: '2', label: '基金' },
				{ value: '3', label: '期货' },
				{ value: '4', label: '定期存款' }
			]
		}
	},
	onLoad(option) {
		this.init();
	},
	onShow() {},
	async init() {
		await this.initResetform();
	},
	changeFormRadio(evt) {
		let radio = evt.detail.value;
		let radioDatas = this.data.formData.radioDatas;

		let radioLabel = this.data.form.radioLabel;
		for (var i = 0, len = radioDatas.length; i < len; ++i) {
			radioDatas[i].checked = radioDatas[i].value == radio;
			if (radioDatas[i].checked) {
				radioLabel = radioDatas[i].label;
			}
		}
		this.setData({ 'form.radio': radio, 'form.radioLabel': radioLabel, 'formData.radioDatas': radioDatas });
    },
    changeValue(e){
        let name = e.detail.value;
        console.log(name);
    },
	changeFormSct(evt) {
		let sctIndex = evt.detail.value;
		let sctDatas = this.data.formData.sctDatas;
		let sctLabel = sctDatas[sctIndex].label;
        let sct = sctDatas[sctIndex].value;
        var a='';
        var aa='';
        if(sct==1){
            a='乌龟',
            aa='啥也别买'
        } if(sct==2){
            a='谨慎者',
            aa='把钱存银行'
        } if(sct==3){
            a='中庸者',
            aa='买点国债'
        } if(sct==4){
            a='摇摆者',
            aa='买点债券型基金'
        } if(sct==5){
            a='大胆',
            aa='买股票'
        }if(sct==6){
            a='赌狗',
            aa='期货满仓梭哈！'
        }if(sct==7){
            a='不要命的',
            aa='倾家荡产虚拟货币！'
        };
        console.log("aaaa"+a);
		this.setData({ 'form.sctIndex': sctIndex, 'form.sctLabel': sctLabel, 'form.sct': sct ,aaa:a,answer:aa});
    },
    

	changeFormSct1(evt) {
		let sct1Index = evt.detail.value;
		let sct1Datas = this.data.formData.sct1Datas;
		let sct1Label = sct1Datas[sct1Index].label;
        let sct1 = sct1Datas[sct1Index].value;
        
		this.setData({ 'form.sct1Index': sct1Index, 'form.sct1Label': sct1Label, 'form.sct1': sct1 });
	},
	changeFormSct2(evt) {
		let sct2Index = evt.detail.value;
		let sct2Datas = this.data.formData.sct2Datas;
		let sct2Label = sct2Datas[sct2Index].label;
        let sct2 = sct2Datas[sct2Index].value;
        this.setData({ 'form.sct2Index': sct2Index, 'form.sct2Label': sct2Label, 'form.sct2': sct2 });

	},
	initResetform() {
		this.setData({
			initform: JSON.stringify(this.data.form)
		});
	},
	resetForm() {
		this.setData({
			form: JSON.stringify(this.data.initform)
		});
	},

	async submitForm(e) {
		this.validateForm = this.Validate({
			input: {
				required: {
					message: '不能为空哟'
				}
			},
			radio: {
				required: {
					message: '请至少选择一个哟'
				}
			},
			input1: {
				required: {
					message: '不能为空哟'
				}
			},
			sct: {
				required: {
					message: '请至少选择一个哟'
				}
			},
			input3: {
				required: {
					message: '不能为空哟'
				}
			},
			sct1: {
				required: {
					message: '请至少选择一个哟'
				}
			},
			sct2: {
				required: {
					message: '请至少选择一个哟'
				}
			},
			textarea1: {
				required: {
					message: '不能为空哟'
				}
			}
		});
		if (!this.validateForm.checkForm(e)) {
			let data = this.validateForm.errorList[0];
			this.showToast(data.msg, 'none');
			return false;
		} else {
			//保存数据
			let param = e.detail.value;
			let url = '';
			if (!url) {
				this.showToast('请先配置表单提交地址', 'none');
				return false;
			}
			let header = {};

			let res = await this.$http.post(url, param, header, 'json');

			if (res.code == 200) {
				this.showToast(res.msg, 'success');
			} else {
				this.showToast(res.msg, 'error');
			}
		}
	}
});
