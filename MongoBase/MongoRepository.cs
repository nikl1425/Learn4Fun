using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using MongoBase;

namespace MongoBase
{
    public class MongoRepository<TDocument> : IMongoRepository<TDocument> where TDocument : IDocument
    {

        private readonly IMongoCollection<TDocument> _collection;
        public MongoRepository(string connectionString, string databaseName)
        {
            var mongoDb = new MongoClient(connectionString).GetDatabase(databaseName);
            _collection = mongoDb.GetCollection<TDocument>(GetCollectionName(typeof(TDocument)));
        }

        private protected string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                     typeof(BsonCollectionAttribute),
                     true)
                 .FirstOrDefault())?.CollectionName;
        }

        public IQueryable<TDocument> AsQueryable()
        {
            throw new NotImplementedException();
        }

        public TDocument FindById(string id)
        {
            var objectId = new MongoDB.Bson.ObjectId(id);
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, objectId);
            return _collection.Find(filter).SingleOrDefault();
        }
    }
}
