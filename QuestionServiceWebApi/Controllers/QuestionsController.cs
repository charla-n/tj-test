using System.Web.Http;
using System.Threading.Tasks;
using System.Net.Http;
using QuestionServiceWebApi.BusinessLogic.Interfaces;
using QuestionServiceWebApi.BusinessLogic;
using QuestionServiceWebApi.Domain;

namespace QuestionServiceWebApi.Controllers
{
    public class QuestionsController : ApiController
    {
        private readonly IQuestionnaireService _questionnaireService;

        public QuestionsController(IQuestionnaireService questionnaireService)
        {
            _questionnaireService = questionnaireService;
        }

        // GET api/questions
        public Questionnaire Get()
        {
            return _questionnaireService.GetQuestionnaire();
        }

        // GET api/questions/5
        public string Get(int id)
        {
            return _questionnaireService.GetQuestionByID(id);
        }

        // POST api/questions
        public void Post([FromBody]string value)
        {
        }

        // PUT api/questions/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/questions/5
        public void Delete(int id)
        {
        }
    }
}
