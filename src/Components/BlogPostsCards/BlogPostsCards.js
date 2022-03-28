import React from 'react'
import './BlogPostsCards.css'
import BlogPost from '../BlogPost/BlogPost'
import moab from '../../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg'


const BlogPostsCards = () => {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        {/* <h1 className="section-title">Recent Posts</h1> */}
          <ul className='cards__items'>
            <BlogPost
              src={moab}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <BlogPost
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <BlogPost
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <BlogPost
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <BlogPost
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BlogPostsCards
