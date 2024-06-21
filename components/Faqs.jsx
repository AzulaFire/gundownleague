import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, faqs_jp } from '@/constants/constants';

const Faqs = ({ japanese }) => {
  if (japanese) {
    return (
      <section
        id='Faqs'
        className='w-full bg-black text-white leading-8 text-xl px-10 pb-20 pt-10'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          よくある{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            質問
          </span>
        </h1>
        <Accordion type='single' collapsible className='text-left'>
          {faqs_jp.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className='text-left'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='italic'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  } else {
    return (
      <section
        id='Faqs'
        className='w-full bg-black text-white leading-8 text-xl px-10 pb-20 pt-10'
      >
        <h1 className='lg:text-4xl my-4 lg:mx-6 text-3xl'>
          Frequently Asked{' '}
          <span className='text-lime-500 font-bold font-montserrat pb-4'>
            Questions
          </span>
        </h1>
        <Accordion type='single' collapsible className='text-left'>
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className='text-left'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='italic'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  }
};
export default Faqs;
