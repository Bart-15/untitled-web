'use client';

import { useEffect, useRef, useState } from 'react';

import ErrorComponent from '@/components/common/ErrComponent';
import LoadingIcon from '@/components/common/LoadingIcon';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ProgressBar from '@/components/common/ProgressBar';
import { useBlog } from '@/hooks/useBlog';
import { useScrollTrackElement } from '@/hooks/useScrollTrackElement';
import { Blog } from '@/types/blog.types';

import BlogItem from './BlogItem';

const BlogList = () => {
  const [lastIndex, setLastIndex] = useState<number>(1); // Start with 1 for the initial load
  const observerRef = useRef<HTMLDivElement | null>(null); // Ref for intersection observer
  const [displayedBlogs, setDisplayedBlogs] = useState<Blog[]>([]);
  const [tempLoading, setTempLoading] = useState(false);

  const { data, isLoading, isError } = useBlog();
  const blogs = data?.data;

  const { progress, elementRefs: articleRefs } = useScrollTrackElement<Blog[]>({
    data: blogs,
    lastIndex,
  });

  useEffect(() => {
    if (blogs?.length) {
      const firstData = blogs.slice(0, 1);
      setDisplayedBlogs(firstData);
    }
  }, [blogs]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && blogs) {
        // Check if there are more blogs to load
        if (lastIndex < blogs.length) {
          // Load one more blog at a time
          const nextBlogs = blogs.slice(lastIndex, lastIndex + 1);

          // Only update state if there are new blogs to add
          if (nextBlogs.length > 0) {
            setTempLoading(true); // mimic fetching of api
            setTimeout(() => {
              setDisplayedBlogs((prevBlogs) => [...prevBlogs, ...nextBlogs]);
              setLastIndex((prevIndex) => prevIndex + nextBlogs.length);
              setTempLoading(false);
            }, 500);
          }
        }
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [blogs, lastIndex]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <ErrorComponent message="Oops, somthing went wrong. Please try again later" />
    );
  }

  return (
    <>
      <ProgressBar scrollProgress={progress} />
      {displayedBlogs?.map((blog, index) => (
        <div
          key={blog.slug}
          id={blog.slug}
          ref={(el) => {
            articleRefs.current[index] = el;
          }}
        >
          <BlogItem blog={blog} />
        </div>
      ))}
      <div
        className="h-1"
        ref={(el) => {
          observerRef.current = el;
        }}
      ></div>
      {tempLoading && (
        <div className="align-center flex justify-center py-10">
          <LoadingIcon />
        </div>
      )}
    </>
  );
};

export default BlogList;
