using QuestionServiceWebApi.BusinessLogic;
using QuestionServiceWebApi.BusinessLogic.Interfaces;
using QuestionServiceWebApi.DAL.Interfaces;
using QuestionServiceWebApi.DAL.Repositories;
using SimpleInjector;
using SimpleInjector.Integration.Web;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace QuestionServiceWebApi.App_Start
{
    public static class DependencyInjector
    {
        public static void SetUp()
        {
            // Create the container as usual.
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

            // Register your types, for instance using the scoped lifestyle:
            container.Register<IQuestionnaireService, QuestionnaireService>(Lifestyle.Scoped);
            container.Register<IQuestionnaireRepository, QuestionnaireRepository>(Lifestyle.Scoped);

            // This is an extension method from the integration package.
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            container.Verify();

            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
    }
}