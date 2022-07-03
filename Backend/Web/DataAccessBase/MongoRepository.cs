using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;

namespace MongoBase
{
    public class MongoRepository
    {
        private readonly MongoBase.Settings _dbSettings;
        public MongoRepository(IOptions<MongoBase.Settings> mongoOptions)
        {
            _dbSettings = mongoOptions.Value;
            var mongoDb = new MongoClient(_dbSettings.ConnectionString).GetDatabase(_dbSettings.DatabaseName);
        }


    }
}
