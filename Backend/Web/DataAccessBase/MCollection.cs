

namespace MongoBase
{
    [AttributeUsage(AttributeTargets.Class, Inherited = false)]
    public class MCollection : Attribute
    {
        public string CollectionName { get; }

        public MCollection(string collectionName)
        {
            CollectionName = collectionName;
        }
    }
}
