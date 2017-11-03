//var api_domain = "http://localhost/wapapi/";
//var api_domain = "http://ruraltourism.51feijin.com/api/";

/**
*----------Dragon be here!----------/
* 　　　┏┓　　　┏┓
* 　　┏┛┻━━━┛┻┓
* 　　┃　　　　　　　┃
* 　　┃　　　━　　　┃
* 　　┃　┳┛　┗┳　┃
* 　　┃　　　　　　　┃
* 　　┃　　　┻　　　┃
* 　　┃　　　　　　　┃
* 　　┗━┓　　　┏━┛
* 　　　　┃　　　┃
* 　　　　┃　　　┃
* 　　　　┃　　　┗━━━┓
* 　　　　┃　　　　　　　┣┓
* 　　　　┃　　　　　　　┏┛
* 　　　　┗┓┓┏━┳┓┏┛
* 　　　　　┃┫┫　┃┫┫
* 　　　　　┗┻┛　┗┻┛
**/

/*
	               _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  ` - `.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*/

var ua = navigator.userAgent.toLowerCase();	
if (/iphone|ipad|ipod/.test(ua)) {
	var api_domain = "http://localhost/wapapi/";
} else if (/android/.test(ua)) {
	var api_domain = "http://ruraltourism.51feijin.com/api/";
}

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
		
		var loginUrl = "security/login";
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
		state.image = user.image || "../images/portrait.png";
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

		if (regInfo.mobileCode.trim() == "") {
			return callback('验证码不能为空');
		}
		
		regInfo.password = md5(regInfo.password);

		var regUrl = "security/register";
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
			var params = url.split('?id')[1];
			if (!params || params.split("=").length == 0) {
				return "";
			}
			var str = params.split("=")[1];
			var s = str.indexOf('&');
			if (str.indexOf('&') > 0) {
				return str.substr(0, str.indexOf('&'));
			} else {
				return str;
			}
		},
		getName: function(url, name) {
			var params = url.split(name)[1];
			if (!params || params.split("=").length == 0) {
				return "";
			}
			var str = params.split("=")[1];
			var s = str.indexOf('&');
			if (str.indexOf('&') > 0) {
				return str.substr(0, str.indexOf('&'));
			} else {
				return str;
			}
		},
		isLogin:function(state) {
			if (state.username) return true;
			return false;
		},
		toLogin:function() {
			var login = plus.webview.getWebviewById("../login/login.html");
			if (null == login) {
				this.openWindow("../login/login.html");
			} else {
				plus.webview.show(login);
			}
			plus.webview.hide(plus.webview.currentWebview());
		},
		post: function(requestUrl, param, callback, callback2) {
			$.ajax({
				type: "POST",
				url: api_domain + requestUrl,
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
						//window.app.setState({});
						//$.app.toLogin();
						return;
					}
					
					callback(data["data"]);
				},
				error: function(data) {
					if (callback2) {
						callback2();
					}
					else if (data.msg == 'undefined') {
						mui.toast("错误，请重试！");
						return;
					}
					else {
						mui.toast(data["msg"]);
					}
				}
			});
		},
		delete: function(requestUrl, param, callback) {
			$.ajax({
				type: "DELETE",
				url: api_domain + requestUrl,
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
						//window.app.setState({});
						//$.app.toLogin();
						return;
					}
					
					callback(data["data"]);
				},
				error: function(data) {
					if (callback2) {
						callback2();
					}
					else if (data.msg == 'undefined') {
						mui.toast("错误，请重试！");
						return;
					}
					else {
						mui.toast(data["msg"]);
					}
				}
			});
		},
		get: function(requestUrl, callback) {
			this.request(requestUrl, callback);
		},
		request: function(requestUrl, callback) {
			$.ajax({
				type: "GET",
				url: api_domain + requestUrl,
				dataType: "json",
				async: true,
				success: function(data) {
					if (data["result"] == -1) {
						mui.toast(data["msg"]);
						return;
					} else if (data["result"] == -2) {
						mui.toast(data["msg"]);
						//window.app.setState({});
						//$.app.toLogin();
						return;
					}
					callback(data["data"]);
				}
			});
		},
		initItemListVm: function(type, data) {
			vm = new Vue({
				el: '#list' + type,
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
								self.endPullDownToRefresh(false);
							}, 100);
						}
					},
					up: {
						contentrefresh: '正在加载...',
						contentnomore:'暂无更多数据',
						callback: function() {
							var self = this;
							setTimeout(function() {
								upCallback(self, index);
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
		openDetail: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("detail.html?id=" + id);
		},
		openIntroduce: function(id) {
			if(id == null || id == undefined) return;
			this.openWindow("introduce.html?id=" + id);
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
					console.log("读取拍照文件错误：" + e.message);
				});
			}, function (s) {
				console.log("error" + s);
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
									//mui.toast(path);
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
			//mui.toast(path);
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
			setTimeout(plus.nativeUI.closeWaiting, 5000); // 5秒后自动关闭等待，否则如果用户分享出去后选择‘留在微信’，再手动回到app的时候，waiting无法关闭
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
						// 分享失败可能是图片过大的问题，递归取默认图片重新分享
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
		closeShareWindow : function(){
			var obj = document.getElementById("shareWarp");
			if (obj){
				obj.parentNode.removeChild(obj);
			}
		}
	}
}(mui, window, document));

function openShareWindow(btn) {
	var str = hasClass(btn,"invitationTit");
	if (str != null) {
		var name = 'invitation';
	} else {
		var name = '';
	}
	
	var html = '<div class="alertBox"><div class="transparentBg"></div>' +
	'<div class="shareBox"><div class="share-warp">' +
	'<a id="weixin" ex="WXSceneSession" class="share-item"><i class="i-wechat"></i><span>微信好友</span></a>' +
	'<a id="weixin" ex="WXSceneTimeline" class="share-item"><i class="i-friend"></i><span>朋友圈</span></a>' +
	'<a id="qq" ex="" class="share-item"><i class="i-qq"></i><span>QQ好友</span></a>' +
	'<a id="sinaweibo" ex="" class="share-item"><i class="i-sina"></i><span>新浪微博</span></a>' +
	'</div><div id="cancelBtn" class="close">取消</div></div></div>';
	var div = document.createElement("div");
	div.setAttribute("id","shareWarp");
	document.body.appendChild(div);
	document.getElementById("shareWarp").innerHTML = html;
	mui('.shareBox').on('tap', "a", function() {
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

function downloadImg(loadUrl) {
    if (loadUrl == null) return;
    //图片下载成功 默认保存在本地相对路径的"_downloads"文件夹里面, 如"_downloads/logo.jpg"
    var filename = loadUrl.substring(loadUrl.lastIndexOf("/") + 1, loadUrl.length);
    var relativePath = "_downloads/" + filename;
    //检查图片是否已存在
    plus.io.resolveLocalFileSystemURL(relativePath, function(entry) {
    	mui.toast("图片已存在");
    }, function(e) {
        //如果文件不存在,联网下载图片
        setImgFromNet (loadUrl,relativePath);
    });
}

function setImgFromNet (loadUrl,relativePath) {
    //创建下载任务
    var dtask = plus.downloader.createDownload(loadUrl, {}, function(d, status) {
        if (status == 200) {
            //下载成功
            console.log("下载成功=" + relativePath);
        } else {
            //下载失败,需删除本地临时文件,否则下次进来时会检查到图片已存在
            console.log("下载失败=" + status+"=="+relativePath);
            //dtask.abort();//文档描述:取消下载,删除临时文件;(但经测试临时文件没有删除,故使用delFile()方法删除);
            if (relativePath!=null)
                delFile(relativePath);
        }
    });
    //启动下载任务
    dtask.start();
}

/*删除指定文件*/
function delFile(relativePath) {
    plus.io.resolveLocalFileSystemURL(relativePath, function(entry) {
        entry.remove(function(entry) {
            console.log("文件删除成功==" + relativePath);
        }, function(e) {
            console.log("文件删除失败=" + relativePath);
        });
    });
}


function alertInput(key, type, callback) {
	var model;
	if (type == 'phone') {
		model = '<input id="inputVal" class="input-val" type="number" oninput="if(value.length > 11)value = value.slice(0,11)" />';
	}
	if (type == 'number') {
		model = '<input id="inputVal" class="input-val" type="number" />';
	}
	if (type == 'password') {
		model = '<input id="inputVal" class="input-val" type="password" />';
	}
	if (type == 'text' || type == '') {
		model = '<input id="inputVal" class="input-val" type="text" />';
	}
	var html = '<div id="alertBox" class="alertBox"><div class="transparentBg"></div><div class="input-content"><div class="body"><label>' + key + '：</label>' + model + '</div><div class="buttons"><button onclick="javascript:this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode)">取消</button><button id="isok">确定</button></div></div></div>'
	document.body.insertAdjacentHTML("beforeEnd", html);
	todo(callback);
}

function todo(callback) {
	mui("#isok")[0].addEventListener('tap', function(){
		if (typeof (callback) == 'function') {  
			var val = mui("#inputVal")[0].value;
			callback(val);           
        }
		document.body.removeChild(mui("#alertBox")[0]);
	})
}

function getday(before, after){
	var begin = Date.parse(before);
	var end = Date.parse(after);
	var time = end - begin;
	var days = time / 86400000;
	return days;
}

function getDate(uData) {
	var myDate = new Date(uData);
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var day = myDate.getDate();
	return year + '-' + month + '-' + day;
}

function starNum(data) {
	for (var i = 0; i < data.length; i++) {
		var html = '';
		var num = data[i].score;
		for (var j = 0; j < num; j++) {
			html += '<span class="active"></span>';
		}
		for (var k = 0; k < 5-num; k++) {
			html += '<span></span>';
		}
		data[i].score = html;
	}
	return data;
}

