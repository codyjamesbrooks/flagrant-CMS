import * as React from "react";

import Layout from "../../components/Layout";
import CareerRoll from "../../components/BlogRoll";

export default class CareersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="pt-24 px-6 bg-black">
          <h1 className="font-display font-bold text-6xl uppercase text-white">Current Openings</h1>
          <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-4 pb-10 border border-black">
          </div>
        </section>
      </Layout>
    );
  }
}