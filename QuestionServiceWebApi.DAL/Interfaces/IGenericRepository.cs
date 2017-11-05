using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuestionServiceWebApi.DAL.Interfaces
{
    public interface IGenericRepository<T> where T: class
    {
        Task Save();
        IEnumerable<T> All();
    }
}
