import PropTypes from "prop-types";
import React from "react";
import {Helmet} from "react-helmet";
import Header from "../components/header";
import Transition from "../components/transition";
import Footer from "../components/footer";

function Layout({children, location}) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Helmet title="HOPE Community Allotment, Sheffield" defer={false}>
                <meta charSet={"utf-8"}/>
                <title>HOPE Community Allotment, Sheffield</title>
                <meta name={"description"}
                      content={"Home of the HOPE community allotment project, Firth Park, Sheffield, UK - community allotment gardening, make friends, learn new skills!"}/>
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "https://schema.org",
                          "@type": "Organization",
                          "url": "https://hopeallotment.org.uk",
                          "name": "HOPE Community Allotment",
                          "contactPoint": {
                            "@type": "ContactPoint",
                            "email": "hope.allotments@gmail.com",
                            "contactType": "General Inquiries"
                          }
                        }
                    `}
                </script>
            </Helmet>
            <Header/>

            <main id={"main"} className="flex-1 w-full max-w-4xl mx-auto md:px-4 md:py-4">
                <Transition location={location}>{children}</Transition>
            </main>

            <Footer onClick={() => {
                document?.getElementById('logo').scrollIntoView({behavior: "smooth", inline: "start", block: "start"})
            }}/>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
