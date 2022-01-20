using Microsoft.AspNetCore.Mvc;
using Mission2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //calculator overload
        //will run when get is called
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //will run when post is called
        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();        }
    }
}
