using QuestionServiceWebApi.Domain;
using System.Threading.Tasks;

namespace QuestionServiceWebApi.DAL.Interfaces
{
    public interface IQuestionnaireRepository: IGenericRepository<Questionnaire>
    {
        Questionnaire GetQuestionnaire();
        string GetQuestionByID(int id);
    }
}