import React from 'react';
import SectionTitle from "@/components/section-title";
import PageTitle from "@/components/blocks/page-title";
import EmissionCard from "@/components/emission/podcast/emission-card";
import {emissionsList} from "@/app/api/emissions";
import Publicite from "@/components/publicite";

function PodcastsPage() {
    return (
        <div className="page-container">
            <PageTitle
                title={`Podcasts`}
            />
            <SectionTitle
                text={'Emissions'}
                className="mt-6 w-1/2"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {emissionsList.slice(0,3).map((emission) => (
                    <EmissionCard key={emission.id} emission={emission}/>
                ))}
            </div>
            <Publicite className="w-full mt-12" bannerPosition="FOOTER"/>
        </div>
    );
}

export default PodcastsPage;