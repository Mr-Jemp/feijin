import {Toast} from "mint-ui"
import axios from 'axios/dist/axios.min'

let con = {

  /**
   * get请求
   * @param url 请求地址
   * @param callback 请求回调
   */
  get(url, callback){
    axios.get(url).then((response) => {callback(response.data)}).catch((e) => {console.log(e)});
  },
  /**
   * post请求
   * @param url 请求地址
   * @param parm 请求参数
   * @param callback 请求回调
   */
  post(url, parm, callback) {
    axios.post(url, parm).then((response)=>{callback(response.data)}).catch(e => {console.log(e)});
  },
  /**
   * 提示框
   * @param message 提示的内容
   */
  toast(message,position = "bottom") {
    Toast({
      message: message,
      position: position
    })
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
  },
  /**
   * 购物车本地存储
   * @param id  当前商品的id
   * @param src 当前图片的路径
   * @param name  当前商品的名字
   * @param original  当前商品原价
   * @param price 当前商品价格
   * @param count 购买数量
   * @param firstStand  当前商品一级规格
   * @param secondStand 衣服二级规格
   * @param pid 父级id
   * @param fee 运费
   */
  addgood(id, src, name, original, price, count, firstStand, secondStand, pid, fee) {//在界面渲染的时候已经把商品信息参数整合到自己的函数中了
    let contact = new Object();//单个商品的对象，暂时介质
    let goodobj = new Object();//商品对象
    let memberfilter = new Array();//商品信息
    memberfilter[0] = "id";
    memberfilter[1] = "src";
    memberfilter[2] = "name";
    memberfilter[3] = "sum";
    memberfilter[4] = "original";
    memberfilter[5] = "price";
    memberfilter[6] = "count";
    memberfilter[7] = "firstStand";
    memberfilter[8] = "secondStand";
    memberfilter[9] = "pid";
    memberfilter[10] = "fee";
    if (typeof (localStorage.good) == "undefined") {//此时没有商品
      contact.id = id;
      contact.src = encodeURI(src);
      contact.name = name;
      contact.sum = 1;
      contact.original = parseFloat(original);
      contact.price = parseFloat(price);
      contact.count = parseInt(count);
      contact.firstStand = firstStand;
      contact.secondStand = secondStand;
      contact.pid = pid;
      contact.fee = fee;
      let good = new Array();
      let jsonText = JSON.stringify(contact, memberfilter);
      good[0] = JSON.parse(jsonText);
      localStorage.good = JSON.stringify(good, memberfilter);

    }
    else {//有商品，要判断商品在本地是否有存储，有的话sum+1
      //取数据
      goodobj = JSON.parse(localStorage.good);
      let con = 0;
      for (let i = 0; i < goodobj.length; i++) {
        if (goodobj[i].id == id) {
          goodobj[i].sum = 1 + parseInt(goodobj[i].sum);
          localStorage.good = JSON.stringify(goodobj, memberfilter);
          con++;
          break;
        }
      }
      if (con == 0) {//没有该商品，新建一个进去
        contact.id = id;
        contact.src = encodeURI(src);
        contact.name = name;
        contact.sum = 1;
        contact.original = parseFloat(original);
        contact.price = parseFloat(price);
        contact.count = parseInt(count);
        contact.firstStand = firstStand;
        contact.secondStand = secondStand;
        contact.pid = pid;
        contact.fee = fee;
        let jsonText = JSON.stringify(contact, memberfilter);
        let goolen = goodobj.length;
        goodobj[goolen] = JSON.parse(jsonText);
        localStorage.good = JSON.stringify(goodobj, memberfilter);
      }
    }
  }

};

export {
  con
}
