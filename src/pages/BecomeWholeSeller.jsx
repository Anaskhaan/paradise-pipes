import Images from "../assets/images";

const BecomeWholeSeller = () => {
    return (
        <div className="mt-16">
            {/* Hero Section */}
            <div
                className="bg-cover bg-center h-[80vh] space-y-4 text-white py-32 px-4"
                style={{ backgroundImage: `url(${Images.wholesellerBG})` }}
            >
                <h1 className="text-4xl font-semibold mb-4">Partner With Us — Become a Wholesaler</h1>
                <p className="text-lg">
                    Join hands with Paradise PVC Pipes Factory and grow your business
                    with quality you can trust.
                </p>
                <button className="bg-[#134697] transition-colors px-6 py-3 text-white font-semibold">
                    Start Your Partnership
                </button>
            </div>

            {/* Wholesale Info Section */}
            <div className="px-28 py-20">
                <div className="flex lg:flex-row flex-col items-center justify-center">
                    {/* Left Content */}
                    <div>

                        <div className="space-y-8">
                            {/* Intro */}
                            <div>
                                <h2 className="text-2xl font-bold text-[#134697] mb-2">
                                    Paradise PVC Pipes Factory
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    We&apos;re proud to manufacture high-quality, durable, and industry-approved PVC piping solutions.
                                </p>
                                <p className="text-gray-600 text-sm mt-2">
                                    As we continue to expand across the country, we are looking for reliable and growth-focused wholesalers to partner with us in delivering excellence to market.
                                </p>
                            </div>

                            {/* Why Partner Section */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Why Partner with Paradise PVC Pipes?</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Competitive wholesale pricing</li>
                                    <li>• Guaranteed supply chain support</li>
                                    <li>• Marketing and promotional assistance</li>
                                    <li>• Exclusive regional dealership opportunities</li>
                                    <li>• Efficient access to new product launches</li>
                                </ul>
                            </div>

                            {/* Eligibility Criteria */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Eligibility Criteria</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• A registered business entity in your region</li>
                                    <li>• Experience in building materials or construction-related sales (preferred)</li>
                                    <li>• Ability to meet minimum monthly purchase requirements</li>
                                    <li>• Warehousing and delivery capability</li>
                                    <li>• Sound financial standing and credit history</li>
                                </ul>
                            </div>

                            {/* Terms and Conditions */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3">Terms and Conditions</h3>
                                <ul className="text-xs text-gray-600 space-y-2">
                                    <li>Minimum Order Quantity (MOQ): All wholesale partners must meet the specified MOQ per product category.</li>
                                    <li>Pricing Policy: Wholesale prices are set by Paradise PVC and subject to revision with market conditions and raw material changes.</li>
                                    <li>Payment Terms: Payments can be made via bank transfer or cheque with net 15/30 day billing cycles based on partnership level.</li>
                                    <li>Exclusivity: Exclusive dealership will be granted based on performance, territory size, and strategic alignment.</li>
                                    <li>Returns & Replacement: Returns are accepted only in case of manufacturing defects within 7 working days of delivery.</li>
                                    <li>Termination Clause: Either party can terminate the agreement with a 30-day written notice under specific circumstances.</li>
                                </ul>
                            </div>

                            {/* Button */}
                        </div>
                        <div className="flex items-center mt-12 justify-center">
                            <button className="bg-[#134697] text-white px-6 py-2 font-semibold">
                                Place Your Order Now →
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="space-y-4">
                        <img
                            height={1000}
                            width={1000}
                            src={Images.wholesellerInfo}
                            alt="Paradise PVC Pipes Factory"
                            className="h-full w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeWholeSeller;