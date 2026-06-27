import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="w-full bg-[#0A0F1A] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                src="/favicon.png"
                                alt="Wewolk"
                                width={36}
                                height={36}
                                priority
                            />
                        </Link>

                        <p className="text-sm text-[--dark-text]/70">
                            Building digital solutions that transform businesses.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-[--dark-text]/70">
                        © 2026 Wewolk.tech. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5 mt-6 md:mt-0">
                        <Link
                            href="https://instagram.com/wewolk.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[--dark-text]/70 hover:text-[--dark-accent] transition-colors"
                        >
                            <FaInstagram size={20} />
                        </Link>

                        <Link
                            href="https://facebook.com/wewolk.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-[--dark-text]/70 hover:text-[--dark-accent] transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </Link>

                        <Link
                            href="https://github.com/wewolk-tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-[--dark-text]/70 hover:text-[--dark-accent] transition-colors"
                        >
                            <FaGithub size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}