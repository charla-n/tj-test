﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuestionServiceWebApi.Domain
{
    public partial class Questionnaire
    {
        public string Title { get; set; }
        public IList<string> Questions { get; set; }
    }
}
