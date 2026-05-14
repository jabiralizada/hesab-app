import React from 'react';

export default function PremiumFinanceWebsite() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      <header className="border-b border-blue-100 bg-[#f8fafc]/60 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">Gənclik Lombard</h1>
            <p className="text-slate-500 text-sm">Lombard & Lizinq Xidmətləri</p>
          </div>

          <a
            href="https://wa.me/994552052359"
            className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-blue-500 transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-block bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-sm mb-5 border border-yellow-400/20">
            Sürətli və Rahat Maliyyə Xidməti
          </div>

          <h2 className="text-5xl leading-tight font-bold mb-6">
            Lombard və Lizinq
            <span className="text-blue-600"> Hesablama Sistemi</span>
          </h2>

          <p className="text-slate-500 text-lg leading-8 mb-8">
            Qızıl girovu və avtomobil lizinqi üçün premium görünüşlü,
            avtomatik hesablayan sistem.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/994552052359"
              className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:bg-blue-500 transition"
            >
              Müraciət Et
            </a>

            <a
              href="#calculator"
              className="border border-zinc-700 px-6 py-4 rounded-2xl hover:border-yellow-400 transition"
            >
              Hesabla
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-[32px] p-8 shadow-2xl">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#f8fafc]/40 rounded-3xl p-6 border border-blue-100">
              <p className="text-slate-400 mb-2">Lombard</p>
              <h3 className="text-3xl font-bold text-blue-600">18%</h3>
              <p className="text-slate-500 mt-2 text-sm">Qızıl dəyərinə artım</p>
            </div>

            <div className="bg-[#f8fafc]/40 rounded-3xl p-6 border border-blue-100">
              <p className="text-slate-400 mb-2">Lizinq</p>
              <h3 className="text-3xl font-bold text-cyan-400">13%</h3>
              <p className="text-slate-500 mt-2 text-sm">İlkin ödəniş</p>
            </div>

            <div className="bg-[#f8fafc]/40 rounded-3xl p-6 border border-blue-100 col-span-2">
              <p className="text-slate-400 mb-2">Əlaqə</p>
              <h3 className="text-2xl font-bold">055 205 23 59</h3>
              <p className="text-slate-500 mt-2 text-sm">Şahmur</p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-10">
        <LombardCalculator />
        <LizinqCalculator />
      </section>
    </div>
  );
}

function LombardCalculator() {
  const prices = {
    350: 71,
    375: 76,
    450: 91,
    500: 101,
    583: 118,
    585: 118,
    750: 151,
    880: 178,
    916: 185,
    999: 202,
  };

  const [gram, setGram] = React.useState('10');
  const [ayar, setAyar] = React.useState(585);
  const [muddet, setMuddet] = React.useState(12);

  const value = Number(gram || 0) * prices[ayar];
  const total = value + (value * 23) / 100;
  const monthly = muddet > 0 ? total / muddet : 0;

  return (
    <div className="bg-white border border-blue-100 rounded-[32px] p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">
        Lombard Kalkulyatoru
      </h2>

      <p className="text-slate-500 mb-8">
        Qızıl məlumatlarını daxil edin.
      </p>

      <div className="space-y-5">
        <input
          type="number"
          value={gram}
          onChange={(e) => setGram(e.target.value)}
          placeholder="Qram"
          className="w-full p-4 rounded-2xl bg-[#f8fafc] border border-zinc-700 outline-none focus:border-yellow-400"
        />

        <select
          value={ayar}
          onChange={(e) => setAyar(Number(e.target.value))}
          className="w-full p-4 rounded-2xl bg-[#f8fafc] border border-zinc-700 outline-none focus:border-yellow-400"
        >
          {Object.keys(prices).map((item) => (
            <option key={item} value={item}>
              {item} əyar
            </option>
          ))}
        </select>

        <select
          value={muddet}
          onChange={(e) => setMuddet(Number(e.target.value))}
          className="w-full p-4 rounded-2xl bg-[#f8fafc] border border-zinc-700 outline-none focus:border-yellow-400"
        >
          {Array.from({ length: 36 }, (_, i) => i + 1).map((item) => (
            <option key={item} value={item}>
              {item} ay
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 bg-[#f8fafc] rounded-3xl p-6 border border-blue-100 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-500">Qızılın dəyəri</span>
          <span>{(value + (value * 23) / 100).toFixed(2)} AZN</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Aylıq ödəniş</span>
          <span>{monthly.toFixed(2)} AZN</span>
        </div>

        <div className="border-t border-blue-100 pt-4 flex justify-between text-xl font-bold text-blue-600">
          <span>Yekun məbləğ</span>
          <span>{total.toFixed(2)} AZN</span>
        </div>
      </div>
    </div>
  );
}

function LizinqCalculator() {
  const [price, setPrice] = React.useState('10000');
  const [month, setMonth] = React.useState(36);

  const ilkin = Number(price || 0) * 0.3;

  const remaining = Number(price || 0) - ilkin;

  const hiddenCosts =
    remaining * 0.25 +
    price * 0.05 +
    price * 0.026 +
    month * 11 +
    100;

  const total = remaining + hiddenCosts;
  const monthly = total / month;

  return (
    <div className="bg-white border border-blue-100 rounded-[32px] p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-cyan-400 mb-2">
        Lizinq Kalkulyatoru
      </h2>

      <p className="text-slate-500 mb-8">
        Avtomobil məlumatlarını daxil edin.
      </p>

      <div className="space-y-5">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Avtomobilin qiyməti"
          className="w-full p-4 rounded-2xl bg-[#f8fafc] border border-zinc-700 outline-none focus:border-cyan-400"
        />

        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="w-full p-4 rounded-2xl bg-[#f8fafc] border border-zinc-700 outline-none focus:border-cyan-400"
        >
          {[12, 24, 36].map((item) => (
            <option key={item} value={item}>
              {item} ay
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 bg-[#f8fafc] rounded-3xl p-6 border border-blue-100 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-500">İlkin ödəniş</span>
          <span>{ilkin.toFixed(2)} AZN</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">Aylıq ödəniş</span>
          <span>{monthly.toFixed(2)} AZN</span>
        </div>

        <div className="border-t border-blue-100 pt-4 flex justify-between text-xl font-bold text-cyan-400">
          <span>Yekun məbləğ</span>
          <span>{total.toFixed(2)} AZN</span>
        </div>
      </div>
    </div>
  );
}