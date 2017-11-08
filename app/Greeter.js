// let popupsHint = {
//   popups: function () {
//     //return document.createElement('div')
//     let JJLoadingOption = {
//       //text: '请输入联系人信息',
//     }
//     let JJLoading = new class {
//       constructor(opt) {
//         //this.opt = opt
//         // this.loadShow = null
//         this.init()
//       }
//       init() {
//         let opt = this.opt
//         let errorwrap = document.createElement('div')
//         let errorMainBox = document.createElement('div')
//         let errorTies = document.createElement('div')
//         let errorBtn = document.createElement('div')
//         let goMall = document.createElement('div')
//         // let fragment = document.createDocumentFragment()
//         // for(let i = 0;i<5;++i){
//         //     let div = document.createElement('div')
//         //     if(opt.lineColor) div.style.backgroundColor = opt.lineColor
//         //     fragment.appendChild(div)
//         // }
//         //if(opt.bgColor) loader.style.backgroundColor = opt.bgColor
//         // if(opt.textColor) loadingText.style.color = opt.textColor
//         errorwrap.className = 'error-wrap'
//         errorMainBox.className = 'error-main-box'
//         errorTies.className = 'error-ties'
//         errorBtn.className = 'error-btn btom'
//         goMall.className = 'go-mall btom'
//         //loadingText.innerText = opt.text || '努力加载中...'
//         errorwrap.appendChild(errorMainBox)
//         errorMainBox.appendChild(errorTies)
//         errorMainBox.appendChild(errorBtn)
//         errorMainBox.appendChild(goMall)
//         //loader.appendChild(loaderContainer)
//         //loadShow.appendChild(loader)
//         // this.loadShow = loadShow
//         return errorwrap;
//         // this.show = ()=>{
//         //     this.loadShow.style.display = 'block'
//         // }
//       }
//       show() {
//         this.init()
//       }
//       // hide() {
//       //     if(!this.loadShow)return
//       //     this.loadShow.style.display = 'none'
//       // }
//       // option(opt) {
//       //     this.opt = opt
//       // }
//     }(JJLoadingOption)
//   }
// }
//export default  popupsHint
module.exports = function() {
  let errorwrap = document.createElement('div')
  let errorMainBox = document.createElement('div')
  let errorTies = document.createElement('div')
  let errorBtn = document.createElement('div')
  let goMall = document.createElement('div')
 
  errorwrap.className = 'error-wrap'
  errorMainBox.className = 'error-main-box'
  errorTies.className = 'error-ties'
  errorBtn.className = 'error-btn btom'
  goMall.className = 'go-mall btom'
  errorwrap.appendChild(errorMainBox)
  errorMainBox.appendChild(errorTies)
  errorMainBox.appendChild(errorBtn)
  errorMainBox.appendChild(goMall)
 // greet.textContent = "Hi there and greetings!";
  return errorwrap;
};
