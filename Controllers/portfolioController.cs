using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Controllers
{
    public class portfolioController: Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
