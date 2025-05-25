using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class resumeController:Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
