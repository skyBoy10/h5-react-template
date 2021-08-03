import Html2Canvas from 'html2canvas';
import JsPdf from 'jspdf';

const dpr = window.devicePixelRatio;
export const exportPdf = (dom, callback) => {
  if (!dom) {
    return;
  }

  new Html2Canvas(dom, {
    backgroundColor: "transparent",
    allowTaint: true,
    useCORS: true,
    // scale: dpr,
    width: dom.offsetWidth,   // canvas宽度
    height: dom.scrollHeight, // canvas高度
    windowWidth: dom.scrollWidth,     //获取X方向滚动条内容
    windowHeight: dom.scrollHeight, //获取Y方向滚动条内容
  }).then(canvas => {
    console.log(canvas.height, dom.scrollHeight, dom.offsetWidth)
    const pdfData = canvas.toDataURL('image/jpeg', 1);  // 导出图片
    var contentWidth = canvas.width;
    var contentHeight = canvas.height;

    //一页pdf显示html页面生成的canvas高度;
    var pageHeight = contentWidth / 592.28 * 841.89;
    //未生成pdf的html页面高度
    var leftHeight = contentHeight;
    //页面偏移
    var position = 0;
    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
    var imgWidth = 595.28;
    var imgHeight = 592.28/contentWidth * contentHeight;
    callback(pdfData);
    let pdf = new JsPdf('', 'pt', 'a4')
    if (leftHeight < pageHeight) {
      pdf.addImage(pdfData, 'JPEG', 0, 0, imgWidth, imgHeight);
    } else {
        while(leftHeight > 0) {
            pdf.addImage(pdfData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight;
            position -= 841.89;
            //避免添加空白页
            if(leftHeight > 0) {
              pdf.addPage();
            }
        }
    }
    pdf.save('测试.pdf');
  })
}