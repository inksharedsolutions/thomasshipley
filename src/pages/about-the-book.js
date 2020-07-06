import React from "react"
import Layout from "../components/layout"


import BookSlider from '../components/Book-Slider/book-slider'
import { DiscussionEmbed } from "disqus-react"
import Banner from '../components/non-front-banner'

/*images*/
import Book1 from '../assets/images/featured-book/featured_book.png'
import Book2 from '../assets/images/featured-book/book_2.png'
import Book3 from '../assets/images/featured-book/book_3.png'
import Book4 from '../assets/images/featured-book/book_4.png'

  
const AboutTheBook = (props) => {

   const slug =(props.location.href);
   const disqusConfig = {
      shortname:'thomas-shipley',
      config: { identifier:  12, slug}
    }


  let  fBookContent = (
    <>
      <p>This book was developed to present factual information as delineated by the title:The United States of America The Most Successful Nation and People of All</p>
      <p>The 1620 Mayflower Pilgrims Began it, with Freedom for People and the Free Market;
      The Constitution Defined It with Law, Success Reigned. Too much of the information known about the economy and our marketplace is entirely incorrect. It has been disseminated by individuals with knowledge gained from university studies and books or by individuals in the political field—none from having experience in the business field.</p>
      <p>These individuals want to solve the problems which they see prominent in the business field. They think workers are being mistreated, not being paid the way they should for the work they do, while the owners and managers of businesses are prospering. They say the rich are getting richer; the poor are getting poorer. Politicians have noted these problems and they feel an obvious solution would be to increase the minimum wage.</p>
      
      <p>The latter solution does only one thing: it makes it harder for some beginners to get a job. It helps no one. And no one, without experience in a particular technical field, can solve problems that might arise in that field. The United States of America: The Most Successful Nation and People of All explains why that is true.</p>
      <p>The book explains how the United States of America has become the most successful nation and people in the world. Those classified as poor in this country are, on average, better off economically than the people, rich and poor, in Europe. The book provides facts and details that explains the reasons why the United States surpassed all other nations in economic success—its free market, how it was born, when it was born, and what government did to sustain it.</p>  
    </>
  )


  let  sBookContent = (
    <>
      <p>
        Thomas Shipley Presented with the Albert Nelson Marquis Lifetime Achievement Award by Marquis Who’s 
        Who Thomas Shipley has been endorsed by Marquis Who’s Who as a leader in his industry
      </p>

      <p>
        Thomas Shipley Presented with the Albert Nelson Marquis Lifetime Achievement Award by Marquis Who’s Who 
        Thomas Shipley has been endorsed by Marquis Who’s Who as a leader in his Industry
      </p>

      <p>
         During my engineering days (1950 to 1965) with General Electric Company, writing about evolving technology and industrial automation activities was extremely important.
         Those who could use and needed automation didn’t know anything about it, machinery equipped with the new systems was much more expensive, 
         and labor unions in the manufacturing sector, quite strong in those days, were adamantly opposed to its use. 
      </p>
      
      <p>
        For these reasons, the company gave engineers, not known to be effective communicators, formal instructions in a wide range of subjects,
        one of which was effective presentation (oral and written). We were taught writing skills, but the importance of knowing what we
        were writing or speaking about was emphasized. It was more important to know the subject—what we were writing or speaking about and
        to write or speak with clarity—than it was to have journalistic abilities to be able to present the story in the very best manner.
        My objective in writing or speaking was generally to describe some automated phenomenon, improvement in a production cycle, or the 
        production of a miraculous product that I had witnessed, and readers of the publications, 
        extremely interested in the advances being made in automation and machining technology, 
        read my stuff and that of others religiously. It was only necessary to write with clarity and to avoid “engineering-speak.” 
      </p>

      <p>
        In the ’80s and early ’90s, small-computer technology was advancing rapidly, and machine manufacturers and users of the machines thirsted for information.
        I was engaged by a trade publication to inform readers about these advancements. The editor sought me out because of copious material I had written about
         computers and automated machines—using words and terms that were understandable to interested people who were not engineers or professionals in industry. 
      </p>

    </>
  )


  let  tBookContent = (
      <>
        <p>
          If you are suddenly on your own or newly wed and your mother kept you out of the kitchen as you were growing up — all is not lost.
          With a teaching book, one which tells you how to chop, broil, bake, saute, boil, etc., a copy of For the Good Times ...,
          and a little application on your part, your fame as a cook could quickly spread through-out the neighborhood.
        </p>

        <p>
          Just follow the directions, take all the time you need in the preparation, and
          lie about your innate abilities to everyone but your closest friends.
        </p>

        <p>
          At the time of writing, Virginia Doane Shipley was vice president, treasurer, and chief editor of an advertising agency;
          Tom Shipley, its president, an engineer, a marketing executive and a writer for trade publications on advanced technical subjects.
          He is listed in Who’s Who in U.S. Writers, Editors and Poets, Marquis Who’s Who in Finance and Industry, U.S.
          Registry’s Who’s Who in Leading American Executives, Strathmore’s Who’s Who, and the National Directory of Who’s Who 
          in Executives and Professionals.
        </p>
        
        <p>
          This book was started in 1981 and the contents established in 1991. After his wife died in 1992, 
          Tom began work to format and further edit the material for printing. The book has now been published in her memory.
        </p>

        <p>
         The printer, Quebecor Printing Book Group, Kingsport, was formed originally as The Kingsport Press.
         In the spring of 1923, using paper made by the Mead Corporation, and book cloth from the Clinchfield Mills 
         (both Kingsport, Tennessee, concerns), the Press began to produce clothbound books.
         Tom’s father began work there on April 2, 1923, and continued until his retirement in 1966.
        </p>

      </>
  )




  let  forthBookContent = (
      <>
        <p>
          Birmingham, Michigan, May 9, 2018--Marquis Who's Who, the world's premier publisher of biographical profiles, is proud to present Thomas Shipley with the Albert Nelson Marquis Lifetime Achievement Award. 
          An accomplished listee, Thomas Shipley celebrates many years' experience in his professional network and has been noted for achievements, 
          leadership qualities, and the credentials and successes he has accrued in his field. As in all Marquis Who's Who biographical volumes,
          individuals profiled are selected on the basis of current reference value. Factors such as position, noteworthy accomplishments,
          visibility, and prominence in a field are all taken into account during the selection process.
        </p>

        <p>
           Mr. Shipley is a well-versed professional in the marketing, advertising, sales, and engineering industries. 
           He learned about electronics and how to repair radios and televisions through his work with the navy, where he was selected
           to be part of a new unit at the time, the Fleet Airborne Electronic Training Unit. While serving in this unit,
           he taught incoming aviation radiomen and officers about airborne radio, radar, and countermeasures equipment. 
           After his service, he attended Virginia Polytechnic Institute and State University, where he obtained a bachelor of science 
           in electrical engineering, with honors. He began his professional career and training as an engineer with the General Electric Company.
        </p>

        <p>
          Today, he is the owner and president of Machine Tool Sales Company, a marketing and sales consulting company for manufacturers in metalworking,
          machine automation, and computer fields. In addition, Mr. Shipley is an accomplished writer and has been widely published by trade publications across 
          sectors, including a regular column on advanced technical matters for "Metalworking Production & Purchasing" magazine.
          While working with General Electric, Mr. Shipley was transferred to the Specialty Control Department,
          where he was made application engineer and product planner for numerical controls for machines and processes,
          which were changing from electronic tubes to solid transistor technology. In layman's terms, this was essentially the foundation for computers, 
          which Mr. Shipley worked on for years. Although he grew up in the thirties and forties, taking weekly trips to the public library, today he
          uses the Internet efficiently because he has been well-versed in the technology since its inception. Mr. Shipley has also authored many 
          books on topics ranging from global warming to the economy, as well as several cookbooks, and he plans to release another book in the near 
          future. His professional successes have been recognized by organizations such as the Abrasive Engineering Society, the Numerical Control Society,
          and SME.
        </p>
        
        <p>
          Having been in business for more than twenty years and in his industry for nearly seventy years, Mr.
           Shipley is proud to have been born at time when technology was evolving. He attributes his success to his parents, 
           who provided him with a solid foundation from which to value education and learning. Mr. 
           Shipley has been affiliated with the Business/Professional Advertising Association, the IEEE, SME, the Abrasive Engineering Society, 
           and the Detroit Economic Club.
        </p>

        <p>
          In recognition of outstanding contributions to his profession and the Marquis Who's Who community,
          Thomas Shipley has been featured on the Albert Nelson Marquis Lifetime Achievement website. 
          Please visit www.ltachievers.com for more information about this honor.
        </p>

      </>
  )


  return(
    <>
      <Layout>
        <Banner  title={`About the Book`} />
        <div className="container">

          <div className={`row elementContainers`}>
              
            <BookSlider 

              title={`The United States of America`}
              spanTitle={`The most succesful nation and people of all`}
              contents={fBookContent}
              imgBooksrc={
                {
                  bookCover: Book1
                }
              }

              metaBookLinks={
                {
                  ebooks :{
                    amazon : 'https://www.amazon.com/United-States-America-Successful-Nation-ebook/dp/B07NKP8DSW/ref=sr_1_1?keywords=9781643453552&qid=1554414775&s=books&sr=1-1',
                    stratton: 'https://www.stratton-press.com/books/the-united-states-of-america-the-most-successful-nation-and-people-of-all/',
                    barnes: 'https://www.barnesandnoble.com/w/the-united-states-of-america-thomas-shipley/1130543456?ean=9781643453552'
                  },

                  paperback :{
                    amazon : 'https://www.amazon.com/United-States-America-Successful-Nation/dp/1643451863/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554414775&sr=1-11',
                    barnes: 'https://www.barnesandnoble.com/w/the-united-states-of-america-thomas-shipley/1130543456?ean=9781643451862',
                    booksamillion : 'https://www.booksamillion.com/p/United-States-America/Thomas-Shipley/9781643451862?id=7714171848832'
                  }
                }
              }

            />



           <BookSlider 
              contents={sBookContent}
              title={`Man-Made Global Warming?`}
              spanTitle={``}
              imgBooksrc={
                {
                  bookCover: Book2
                }
              }

              metaBookLinks={
                {
                  ebooks :{
                    amazon : 'https://www.amazon.com/Man-Made-Global-Warming-Foolishness-Understand-ebook/dp/B07XSMZRDY/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1568653251&sr=1-1',
                    stratton: 'https://www.stratton-press.com/books/man-made-global-warming-its-foolishness-in-words-that-all-can-understand/',
                    barnes: 'https://www.barnesandnoble.com/w/man-made-global-warming-tom-shipley/1133492303?ean=9781643457437'
                  },

                  paperback :{
                    amazon : 'https://www.amazon.com/Man-Made-Global-Warming-Foolishness-Understand/dp/164345420X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1568653251&sr=1-1',
                    barnes: 'https://www.barnesandnoble.com/w/man-made-global-warming-tom-shipley/1133492303?ean=9781643454207',
                    booksamillion : 'https://www.booksamillion.com/p/Man-Made-Global-Warming/Tom-Shipley/9781643454207?id=7714171848832'
                  }
                }
              }

            />


            <BookSlider 
              contents={tBookContent}
              title={`For the Good Times`}
              spanTitle={`The Best of Fifty Years`}
              imgBooksrc={
                {
                  bookCover: Book3
                }
              }

              metaBookLinks={
                {
                  ebooks :{
                    amazon : 'https://www.amazon.com/Good-Times-Best-Fifty-Years-ebook/dp/B07VZTQK78/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1565105778&sr=8-1',
                    stratton: 'https://www.stratton-press.com/books/for-the-good-times-the-best-of-fifty-years/',
                    barnes: 'https://www.barnesandnoble.com/w/for-the-good-times-tom-shipley/1132771078?ean=9781643456713'
                  },

                  paperback :{
                    amazon : 'https://www.amazon.com/Good-Times-Best-Fifty-Years/dp/1643455842/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1565105778&sr=8-1',
                    barnes: 'https://www.barnesandnoble.com/w/for-the-good-times-tom-shipley/1132771078?ean=9781643455846',
                    booksamillion : 'https://www.booksamillion.com/p/Good-Times/Tom-Shipley/9781643455846?id=7714171848832'
                  }
                }
              }
            />  



            <BookSlider 
              contents={forthBookContent}
              title={`A Life's Story:`}
              spanTitle={`A potrait of millions of ordinary american citizens as they moved through the twentieth century`}
              imgBooksrc={
                {
                  bookCover: Book4
                }
              }

              metaBookLinks={
                {
                  ebooks :{
                    amazon : 'https://www.amazon.com/Lifes-Story-Portrait-Millions-Twentieth-ebook/dp/B082MTCVBZ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1576180896&sr=8-1',
                    stratton: 'https://www.stratton-press.com/books/a-lifes-story-a-portrait-of-millions-of-ordinary-american-citizens-as-they-moved-through-the-twentieth-century/',
                    barnes:  'https://www.barnesandnoble.com/w/a-lifes-story-tom-shipley/1135498634?ean=9781643458021'
                  },

                  paperback :{
                    amazon : 'https://www.amazon.com/Lifes-Story-Portrait-Millions-Twentieth/dp/1643455788/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576180896&sr=8-1',
                    barnes: 'https://www.barnesandnoble.com/w/a-lifes-story-tom-shipley/1135498634?ean=9781643455785',
                    booksamillion: 'https://www.booksamillion.com/p/Lifes-Story/Tom-Shipley/9781643455785?id=7714171848832'
                  }
                }
              }
            />

          </div>

          <div className="disqus-container-bars">
             <DiscussionEmbed {...disqusConfig} />
          </div>

        </div>
      </Layout>
    </>
  );
}

export default AboutTheBook;
