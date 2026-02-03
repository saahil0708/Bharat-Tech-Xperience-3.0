import React, { useEffect, useState } from 'react';

interface StrangerThingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type: 'success' | 'error';
}

const StrangerThingsModal: React.FC<StrangerThingsModalProps> = ({ isOpen, onClose, title, message, type }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
        }
    }, [isOpen]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {/* Backdrop with creepy fog/grain effect */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}>
                {/* Simulated dust particles or fog could go here */}
            </div>

            {/* Modal Container */}
            <div className={`relative w-full max-w-lg p-1 mx-4 bg-gray-900 border-2 ${type === 'success' ? 'border-red-600' : 'border-red-800'} shadow-[0_0_50px_rgba(220,38,38,0.5)] transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>

                {/* Glowing Border Box */}
                <div className="relative p-8 bg-black border border-gray-800 overflow-hidden min-h-[300px] flex flex-col items-center justify-center text-center">

                    {/* Background Vines/Veins Effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 0 Q 50 50 100 0" stroke="#dc2626" fill="transparent" strokeWidth="0.5" />
                            <path d="M0 100 Q 50 50 100 100" stroke="#dc2626" fill="transparent" strokeWidth="0.5" />
                            <path d="M0 50 Q 50 0 100 50" stroke="#dc2626" fill="transparent" strokeWidth="0.5" />
                        </svg>
                    </div>

                    {/* Title with Stranger Things Vibe */}
                    <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 tracking-widest uppercase font-serif ${type === 'success' ? 'text-red-500' : 'text-gray-400'} drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]`} style={{ fontFamily: "'ITC Benguiat', serif" }}>
                        {title}
                    </h2>

                    {/* Upside Down Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8 shadow-[0_0_15px_red]"></div>

                    {/* Message */}
                    <p className="text-lg text-gray-300 mb-10 tracking-wide font-light leading-relaxed">
                        {message}
                    </p>

                    {/* Button */}
                    <button
                        onClick={onClose}
                        className="relative px-8 py-3 bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-black transition-all duration-300 uppercase tracking-[0.2em] font-bold text-sm shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] group"
                    >
                        <span className="relative z-10">{type === 'success' ? 'ENTER THE GATE' : 'TRY AGAIN'}</span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default StrangerThingsModal;
