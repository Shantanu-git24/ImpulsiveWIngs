import Link from "next/link";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 pt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 pb-5 md:grid-cols-4 gap-10">
                {/* Logo & Socials */}
                <div>
                    <img src="/images/LOGO.png" alt="Logo" className="w-32 mb-4" />
                    <p className="text-sm text-gray-600 mb-4">
                        At ImpulsiveWings, we started with a simple belief: no two travellers are the same. From young adventurers and solo explorers to families, couples, and corporate groups — each traveller has a unique purpose, style, and dream.
                    </p>
                    {/* Left Section - Links */}
                    {/* <div className="flex space-x-2">
                        <Link href="/terms" className="text-white ">Terms &amp; Conditions</Link>
                        <span>|</span>
                        <Link href="/privacy" className="text-white ">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="/disclaimer" className="text-white ">Disclaimer</Link>
                        <span>|</span>
                        <Link href="/refund" className="text-white ">Refund</Link>
                        
                    </div> */}
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="/packages" >
                                › Packages
                            </Link>
                        </li>
                        <li>
                            <Link href="/flights" >
                                › Flights
                            </Link>
                        </li>
                        <li>
                            <Link href="/hotels" >
                                › Hotels
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" >
                                › About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/corporate" >
                                › Corporate Package
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" >
                                › Contact
                            </Link>
                        </li>
                    </ul>
                </div>



                <div>
                    <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li>
                            <Link href="/terms" >
                                › Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" >
                                › Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer" >
                                › Disclaimer
                            </Link>
                        </li>
                        <li>
                            <Link href="/refund" >
                                › Refund Policy
                            </Link>
                        </li>
                       
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">ImpulsiveWings Biz Llp</h3>
                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="text-blue-400 mt-1" />
                            <span>
                                5 Ballygunge Circular Road, Kolkata 700019 <br />
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaMapMarkerAlt className="text-blue-400 mt-1" />
                            <span>
                                41B S.P. Mukherjee Road, Kolkata-700026
                            </span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <FaEnvelope className="text-blue-400 mt-1" />
                            <a href="mailto:care@impulsivewings.in">
                                care@impulsivewings.in
                            </a>
                        </li>

                        <li className="flex items-start space-x-2">
                            <FaPhoneAlt className="text-blue-400 mt-1" />
                            <a href="tel:03369028513" >
                                033 6902 8513
                            </a>
                        </li>



                    </ul>
                </div>

                {/* Instagram Posts */}
                {/* <div>
                    <h3 className="font-semibold text-lg mb-3">Instagram Post</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, idx) => (
                            <img
                                key={idx}
                                src={`/images/insta${idx + 1}.jpg`}
                                alt={`Insta ${idx + 1}`}
                                className="w-full h-20 object-cover rounded"
                            />
                        ))}
                    </div>
                </div> */}
                {/* <div className="flex items-center space-x-2">
                        <span className="mr-2">We Accept</span>
                        <img src="/images/mastercard.png" alt="MasterCard" className="w-8 h-5 object-contain" />
                        <img src="/images/visa.png" alt="Visa" className="w-8 h-5 object-contain" />
                        <img src="/images/paypal.png" alt="PayPal" className="w-8 h-5 object-contain" />
                        <img src="/images/applepay.png" alt="Apple Pay" className="w-8 h-5 object-contain" />
                    </div> */}
            </div>
            {/* <section className="bg-[#0094da] text-white text-sm">
                <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
                    <Link href="/terms" className="text-white text-decoration-none me-1">Terms &amp; Conditions |</Link >
                    <Link href="/privacy" className="text-white text-decoration-none me-3">Privacy Policy</Link >
                    <Link href="/disclaimer" className="text-white text-decoration-none me-3">Disclaimer</Link >
                    <p className="mb-2 md:mb-0">Copyright © 2025 Tourm. All Rights Reserved.</p>
                    <p className="mb-2 md:mb-0">Design and Developed By <a href="http://dignexus.com" target="_blank">Dignexus</a> </p>
                </div>
            </section> */}
            <section className="bg-[#0094da] text-white text-sm">
                <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center md:justify-between">

                    {/* Left Section - Links */}
                    {/* <div className="flex space-x-2">
                        <Link href="/terms" className="text-white ">Terms &amp; Conditions</Link>
                        <span>|</span>
                        <Link href="/privacy" className="text-white ">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="/disclaimer" className="text-white ">Disclaimer</Link>
                        <span>|</span>
                        <Link href="/refund" className="text-white ">Refund</Link>
                        
                    </div> */}

                    <div className="flex space-x-4 text-white">
                        <Link href="https://www.facebook.com/myimpulsivewings/" target="_blank">
                            <FaFacebookF />
                        </Link>
                        <Link href="#" target="_blank">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="#" target="_blank">
                            <FaWhatsapp />
                        </Link>
                        <Link href="#" target="_blank">
                            <FaInstagram />
                        </Link>
                    </div>

                    {/* Middle Section - Copyright */}
                    <p className="text-center">Copyright © 2025 ImpulsiveWings. All Rights Reserved.</p>

                    {/* Right Section - Credit */}
                    <p>
                        Design and Developed By{" "}
                        <Link href="https://dignexus.com" target="_blank" rel="noopener noreferrer" >
                            Dignexus
                        </Link>
                    </p>
                </div>
            </section>


        </footer>
    );
}
