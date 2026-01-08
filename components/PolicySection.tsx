
import React from 'react';

const PolicySection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-[2.5rem] bubbly-border p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full glossy-effect pointer-events-none opacity-30"></div>
        
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black bubbly-text-3d text-center mb-4">
            অর্ডার ও ডেলিভারি নীতিমালা
          </h2>
          <div className="h-2 w-24 bg-orange-500 rounded-full bubbly-border"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 text-[#1a1a1a]">
          <div className="space-y-6">
            <div className="p-6 bg-green-50 rounded-3xl border-2 border-black/5">
              <h3 className="text-xl font-black text-orange-600 mb-3 flex items-center gap-2">
                ✅ অর্ডার কনফার্মেশন
              </h3>
              <p className="text-lg leading-relaxed font-medium">
                অর্ডার প্লেস করার পর কাস্টমারের নাম্বারে কল করে অর্ডার কনফার্ম করা হয়। অনুগ্রহ করে সঠিক মোবাইল নাম্বার দিন এবং কলটি রিসিভ করুন।
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
              <h3 className="text-xl font-black text-orange-600 mb-3 flex items-center gap-2">
                🚚 ডেলিভারি ও প্রোডাক্ট চেক
              </h3>
              <p className="text-lg leading-relaxed font-medium">
                ডেলিভারি ম্যান উপস্থিত থাকাকালীন প্রোডাক্টটি ভালোভাবে চেক করে নিন। কোনো সমস্যা থাকলে সঙ্গে সঙ্গে জানালে রিটার্ন গ্রহণযোগ্য হবে।
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-3xl border-2 border-black/5">
              <h3 className="text-xl font-black text-blue-600 mb-3 flex items-center gap-2">
                📍 শিপিং পলিসি ও চার্জ
              </h3>
              <div className="space-y-4 text-lg font-medium">
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span>ঢাকা সিটি (২৪-৪৮ ঘণ্টা)</span>
                  <span className="font-black">৳ ৬০</span>
                </div>
                <div className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span>ঢাকার বাইরে (৩-৫ দিন)</span>
                  <span className="font-black">৳ ১২০</span>
                </div>
                <p className="text-sm italic opacity-70">
                  * শিপিং হওয়ার পর আমরা আপনাকে SMS-এর মাধ্যমে ট্র্যাকিং আইডি প্রদান করব।
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-orange-50 rounded-3xl border-2 border-black/5">
              <h3 className="text-xl font-black text-orange-600 mb-3 flex items-center gap-2">
                💳 অগ্রিম ডেলিভারি চার্জ
              </h3>
              <p className="text-lg leading-relaxed font-medium mb-4">
                নিচের ক্যাটেগরির প্রোডাক্টগুলোর ক্ষেত্রে ডেলিভারি চার্জ অগ্রিম নেওয়া হতে পারে (রিটার্নজনিত ক্ষতি এড়ানোর জন্য):
              </p>
              <div className="flex flex-wrap gap-2">
                {['হেডফোন', 'স্মার্ট ওয়াচ', 'পাওয়ার ব্যাংক', 'ক্যামেরা', 'স্পিকার'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white rounded-full border-2 border-black font-bold text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#2D5A27] text-white rounded-3xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-3 flex items-center gap-2">
                🔒 আমাদের প্রতিশ্রুতি
              </h3>
              <p className="text-lg leading-relaxed font-medium opacity-90">
                আমরা সর্বোচ্চ চেষ্টা করি অরিজিনাল ও ভালো মানের প্রোডাক্ট আপনাদের কাছে পৌঁছে দিতে। অর্ডার ট্র্যাকিং এর জন্য আপনার ড্যাশবোর্ড চেক করুন অথবা আমাদের হটলাইনে কল দিন।
              </p>
            </div>

            <div className="p-6 bg-yellow-50 rounded-3xl border-2 border-dashed border-black/20">
              <h4 className="font-black text-sm uppercase tracking-widest mb-2 opacity-50">Tracking Info</h4>
              <p className="font-bold text-[#1a1a1a]">
                আমাদের ডেলিভারি পার্টনার: RedX, Steadfast & Pathao. শিপিং এর পর ট্র্যাকিং লিংক আপনার ফোনে পাঠিয়ে দেয়া হবে।
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-black italic text-[#1a1a1a]/60">
            👉 উপরোক্ত নীতিমালায় সম্মতি জানিয়ে অর্ডার কনফার্ম করুন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
