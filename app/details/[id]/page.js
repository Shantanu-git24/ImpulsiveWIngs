
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BannerGallery from '../../components/BannerGallery';
import DetailsContent from '../../components/DetailsContent';
import { useParams } from 'next/navigation';

export default function About() {
    const params = useParams();
    const id = params?.id; // ✅ works in App Router

    return (
        <main>
            <Header />
            {id && <BannerGallery packageId={id} />}
            {id && <DetailsContent packageId={id} />}
            <Footer />
        </main>
    );
}
