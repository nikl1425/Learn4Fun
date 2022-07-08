using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Web.options;
using BLL.Course.Service;
using Microsoft.Extensions.Options;

namespace Web.Controllers
{
    [ApiController]
    [Route("Courses")]
    public class CourseController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        private readonly ICourseService _courseService;

        public CourseController(ILogger<WeatherForecastController> logger, ICourseService courseService)
        {
            _logger = logger;
            _courseService = courseService;
        }


        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            _courseService.GetTitle();
            Debug.Write(_courseService.GetTitle());
            Console.Write(_courseService.GetTitle());

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
