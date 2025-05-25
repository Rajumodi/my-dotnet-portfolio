using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class contactController:Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
