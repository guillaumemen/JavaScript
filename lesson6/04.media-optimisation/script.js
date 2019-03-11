'use strict';

// NavBar
$('#navbarDropdownMenuLink').click(() => {
$('#navbarDropdownMenu').slideToggle(200);
})

//Date 

var today = new Date();
var year = today.getFullYear();

document.getElementById("js-current-year").innerHTML = year;

// Premier bloc BMI
$(document).ready(function() {
    $('#calculator').submit(function(e) {
        e.preventDefault();
        
        var heightFt = $('input[name="height_ft"]').val(),
            heightIn = $('input[name="height_in"]').val(),
            height = parseFloat(heightFt * 12) + parseFloat(heightIn);
            weight = $('input[name="weight"]').val(),
            BMI = calculateBMI(height, weight);
        
        $('#js-bmi-form').text('Your BMI is '+BMI);
    });
});

function calculateBMI(height, weight) {
	var BMI = (weight / (height * height)) * 703
	
	return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
}


// Deuxième bloc bmiFacts
const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];

// Publicité 

  $('#js-ad-close').click(() => {
    document.getElementById("js-ad").getAttribute("href");
    window.open(href, '_blank');
    console.log("href");
  });
