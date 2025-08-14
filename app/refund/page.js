
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsLetter';


export default function FlightsPage() {
    return (
        <main>
            <Header />
            <div className="container mx-auto max-w-7xl px-7 my-12">
                <h2 className="text-3xl  mb-4 text-center my-2 mx-3"><strong>Refund Policy </strong></h2>
                <p>At <strong>ImpulsiveWings Biz LLP</strong>, we strive to deliver seamless travel experiences with complete transparency. This refund policy outlines the terms for cancellations and refunds for all bookings made through our website, in alignment with the respective <strong>airline&rsquo;s cancellation rules</strong>.</p>
                <h3 className="mt-3"><strong>1. General Guidelines</strong></h3>
                <ul>
                    <li>All refunds are subject to <strong>the cancellation and refund rules of the respective airline</strong>.</li>
                    <li>Our agency&rsquo;s timelines and charges apply <strong>in addition</strong> to airline rules.</li>
                    <li>Some fares may be <strong>non-refundable</strong> as per airline terms.</li>
                    <li>Service fees, convenience charges, and payment gateway fees are <strong>non-refundable</strong>.</li>
                </ul>
                <h3 className="mt-3"><strong>2. Domestic Bookings (Within India)</strong></h3>
                <ul>
                    <li><strong>Full Refund</strong><strong> / Partial Refund</strong> &ndash; All subject to airline cancellation policy</li>
                    <li><strong>No Refund</strong> &ndash; Cancellations made less than 24 hours before departure, unless airline policy allows exceptions.</li>
                    <li><strong>Processing Time</strong> &ndash; Refunds processed within <strong>7 business days</strong> after confirmation from the airline.</li>
                </ul>
                <h3 className="mt-3"><strong>3. International Bookings</strong></h3>
                <ul>
                    <li><strong>Full Refund</strong> &ndash; Cancellations made <strong>within 24 hours of booking</strong> and at least <strong>96 hours before departure</strong>, subject to airline rules.</li>
                    <li><strong>Partial Refund</strong> &ndash; Cancellations after 24 hours but <strong>more than 96 hours before departure</strong> will incur:</li>
                    <ul>
                        <li>Airline cancellation charges (as per fare rules)</li>
                        <li>Plus <strong>Rs 500</strong> as agency cancellation fee</li>
                    </ul>
                    <li><strong>No Refund</strong> &ndash; Cancellations made <strong>less than 96 hours before departure</strong>, unless airline policy allows exceptions.</li>
                    <li><strong>Special Circumstances</strong> &ndash; Refunds may be considered for:</li>
                    <ul>
                        <li>Visa rejection (with official proof)</li>
                        <li>Government-imposed travel restrictions</li>
                        <li>Airline-initiated cancellations</li>
                    </ul>
                    <li><strong>Processing Time</strong> &ndash; Refunds processed within <strong>14 business days</strong> after confirmation from the airline.</li>
                </ul>
                <h3 className="mt-3"><strong>4. Non-Refundable Items</strong></h3>
                <ul>
                    <li>Promotional or discounted fares marked as non-refundable.</li>
                    <li>Ancillary services (extra baggage, seat selection, meals).</li>
                    <li>Service charges and third-party transaction fees.</li>
                </ul>
                <h3 className="mt-3"><strong>5. Refund Request Procedure</strong></h3>
                <ol>
                    <li>Email <a href="mailto:support@impulsivewings.com"><strong>support@impulsivewings.com</strong></a> with your <strong>Booking ID</strong> and cancellation reason.</li>
                    <li>We will submit your request to the airline and confirm eligibility.</li>
                    <li>Once the airline approves, we will process the refund within the stated timelines.</li>
                </ol>
                <h3 className="mt-3"><strong>6. Policy Updates</strong></h3>
                <p>ImpulsiveWings Biz LLP reserves the right to amend this policy without prior notice. Changes are effective immediately upon being posted on our website.</p>

            </div>
            <Footer />
        </main>
    );
}
