using MongoBase;
using MongoDB.Bson.Serialization.Attributes;

namespace BLL.Course.Service
{
    [BsonCollection("courses")]
    public class Course : Document
    {
        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("published")]
        public string Published { get; set; }
    }
}
