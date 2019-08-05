
  function user(){
    var user = document.getElementById("input").value;
    var d1score = 0;
    var d2score = 0;
    var d3score = 0;
    var d4score = 0;
    var e1score = 0;
    var e2score = 0;
    var e3score = 0;
    var e4score = 0;
    var f1score = 0;
    var f2score = 0;
    var f3score = 0;
    var f4score = 0;
    var q11 = "";
    var q12 ="";
    var q13= "";

    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'd1') {
          d1score = d1score + 1;
        }
        if (choices[i].value == 'd2') {
          d2score = d2score + 1;
        }
        if (choices[i].value == 'd3') {
          d3score = d3score + 1;
        }
        if (choices[i].value == 'd4') {
          d4score = d4score + 1;
        }
        if (choices[i].value == 'e1') {
          e1score = e1score + 1;
        }
        if (choices[i].value == 'e2') {
          e2score = e2score + 1;
        }
        if (choices[i].value == 'e3') {
          e3score = e3score + 1;
        }
        if (choices[i].value == 'e4') {
          e4score = e4score + 1;
        }
        if (choices[i].value == 'f1') {
          f1score = f1score + 1;
        }
        if (choices[i].value == 'f2') {
          f2score = f2score + 1;
        }
        if (choices[i].value == 'f3') {
          f3score = f3score + 1;
        }
        if (choices[i].value == 'f4') {
          f4score = f4score + 1;
        }
      }






  if (d1score==1){
    q11= "pure sciences (biology, chemistry, physics, etc.)";
  }
  if (d2score ==1) {
    q11= "engineering";
  }
  if (d3score ==1) {
    q11= "computers and technology";
  }
  if (d4score ==1) {
    q11= "communications";
  }
  if (e1score ==1) {
    q12= "technical skills";
  }
  if (e2score ==1) {
    q12= "general advice";
  }
  if (e3score ==1) {
    q12= "how to get opportunities (college, experiences, jobs, etc.)";
  }
  if (e4score ==1) {
    q12= "technical skills, general advice, and how to get opportunities (college, experiences, jobs, etc.)";
  }
  if (f1score ==1) {
    q13= "through casual, periodic emails (whenever I have a question)";
  }
  if (f2score ==1) {
    q13= "through formal, structued emails (eg. check ins every month)";
  }
  if (f3score ==1) {
    q13= "with video chat/ in person meetup (periodically or one time)";
  }
  if (f4score ==1) {
    q13= "in person/ video chat and emails";
  }

    document.getElementById("email").innerHTML = "Dear Ms. <b>(enter womentor last name)</b>,"  + "<br />"+
    "My name is " + user +
    " and I am a <b>(enter grade)</b> currently attending <b>(enter school)</b>. I am in search of a mentor to help me pursue my future in STEM and matched with you through <i> Womentoring</i>. I am interested in "+q11+" and would like to learn "+ q12+
     ". Finally, I would prefer to contact you " + q13 + ", however I am flexible." + " <br /> Best Regards, <br/>" +user
  }
}
