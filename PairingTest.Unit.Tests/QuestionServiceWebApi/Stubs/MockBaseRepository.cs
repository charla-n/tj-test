using QuestionServiceWebApi.DAL.Interfaces;
using QuestionServiceWebApi.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PairingTest.Unit.Tests.QuestionServiceWebApi.Stubs
{
    public class MockBaseRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly IList<T> store;

        public MockBaseRepository()
        {
            store = new List<T>();
        }

        public IEnumerable<T> All()
        {
            return store;
        }

        public Task Save()
        {
            return Task.FromResult<object>(null);
        }
    }
}
