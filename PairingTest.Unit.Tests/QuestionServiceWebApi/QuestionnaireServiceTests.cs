using NUnit.Framework;
using QuestionServiceWebApi;
using System;
using System.Threading.Tasks;
using System.Linq;
using QuestionServiceWebApi.DAL.Repositories;
using QuestionServiceWebApi.BusinessLogic;
using PairingTest.Unit.Tests.QuestionServiceWebApi.Stubs;

namespace PairingTest.Unit.Tests.QuestionServiceWebApi
{
    [TestFixture]
    public class QuestionnaireServiceTests
    {
        [Test]
        public void ShouldGetExpectedQuestionnaire()
        {
            var questionnaireService = new QuestionnaireService(new QuestionnaireRepository());

            var questionnaire = questionnaireService.GetQuestionnaire();

            Assert.That(questionnaire.Title, Is.EqualTo("Geography Questions"));
            Assert.That(questionnaire.Questions[0], Is.EqualTo("What is the capital of Cuba?"));
            Assert.That(questionnaire.Questions[1], Is.EqualTo("What is the capital of France?"));
            Assert.That(questionnaire.Questions[2], Is.EqualTo("What is the capital of Poland?"));
            Assert.That(questionnaire.Questions[3], Is.EqualTo("What is the capital of Germany?"));
        }

        [Test]
        public void ShouldGetExpectedQuestion()
        {
            var questionnaireService = new QuestionnaireService(new QuestionnaireRepository());

            var question = questionnaireService.GetQuestionByID(0);

            Assert.NotNull(question);
            Assert.AreEqual("What is the capital of Cuba?", question);
        }

        [Test]
        public void ShouldFailGetInvalidIndex()
        {
            var questionnaireService = new QuestionnaireService(new QuestionnaireRepository());

            var question = questionnaireService.GetQuestionByID(-1);

            Assert.IsNull(question);
        }
    }
}