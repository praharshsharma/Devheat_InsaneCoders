const data = {
    "How can I apply and be eligible for full-ride scholarships?" : "Most scholarships you can apply for are already available on the university website. However, you may want to look at other scholarships by organisations or private donors and register for the ones who’s criteria you fit. To be eligible for full-ride scholarships, you will need to stand out from other applicants in your profile, you will also need to write an exceptional scholarship essay and a high GPA is likely a prerequisite." ,

    "What is cheaper – living on campus or off campus?" : "Rental costs are cheaper living off campus. However, the costs of utilities may be quite high living off campus and this may bring the costs at par or more than the cost of college dorms. Living off campus accounts for more space, privacy and freedom but you will have to take care of most things by yourself. Moreover, you may also recieve less financial aid if you live off-campus.",

    "How much of my living costs can I cover through part-time jobs?" : "Yes, you can cover the entirety of your living costs by working part-time. However, you will have to check with your university for the number of hours you are allowed to work and what kind of jobs you can take up along with your course." , 

    "Where I should go to college - US, UK, Canada, Europe?" : "Most of Europe is generally in a tough place besides Germany. UK is also struggling due to BREXIT uncertainty and firms are fleeing to other parts of Europe. However, the bigger issue is getting a work Visa following your studies. All these countries in Europe welcome students since you are contributing to the economy. International students will be allowed to stay in the UK for two years after graduation to find a job, under new proposals announced by the Home Office. The move reverses a decision made in 2012 by then-Home Secretary Theresa May that forced overseas students to leave four months after finishing a degree. This should boost the number of applications to the UK from this year. As an international student studying in Canada, you are considered a temporary student. The Canadian government expects that you will leave Canada once you have completed your studies unless you apply for PR or a work permit. Getting these is relatively easier than in US or UK. This brings me to the destination I recommend- the US. It is the biggest economy in the world and has by far the best resources/people in the field you want to study. Furthermore, it is more welcoming of foreign students and also the opportunities are vast. In the US, you have 1 year to 3 year (for STEM subjects) to find a job after you graduate. However, it is to be noted that in general the wave of nationalism that we are witnessing is a global phenomenon and has made it more challenging to continue in these countries post your education." , 

    "What colleges should I apply to and what should be my major?" : "I will state the obvious -Go for a major which you are passionate about because you will be good at it! However, be aware of what is in demand. If you look at India today, almost 90% or greater jobs are in technology, data analytics/AI and consulting. Most of their revenues are coming from overseas. The world is increasingly gravitating towards expertise rather than a general degree. A technical/quantitative skillset will only help you in your job search after you graduate. Even a History major should learn some technical skills which will make them stand out.Regarding choices of colleges, it is important to consider a few things. Remember there are thousands of schools/boards in the world. In India, you have primarily CBSE, ICSC and the newer IB. Admissions committees generally have a very hard time determining which students are better or worse from a particular board. There are multitudes of schools whose performance vary even under the same board. So, what they tend to do is that as long as you are in top 10%-20% of your class, the very best colleges are satisfied. However, they pay a considerable attention to your standardized tests like SAT/ACT. The reason is quite simple it is the same for EVERYONE regardless of what board/country you come from. So, the first step is to see whether your application is competitive for your dream college. What makes a good SAT score for you personally, depends on the schools you are interested in? Every school publishes a 75% percentile score in SAT which means that 75% of the students who got admitted were below that score. If you are in the 75% percentile ranking you are competitive for that school provided the rest of your application supports it." , 

    "Getting admission is relatively easy but scholarship needs serious work." : " In 2017, applications to colleges dropped by 3-4% even at the very top universities. The reason being that spending $200,000 for a college degree is simply not worth it for many people. In the US, student loan debt is in trillions of dollars as they are having a hard time paying their loans. The jobs they are getting is simply not paying enough. Is it possible to get a scholarship? Absolutely! Here I am going to start using the term - Extreme Resumes. All the very top schools and students wanting scholarship have to have a resume which truly stands out. It is hard to create an extreme resume - it needs serious preparation over a period of time. Unfortunately, most people in India do not understand the concept. Your resume should have one to two things which truly stands out. It should impress not only the admission committee but professors in the department you want to major in. Good grades, Good SAT/ACT scores, being part of council, debate teams, blogs, AP courses all help but you have to go a step higher.I am of the opinion that everyone is capable of getting a scholarship not necessarily the brightest but rather the smarter kids who go about it in an organized fashion and work on putting substantive additions to their resume. The application process is intense and if you are smart about it than most of your work on getting a scholarship should already be done. In other words, your application should be a mere formality." , 

    "What should be my timeline for college admissions?" : "Plan on taking SAT/ACT by middle or end of 11th grade. Devote part of 11th grade and 12th grade for subject SAT. Plan to take at least 6 AP courses by grade 12. Colleges want to see you can handle an extreme work load and be challenged. In the 10th grade, work on optimizing SAT scores and create an extreme resume. The college application process is intense and you have to write an essay, extended essay etc. Start planning your essays early with the theme of what makes you unique and why you want to pursue the field of study. Good writing is an art and takes time. So the more planning you do and the more time you spend on it the better it will get. Identify one or two areas to excel in. It is a 2-2.5-year process and if you are focused and work hard, the reward is a free education!" , 

    "How does the visa system work in the US?" : "After you get admission, you have to get a student visa (F1) from the consulate. The better the college the easier it is to get the visa. If you are paying your way through college, your financials should be in order otherwise you might get a rejection. After the election of Trump and the winds blowing in Europe, the Visa getting process has become more challenging. However, if you have a scholarship than you should have no issues getting a student Visa. You get a year or 3 years (STEM subjects) of practical training upon graduation and you can work wherever you want - no questions asked. However, after that that period if a company hires you than they have to sponsor you for an H1 B visa. Based on some anecdotal data, the current environment of getting an HIB visa is getting harder. You can hold an H1B Visa for years till your company sponsors you for a green card."
}


const l = Object.keys(data).length; 


console.log(Object.keys(data)[0]);
console.log(Object.values(data)[0]);


let i = 0;
let str = "";



for(i=0; i<l; i++)
{
    str+=`<div class="accordion">
    <div class="accordion-heading">
    <h3>${Object.keys(data)[i]}</h3>
    <i class="fa-solid fa-angle-down"></i>
    </div>
    <div class="accordion-content accordion-content-change">${Object.values(data)[i]}</div>
</div>`
}

let undersidebar = document.getElementById("undersidebar");

undersidebar.innerHTML = str;


