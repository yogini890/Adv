'use client';
import { useState, useEffect } from 'react';
import { blogsAPI } from '@/lib/api';

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  createdAt: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogsAPI.getAll();
        setBlogs(Array.isArray(data) ? data : []);
      } catch {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filtered = blogs.filter((b) => {
    const q = search.toLowerCase();
    return b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q);
  });

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <section className="bg-[#0D1B2A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#B8952A] text-xs font-medium tracking-widest uppercase mb-3">Insights</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Legal Insights & Commentary</h1>
          <p className="text-gray-400 text-base max-w-xl mx-auto">In-depth analysis on real estate law, commercial litigation, and legal developments affecting property and business in India.</p>
        </div>
      </section>

      <section className="bg-[#F8F4EE] py-8 border-b border-[#EDE8DF] sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row gap-4 items-center justify-end">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 rounded-lg border border-[#EDE8DF] text-sm focus:outline-none focus:ring-2 focus:ring-[#B8952A]/30 bg-white"
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-[#B8952A] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-[#6B7280]">
              {blogs.length === 0 ? 'No blog posts yet. Check back soon.' : 'No articles found.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((blog) => (
                <article key={blog._id} className="bg-white rounded-xl overflow-hidden border border-[#EDE8DF] hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-3">
                      <span>{formatDate(blog.createdAt)}</span><span>·</span><span>{blog.author}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#0D1B2A] mb-2 line-clamp-2 group-hover:text-[#B8952A] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{blog.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">{blog.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
