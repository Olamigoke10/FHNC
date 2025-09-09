import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, User, ArrowRight, X, AlertCircle, Meh } from 'lucide-react';

const API_URL = 'https://fhnc-backend.onrender.com/api/blogs/posts/';

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'auto';
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  if (loading) return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="loader">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading blog posts...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="text-center py-16 text-red-500">
      <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
      <p>Error loading blogs: {error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Retry
      </button>
    </div>
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="blog">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image || 'https://via.placeholder.com/400x300'} 
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

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

                <button 
                  onClick={() => openModal(blog)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-12">
            <Meh className="h-16 w-16 mx-auto text-gray-400" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No blog posts yet</h3>
            <p className="text-gray-500">Check back later for updates</p>
          </div>
        )}
      </section>

      {isModalOpen && selectedBlog && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={selectedBlog.image || 'https://via.placeholder.com/800x400'} 
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {selectedBlog.category || 'Uncategorized'}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <CalendarDays size={16} className="mr-1" />
                  {new Date(selectedBlog.created_at).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {selectedBlog.title}
              </h2>

              <div className="prose max-w-none text-gray-700">
                {selectedBlog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
                ) : (
                  <p>No content available for this blog post.</p>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsSection;