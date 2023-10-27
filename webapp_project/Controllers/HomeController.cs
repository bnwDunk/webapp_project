using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace YourNamespace
{
    public class HomeController : Controller
    {
        private static List<Item> items = new List<Item>();
        private static int nextItemId = 1;

        public IActionResult Index()
        {
            return View(items);
        }

        [HttpPost]
        public IActionResult Create(Item newItem)
        {
            newItem.Id = nextItemId; // กำหนดค่า Id ให้กับโพสต์ใหม่
            nextItemId++; // เพิ่มค่าของ nextItemId สำหรับโพสต์ถัดไป
            items.Add(newItem);

            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult ConfirmOrder(int id)
        {
            // หาข้อมูลรายการที่ต้องการยืนยัน Order จาก List ของ items โดยใช้ชื่อ (หรืออื่น ๆ ตามที่คุณต้องการใช้)
            var itemToConfirm = items.FirstOrDefault(item => item.Id == id);

            if (itemToConfirm != null)
            {
                // อัปเดตค่า IsOrderConfirmed เป็น true
                itemToConfirm.IsOrderConfirmed = true;
            }

            // Redirect กลับไปยังหน้า Index
            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult DeleteItem(int id)
        {
            var itemToDelete = items.FirstOrDefault(item => item.Id == id);
            if (itemToDelete != null)
            {
                items.Remove(itemToDelete);
            }

            return RedirectToAction("Index");
        }


    }
}
