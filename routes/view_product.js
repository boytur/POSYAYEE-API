/*
  สร้าง Routes เพื่อนำทางไปดูสินค้าที่ไม่มีบาร์โค้ด
  ที่ controller con_view_pr_no_qr 
  
  DATE : 27/กันยายน/2023
  OWNER : piyawat W. 
 */

const express = require('express');
const router = express.Router();
const {view_product} = require('../controller/con_view_product');

/* สร้าง route สำหรับ /view-product-no-qr
   และเรียกใช้ controller con_view_pr_no_qr 
   เพื่อใช้งานการดูสินค้าที่ไม่มี barcode
*/

router.get('/view-product', view_product)
//export router ไปใช้
module.exports = router;