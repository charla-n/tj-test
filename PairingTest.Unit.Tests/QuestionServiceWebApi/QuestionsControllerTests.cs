using NUnit.Framework;
using PairingTest.Unit.Tests.QuestionServiceWebApi.Stubs;
using QuestionServiceWebApi;
using QuestionServiceWebApi.Controllers;
using QuestionServiceWebApi.Domain;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace PairingTest.Unit.Tests.QuestionServiceWebApi
{
    [TestFixture]
    public class QuestionsControllerTests
    {
        [Test]
        public void ShouldGetQuestions()
        {
            //Arrange
            var expectedTitle = "My expected questions";
            var expectedQuestions = new Questionnaire() { Title = expectedTitle };
            var fakeQuestionService = new FakeQuestionnaireService() { ExpectedQuestions = expectedQuestions };
            var questionsController = new QuestionsController(fakeQuestionService);

            //Act
            var questions = questionsController.Get();

            //Assert
            Assert.That(questions.Title, Is.EqualTo(expectedTitle));
        }

        [Test]
        public void ShouldGetQuestion()
        {
            var expectedQuestions = new Questionnaire()
            {
                Questions = new List<string>()
                {
                    "question1"
                }
            };
            var fakeQuestionService = new FakeQuestionnaireService() { ExpectedQuestions = expectedQuestions };
            var questionsController = new QuestionsController(fakeQuestionService);

            var question = questionsController.Get(0);

            Assert.That(question, Is.EqualTo(expectedQuestions.Questions[0]));
        }
    }
}