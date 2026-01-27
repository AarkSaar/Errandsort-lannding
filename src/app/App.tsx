import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { VendorLanding } from './pages/VendorLanding';
import { CustomerLanding } from './pages/CustomerLanding';
import { ProviderLanding } from './pages/ProviderLanding';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vendor" element={<VendorLanding />} />
      <Route path="/customer" element={<CustomerLanding />} />
      <Route path="/provider" element={<ProviderLanding />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
    </Routes>
  );
}
