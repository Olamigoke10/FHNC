import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react';

const API_URL = 'http://127.0.0.1:8000/api/blogs/posts/'; // Replace with your Django API endpoint

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div className="text-center py-16">Loading blogs...</div>;
  if (error) return <div className="text-center py-16 text-red-500">Error: {error}</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="blog">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Insights & Stories
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          FNHC <span className="text-blue-600">Blog</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover articles, stories, and insights about driver training and community development.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Blog Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={blog.image || 'https://via.placeholder.com/400x300'} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  {blog.category || 'Uncategorized'}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <CalendarDays size={14} className="mr-1" />
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

              {/* Read More Link */}
              <Link 
                to={`/blog/${blog.slug || blog.id}`} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No blog posts yet</h3>
          <p className="text-gray-500">Check back later for updates</p>
        </div>
      )}
    </section>
  );
};

export default BlogsSection;