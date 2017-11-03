//var api_domain = "http://develop.51feijin.com/api/";
var api_domain = "http://121.40.140.68/api/";

(function($, owner) {
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.username = loginInfo.username || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.username.length < 5) {
			return callback('账号最短为 5 个字符');
		}
		if (loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}
		
		//loginInfo.username = "13534282904";
		loginInfo.password = md5(loginInfo.password);//"e10adc3949ba59abbe56e057f20f883e";
		
		var loginUrl = api_domain + "security/login";
		$.app.post(loginUrl, loginInfo, function(data) {
			owner.createState(data, callback);
		});
	};

	owner.createState = function(user, callback) {
		//console.log(JSON.stringify(user))
		var state = owner.getState();
		state.id = user.id;
		state.isThird = user.isThird;
		state.nickname = user.nickname ;
		state.image = user.image || "../images/user-img.png";
		state.username = user.username || "";
		state.token = user.token;
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		if (regInfo.username.trim() == "") {
			return callback('账号不能为空');
		}

		if (regInfo.password.trim() == "") {
			return callback('密码不能为空');
		}
		
		if (regInfo.nickname.trim() == "") {
			return callback('昵称不能为空');
		}

		if (regInfo.captcha.trim() == "") {
			return callback('验证码不能为空');
		}
		
		regInfo.password = md5(regInfo.password);

		var regUrl = api_domain + "security/register";
		$.app.post(regUrl, regInfo, function(data) {
			owner.createState(data, callback);
		});
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
	};

	var checkEmail = function(email) {
		email = email || '';
		return(email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if(!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 获取本地是否安装客户端
	 **/
	owner.isInstalled = function(id) {
		if(id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if(mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch(e) {}
		} else {
			switch(id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	};
	owner.cache = function(key, value) {
		if (localStorage) {
			localStorage.setItem(key, JSON.stringify(value));
		}
	};
	owner.getCache = function(key) {
		if (localStorage) {
			var stateText = localStorage.getItem(key);
			if (null == stateText || undefined == stateText) return null;
			if (stateText === "undefined" || stateText === "") return null;
			return JSON.parse(stateText);
		}
	}
}(mui, window.app = {}));

(function($, window, document) {
	$.app = {
		pageNo: 1,
		getId: function(url) {
			var params = url.split('?')[1]; //获取问号之后的值
			if (!params || params.split("=").length == 0) {
				return "";
			}
			return params.split("=")[1]; //获取等于号之后的值
		},
		isLogin:function(state) {
			if (state.nickname) return true;
			return false;
		},
		toLogin:function() {
			var login = plus.webview.getWebviewById("login/login.html");
			if (null == login) {
				this.openWindow("login/login.html");
			} else {
				plus.webview.show(login);
			}
			plus.webview.hide(plus.webview.currentWebview());
		},
		post: function(requestUrl, param, callback) {
			$.ajax({
				type: "POST",
				url: requestUrl,
				dataType: "json",
				contentType: "application/json",
				data: JSON.stringify(param),
				async: true,
				success: function(data) {
					if (data["result"] == -1) {
						mui.toast(data["msg"]);
						return;
					} else if (data["result"] == -2) {
						mui.toast(data["msg"]);
						window.app.setState({});
						$.app.toLogin();
						return;
					}
					
					callback(data["data"]);
				},
				error: function(data) {
					mui.toast(data["msg"]);
				}
			});
		},
		get: function(requestUrl, callback) {
			this.request(requestUrl, callback);
		},
		request: function(requestUrl, callback) {
			$.ajax({
				type: "GET",
				url: requestUrl,
				dataType: "json",
				async: true,
				success: function(data) {
					if (data["result"] == -1) {
						mui.toast(data["msg"]);
						return;
					} else if (data["result"] == -2) {
						mui.toast(data["msg"]);
						window.app.setState({});
						$.app.toLogin();
						return;
					}
					callback(data["data"]);
				}
			});
		},
		initItemListVm: function(type, data) {
			var vm = new Vue({
				el: '#item' + type,
				data: {
					datas: data["result"]
				}
			});
			vm.$nextTick(function(data) {
				hiddenLoading('item'+type);
			});
		},
		pullToRefresh: function(downCallback, upCallback) {
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								downCallback(self, index);
								self.endPullDownToRefresh();
							}, 100);
						}
					},
					up: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								upCallback(self, index);
								self.endPullUpToRefresh();
							}, 100);
						}
					}
				});
			});
		},
		openWindowNew: function(url) {
			this.openWindowWithOptions(url, url, true);
		},
		openWindowWithOptions: function(id, url, isNew) {
			$.openWindow({
				id:id,
				url: url,
				show: {
					autoShow: true,
					aniShow: 'slide-in-right',
					duration: 100
				},
				createNew:isNew,
				waiting: {
					autoShow: true,
					title: '正在加载...'
				}
			});
		},
		openWindow: function(url) {
			this.openWindowWithId(url, url);
		},
		openWindowWithId: function(id, url) {
			this.openWindowWithOptions(id, url ,false)
		},
		openCommuntityList: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("subject.html?id=" + id);
		},
		openCommuntityDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("community/detail.html?id=" + id);
		},
		openInfomationDetail: function(id) {
			if(id == null || id == undefined) return;
			var url = "information/detail.html?id=" + id;
			this.openWindow(url);
		},
		openClassroomDetail: function(id) {
			if(id == null || id == undefined) return;
			var url = "wealth-classroom/detail.html?id=" + id;
			this.openWindow(url);
		},
		openBondDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("detail-bond.html?id=" + id);
		},
		openIndexUserDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("personal-center/info-fllow-detail.html?id=" + id);
		},
		openUserDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("../personal-center/info-fllow-detail.html?id=" + id);
		},
		openDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("detail.html?id=" + id);
		},
		openFlowDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("info-fllow-detail.html?id=" + id);
		},
		plusOpenDetail: function(id) {
			if(id == null || id == undefined) return;
			var nwaiting = plus.nativeUI.showWaiting();
			var sub = plus.webview.create("detail.html?id=" + id, "detail.html?id=" + id);
			sub.addEventListener("loaded", function() {
				nwaiting.close();
				sub.show();
			}, false);
		},
		openUpdata: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("updata.html?id=" + id);
		},
		openLogin: function() {
			this.openWindow("../login/login.html");
		},
		uploadPhoneImage:function(title, callback) {
			var a = [{
				title: "拍照"
			}, {
				title: "从手机相册选择"
			}];

			plus.nativeUI.actionSheet({
				title: title,
				cancel: "取消",
				buttons: a
			}, function(b) {
				switch (b.index) {
					case 0:
						break;
					case 1:
						$.app.getTakingImage(function(path, picData) {
							callback(path, picData);
						});
						break;
					case 2:
						$.app.getGalleryImage(function(path,picData) {
							callback(path, picData);
						});
						break;
					default:
						break
				}
			})
		},
		getTakingImage: function (callback) {
			var c = plus.camera.getCamera();
			c.captureImage(function (e) {
				plus.io.resolveLocalFileSystemURL(e, function (entry) {
					var s = entry.toLocalURL() + "?version=" + new Date().getTime();
					//document.getElementById("head-img").src = s;
					//变更大图预览的src
					//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
					//document.querySelector("#__mui-imageview__group .mui-slider-item img").src = s + "?version=" + new Date().getTime();
					$.app.createAndUpload(s, callback);
				}, function (e) {
					//console.log("读取拍照文件错误：" + e.message);
				});
			}, function (s) {
				//console.log("error" + s);
			}, {
				filename: "_doc/head.jpg"
			})
		},
		getGalleryImage: function (callback) {
			plus.gallery.pick(function (a) {
				plus.io.resolveLocalFileSystemURL(a, function (entry) {
					plus.io.resolveLocalFileSystemURL("_doc/", function (root) {
						root.getFile("head.jpg", {}, function (file) {
							//文件已存在
							file.remove(function () {
								//console.log("file remove success");
								entry.copyTo(root, 'head.jpg', function (e) {
										var e = e.fullPath + "?version=" + new Date().getTime();
										//document.getElementById("head-img").src = e;
										$.app.createAndUpload(e, callback);
										//变更大图预览的src
										//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
										//document.querySelector("#__mui-imageview__group .mui-slider-item img").src = e + "?version=" + new Date().getTime();;
									},
									function (e) {
										//console.log('copy image fail:' + e.message);
									});
							}, function () {
								//console.log("delete image fail:" + e.message);
							});
						}, function () {
							//文件不存在
							entry.copyTo(root, 'head.jpg', function (e) {
									var path = e.fullPath + "?version=" + new Date().getTime();
									//document.getElementById("head-img").src = path;
									//变更大图预览的src
									//目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
									//document.querySelector("#__mui-imageview__group .mui-slider-item img").src = path;
									$.app.createAndUpload(path, callback);
								},
								function (e) {
									//console.log('copy image fail:' + e.message);
								});
						});
					}, function (e) {
						//console.log("get _www folder fail");
					})
				}, function (e) {
					//console.log("读取拍照文件错误：" + e.message);
				});
			}, function (a) {
			}, {
				filter: "image"
			})
		},
		createAndUpload: function (path, callback) {
			var wt = plus.nativeUI.showWaiting();
			var img = new Image();
			img.src = path; // 传过来的图片路径在这里用。
			window.img_src = path;

			img.onload = function () {
				var that = this;
				//console.log("wh = " + that.width + "," + that.height);
				//生成比例
				var w = that.width,
					h = that.height,
					scale = w / h;
				if (w > 1242) {
					w = 1242 || w; //480  你想压缩到多大，改这里
				}

				h = w / scale;
				//生成canvas
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				canvas.width = w;
				canvas.height = h;
				ctx.drawImage(that, 0, 0, w, h);
				var picData = canvas.toDataURL('image/jpeg', 1 || 0.8); //1最清晰，越低越模糊。

				callback(path, picData);
				plus.nativeUI.closeWaiting();
			}
		},
		shares:null,
		getShareSerivces:function() {
			plus.share.getServices(function(s) {
				$.app.shares = {};
				for(var i in s) {
					var t = s[i];
					$.app.shares[t.id] = t;
				}
			}, function(e) {
				//console.log("获取分享服务列表失败：" + e.message);
			});
		},
		shareAction:function(id, ex, message) {
			var shares = $.app.shares;
			var s = null;

			if (!id || !(s = shares[id])) {
				//console.log("无效的分享服务！");
				return;
			}

			if (s.authenticated) {
				//console.log("---已授权---");
				$.app.shareMessage(s, ex, message);
			} else {
				//console.log("---未授权---");
				s.authorize(function() {
					//console.log('授权成功...');
					$.app.shareMessage(s, ex, message);
				}, function(e) {
					//console.log("认证授权失败：" + e.code + " - " + e.message);
				});
			}
		},
		sharecount:0,
		shareMessage:function(s, ex, message) {
			plus.nativeUI.showWaiting();
			setTimeout(plus.nativeUI.closeWaiting, 5000); //TODO 5秒后自动关闭等待，否则如果用户分享出去后选择‘留在微信’，再手动回到app的时候，waiting无法关闭
			var msg = {
				extra: {
					scene: ex
				}
			};

			msg.href = message.href;
			msg.title = message.title;
			msg.content = message.content;
			msg.thumbs = [message.thumbs];
			msg.imageUrl = message.thumbs;

			if ($.app.sharecount > 0) {
				//如果本地图片过大，导致分享失败，递归时重新分享获取默认图片
				msg.thumbs = ["_www/images/icon/A/144.png"];
			}

			//console.log(JSON.stringify(msg));
			s.send(msg, function() {
				plus.nativeUI.closeWaiting();
				$.app.closeShareWindow();
				var strtmp = "分享到\"" + s.description + "\"成功！ ";
				//console.log(strtmp);
				$.app.get(api_domain + "share/success");
				plus.nativeUI.toast(strtmp, {
					verticalAlign: 'center'
				});
				$.app.sharecount = 0;
			}, function(e) {
				plus.nativeUI.closeWaiting();
				$.app.closeShareWindow();
				if(e.code == -2) {
					plus.nativeUI.toast('已取消分享', {
						verticalAlign: 'center'
					});
					$.app.sharecount = 0;
				} else if(e.code == -3 || e.code == -8) {
					//console.log(e.code);
					if(++$.app.sharecount < 2) {
						//TODO 分享失败可能是图片过大的问题，递归取默认图片重新分享
						$.app.shareMessage(s, ex, message);
					} else {
						$.app.sharecount = 0;
						plus.nativeUI.toast('分享失败', {
							verticalAlign: 'center'
						});
					}
				} else {
					console.error('分享失败:' + JSON.stringify(e))
				}
				//console.log("分享到\"" + s.description + "\"失败: " + e.code + " - " + e.message);
			});
		},
		openShareWindow:function() {
			var btn = document.getElementById('shareBtn');
			if (btn) {
				btn.addEventListener("tap",function () {
					var str = hasClass(btn,"invitationTit");
					if (str != null) {
						var name = 'invitation';
					} else {
						var name = '';
					}

					var code = window.shareMessage.code;
					code = (code) ? code : "";
					var html = '<div class="shareBox ' + name + '">' +
						'<div class="invitationCode">' +
						'<p>邀请码</p><h4>'+code+'</h4></div>' +
						'<div class="shareWarp"><ul>' +
						'<li id="qq" ex="" class="share1"><a href="">' +
						'<i class="i-qqfirend"></i><p>QQ好友</p></a></li>' +
						'<li id="qzone" ex=""  class="share2"><a href="">' +
						'<i class="i-qqspace"></i><p>QQ空间</p></a></li>' +
						'<li id="weixin" ex="WXSceneSession"  class="share3"><a href="">' +
						'<i class="i-wechatfirend"></i><p>微信好友</p></a></li>' +
						'<li id="weixin" ex="WXSceneTimeline" class="share4"><a href="">' +
						'<i class="i-wechatcircle"></i><p>微信朋友圈</p></a></li>' +
						//'<li id="sinaweibo" ex="" class="share5"><a href="">' +
						//'<i class="i-sina"></i><p>新浪微博</p></a></li></ul>' +
						'</ul><button class="cancel" id="cancelBtn">取消</button>' +
						'</div></div>';
					var div = document.createElement("div");
					div.setAttribute("id","shareWarp");
					document.body.appendChild(div);
					document.getElementById("shareWarp").innerHTML = html;

					$('.shareBox').on('tap', "li", function() {
						var id = this.getAttribute("id");
						var ex = this.getAttribute('ex');
						if (id) {
							var message = window.shareMessage;
							$.app.shareAction(id, ex, message);
						}
					});

					document.getElementById("cancelBtn").addEventListener("tap", function(){
						$.app.closeShareWindow();
					});
				});
			}
		},
		closeShareWindow : function(){
			var obj = document.getElementById("shareWarp");
			if (obj){
				obj.parentNode.removeChild(obj);
			}
		},
		toPersonCenter:function(path) {
			var selfCenter = document.getElementById("selfCenter");
			if (selfCenter) {
				selfCenter.addEventListener("tap", function(){
					if ($.app.isLogin(app.getState())) {
						var url = "personal-center/index.html";
						$.app.openWindowWithId(url, path + url);
						if (window.plus) {
							var personalCenter = plus.webview.getWebviewById(url);
							mui.fire(personalCenter, 'reLoad', null);
						}
					} else {
						var url = "personal-center/index-example.html";
						$.app.openWindowWithId(url, path + url);
					}
				});
			}

			var messageInfo = document.getElementById("messageInfo");
			if (messageInfo) {
				messageInfo.addEventListener("tap", function(){
					if ($.app.isLogin(app.getState())) {
						var url = "personal-center/info-message.html#grade1";
						$.app.openWindowWithId(url, path + url);
					} else {
						var url = "personal-center/index-example.html";
						$.app.openWindowWithId(url, path + url);
					}
				});
			}
		},
		listPersonCenter:function() {
			this.toPersonCenter("../");
		},
		homePersonCenter:function() {
			this.toPersonCenter("");
		}
	}
}(mui, window, document));

function toPersonCenter(path){
	if (mui.app.isLogin(app.getState())) {
		var url = "personal-center/index.html";
		mui.app.openWindowWithId(url, path + url);
		if (window.plus) {
			var personalCenter = plus.webview.getWebviewById(url);
			mui.fire(personalCenter, 'reLoad', null);
		}
	} else {
		var url = "personal-center/index-example.html";
		mui.app.openWindowWithId(url, path + url);
	}
}

function toMessageCenter(path) {
	if (mui.app.isLogin(app.getState())) {
		var url = "personal-center/info-message.html#grade1";
		mui.app.openWindowWithId(url, path + url);
	} else {
		var url = "personal-center/index-example.html";
		mui.app.openWindowWithId(url, path + url);
	}
}

function listPersonCenter() {
	toPersonCenter("../");
}

function listMessageCenter() {
	toMessageCenter("../");
}

function homePersonCenter() {
	toPersonCenter("");
}

function homeMessageCenter() {
	toMessageCenter("");
}

function openShareWindow(btn) {
	var str = hasClass(btn,"invitationTit");
	if (str != null) {
		var name = 'invitation';
	} else {
		var name = '';
	}
	var code = window.shareMessage.code;
	code = (code) ? code : "";
	var html = '<div class="shareBox ' + name + '">' +
		'<div class="invitationCode">' +
		'<p>邀请码</p><h4>'+code+'</h4></div>' +
		'<div class="shareWarp"><ul>' +
		'<li id="qq" ex="" class="share1"><a href="">' +
		'<i class="i-qqfirend"></i><p>QQ好友</p></a></li>' +
		'<li id="qzone" ex=""  class="share2"><a href="">' +
		'<i class="i-qqspace"></i><p>QQ空间</p></a></li>' +
		'<li id="weixin" ex="WXSceneSession"  class="share3"><a href="">' +
		'<i class="i-wechatfirend"></i><p>微信好友</p></a></li>' +
		'<li id="weixin" ex="WXSceneTimeline" class="share4"><a href="">' +
		'<i class="i-wechatcircle"></i><p>微信朋友圈</p></a></li>' +
		'<li id="sinaweibo" ex="" class="share5"><a href="">' +
		'<i class="i-sina"></i><p>新浪微博</p></a></li>' +
		'</ul><button class="cancel" id="cancelBtn">取消</button>' +
		'</div></div>';
	var div = document.createElement("div");
	div.setAttribute("id","shareWarp");
	document.body.appendChild(div);
	document.getElementById("shareWarp").innerHTML = html;
	mui('.shareBox').on('tap', "li", function() {
		var id = this.getAttribute("id");
		var ex = this.getAttribute('ex');
		if (id) {
			var message = window.shareMessage;
			mui.app.shareAction(id, ex, message);
		}
	});
	document.getElementById("cancelBtn").addEventListener("tap", function(){
		closeShareWindow();
	});
}

function closeShareWindow(){
	var obj = document.getElementById("shareWarp");
	if (obj){
		obj.parentNode.removeChild(obj);
	}
}

function hiddenLoading(id) {
	var loading = document.getElementById(id).querySelector('.mui-loading');
	loading.style.display = "none";
}

function isUtf16Char(str) {
	var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
	// 检测utf16字符正则
	var flag = false;
	str = str.replace(patt, function (char) {
		if (char.length === 2) {
			flag = true;
			return "";
		} else {
			return char;
		}
	});
	return flag;
}

function filterUtf16Char(str) {
	var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
	// 检测utf16字符正则
	str = str.replace(patt, function (char) {
		if (char.length === 2) {
			return "";
		} else {
			return char;
		}
	});
	return str;
}

function utf16toEntities(str) {
	var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
	// 检测utf16字符正则
	str = str.replace(patt, function (char) {
		var H, L, code;
		if (char.length === 2) {
			H = char.charCodeAt(0);
			// 取出高位
			L = char.charCodeAt(1);
			// 取出低位
			code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
			// 转换算法
			return "&#" + code + ";";
		} else {
			return char;
		}
	});
	return str;
}

function entitiestoUtf16(str) {
	// 检测出形如&#12345;形式的字符串
	var strObj = utf16toEntities(str);
	var patt = /&#\d+;/g;
	var H, L, code;
	var arr = strObj.match(patt) || [];
	for (var i = 0; i < arr.length; i++) {
		code = arr[i];
		code = code.replace('&#', '').replace(';', '');
		// 高位
		H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
		// 低位
		L = (code - 0x10000) % 0x400 + 0xDC00;
		code = "&#" + code + ";";
		var s = String.fromCharCode(H, L);
		strObj.replace(code, s);
	}
	return strObj;
}
