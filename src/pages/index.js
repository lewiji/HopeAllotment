import React from "react";
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import SEO from "../components/seo";
import { CustomLink } from "../components/custom_link";
import { Parallax } from "react-parallax";
import CovidInfo from "../components/covid_info";
import VolunteersNeeded from "../components/volunteers_needed";

function IndexPage({data}) {
  const document = data?.allPrismicPage?.nodes[0]?.data;

  return (
    <div>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Contact"
      />
      <section className="text-center md-page mx-auto">
        <div className={"page-title relative text-center flex items-center justify-center"} >
          <Parallax strength={200}
                    bgImageSize={document?.page_image?.gatsbyImageData?.images?.fallback?.sizes}
                    bgImage={document?.page_image?.gatsbyImageData?.images?.fallback?.src}
                    bgImageSrcSet={document?.page_image?.gatsbyImageData?.images?.fallback?.srcSet}
                    bgImageStyle={{
                      filter: "brightness(0.9)"
                    }}
                    className={"gatsby-resp-image-image w-full h-28 xs:h-36 sm:h-52 lg:h-64 flex justify-center items-center"}>
            <h1 className="inline-block font-semibold md:font-bold heading_pattern flex justify-center items-center md:px-5">
              {document?.title?.text}
            </h1>
          </Parallax>
        </div>

        <h4 className={"md-date mb-1.5 mt-0 pt-1"}>
          <span className={"font-light uppercase"}> Published on </span> {document?.date_published}
        </h4>

        <hr className={"mb-6 w-1/4 mx-auto"}/>

        <VolunteersNeeded/>


        <div className={"prose mx-auto text-justify ml-7 md:ml-20 mb-8 flex flex-col items-center justify-center"}>
          <RichText render={document?.body?.raw} serializeHyperlink={CustomLink} />
        </div>

        <CovidInfo/>
      </section>
    </div>
  );
}

export const query = graphql`
    query Homepage {
        allPrismicPage(filter: {tags: {eq: "#home"}}) {
            nodes {
                data {
                    title {
                        text
                    }
                    body {
                        raw
                    }
                    page_image {
                        gatsbyImageData
                        alt
                    }
                    date_published
                }
                id
                url
            }
        }
    }`

export default IndexPage;
