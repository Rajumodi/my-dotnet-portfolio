using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class aboutController:Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
