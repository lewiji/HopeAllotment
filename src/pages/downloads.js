import React from "react";
import { Layout, SEO } from "../components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import Leaflet from "../../public/downloads/Leaflet_A4_2015.pdf";
import Brochure from "../../public/downloads/Brochure - user.pdf";

const LeafletsPage = () => {
  return (
    <Layout>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .react-pdf__Page__canvas {
          margin: 0 auto;
          max-width: 100%;
          max-height: 100vh;
        }
      `,
        }}
      />

      <SEO
        keywords={[`hope`, `community`, `allotment`, `volunteers`]}
        title="Contact"
      />
      <main className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400 uppercase">
          Leaflets &amp; Downloads
        </h2>

        <p className="mb-5">
          View leaflets on this page, and click them to download a PDF.
        </p>

        <div className="mx-auto max-w-screen-sm">
          <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 text-white uppercase">
            Poster
          </h2>
          <a href={Leaflet} target="_blank" rel="noopener noreferrer" download>
            <Document file={Leaflet} className="mx-auto text-center">
              <Page pageNumber={1} className="mx-auto text-center" />
            </Document>
          </a>
        </div>

        <div className="mx-auto">
          <h2 className="inline-block p-1 mb-2 text-l font-bold bg-teal-600 text-white uppercase">
            Brochure
          </h2>
          <a href={Brochure} target="_blank" rel="noopener noreferrer" download>
            <Document file={Brochure}>
              <Page pageNumber={1} />
              <hr />
              <Page pageNumber={2} />
            </Document>
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default LeafletsPage;
