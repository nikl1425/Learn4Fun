using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Course.Service.Model
{
    public class Course
    {
        [BsonId] // Mark for Primary key
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        public string Title { get; set; } = null!;

        public int Level { get; set; }

        public string Author { get; set; }

        public DateTime Created { get; set; }

        [BsonElement("programming_lang_id")]
        public int ProgrammingLanguage { get; set; }
        [BsonElement("lang_id")]
        public string Language { get; set; }
    }
}
