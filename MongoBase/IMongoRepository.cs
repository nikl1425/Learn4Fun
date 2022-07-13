using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MongoBase
{
    public interface IMongoRepository<TDocument> where TDocument : IDocument
    {
        IQueryable<TDocument> AsQueryable();

        TDocument FindById(string id);
    }
}
