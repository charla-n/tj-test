using QuestionServiceWebApi.BusinessLogic.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QuestionServiceWebApi.Domain;

namespace PairingTest.Unit.Tests.QuestionServiceWebApi.Stubs
{
    public class FakeQuestionnaireService : IQuestionnaireService
    {
        public Questionnaire ExpectedQuestions { get; set; }

        public string GetQuestionByID(int id)
        {
            return ExpectedQuestions.Questions[id];
        }

        public Questionnaire GetQuestionnaire()
        {
            return ExpectedQuestions;
        }
    }
}
