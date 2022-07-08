using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoBase;
using Microsoft.Extensions.Options;


namespace BLL.Course.Service
{
    public class CourseService : ICourseService
    {
        private readonly Settings _dbSettings;
        private readonly IMongoRepository<Course> _courseRepository;
        public CourseService(IOptions<Settings> mongoOptions)
        {
            _dbSettings = mongoOptions.Value;
            _courseRepository = new MongoRepository<Course>(_dbSettings.ConnectionString, _dbSettings.DatabaseName);
        }

        
        
        public string GetTitle()
        {

            var course = _courseRepository.FindById("62c0a1fe43d3858384427bbc");
            return course.Title.ToString();
        }

    }
}
