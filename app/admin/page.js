'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const [bookRes, careerRes] = await Promise.all([
        fetch('/api/bookings'),
        fetch('/api/careers'),
      ]);
      const bookData = await bookRes.json();
      const careerData = await careerRes.json();
      if (bookData.success) setBookings(bookData.data);
      if (careerData.success) setApplications(careerData.data);
    } catch (err) {
      setError('Failed to load data. Make sure the server is running.');
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
    });
  }

  function parseServices(servicesStr) {
    try {
      const arr = JSON.parse(servicesStr);
      return arr.join(', ');
    } catch {
      return servicesStr;
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat mb-2" style={{ color: 'var(--heading)' }}>
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            View and manage all incoming bookings and career applications.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-5 rounded-xl t-card">
            <div className="text-2xl font-bold font-montserrat text-orange">{bookings.length}</div>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Total Bookings</p>
          </div>
          <div className="p-5 rounded-xl t-card">
            <div className="text-2xl font-bold font-montserrat text-orange">{applications.length}</div>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Career Applications</p>
          </div>
          <div className="p-5 rounded-xl t-card">
            <div className="text-2xl font-bold font-montserrat" style={{ color: 'var(--heading)' }}>
              {bookings.length + applications.length}
            </div>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Total Entries</p>
          </div>
          <div className="p-5 rounded-xl t-card">
            <button
              onClick={fetchData}
              className="w-full text-center bg-orange hover:bg-[#ff8533] text-white py-2.5 rounded-lg text-sm font-semibold transition-all"
            >
              ↻ Refresh Data
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { key: 'bookings', label: `Bookings (${bookings.length})` },
            { key: 'careers', label: `Applications (${applications.length})` },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setExpandedRow(null); }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-orange text-white'
                  : ''
              }`}
              style={activeTab !== tab.key ? { color: 'var(--muted)', border: '1px solid var(--border)', background: 'var(--glass-light-bg)' } : { color: '#fff' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading / Error */}
        {loading && (
          <div className="text-center py-20">
            <div className="w-8 h-8 border-2 border-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p style={{ color: 'var(--muted)' }}>Loading entries...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400">
            <p>{error}</p>
            <button onClick={fetchData} className="mt-4 bg-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
              Retry
            </button>
          </div>
        )}

        {/* Bookings Table */}
        {!loading && !error && activeTab === 'bookings' && (
          <div className="space-y-3">
            {bookings.length === 0 ? (
              <div className="text-center py-20 rounded-2xl t-card">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="text-lg font-bold font-montserrat mb-2" style={{ color: 'var(--heading)' }}>No bookings yet</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>When someone books a service, it will appear here.</p>
              </div>
            ) : (
              bookings.map((b, i) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden t-card"
                >
                  <button
                    onClick={() => setExpandedRow(expandedRow === b.id ? null : b.id)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                      <div>
                        <p className="font-semibold text-sm" style={{ color: 'var(--heading)' }}>{b.name}</p>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{b.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-orange">{b.budget || '-'}</p>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{b.timeline || '-'}</p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{parseServices(b.services)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{formatDate(b.created_at)}</p>
                      </div>
                    </div>
                    <span className="ml-4 text-orange">{expandedRow === b.id ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {expandedRow === b.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ borderTop: '1px solid var(--border)' }}>
                          <div className="pt-4 space-y-2">
                            <p><span style={{ color: 'var(--muted)' }}>Phone:</span> <span style={{ color: 'var(--heading)' }}>{b.phone || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Company:</span> <span style={{ color: 'var(--heading)' }}>{b.company || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Website:</span> <span style={{ color: 'var(--heading)' }}>{b.website || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Audience:</span> <span style={{ color: 'var(--heading)' }}>{b.audience || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Referral:</span> <span style={{ color: 'var(--heading)' }}>{b.referral || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Consultation:</span> <span style={{ color: 'var(--heading)' }}>{b.preferred_date || '-'} {b.preferred_time || ''}</span></p>
                          </div>
                          <div className="pt-4 space-y-2">
                            <p style={{ color: 'var(--muted)' }}>Project Details:</p>
                            <p style={{ color: 'var(--heading)' }}>{b.project_details || '-'}</p>
                            <p style={{ color: 'var(--muted)' }}>Goals / KPIs:</p>
                            <p style={{ color: 'var(--heading)' }}>{b.goals || '-'}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Career Applications Table */}
        {!loading && !error && activeTab === 'careers' && (
          <div className="space-y-3">
            {applications.length === 0 ? (
              <div className="text-center py-20 rounded-2xl t-card">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="text-lg font-bold font-montserrat mb-2" style={{ color: 'var(--heading)' }}>No applications yet</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Career applications will appear here once submitted.</p>
              </div>
            ) : (
              applications.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden t-card"
                >
                  <button
                    onClick={() => setExpandedRow(expandedRow === `c-${a.id}` ? null : `c-${a.id}`)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                      <div>
                        <p className="font-semibold text-sm" style={{ color: 'var(--heading)' }}>{a.name}</p>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{a.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-orange">{a.position || '-'}</p>
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{a.experience ? `${a.experience} years` : '-'}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs" style={{ color: 'var(--muted)' }}>{formatDate(a.created_at)}</p>
                      </div>
                    </div>
                    <span className="ml-4 text-orange">{expandedRow === `c-${a.id}` ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence>
                    {expandedRow === `c-${a.id}` && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ borderTop: '1px solid var(--border)' }}>
                          <div className="pt-4 space-y-2">
                            <p><span style={{ color: 'var(--muted)' }}>Phone:</span> <span style={{ color: 'var(--heading)' }}>{a.phone || '-'}</span></p>
                            <p><span style={{ color: 'var(--muted)' }}>Portfolio:</span> {a.portfolio ? <a href={a.portfolio} target="_blank" rel="noopener noreferrer" className="text-orange underline">{a.portfolio}</a> : <span style={{ color: 'var(--heading)' }}>-</span>}</p>
                            <p><span style={{ color: 'var(--muted)' }}>Resume:</span> {a.resume ? <a href={a.resume} target="_blank" rel="noopener noreferrer" className="text-orange underline">{a.resume}</a> : <span style={{ color: 'var(--heading)' }}>-</span>}</p>
                          </div>
                          <div className="pt-4 space-y-2">
                            <p style={{ color: 'var(--muted)' }}>Cover Letter:</p>
                            <p style={{ color: 'var(--heading)' }}>{a.cover_letter || '-'}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
