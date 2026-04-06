import React, { useState, useRef, useEffect } from 'react';
import {
  Menu, X, ChevronDown, MapPin, Phone, Mail, Clock,
  Trash2, Building, Sofa, Truck, TreePine, HardHat, House, Briefcase,
  MessageCircle, Shield, Refrigerator, ArrowRight
} from 'lucide-react';
import { Button } from './ui/Button';
import { GoogleReviewsReact } from './GoogleReviewsReact';
import { allServices, regions, businessInfo } from '../data/locations';

const serviceIcons: Record<string, any> = {
  'rubbish-removal': Trash2,
  'furniture-bulky-item-removal': Sofa,
  'garden-waste-removal': TreePine,
  'builders-waste-removal': HardHat,
  'house-clearance': House,
  'office-clearance': Briefcase,
  'commercial-waste-disposal': Building,
  'appliance-disposal': Refrigerator,
  'wait-and-load': Truck,
};

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(event.target as Node)) {
        setActiveMega(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top Trust Bar */}
      <div className={`bg-dark text-white text-xs w-full ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <div className="px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-2 gap-2">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <Phone size={12} className="text-green-400" />
              <a href={businessInfo.phoneHref} className="hover:text-green-400 transition-colors font-medium">{businessInfo.phone}</a>
            </div>
            <div className="hidden sm:flex items-center space-x-1.5">
              <Mail size={12} className="text-green-400" />
              <a href="/contact" className="hover:text-green-400 transition-colors">Email Us</a>
            </div>
            <div className="hidden md:flex items-center space-x-1.5">
              <Clock size={12} className="text-green-400" />
              <span>{businessInfo.hours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <GoogleReviewsReact size="sm" />
            <div className="hidden lg:flex items-center space-x-1.5 whitespace-nowrap">
              <Shield size={12} className="text-green-400 flex-shrink-0" />
              <span>Licence: {businessInfo.licenceNumber}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-soft w-full" ref={megaRef}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 relative">
            <div className="flex-shrink-0">
              <a href="/" className="group">
                <img src="/images/easy-waste-disposal-logo-retina-new.png" alt="Easy Waste Disposal" className="h-12" width={111} height={48} />
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 absolute left-1/2 -translate-x-1/2">
              <a href="/" onClick={() => setActiveMega(null)} className="px-3 xl:px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-dark hover:bg-gray-50 transition-all">Home</a>
              <a href="/about" onClick={() => setActiveMega(null)} className="px-3 xl:px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-dark hover:bg-gray-50 transition-all">About</a>

              {/* Services Mega */}
              <div className="relative">
                <button
                  onClick={() => setActiveMega(activeMega === 'services' ? null : 'services')}
                  className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${activeMega === 'services' ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-dark hover:bg-gray-50'}`}
                >
                  <span>Services</span>
                  <ChevronDown size={14} className={`fill-current transition-transform duration-200 ${activeMega === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {activeMega === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-gray-100 rounded-b-2xl shadow-elevated p-6 z-50">
                    <div className="grid grid-cols-2 gap-2">
                      {allServices.map(s => {
                        const SIcon = serviceIcons[s.slug];
                        return (
                          <a
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center justify-between bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm font-bold hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                          >
                            <span className="flex items-center space-x-2">
                              <SIcon size={14} className="text-green-600" />
                              <span className="text-dark text-xs">{s.shortName}</span>
                            </span>
                            <span className="text-[10px] text-gray-400 group-hover:text-green-600">From {s.priceFrom}</span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <a href="/services" className="text-sm font-semibold text-green-600 hover:text-green-700">View all services &rarr;</a>
                      <a href="/contact#quote">
                        <Button size="sm">Get Free Quote <ArrowRight size={16} className="ml-2" /></Button>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Mega */}
              <div className="relative">
                <button
                  onClick={() => setActiveMega(activeMega === 'locations' ? null : 'locations')}
                  className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${activeMega === 'locations' ? 'text-green-700 bg-green-50' : 'text-gray-700 hover:text-dark hover:bg-gray-50'}`}
                >
                  <span>Locations</span>
                  <ChevronDown size={14} className={`fill-current transition-transform duration-200 ${activeMega === 'locations' ? 'rotate-180' : ''}`} />
                </button>

                {activeMega === 'locations' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-gray-100 rounded-b-2xl shadow-elevated p-6 z-50">
                    <div className="space-y-5">
                      {regions.map(region => (
                        <div key={region.slug}>
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{region.name}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {region.areas.map(area => (
                              <a
                                key={area.slug}
                                href={`/locations/${area.slug}`}
                                className="flex items-center justify-between bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm font-bold hover:bg-green-50 hover:border-green-300 transition-all duration-200 group"
                              >
                                <span className="flex items-center space-x-2">
                                  <MapPin size={12} className="text-green-600" />
                                  <span className="text-dark text-xs">{area.name}</span>
                                </span>
                                <span className="text-[10px] text-gray-400 group-hover:text-green-600">{area.postcodes.join(', ')}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <a href="/locations" className="text-sm font-semibold text-green-600 hover:text-green-700">View all locations &rarr;</a>
                      <a href="/contact#quote">
                        <Button size="sm">Get Free Quote <ArrowRight size={16} className="ml-2" /></Button>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/contact" onClick={() => setActiveMega(null)} className="px-3 xl:px-4 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-dark hover:bg-gray-50 transition-all">Contact</a>
            </nav>

            <div className="hidden lg:flex items-center justify-end space-x-2 xl:space-x-3 flex-shrink-0">
              <a href={businessInfo.phoneHref}>
                <Button variant="dark" size="md"><Phone size={14} className="xl:mr-1.5" /><span className="hidden xl:inline">{businessInfo.phone}</span></Button>
              </a>
              <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="md"><MessageCircle size={14} className="xl:mr-1.5" /><span className="hidden xl:inline">WhatsApp</span></Button>
              </a>
              <a href="/contact#quote">
                <Button size="md"><span className="hidden xl:inline">Free Quote</span><span className="xl:hidden">Quote</span> <ArrowRight size={16} className="ml-1 xl:ml-2" /></Button>
              </a>
            </div>

            <div className="lg:hidden flex items-center ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-white overflow-y-auto overflow-x-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="px-6 py-8">
              <nav className="space-y-1 mb-8">
                <a href="/" className="flex items-center justify-between px-4 py-3 text-lg font-bold text-dark hover:bg-gray-50 rounded-2xl transition-colors">
                  <span>Home</span>
                  <ArrowRight size={18} className="text-gray-400" />
                </a>
                <a href="/about" className="flex items-center justify-between px-4 py-3 text-lg font-bold text-dark hover:bg-gray-50 rounded-2xl transition-colors">
                  <span>About</span>
                  <ArrowRight size={18} className="text-gray-400" />
                </a>

                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                    className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-dark hover:bg-gray-50 rounded-2xl transition-colors"
                  >
                    <span>Services</span>
                    <ChevronDown size={20} className={`fill-current text-gray-400 transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'services' && (
                    <div className="-mx-6 pt-2 pb-6">
                      <div className="bg-gray-100 divide-y divide-white py-4">
                        {allServices.map(s => {
                          const SIcon = serviceIcons[s.slug];
                          return (
                            <a key={s.slug} href={`/services/${s.slug}`} className="flex items-center space-x-2 px-10 py-3 hover:bg-gray-200 transition-colors">
                              <SIcon size={16} className="text-green-600 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-600">{s.shortName}</span>
                            </a>
                          );
                        })}
                        <a href="/services" className="flex items-center space-x-2 px-10 py-3 hover:bg-gray-200 transition-colors text-sm font-semibold text-green-600">
                          <ArrowRight size={16} className="flex-shrink-0" />
                          <span>View all services</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'locations' ? null : 'locations')}
                    className="flex items-center justify-between w-full px-4 py-3 text-lg font-bold text-dark hover:bg-gray-50 rounded-2xl transition-colors"
                  >
                    <span>Locations</span>
                    <ChevronDown size={20} className={`fill-current text-gray-400 transition-transform duration-200 ${mobileExpanded === 'locations' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'locations' && (
                    <div className="-mx-6 pt-2 pb-6">
                      <div className="bg-gray-100 divide-y divide-white py-4">
                        {regions.flatMap(r => r.areas).map(area => (
                          <a key={area.slug} href={`/locations/${area.slug}`} className="flex items-center space-x-2 px-10 py-3 hover:bg-gray-200 transition-colors">
                            <MapPin size={14} className="text-green-600 flex-shrink-0" />
                            <span className="text-sm font-medium text-gray-600">{area.name}</span>
                          </a>
                        ))}
                        <a href="/locations" className="flex items-center space-x-2 px-10 py-3 hover:bg-gray-200 transition-colors text-sm font-semibold text-green-600">
                          <ArrowRight size={16} className="flex-shrink-0" />
                          <span>View all locations</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a href="/contact" className="flex items-center justify-between px-4 py-3 text-lg font-bold text-dark hover:bg-gray-50 rounded-2xl transition-colors">
                  <span>Contact</span>
                  <ArrowRight size={18} className="text-gray-400" />
                </a>
              </nav>

              <div className="px-4 pt-6 border-t border-gray-200">
                <GoogleReviewsReact size="sm" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
