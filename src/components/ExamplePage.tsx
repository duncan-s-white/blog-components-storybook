import Card from "./Card"
import PageTitle from "./PageTitle"
import { Primary } from "../stories/Card.stories"
import SectionContainer from "./SectionContainer"
import { Primary as headerProps } from '../stories/Header.stories';
import Header from "./Header";

/** Example Page / Organism UI Component */
export default function ExamplePage(){

const data = [Primary.args, Primary.args, Primary.args]

  return (
    <SectionContainer>
      <Header {...headerProps.args} />
      <div className="space-y-2 pb-8 pt-6 md:space-y-2">
        <PageTitle>Example Page</PageTitle>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {data.map((d) => (
            <Card 
              key={d.title} 
              title={d.title} 
              description={d.description}
              imgSrc={d.imgSrc} 
              mainHref={d.mainHref}
              className="sm:basis-1/2 md:basis-1/3"
            />))
          }
        </div>
      </div>
    </SectionContainer>
  )
}
