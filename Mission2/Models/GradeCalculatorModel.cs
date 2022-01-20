using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{

    //create calculator class
    public class GradeCalculatorModel 
    {

        //create each attribute of the class and set range validator 
        [Range(0, 100)]
        public int Assignment { get; set; }
        [Range(0, 100)]
        public int GroupProject { get; set; }
        [Range(0, 100)]
        public int Quiz { get; set; }
        [Range(0, 100)]
        public int Exam { get; set; }
        [Range(0, 100)]
        public int INTEX { get; set; }
    }
}
