import React from "react";
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import SEO from "../components/seo";
import { CustomLink } from "../components/custom_link";
import { Parallax } from "react-parallax";
import ContactForm from "../components/contact_form";
import { MapContainer } from "../components";
import VolunteersNeeded from "../components/volunteers_needed";

function PrismicPage({data}) {
  const document = data?.prismicPage?.data;
  const isContact = data?.prismicPage?.tags.includes("#contact");
  const isMap = data?.prismicPage?.tags.includes("#map");

  return (
    <div>
      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title={document?.title?.text}
      />
      <section className="text-center md-page mx-auto">
        <div className={"page-title relative text-center flex items-center justify-center bg-yellow-600 bg-opacity-75 md:rounded-lg md:w-8/12 mx-auto"} >
          <Parallax strength={96}
                    bgImageAlt={document?.page_image?.alt}
                    bgImageSize={document?.page_image?.gatsbyImageData?.images?.fallback?.sizes}
                    bgImage={document?.page_image?.gatsbyImageData?.images?.fallback?.src}
                    bgImageSrcSet={document?.page_image?.gatsbyImageData?.images?.fallback?.srcSet}
                    bgImageStyle={{
                      filter: "brightness(0.9)"
                    }}
                    className={"gatsby-resp-image-image w-full h-32 xs:h-36 sm:h-52 flex justify-center items-center"}>
            <h1 className="w-full inline-block font-semibold md:font-bold heading_pattern flex justify-center items-center">
              {document?.title?.text}
            </h1>
          </Parallax>
        </div>
        <h4 className={"md-date mb-1.5 mt-0 pt-1"}>
          <span className={"font-light"}> Published on </span> {document?.date_published}
        </h4>

        <hr className={"mb-6 w-1/4 mx-auto"}/>

        <VolunteersNeeded/>

        <div className={"prose mx-auto text-justify ml-7 md:ml-20 mb-8"}>
          <RichText render={document?.body?.raw} serializeHyperlink={CustomLink} />
        </div>

        {isContact && <ContactForm/>}
        {isMap && <div className={"w-11/12 mx-auto"}><MapContainer  selectedPlace={{ lat: 53.41561155973524, lng: -1.442938707955667 }} /></div>}
      </section>
    </div>
  );
}

export const query = graphql`
    query MyQuery($id: String) {
      prismicPage(id: {eq: $id}) {
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
          tags
      }
    }`

export default PrismicPage;
