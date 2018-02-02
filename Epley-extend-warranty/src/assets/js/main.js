import axios from 'axios/dist/axios.min'
import {Toast} from 'mint-ui'
import {Indicator} from 'mint-ui';

export let conf = {

  /**
   * get请求
   * @param url 请求地址
   * @param callback 请求回调
   */
  get(url, callback) {
    axios.get(url).then(response => callback(response.data)).catch(e => console.log(e));
  },

  /**
   * post请求
   * @param url 请求地址
   * @param parm 请求参数
   * @param callback 请求回调
   */
  post(url, parm, callback) {
    axios.post(url, parm).then(response => callback(response.data)).catch(e => console.log(e));
  },

  /**
   * 提示框
   * @param message 提示的内容
   */
  toast(message,position = "bottom") {
    Toast({
      message: message,
      position: position,
      duration: 2000
    })
  },

  /**
   * 载入动画
   * @param text  载入动画提示文本
   */
  loading(text = '') {
    Indicator.open(text);
  },

  /**
   * 关闭载入动画
   */
  closeLoading() {
    Indicator.close();
  },

  /**
   * 动态设置页面title文本
   * @param text  文本
   */
  setTitle(text) {
    if (text) {
      document.querySelector("title").innerText = text;
    }
  },

  /**
   * 设置本地存储
   * @param key 本地存储的键
   * @param value 本地存储的值
   */
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      alert("保存本地数据异常");
    }
  },

  /**
   * 获取本地存储
   * @param key 本地存储的键
   * @returns {any} 返回当前键匹配的值
   */
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      alert("获取本地数据异常");
    }
  },

  /**
   * 删除本地存储某一项
   * @param key 要删除的键
   */
  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      alert("删除本地数据异常");
    }
  },

  /**
   * url参数转换成对象
   * @param url 需要转换的完整url
   * @returns {{}} 转换后的对象
   */
  urlToObj(url) {
    let attrObj = {};
    //当前网址的参数
    let attr = url.split('?')[1];
    //参数数组
    let attrArr = attr.split('&');
    for (let i = 0; i < attrArr.length; i++) {
      let cu = attrArr[i].split('=');
      attrObj[cu[0]] = cu[1];
    }
    return attrObj;
  }
};


