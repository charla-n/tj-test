using QuestionServiceWebApi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuestionServiceWebApi.BusinessLogic.Interfaces
{
    public interface IQuestionnaireService
    {
        Questionnaire GetQuestionnaire();
        string GetQuestionByID(int id);
    }
}
