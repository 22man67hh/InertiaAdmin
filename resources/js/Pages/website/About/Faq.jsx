import { data } from 'autoprefixer';
import React, { useState } from 'react'

function Faq() {
    const [openFaq,setOpenFaq]=useState(null);
    const [searchQuery,setSearchQuery]=useState("");
    const FaqList = [
        { id: 1, question: "What is your name?", answer: "My name is Manish Raj Acharya.", aosDelay: "100" },
        { id: 2, question: "What do you do?", answer: "I am a developer.", aosDelay: "200" },
        { id: 3, question: "Where are you from?", answer: "I am from Nepal.", aosDelay: "300" },
        { id: 4, question: "What is your favorite language?", answer: "I love Java and JavaScript.", aosDelay: "400" },
        { id: 5, question: "How can I contact you?", answer: "You can email me at example@email.com.", aosDelay: "500" }
      ];
      const toggleFaq=(id)=>{
        setOpenFaq(openFaq==id?null:id);
      }
      const filterFAQs=(event)=>{
        setSearchQuery(event.target.value.toLowerCase());
      }
  return (
    <div classaName="p-4 bg-slate-300 rounded-md shadow mb-8 dark:text-slate-200">
        <div className="px-4 flex flex-col sm:flex-row justify-between items-center mb-6 dark:text-slate-200">
            <h1 className='text-3xl font-bold mb-4 sm:mb-0'>Frequently Asked Questions</h1>
            <input type="text" id='searchInput' onChange={filterFAQs} placeholder="Search FAQs" className='w-full sm:w-1/3 mb-4 sm:mb-0 p-2 border rounded dark:text-slate-800'/>
        </div>
        <ul id="faqlist">
{FaqList.filter((data)=>data.question.toLowerCase().includes(searchQuery)).map((data)=>(
    <li key={data.id} className='mb-3' data-aos="fade-up" data-aos-delay={data.aosDelay}>
        <button className="w-full text-left p-2 bg-slate-200" onClick={()=>toggleFaq(data.id)}>
            {data.id} .{data.question}
        </button>
        {openFaq === data.id && <p className='p-2 bg-white'>{data.answer}</p>}
    </li>
))}

        </ul>
      
    </div>
  )
}

export default Faq
