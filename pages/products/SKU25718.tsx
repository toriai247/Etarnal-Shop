
import React, { useState } from 'react';

interface SKU25718Props {
  onBack?: () => void;
}

const SKU25718: React.FC<SKU25718Props> = ({ onBack }) => {
  const [selectedSize, setSelectedSize] = useState<'M' | 'L' | 'XL'>('M');
  const [showPopup, setShowPopup] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    area: '',
    extraInfo: ''
  });

  const productData = {
    id: 25718,
    name: "Gents Hoodie for Winter",
    regularPrice: 800,
    offerPrice: 690,
    image: "https://kuggmxhagvxdmhbjlmys.supabase.co/storage/v1/object/public/Products/1767253568_L_4.jpeg",
    category: "Apparel"
  };

  const sizeDetails = {
    M: "Length 28, Chest 38",
    L: "Length 29, Chest 40",
    XL: "Length 30, Chest 42"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      alert("Please fill in Name, Phone and City!");
      return;
    }

    // Construct WhatsApp Message
    const whatsappNumber = "+8801996958839";
    const message = `🛍️ *NEW ORDER - ETERNAL SHOP*
---------------------------
*Product:* ${productData.name}
*SKU:* ${productData.id}
*Size:* ${selectedSize} (${sizeDetails[selectedSize]})
*Price:* ${productData.offerPrice} TK

*Customer Details:*
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*City:* ${formData.city}
*Area:* ${formData.area || 'N/A'}
*Extra Info:* ${formData.extraInfo || 'None'}
---------------------------
Please confirm my order for SKU: ${productData.id}!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;

    // Show success popup and open WhatsApp
    setShowPopup(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      {onBack && (
        <button 
          onClick={onBack}
          className="mb-6 flex items-center gap-2 font-bold text-[#1a1a1a] hover:text-orange-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Shop
        </button>
      )}

      <div className="bg-white rounded-[2.5rem] bubbly-border overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full glossy-effect pointer-events-none opacity-20"></div>
        
        <div className="flex flex-col md:flex-row">
          {/* Product Image Section */}
          <div className="md:w-1/2 p-6">
            <div className="sticky top-24">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-black/5 bg-gray-50 relative group">
                <img 
                  src={productData.image} 
                  alt={productData.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white font-black px-4 py-1 rounded-full border-2 border-black -rotate-6 shadow-md">
                  SKU: {productData.id}
                </div>
              </div>
              
              <div className="mt-6 p-6 bg-green-50 rounded-3xl border-2 border-dashed border-[#2D5A27]/20">
                <h3 className="font-black text-[#2D5A27] mb-2">PRODUCT DETAILS</h3>
                <ul className="text-sm font-bold text-gray-600 space-y-1">
                  <li>• Material: 100% Cotton</li>
                  <li>• Fabric: 320(±)GSM</li>
                  <li>• Sleeve: Full Sleeve</li>
                  <li>• Quality: Export Standard</li>
                  <li>• SKU: {productData.id}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Info & Form Section */}
          <div className="md:w-1/2 p-6 md:pl-2 bg-gray-50/30">
            <div className="flex justify-between items-start mb-2">
              <span className="text-orange-600 font-black uppercase tracking-widest text-xs bg-orange-100 px-3 py-1 rounded-full border border-orange-200">Winter Collection</span>
              <span className="text-xs font-black bg-red-500 text-white px-3 py-1 rounded-full border-2 border-black rotate-3">LIMITED STOCK!</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 leading-tight bubbly-text-3d">
              {productData.name}
            </h1>
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-orange-600">{productData.offerPrice} TK</span>
              <span className="text-xl text-gray-400 line-through font-bold">{productData.regularPrice} TK</span>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-sm font-black text-[#1a1a1a] mb-4 uppercase tracking-wider">Select Size</label>
              <div className="flex gap-3">
                {(['M', 'L', 'XL'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-2xl border-2 border-black font-black text-lg transition-all flex items-center justify-center
                      ${selectedSize === size 
                        ? 'bg-orange-500 text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] -translate-y-1' 
                        : 'bg-white text-black hover:bg-green-50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-sm font-black text-[#2D5A27] bg-green-100 px-3 py-1 rounded-lg inline-block">
                Measurement: {sizeDetails[selectedSize]}
              </p>
            </div>

            <hr className="border-black/5 mb-8" />

            {/* Order Form */}
            <div className="bg-white p-6 rounded-[2rem] border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black text-[#1a1a1a] mb-6 flex items-center gap-2">
                📦 SHIPPING INFO
              </h2>
              
              <form onSubmit={handleOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-1 ml-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-[#1a1a1a] placeholder:text-gray-400 focus:bg-orange-50 outline-none font-bold shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-1 ml-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-[#1a1a1a] placeholder:text-gray-400 focus:bg-orange-50 outline-none font-bold shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase mb-1 ml-1">City *</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      placeholder="e.g. Dhaka"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-[#1a1a1a] placeholder:text-gray-400 focus:bg-orange-50 outline-none font-bold shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-gray-500 uppercase mb-1 ml-1">Area (Jayga)</label>
                    <input 
                      type="text" 
                      name="area"
                      placeholder="e.g. Uttara"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-[#1a1a1a] placeholder:text-gray-400 focus:bg-orange-50 outline-none font-bold shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-gray-500 uppercase mb-1 ml-1">Extra Instructions</label>
                  <textarea 
                    name="extraInfo"
                    rows={2}
                    placeholder="Landmarks or delivery notes..."
                    value={formData.extraInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-[#1a1a1a] placeholder:text-gray-400 focus:bg-orange-50 outline-none font-bold resize-none shadow-inner"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 mt-4 rounded-2xl btn-3d-orange text-white text-2xl font-black border-2 border-black uppercase tracking-tighter"
                >
                  ORDER NOW 🚚
                </button>
                <p className="text-[10px] text-center font-bold text-gray-400 mt-2">Redirects automatically to WhatsApp</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[3rem] p-8 max-w-sm w-full border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center floating">
            <div className="w-20 h-20 bg-green-500 rounded-full border-4 border-black mx-auto mb-6 flex items-center justify-center text-white text-4xl shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              ✓
            </div>
            <h2 className="text-3xl font-black text-[#1a1a1a] mb-2 bubbly-text-3d">SUCCESS!</h2>
            <p className="text-gray-600 font-bold mb-8 leading-relaxed">
              Order summary generated for SKU: {productData.id}! <br/> Please click "Send" in WhatsApp to confirm your order for <br/><span className="text-orange-600">{productData.name}</span>.
            </p>
            <button 
              onClick={() => {
                setShowPopup(false);
                if(onBack) onBack();
              }}
              className="w-full py-4 bg-[#1a1a1a] text-white rounded-2xl font-black text-xl hover:bg-orange-500 transition-colors"
            >
              OK, I'M SENDING IT!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SKU25718;
