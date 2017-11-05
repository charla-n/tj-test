using QuestionServiceWebApi.BusinessLogic.Interfaces;
using QuestionServiceWebApi.DAL.Interfaces;
using QuestionServiceWebApi.DAL.Repositories;
using QuestionServiceWebApi.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuestionServiceWebApi.BusinessLogic
{
    public class QuestionnaireService : IQuestionnaireService
    {
        private readonly IQuestionnaireRepository _questionRepository;

        public QuestionnaireService(IQuestionnaireRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public Questionnaire GetQuestionnaire()
        {
            return _questionRepository.GetQuestionnaire();
        }

        public string GetQuestionByID(int id)
        {
            return _questionRepository.GetQuestionByID(id);
        }
    }
}