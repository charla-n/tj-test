using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;
using QuestionServiceWebApi.Domain;
using QuestionServiceWebApi.DAL.Interfaces;

namespace QuestionServiceWebApi.DAL.Repositories
{
    public class QuestionnaireRepository : GenericRepository<Questionnaire>, IQuestionnaireRepository
    {
        public QuestionnaireRepository()
        {
            store.Add(new Questionnaire()
            {
                Title = "Geography Questions",
                Questions = new List<string>()
                {
                    "What is the capital of Cuba?",
                    "What is the capital of France?",
                    "What is the capital of Poland?",
                    "What is the capital of Germany?"
                },
            });
        }

        public Questionnaire GetQuestionnaire()
        {
            return All()
                .First();
        }

        // let's consider the id is the index of the list QuestionsText
        public string GetQuestionByID(int id)
        {
            var questionnaire = GetQuestionnaire();

            try
            {
                return questionnaire.Questions[id];
            }
            catch (ArgumentOutOfRangeException)
            {
                return null;
            }
        }
    }
}