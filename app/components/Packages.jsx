'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const [filters, setFilters] = useState({
    duration: 0,
    budgets: [],
    cities: [],
    categories: [],
    themes: [],
  });

  const [locations, setLocations] = useState([]);

  // Fetch cities dynamically from API (Explore by Locations)
  useEffect(() => {
    axios
      .get('https://application.impulsivewings.in/api/explore-by-locations?destination_type=India')
      .then((res) => setLocations(res.data?.data || []))
      .catch((err) => console.error(err));
  }, []);

  // Checkbox toggle
  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);
      const nextArr = exists
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: nextArr };
    });
  };

  // Duration slider
  const handleDurationChange = (e) => {
    setFilters({ ...filters, duration: Number(e.target.value) });
  };

  // Apply filters → Call API and update local state
  const applyFilters = async () => {
    setLoading(true);
    try {
      let url = 'https://application.impulsivewings.in/api/packages?page=1&per_page=12';

      if (filters.budgets.length > 0) {
        const [min, max] = filters.budgets[0].split('-'); // using first selected range
        url += `&min_price=${min}&max_price=${max}`;
      }

      if (filters.cities.length > 0) {
        url += `&search=${encodeURIComponent(filters.cities.join(','))}`;
      }

      if (filters.duration > 0) {
        url += `&nights=${filters.duration}`;
      }

      // Example category switch
      if (filters.categories.includes('Wildlife')) {
        url = 'https://application.impulsivewings.in/api/wildlife-tours?destination_type=India';
      }

      const res = await axios.get(url);

      // Normalize list from various possible shapes
      const list =
        res.data?.data?.data ??
        res.data?.data ??
        res.data ??
        [];

      setPackages(Array.isArray(list) ? list : []);
      setCurrentPage(res.data?.data?.current_page ?? 1);
      setTotalPages(res.data?.data?.last_page ?? 1);
    } catch (error) {
      console.error('Error fetching packages:', error);
      setPackages([]);
      setCurrentPage(1);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch + pagination fetch
  const fetchPackages = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://application.impulsivewings.in/api/packages?page=${page}&per_page=12`
      );
      const list =
        res.data?.data?.data ??
        res.data?.data ??
        res.data ??
        [];
      setPackages(Array.isArray(list) ? list : []);
      setCurrentPage(res.data?.data?.current_page ?? page ?? 1);
      setTotalPages(res.data?.data?.last_page ?? 1);
    } catch (err) {
      console.error('API Error:', err);
      setPackages([]);
      setCurrentPage(1);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-12 gap-6">
      {/* Sidebar Filters */}
      <div className="col-span-12 md:col-span-3 bg-white shadow-sm rounded p-4 border border-gray-200 h-[50vh] overflow-y-auto">
        <h4 className="text-lg font-semibold mb-4">Filters</h4>

        {/* Duration */}
        <div className="mb-6">
          <h6 className="font-medium mb-2">Duration (Nights)</h6>
          <input
            type="range"
            min={1}
            max={10}
            value={filters.duration}
            onChange={handleDurationChange}
            className="w-full custom-range"
          />
          <p className="text-sm mt-1">{filters.duration} Nights</p>
        </div>

        {/* Budget */}
        <div className="mb-6">
          <h6 className="font-medium mb-2">Budget Per Person</h6>
          {['50000-100000', '100001-200000', '200001-300000', '450000 and more'].map((range) => (
            <label key={range} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                checked={filters.budgets.includes(range)}
                onChange={() => handleCheckbox('budgets', range)}
              />
              ₹{range.replace('-', ' – ₹')}
            </label>
          ))}
        </div>

        {/* Cities (from API) */}
        {/* <div className="mb-6">
          <h6 className="font-medium mb-2">Cities</h6>
          {locations.slice(0, 5).map((loc) => (
            <label key={loc.id} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                checked={filters.cities.includes(loc.name)}
                onChange={() => handleCheckbox('cities', loc.name)}
              />
              {loc.name}
            </label>
          ))}
        </div> */}

        {/* Package Category */}
        {/* <div className="mb-6">
          <h6 className="font-medium mb-2">Package Category</h6>
          {['Family', 'Group Tour', 'Adventure', 'Wildlife'].map((cat) => (
            <label key={cat} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                checked={filters.categories.includes(cat)}
                onChange={() => handleCheckbox('categories', cat)}
              />
              {cat}
            </label>
          ))}
        </div> */}

        {/* Themes */}
        {/* <div className="mb-6">
          <h6 className="font-medium mb-2">Themes</h6>
          {['Culture', 'Wildlife', 'Honeymoon', 'Pilgrimage'].map((theme) => (
            <label key={theme} className="block text-sm mb-1">
              <input
                type="checkbox"
                className="mr-2 custom-checkbox"
                checked={filters.themes.includes(theme)}
                onChange={() => handleCheckbox('themes', theme)}
              />
              {theme}
            </label>
          ))}
        </div> */}

        <div className="flex justify-center">
          <button
            onClick={() => {
              setCurrentPage(1); // reset to first page on new filter
              applyFilters();
            }}
            disabled={loading}
            className="bg-[#0094da] text-white px-6 py-2 rounded-full hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? 'Loading...' : 'Apply Filters'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="col-span-12 md:col-span-9">
        {loading ? (
          <p className="text-center text-gray-600">Loading packages...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white border border-gray-300 rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between h-[380px]"
                >
                  <img
                    src={`https://application.impulsivewings.in/${pkg.thumbnail}` || '/images/default.jpg'}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-3">
                    <h5 className="font-semibold text-gray-800 mb-1 line-clamp-1">{pkg.name}</h5>
                    <div className="flex items-center gap-2 text-sm text-gray-800 mb-3">
                      <span className="text-lg font-bold text-green-700">₹ {pkg.price}</span>
                      <span className="text-xs bg-gray-100 border px-2 py-1 rounded-full whitespace-nowrap">
                        Per Person
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>🛏 {pkg.no_of_hotels ?? 3} Hotels</span>
                      <span>🚌 {pkg.no_of_transport ?? 2} Transport</span>
                      <span>🎉 {pkg.no_of_activities ?? 5} Activities</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push(`/details/${pkg.id}`)}
                    className="bg-[#0094DA] text-white text-lg w-full py-3 hover:bg-[#0095dae8] transition cursor-pointer"
                  >
                    View Itinerary
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`cursor-pointer px-3 py-1 border rounded ${
                    currentPage === i + 1 ? 'bg-[#0094DA] text-white' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cursor-pointer px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
