import React from 'react'
import FAQs from "../../components/FAQs";

const FAQ = () => {
  return (
    <>
    <Helmet>
      <title>FAQs - ekai</title>
      <meta name="description" content="Find answers to frequently asked questions about Ekai, the AI-powered digital assistant." />
      <link rel="canonical" href="https://www.yourekai.com/FAQs" />
    </Helmet>
    <div>
        <FAQs/>
    </div>
    </>
  )
}

export default FAQ;