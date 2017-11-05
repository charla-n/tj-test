using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using QuestionServiceWebApi.DAL.Interfaces;

namespace QuestionServiceWebApi.DAL.Repositories
{
    public abstract class GenericRepository<T>: IGenericRepository<T> where T: class
    {
        // fake store
        protected List<T> store;

        public GenericRepository()
        {
            store = new List<T>();
        }

        public IEnumerable<T> All()
        {
            return store;
        }

        // simulate save
        public Task Save()
        {
            return Task.FromResult<object>(null);
        }
    }
}