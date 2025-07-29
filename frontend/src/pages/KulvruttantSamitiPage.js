import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Marathi executive committee data
const committee = [
  { name: 'श्री. अभिनव वर्मा', designation: 'अध्यक्ष', location: 'पुणे' },
  { name: 'श्री. वेंकट मधु मोहन', designation: 'उपाध्यक्ष', location: 'पुणे' },
  { name: 'श्रीमती अदिती जोपाट', designation: 'सचिव', location: 'पुणे' },
  { name: 'श्रीमती समीक्षा', designation: 'कोषाध्यक्ष', location: 'हेदवी चिपळूण' },
  { name: 'श्रीमती अक्षिता', designation: 'संयुक्त सचिव', location: 'पुणे' },
  { name: 'श्रीमती ऋषिका', designation: 'सदस्य', location: 'पुणे' },
  { name: 'श्री. उमेश गोगटे', designation: 'सदस्य', location: 'पुणे' },
  { name: 'श्रीमती पूजा उमेश गोगटे', designation: 'सदस्य', location: 'मुंबई' },
];

const KulvruttantSamitiPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="flex-1 flex flex-col items-center justify-center py-10 px-2 w-full">
        <div className="w-full flex justify-end max-w-2xl mb-6">
          <Link
            to="/"
            className="inline-block px-7 py-2 bg-amber-500 text-white font-semibold rounded-full shadow hover:bg-amber-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 animate-bounce-in"
          >
            ← Back to Home
          </Link>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-800">कार्यकारी समिती २०२४ ते २०२७</h2>
        <div className="overflow-x-auto w-full max-w-2xl">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-amber-200 text-amber-900">
                <th className="py-2 px-4 text-left">नाव</th>
                <th className="py-2 px-4 text-left">पद</th>
                <th className="py-2 px-4 text-left">ठिकाण</th>
              </tr>
            </thead>
            <tbody>
              {committee.map((member, idx) => (
                <tr key={idx} className="border-b last:border-b-0">
                  <td className="py-2 px-4">{member.name}</td>
                  <td className="py-2 px-4">{member.designation}</td>
                  <td className="py-2 px-4">{member.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KulvruttantSamitiPage;
