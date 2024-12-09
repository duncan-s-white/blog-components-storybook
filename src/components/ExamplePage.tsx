import Card from "./Card"
import PageTitle from "./PageTitle"
import { Primary } from "../stories/Card.stories"

/** Example Page / Organism UI Component */
export default function ExamplePage(){

const data = [Primary.args, Primary.args, Primary.args]

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
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
    </section>
  )
}
